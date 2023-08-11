interface RectangleProps {
    classes: string; // should include width, height and something like mx my px py ...
  }
  
  const Rectangle: React.FC<RectangleProps> = ({ classes }) => {
    return (
      <div className="animate-pulse">
        <div className={`bg-[#ccc] rounded-sm dark:bg-[#333] ${classes}`}></div>
      </div>
    );
  };
  
  export default Rectangle;
  