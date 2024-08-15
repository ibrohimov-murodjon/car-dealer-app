import { UpdateIcon } from "@radix-ui/react-icons";

export default function Loading() {
  return (
    <div className="flex items-center gap-2 justify-center py-3">
      <UpdateIcon className="animate-spin" />
      <span>Loading...</span>
    </div>
  );
}
