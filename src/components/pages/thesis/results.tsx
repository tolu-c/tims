import { ThesisList } from "@/components/thesis/thesis-list";

export const ThesisResults = () => {
  return (
    <div className="w-full grid grid-cols-12 p-3">
      <div className="col-span-3 flex flex-col p-8 gap-4 items-start">
        <p className="text-lg text-gray-800">Filter</p>
        <div className="flex flex-col items-start gap-2">
          <p className="text-sm font-semibold text-gray-600 hover:text-gray-800">
            Since 2024
          </p>
        </div>
      </div>

      <div className="col-span-9 w-full">
        <ThesisList />
      </div>
    </div>
  );
};
