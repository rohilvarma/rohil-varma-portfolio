import { IHead } from "@/interfaces";

const Heading = ({heading}: IHead) => {
  return (
    <main className="mb-8">
      <h1 className="font-medium text-2xl text-selection">{heading}</h1>
    </main>
  );
};

export default Heading;
