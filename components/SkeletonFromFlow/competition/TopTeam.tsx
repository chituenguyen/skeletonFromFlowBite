import React from 'react';
import Circle from '../Circle';
import Rectangle from '../Rectangle';

interface TopTeamProps {
  number: number;
}

const TopTeam: React.FC<TopTeamProps> = ({ number }) => {
  return (
    <div className="flex justify-between items-center gap-5">
      <div className="flex gap-5 items-center flex-1">
        <p className="dark:text-[#888] text-gray-600 flex justify-end">{number}</p>
        <Circle classes="h-12 w-12" />
        <div className="flex-1 w-full">
          <Rectangle classes="h-3 w-full" />
        </div>
      </div>
      <Rectangle classes="h-6 w-8" />
    </div>
  );
};

export default TopTeam;
