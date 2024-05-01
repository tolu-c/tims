"use client";

import { Logo } from "@/components/ui/logo";
import { State, searchThesis } from "@/lib/actions";
import { ArrowRightIcon, MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { useFormState } from "react-dom";

export const ThesisNav = ({ query }: { query: string }) => {
  const initialState: State = { message: null };
  const [state, dispatch] = useFormState(searchThesis, initialState);

  return (
    <nav className="w-full items-center justify-between flex px-6 py-4">
      <Logo className="text-gray-900 hover:text-gray-950" />
      <form action={dispatch} className="w-1/2 mx-auto flex items-center gap-3">
        <input
          name="query"
          type="text"
          defaultValue={query}
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
      {/* if user is not logged in, show login button*/}
      <Link
        href={"/login"}
        className="flex-none text-sm font-semibold text-gray-800 hover:text-gray-900 flex items-center gap-2"
      >
        <span>Log in</span>
        <ArrowRightIcon className="size-4 text-inherit" />
      </Link>
    </nav>
  );
};
