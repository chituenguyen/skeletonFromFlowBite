import Circle from "../Circle";
import Rectangle from "../Rectangle";

function MatchSkeleton() {
  return (
    <div className="px-2 xl:!px-4  flex flex-col gap-4 py-6 border-b border-solid dark:border-black border-gray-300">
      <div className="flex  gap-3 items-center">
        <Circle classes="w-12 h-12" />
        <div className="flex flex-col gap-2">
          <Rectangle classes="h-3 w-full xl:!w-[22rem]" />
          <Rectangle classes="h-3 w-20" />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex gap-3 items-center dark:bg-[#1C1C1C] bg-[#F2F6F9] p-2 xl:!p-4 rounded-lg">
          <div className="flex gap-1 flex-col">
            <Rectangle classes="h-3 w-12" />
            <Rectangle classes="h-3 w-12" />
          </div>
          <div className="flex gap-1 flex-col px-4 border-l border-solid border-gray-200 dark:border-[#333] w-full">
            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <Circle classes="w-5 h-5" />
                <Rectangle classes="h-3 w-40" />
              </div>
              <Rectangle classes="h-3 w-5" />
            </div>
            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <Circle classes="w-5 h-5" />
                <Rectangle classes="h-3 w-60" />
              </div>
              <Rectangle classes="h-3 w-5" />
            </div>
          </div>
        </div>
        <div className="flex gap-3 items-center dark:bg-[#1C1C1C] bg-[#F2F6F9] p-2 xl:!p-4 rounded-lg">
          <div className="flex gap-1 flex-col">
            <Rectangle classes="h-3 w-12" />
            <Rectangle classes="h-3 w-12" />
          </div>
          <div className="flex gap-1 flex-col px-4 border-l border-solid border-gray-200 dark:border-[#333] w-full">
            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <Circle classes="w-5 h-5" />
                <Rectangle classes="h-3 w-40" />
              </div>
              <Rectangle classes="h-3 w-5" />
            </div>
            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <Circle classes="w-5 h-5" />
                <Rectangle classes="h-3 w-60" />
              </div>
              <Rectangle classes="h-3 w-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MatchSkeleton;
