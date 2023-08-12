import React, { useState } from "react";
import ToggleColorMode from "../../Tooltip";

interface TabProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const Tab: React.FC<TabProps> = ({ label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`lg:text-[10px] text-sm dark:text-white px-4 py-2 rounded-lg ${
      isActive ? "bg-[#2187E5] " : ""
    }`}
  >
    <ToggleColorMode title={label}>{label}</ToggleColorMode>
  </button>
);

interface TabsProps {
  tabs: string[];
  tabContents: React.ReactNode[];
}

const Tabs: React.FC<TabsProps> = ({ tabs, tabContents }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div>
      <div className="flex">
        {tabs.map((label, index) => (
          <Tab
            key={index}
            label={label}
            isActive={index === activeTab}
            onClick={() => handleTabClick(index)}
          />
        ))}
      </div>
      <div className="mt-4">{tabContents[activeTab]}</div>
    </div>
  );
};

export default Tabs;
