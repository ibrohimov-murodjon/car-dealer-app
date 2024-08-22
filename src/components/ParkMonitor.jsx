"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MapPinIcon, TreePineIcon } from "lucide-react";

// Mock data for tree information
const treeData = {
  756852: {
    id: "756852",
    species: "Toshkent shoxri",
    location: "Olmazor tumani",
    type: "Mevali va ёngok yog'ochlari",
    plantingDate: "21/03/2023",
    address:
      "O'zbekiston, 100000, Toshkent, Olmazor Tumani, Ziyo mahallasi, Talabalar ko'chasi, 4/2",
  },
  // Add more tree data as needed
};

export default function ParkMonitor() {
  const [selectedTree, setSelectedTree] = useState(null);

  const handleTreeClick = (treeId) => {
    setSelectedTree(treeData[treeId]);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="relative">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xFRyGx31HS20frH4hIwO9johGQP7te.png"
          alt="Park Landscape"
          className="w-full h-auto"
        />
        <Button
          variant="outline"
          size="icon"
          className="absolute top-[51%] left-[33.5%] rounded-full bg-green-500 hover:bg-green-600"
          onClick={() => handleTreeClick("756852")}
        >
          <MapPinIcon className="h-4 w-4 text-white" />
        </Button>
        {/* Add more buttons for other tree locations */}
      </div>

      <Dialog
        open={selectedTree !== null}
        onOpenChange={() => setSelectedTree(null)}
      >
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <TreePineIcon className="h-5 w-5 text-green-600" />
              Tree Information
            </DialogTitle>
          </DialogHeader>
          {selectedTree && (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <span className="font-medium">ID:</span>
                <span className="col-span-3">{selectedTree.id}</span>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <span className="font-medium">Species:</span>
                <span className="col-span-3">{selectedTree.species}</span>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <span className="font-medium">Location:</span>
                <span className="col-span-3">{selectedTree.location}</span>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <span className="font-medium">Type:</span>
                <span className="col-span-3">{selectedTree.type}</span>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <span className="font-medium">Planted:</span>
                <span className="col-span-3">{selectedTree.plantingDate}</span>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <span className="font-medium">Address:</span>
                <span className="col-span-3">{selectedTree.address}</span>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
