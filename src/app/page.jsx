"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { ComboboxDemoYears } from "@/components/combobox-demo-years";
import { ComboboxDemo } from "@/components/combobox-demo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
  const [makeId, setMakeId] = React.useState(null);
  const [year, setYear] = React.useState(null);

  return (
    <main className="grow">
      <div className="container flex justify-between py-10">
        <div className="w-full">
          <h2 className="border-b mb-10 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Choose options
          </h2>
          <div className="flex gap-10 justify-center items-center">
            <ComboboxDemo onMakeIdSelect={setMakeId} />
            <ComboboxDemoYears onYearSelect={setYear} />
            <Link href={`/result/${makeId}/${year}`}>
              <Button disabled={!makeId || !year}>Next</Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
