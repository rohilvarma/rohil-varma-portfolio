import { FaBriefcase } from "react-icons/fa";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { workEx } from "@/lib/constants";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";
import { Download } from "lucide-react";
import Link from "next/link";

const Work = () => {
  return (
    <Card className="">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FaBriefcase className="" /> <span className="text-xl">Work</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {workEx.map((ex, index) => {
          return (
            <div key={index} className="flex gap-2 items-center">
              <Avatar className="border-2 border-muted">
                <AvatarImage src={ex.icon.src} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex-grow">
                <h2 className="font-semibold">{ex.company}</h2>
                <div className="text-muted-foreground text-xs flex items-center justify-between">
                  <p className="">{ex.designation}</p>
                  <p className="">
                    {ex.from} - {ex.to}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </CardContent>
      <CardFooter>
        <Link
          className="w-full"
          href={"/Rohil Varma.pdf"}
          target="_blank"
          download={"Rohil Varma.pdf"}
        >
          <Button className="w-full">
            <Download /> Resume
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default Work;
