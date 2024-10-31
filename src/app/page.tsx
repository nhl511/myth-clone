import { getHome, getTrailer } from "@/services/apis/homePage.service";
import Trailer from "./components/Trailer";
import Homepage from "./components/Homepage";

export default async function Home() {
  const trailer = await getTrailer();
  const home = await getHome(1);

  return (
    <div className="w-full">
      <div className="relative">
        <Trailer trailer={trailer?.trailer} />
        <Homepage home={home} />
      </div>
    </div>
  );
}
