import Link from "next/link";
import { Dot } from "../ui/dot";

export const ThesisItem = () => {
  return (
    <div className="w-3/4 flex flex-col p-4 px-6 gap-2 items-start group hover:border border-gray-400 rounded-lg hover:shadow-sm">
      <Link
        href={"/thesis/1"}
        className="text-2xl font-bold text-cyan-500 group-hover:text-cyan-700"
      >
        Thesis Title
      </Link>
      <div className="flex items-center gap-2">
        <p className="text-sm font-medium text-gray-600">Author</p>
        <Dot />
        <p className="text-sm font-medium text-gray-600">Supervisor</p>
        <Dot />
        <p className="text-sm font-medium text-gray-600">Published Date</p>
        <Dot />
        <p className="text-sm font-medium text-gray-600">Department</p>
      </div>
      <p className="text-base text-gray-700 group-hover:text-gray-800 line-clamp-2">
        Thesis Summary
      </p>
      <div className="flex gap-1 items-center">
        <p className="text-sm font-medium text-gray-600">Keywords:</p>
        <span className="text-xs italic font-medium text-gray-500">
          Keyword 1
        </span>
        <span className="text-xs italic font-medium text-gray-500">
          Keyword 2
        </span>
        <span className="text-xs italic font-medium text-gray-500">
          Keyword 3
        </span>
      </div>
    </div>
  );
};
