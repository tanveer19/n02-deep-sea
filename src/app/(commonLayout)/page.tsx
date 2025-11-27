import Image from "next/image";
import bg from "../../../public/underwater-fish.jpg";
export default function Home() {
  return (
    <div className="">
      <Image className="h-dvh object-cover" src={bg} alt="underwater"></Image>
    </div>
  );
}
