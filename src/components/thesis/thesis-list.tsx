import { ThesisItem } from "./thesis-item";

export const ThesisList = () => {
  return (
    <div className="w-full flex flex-col items-start gap-8">
      <ThesisItem />
      <ThesisItem />
      <ThesisItem />
    </div>
  );
};
