import { SingleThesis } from "@/components/pages/thesis/detail";

export default function ThesisDetail({
  params,
}: {
  params: { title: string };
}) {
  return <SingleThesis title={params.title} />;
}
