"use client";

import React, { useState } from "react";
import QnA from "./QnA";
import ReactQnA from "./ReactQnA";
import NextQnA from "./NextQnA";

const tabs = [
  {
    id: 1,
    name: "JavaScript",
    component: QnA,
  },
  {
    id: 2,
    name: "React",
    component: ReactQnA,
  },
  {
    id: 3,
    name: "Next.js",
    component: NextQnA,
  },
];

const Tab = () => {
  const [active, setActive] = useState(0);
  const ActiveComponent = tabs[active].component;

  const handleTab = (index) => {
    setActive(index);
  };

  return (
    <div>
      <div className="tabs flex gap-3 justify-center">
        {tabs.map((tab, index) => (
          <div
            key={tab.id}
            className={`border px-5 rounded py-2 cursor-pointer ${
              index === active ? "bg-slate-950 text-slate-50" : ""
            }`}
            onClick={() => handleTab(index)}
          >
            {tab.name}
          </div>
        ))}
      </div>
      <div className="mt-5">
        <ActiveComponent />
      </div>
    </div>
  );
};

export default Tab;
