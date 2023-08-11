import Circle from "../Circle";
import Rectangle from "../Rectangle";

function RakingHome() {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-3 items-center">
        <Circle classes="h-12 w-12" />
        <div className="flex flex-col gap-2">
          <Rectangle classes="h-3 xl:w-[10rem]" />
          <Rectangle classes="h-3 w-[6rem]" />
        </div>
      </div>
      <Rectangle classes="h-6 w-6" />
    </div>
  );
}

export default RakingHome;
