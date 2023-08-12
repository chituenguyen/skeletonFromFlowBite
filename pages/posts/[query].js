// getServerSideProps()

import { Tooltip } from "@mui/material";

const Posts = ({ results: query }) => {
  return (
    // <div className="font-Uniscore">
    //   <Tooltip title={"Hello t"} sx={{ fontSize: 20 }}>
    //     <button
    //       className={`lg:text-[10px] text-sm dark:text-white px-4 py-2 rounded-lg bg-[#2187E5]

    //       `}
    //     >
    //       <p>Click me t</p>
    //     </button>
    //   </Tooltip>
    // </div>
    <div className="dev8 h-20">
      <div className="flex gap-5 h-full">
        <Tooltip title="tooltip->div">
          <div className=" dev7">Button</div>
        </Tooltip>

        <Tooltip title="tooltip->button">
          <button className=" dev6">Button</button>
        </Tooltip>
        <Tooltip title="tooltip->a">
          <a className=" dev6">Button</a>
        </Tooltip>
        <Tooltip title="tooltip->a->button">
          <a className=" dev6">
            <button className="">
            Button
            </button>
          </a>
        </Tooltip>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/?q=${context.params.query}`
  );
  const json = await res.json();
  const posts = json;
  return {
    props: {
      results: posts,
    },
  };
}

export default Posts;
