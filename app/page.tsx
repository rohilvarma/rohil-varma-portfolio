import WavingEmoji from "@/components/WavingEmoji";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import profile from "@/public/profile.jpeg";
import { Badge } from "@/components/ui/badge";
import Skill from "@/components/Skill";

export default function Home() {
  return (
    <main className="">
      <section className="">
        <div className="flex items-center justify-between">
          <div className="">
            <h1 className="font-bold text-6xl flex items-center gap-4">
              <span className="">Hi, I&apos;m Rohil</span>
              <WavingEmoji />
            </h1>
            <div className="text-muted-foreground text-xl mt-2 flex items-start gap-2">
              I love building solutions in{" "} 
              <Badge variant="secondary">
                <Skill name="typescript" size={20} className="mr-1" /> TypeScript
              </Badge> and{" "}
              <Badge variant="secondary"> <Skill name="python" size={20} className="mr-1" />Python</Badge>.
            </div>
          </div>
          <Avatar className="w-1/4 h-1/4 border-4 border-purple-600">
            <AvatarImage src={profile.src} alt="@rohilvarma" />
            <AvatarFallback className="w-full h-full">
              RV
            </AvatarFallback>
          </Avatar>
        </div>
      </section>
    </main>
  );
}
