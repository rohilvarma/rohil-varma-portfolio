import Heading from "@/components/Heading";
import RenderImage from "@/components/RenderImage";

import { profileDescription } from "@/data/data";

export default function Home() {
  return (
    <div className="">
      <Heading heading={"hey, I'm Rohil 👋"} />
      <section className="">
        <p className="text-self">
          {profileDescription[0]}
        </p>

        {/* Add Image section over here */}
        <RenderImage />

        <p className="text-self">
          {profileDescription[1]}
        </p>
      </section>
    </div>
  );
}
