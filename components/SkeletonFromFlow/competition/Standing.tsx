import Circle from "../Circle";
import Rectangle from "../Rectangle";

function Standing() {
  return (
    <div className="px-4 py-2">
      <div className="flex gap-5 items-center">
        <Circle classes="w-7 h-7" />
        <div className="w-full flex justify-between">
          <div className="w-[80%]">
          <Rectangle classes="h-3 w-full" />
          </div>
          <div className="w-[18%]">
          <Rectangle classes="h-3 w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Standing;
