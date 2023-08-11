interface CircleProps {
    classes: string; // should include width, height and something like mx my px py ...
  }
  
  const Circle: React.FC<CircleProps> = ({ classes }) => {
    return (
      <div className="animate-pulse">
        <div className={`bg-[#ccc] rounded-full dark:bg-[#333] ${classes}`}></div>
      </div>
    );
  };
  
  export default Circle;
  