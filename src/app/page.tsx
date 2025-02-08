import Leftside from "@/components/Leftside";
import RightSide from "@/components/RightSide";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <Leftside
        description="I'm currently focused on expanding my experience designing and
        developing high performing Mobile App"
      />
      <RightSide />
    </div>
  );
}
