"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn, getYearsNow } from "@/lib/utils";
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

const years = getYearsNow();

export function ComboboxDemoYears({ onYearSelect }) {
  // Add prop
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  const handleSelect = (currentValue) => {
    setValue(currentValue);
    setOpen(false);
    onYearSelect(currentValue); // Pass year to parent component
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
            ? years?.find((element) => element === Number(value))
            : "No year selected..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 w-[200px]">
        <Command>
          <CommandInput placeholder="Search years..." />
          <CommandList>
            <CommandEmpty>No year found.</CommandEmpty>
            <CommandGroup>
              {years.map((element) => (
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
      </PopoverContent>
    </Popover>
  );
}
