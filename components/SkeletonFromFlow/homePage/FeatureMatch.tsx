import Circle from "../Circle";
import Rectangle from "../Rectangle";

function FeatureMatch() {
  return (
    <div className="dark:bg-[#1C1C1C] bg-[#F2F6F9] px-2 py-1 rounded-lg xl:!px-8 xl:!py-4">
      <div className="flex justify-between">
        <div className="flex flex-col items-center gap-4">
          <Circle classes="lg:w-10 lg:h-10 xl:w-14 xl:h-14" />
          <Rectangle classes="h-3 lg:w-[3rem] xl:w-[4.5rem]" />
        </div>
        <div className="flex flex-col justify-center  items-center gap-2">
          <Rectangle classes="h-5 w-[3.5rem]" />
          <Rectangle classes="h-7 w-[6.5rem]" />
          <Rectangle classes="h-3 w-[5.5rem]" />
        </div>
        <div className="flex flex-col items-center gap-4">
          <Circle classes="lg:w-10 lg:h-10 xl:w-14 xl:h-14" />
          <Rectangle classes="h-3 lg:w-[3rem] xl:w-[4.5rem]" />
        </div>
      </div>
    </div>
  );
}

export default FeatureMatch;
