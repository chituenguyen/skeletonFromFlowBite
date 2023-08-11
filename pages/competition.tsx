import { ThemeSwitch } from "../components/darkmode/ThemeSwitch";
import MatchSkeleton from "../components/SkeletonFromFlow/homePage/MatchSkeleton";
import FeatureMatch from "../components/SkeletonFromFlow/homePage/FeatureMatch";
import PredictFeatureMatch from "../components/SkeletonFromFlow/homePage/PredictFeatureMatch";
import Circle from "../components/SkeletonFromFlow/Circle";
import Rectangle from "../components/SkeletonFromFlow/Rectangle";
import Standing from "../components/SkeletonFromFlow/competition/Standing";
import Raking from "../components/SkeletonFromFlow/competition/Raking";
import TopTeam from "../components/SkeletonFromFlow/competition/TopTeam";
import Link from "next/link";

const Competition = () => {
  const numbersArray = Array.from({ length: 20 }, (_, index) => index + 1);
  const numbersArray2 = Array.from({ length: 10 }, (_, index) => index + 1);

  return (
    <div className="font-Uniscore">
      <div className="w-fit h-fit absolute top-0 right-0">
      <Link href={'/'}>Previous page</Link>

        <ThemeSwitch />
      </div>
      <div className="layout h-screen flex gap-4 lg:flex-row flex-col">
        <div className="w-full lg:!w-2/3 h-fit py-20 px-4">
          <div className="w-full h-fit bg-[#F2F6F9]  dark:bg-[#222] rounded-xl py-4 overflow-hidden">
            {numbersArray.map((number) => (
              <Standing key={number} />
            ))}
          </div>
        </div>
        <div className="w-full lg:!w-1/3 h-fit  lg:py-20 px-2 flex flex-col gap-6">
          <div className="w-full h-fit bg-[#F2F6F9]  dark:bg-[#222] rounded-xl px-2 py-8 flex flex-col gap-3">
            {numbersArray2.map((number) => (
              <Rectangle key={number} classes="h-5 w-full" />
            ))}
          </div>
          <div className="w-full h-fit bg-[#F2F6F9]  dark:bg-[#222] rounded-xl px-2 py-8 flex flex-col gap-3">
            {numbersArray2.map((number) => (
              <Raking key={number} />
            ))}
          </div>
          <div className="w-full h-fit bg-[#F2F6F9]  dark:bg-[#222] rounded-xl px-2 py-8 flex flex-col gap-3">
          {numbersArray2.map((number) => (
              <TopTeam key={number} number={number}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Competition;
