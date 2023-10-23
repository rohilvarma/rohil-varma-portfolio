import { IHead } from "@/interfaces/Head";

const Heading = ({heading}: IHead) => {
  return (
    <main className="mb-8">
      <h1 className="font-medium text-2xl">{heading}</h1>
    </main>
  );
};

export default Heading;
