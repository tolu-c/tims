import { HomeLayout } from "@/components/ui/layout/layout.home";
import { Logo } from "@/components/ui/logo";
import { ArrowRightIcon, MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

export const Hero = () => (
  <HomeLayout className="bg-shelf bg-cover bg-bottom">
    <header className="w-full flex items-center justify-between py-4 px-8">
      <Logo />
      <Link
        href={"/login"}
        className="flex-none text-sm font-semibold text-gray-100 hover:text-gray-50 flex items-center gap-2"
      >
        <span>Log in</span>
        <ArrowRightIcon className="size-4 text-inherit" />
      </Link>
    </header>

    <div className="w-full h-[90vh] flex flex-col gap-8 items-center justify-center relative">
      <h1 className="text-gray-50 text-7xl font-bold text-center w-3/4">
        Thesis Inventory Management System
      </h1>
      <p className="text-xl font-medium text-gray-300 text-center w-3/4">
        Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
        enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
        exercitation amet.
      </p>
      <Link
        href={"/search"}
        className="px-4 py-2 rounded-lg hover:shadow-md bg-gray-100 text-gray-800 active:scale-90 flex items-center gap-2"
      >
        <MagnifyingGlassIcon className="size-5 text-inherit" />
        <p className="text-base font-medium">Search Thesis</p>
      </Link>

      <div className="absolute bottom-2 inset-x-0 w-full flex justify-between items-center px-4">
        <p className="text-sm font-medium text-gray-300">
          ADEYEMO TOLUWANIMI EMMANUEL
        </p>
        <p className="text-sm font-medium text-gray-300 uppercase">csc. ui</p>
      </div>
    </div>
  </HomeLayout>
);
