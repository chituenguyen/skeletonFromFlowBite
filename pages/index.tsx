import type { NextPage } from "next";
import { ThemeSwitch } from "../components/darkmode/ThemeSwitch";
import MatchSkeleton from "../components/SkeletonFromFlow/homePage/MatchSkeleton";
import FeatureMatch from "../components/SkeletonFromFlow/homePage/FeatureMatch";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="font-Uniscore">
      <div className="w-fit h-fit absolute top-0 right-0">
        <Link href={'/competition'}>Next page</Link>
        <ThemeSwitch />
      </div>
      <div className="layout h-screen flex gap-4 ">
        <div className="w-full lg:!w-[45%] h-full py-20 px-4">
          <div className="w-full h-fit bg-[#F2F6F9]  dark:bg-[#222] rounded-xl overflow-hidden">
            <MatchSkeleton />
            <MatchSkeleton />
            <MatchSkeleton />
            <MatchSkeleton />
            <MatchSkeleton />
            <MatchSkeleton />
            <MatchSkeleton />
            <MatchSkeleton />
            <MatchSkeleton />
          </div>
        </div>
        <div className="hidden lg:block lg:!w-[35%] h-full  py-20 px-2">
          <div className="w-full h-fit bg-[#F2F6F9]  dark:bg-[#222] rounded-xl px-2 py-8 flex flex-col gap-6">
            <FeatureMatch />
            {/* <PredictFeatureMatch/> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
