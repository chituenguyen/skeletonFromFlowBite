import Circle from "../Circle";
import Rectangle from "../Rectangle";

function Stadium() {
    return (
        <div className="px-4 py-2 flex flex-col gap-2 ">
          <div className="flex justify-between">
            <Rectangle classes="h-2 w-10" />
            <Rectangle classes="h-2 w-[3rem]" />
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <Rectangle classes="h-2 w-[5rem]" />
            </div>
            <div className="flex gap-2">
              <Rectangle classes="h-2 w-[6rem]" />
            </div>
          </div>
        </div>
    );
}

export default Stadium;