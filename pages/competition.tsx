import { ThemeSwitch } from "../components/darkmode/ThemeSwitch";
import Standing from "../components/SkeletonFromFlow/competition/Standing";
import Raking from "../components/SkeletonFromFlow/competition/Raking";
import TopTeam from "../components/SkeletonFromFlow/competition/TopTeam";
import Link from "next/link";
import Schedule from "../components/SkeletonFromFlow/competition/Schedule";
import Confrontation from "../components/SkeletonFromFlow/competition/Confrontation";
import FeatureMatchCompe from "../components/SkeletonFromFlow/competition/FeatureMatchCompe";
import PredictFeatureMatch from "../components/SkeletonFromFlow/competition/PredictFeatureMatch";

const Competition = () => {
  const numbersArray = Array.from({ length: 20 }, (_, index) => index + 1);
  const numbersArray2 = Array.from({ length: 9 }, (_, index) => index + 1);

  return (
    <div className="font-Uniscore bg-light dark:bg-[#121212]">
      <div className="w-fit h-fit absolute top-0 right-0">
        <Link href={"/"}>Previous page</Link>

        <ThemeSwitch />
      </div>
      <div className="layout h-fit flex gap-4 lg:flex-row flex-col">
        <div className="w-full lg:w-2/3 h-fit py-20 px-4 flex flex-col gap-4">
          <div className="w-full h-fit bg-white  dark:bg-[#222] rounded-xl py-4 overflow-hidden">
            {numbersArray.map((number) => (
              <Standing key={number} />
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 ">
            <div className=" dark:bg-[#222] bg-white">
              {numbersArray2.map((number) => (
                <Schedule key={number} />
              ))}
            </div>
            <div className="flex gap-4 flex-col">
              <FeatureMatchCompe />
              <PredictFeatureMatch />

              <div className="dark:bg-[#222] bg-white rounded-lg">
                <Confrontation/>
              </div>
              <div className="dark:bg-[#222] bg-white rounded-lg">
                <Confrontation/>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex lg:!w-1/3 h-fit  lg:py-20 px-2 flex-col gap-6">
          <div className="w-full h-fit bg-white  dark:bg-[#222] rounded-xl px-2 py-8 flex flex-col gap-3">
            <FeatureMatchCompe />
          </div>
          <div className="w-full h-fit bg-white  dark:bg-[#222] rounded-xl px-2 py-8 flex flex-col gap-3">
            {numbersArray2.map((number) => (
              <Raking key={number} />
            ))}
          </div>
          <div className="w-full h-fit bg-white  dark:bg-[#222] rounded-xl px-2 py-8 flex flex-col gap-3">
            {numbersArray2.map((number) => (
              <TopTeam key={number} number={number} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Competition;
