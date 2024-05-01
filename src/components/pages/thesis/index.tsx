import { HomeLayout } from "@/components/ui/layout/layout.home";
import { ThesisNav } from "./nav";
import { ResultInfo } from "./result-info";
import { ThesisResults } from "./results";

export const ThesisPage = ({ query }: { query: string }) => {
  // search for thesis

  return (
    <HomeLayout className="w-full flex flex-col">
      <ThesisNav query={query} />
      <ResultInfo />
      <ThesisResults />
    </HomeLayout>
  );
};
