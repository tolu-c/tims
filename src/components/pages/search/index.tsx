import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";

export const SearchPage = () => {
  return (
    <div className="2xl:container mx-auto h-screen w-full flex flex-col gap-10 justify-center items-center">
      <h1 className="text-5xl text-gray-900 font-bold -mt-40">TIMS Search</h1>

      <form className="w-3/5 mx-auto flex items-center gap-3">
        <input
          name="query"
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 border border-gray-500 rounded-md focus:outline-none focus:border-gray-800 placeholder:text-gray-400 placeholder:text-sm text-base text-gray-900"
        />
        <button
          type="submit"
          className="px-4 py-2 rounded-lg hover:shadow-md bg-gray-900 text-gray-100 active:scale-90 flex flex-none items-center gap-2"
        >
          <MagnifyingGlassIcon className="size-5 text-inherit" />
          <p className="text-base font-medium">Search</p>
        </button>
      </form>
    </div>
  );
};
