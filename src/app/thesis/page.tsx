import { ThesisPage } from "@/components/pages/thesis";

export default function Thesis({
  searchParams,
}: {
  searchParams: { query: string };
}) {
  return <ThesisPage query={searchParams.query} />;
}
