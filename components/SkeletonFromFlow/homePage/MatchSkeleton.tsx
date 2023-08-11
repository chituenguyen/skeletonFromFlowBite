import Circle from "../Circle";
import Rectangle from "../Rectangle";

function MatchSkeleton() {
  return (
    <div className="px-2 xl:px-8  flex flex-col gap-4 py-6 border-b border-solid dark:border-black border-gray-300">
      <div className="flex  gap-3 items-center">
        <Circle classes="w-12 h-12" />
        <div className="flex flex-col gap-2">
          <Rectangle classes="h-3 w-20" />
          <Rectangle classes="h-3 w-full xl:w-[22rem]" />
        </div>
      </div>
      <div className="flex gap-3">
        <div className="flex gap-1 flex-col">
          <Rectangle classes="h-3 w-12" />
          <Rectangle classes="h-3 w-12" />
        </div>
        <div className="flex gap-1 flex-col px-4 border-l border-solid border-gray-200 dark:border-gray-700">
          <Rectangle classes="h-3 w-52" />
          <Rectangle classes="h-3 w-60" />
        </div>
      </div>
    </div>
  );
}

export default MatchSkeleton;
