"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn, removeDuplicateValues } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Loading from "./loading";
import { getTypes, fetchMakesForVehicleType } from "@/request";

export function ComboboxDemo({ onMakeIdSelect }) {
  const [loading, setLoading] = React.useState(true);
  const [types, setTypes] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [makes, setMakes] = React.useState(null);

  // Fetch vehicle types
  React.useState(async () => {
    setLoading(true);
    getTypes()
      .then((res) => {
        const result = removeDuplicateValues(res.Results);
        setTypes(result);
      })
      .finally(() => {
        setLoading(false);
      });
  });

  // Handle selection
  const handleSelect = async (currentValue) => {
    setValue(currentValue);
    setOpen(false);
    setLoading(true);

    try {
      const makesData = await fetchMakesForVehicleType(currentValue);
      setMakes(makesData.Results);
      if (makesData.Results.length > 0) {
        onMakeIdSelect(makesData.Results[0].MakeId);
      }
    } catch (error) {
      console.error("Error fetching makes:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? types?.find((element) => element === value)
            : "No type selected..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 w-[200px]">
        {loading && <Loading />}
        {!loading && (
          <Command>
            <CommandInput placeholder="Search types..." />
            <CommandList>
              {types && <CommandEmpty>No type found.</CommandEmpty>}
              <CommandGroup>
                {types?.map((element) => (
                  <CommandItem
                    key={element}
                    value={element}
                    onSelect={() => handleSelect(element)}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === element ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {element}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        )}
      </PopoverContent>
    </Popover>
  );
}
