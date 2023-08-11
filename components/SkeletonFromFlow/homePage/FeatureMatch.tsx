import Circle from "../Circle";
import Rectangle from "../Rectangle";

function FeatureMatch() {
  return (
    <div className="dark:bg-[#1C1C1C] bg-[#F2F6F9] px-2 py-1 xl:px-8 xl:py-4 rounded-lg">
      <div className="flex justify-between">
        <div className="flex flex-col items-center gap-4">
          <Rectangle classes="h-3 lg:w-[3rem] xl:w-[4.5rem]" />
          <Circle classes="lg:w-10 lg:h-10 xl:w-14 xl:h-14" />
        </div>
        <div className="flex flex-col justify-end  items-center gap-1">
          <Rectangle classes="lg:h-4 xl:h-7 w-[7.5rem]" />
          <Rectangle classes="lg:h-3 xl:h-6 w-[3.5rem]" />
        </div>
        <div className="flex flex-col items-center gap-4">
          <Rectangle classes="h-3 lg:w-[3rem] xl:w-[4.5rem]" />
          <Circle classes="lg:w-10 lg:h-10 xl:w-14 xl:h-14" />
        </div>
      </div>
    </div>
  );
}

export default FeatureMatch;
