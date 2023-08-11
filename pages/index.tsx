import type { NextPage } from "next";
import { ThemeSwitch } from "../components/darkmode/ThemeSwitch";
import MatchSkeleton from "../components/SkeletonFromFlow/homePage/MatchSkeleton";
import FeatureMatch from "../components/SkeletonFromFlow/homePage/FeatureMatch";
import Link from "next/link";
import PredictFeatureMatch from "../components/SkeletonFromFlow/homePage/PredictFeatureMatch";
import Tabs from "../components/SkeletonFromFlow/homePage/Tabs";
import ConfrontationH from "../components/SkeletonFromFlow/homePage/ConfrontationH";
import Rectangle from "../components/SkeletonFromFlow/Rectangle";
import Referee from "../components/SkeletonFromFlow/homePage/Referee";
import Stadium from "../components/SkeletonFromFlow/homePage/Stadium";
import Formation from "../components/SkeletonFromFlow/homePage/Formation";
import Statistic from "../components/SkeletonFromFlow/homePage/Statistic";
import Streak from "../components/SkeletonFromFlow/homePage/Streak";
import Standing from "../components/SkeletonFromFlow/competition/Standing";

const Home: NextPage = () => {
  const numbersArray2 = Array.from({ length: 9 }, (_, index) => index + 1);

  const tabs = ["Chi tiết", "Đội hình", "Thống kê", "Trận đấu", "BXH"];
  const tabContents = [
    <div className="flex flex-col gap-4" key={1}>
      <PredictFeatureMatch />
      <div className="bg-[#ECF1F5] dark:bg-[#1C1C1C] px-4 py-2 rounded-lg">
        <Rectangle classes="w-full h-[5rem]" />
      </div>
      <div className="bg-[#ECF1F5] dark:bg-[#1C1C1C] rounded-lg">
        <ConfrontationH />
      </div>
      <div className="bg-[#ECF1F5] dark:bg-[#1C1C1C] rounded-lg">
        <Referee />
      </div>
      <div className="bg-[#ECF1F5] dark:bg-[#1C1C1C] rounded-lg">
        <Stadium />
      </div>
    </div>,
    <div key={2} className="flex flex-col gap-4">
      <div className="bg-[#ECF1F5] dark:bg-[#1C1C1C] rounded-lg px-4 py-2">
        <Rectangle classes="w-full h-[7rem]" />
      </div>
      <div className="bg-[#ECF1F5] dark:bg-[#1C1C1C] rounded-lg px-4 py-2">
        <Formation />
      </div>
      <div className="bg-[#ECF1F5] dark:bg-[#1C1C1C] rounded-lg px-4 py-2">
        <Formation />
      </div>
    </div>,
    <div key={3} className="flex flex-col gap-4">
      <div className="bg-[#ECF1F5] dark:bg-[#1C1C1C] rounded-lg px-4 py-2">
        <Rectangle classes="w-full h-[10rem]" />
      </div>
      <div className="bg-[#ECF1F5] dark:bg-[#1C1C1C] rounded-lg px-4 py-2">
        <Statistic />
      </div>
    </div>,
    <div key={4} className="flex flex-col gap-4">
      <PredictFeatureMatch />
      <div className="bg-[#ECF1F5] dark:bg-[#1C1C1C] rounded-lg px-4 py-2">
        <Streak />
      </div>
      <div className="bg-[#ECF1F5] dark:bg-[#1C1C1C] rounded-lg px-4 py-2">
        <Streak />
      </div>
    </div>,
    <div key={5}>
      <div className="bg-[#ECF1F5] dark:bg-[#1C1C1C] rounded-lg px-4 py-2">
      {numbersArray2.map((number) => (
        <Standing key={number} />
      ))}
    </div>
    </div>
  ];

  return (
    <div className="font-Uniscore bg-light dark:bg-[#121212]">
      <div className="w-fit h-fit absolute top-0 right-0">
        <Link href={"/competition"}>Next page</Link>
        <ThemeSwitch />
      </div>
      <div className="layout flex gap-4 ">
        <div className="w-full lg:!w-[45%] h-full py-20 px-4">
          <div className="w-full h-fit bg-white  dark:bg-[#222] rounded-xl overflow-hidden">
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
        <div className="hidden lg:block lg:w-[45%] xl:!w-[35%] h-full  py-20 px-2">
          <div className="w-full h-fit bg-white  dark:bg-[#222] rounded-xl px-2 py-8 flex flex-col gap-6">
            <FeatureMatch />
            {/* <PredictFeatureMatch/> */}
            <Tabs tabs={tabs} tabContents={tabContents} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
