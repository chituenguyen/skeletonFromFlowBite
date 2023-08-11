import Circle from "../Circle";
import Rectangle from "../Rectangle";

function Standing() {
  return (
    <div className="px-4 py-2">
      <div className="flex gap-5 items-center">
        <Circle classes="w-7 h-7" />
        <div className="w-full">
          <Rectangle classes="h-5 w-full" />
        </div>
      </div>
    </div>
  );
}

export default Standing;
