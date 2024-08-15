import Link from "next/link";
import Card from "@/components/Card";
import { Button } from "@/components/ui/button";

export default async function Page({ params }) {
  const res = await fetch(
    `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${params.makeId}/modelyear/${params.year}?format=json`
  );
  const data = await res.json();

  return (
    <main className="grow">
      <div className="container py-10">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-semibold tracking-tight mb-10">
            Models for
          </h2>
          <Link href="/">
            <Button>Back</Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {data?.Results?.length > 0 ? (
            data?.Results?.map((model, index) => (
              <Card
                key={index}
                makeName={model.Make_Name}
                modelName={model.Model_Name}
              />
            ))
          ) : (
            <p className="text-center">No models available</p>
          )}
        </div>
      </div>
    </main>
  );
}
