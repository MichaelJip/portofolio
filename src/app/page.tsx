import Leftside from "@/components/Leftside";
import RightSide from "@/components/RightSide";
import { backgroundColor } from "@/lib/colors";

export default function Home() {
  return (
    <div
      className={`lg:flex min-h-screen`}
      style={{ background: backgroundColor }}
    >
      <Leftside
        description="I'm currently focused on expanding my experience designing and
        developing high performing Mobile App"
      />
      <RightSide />
    </div>
  );
}
