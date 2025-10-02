"use client";

import { useState, useEffect } from "react";
import { reactData } from "../react-data";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";

const ReactQnA = () => {
  const [show, setShow] = useState(null);

  // ✅ Initialize counts directly from localStorage (so it won't reset to 0)
  const [counts, setCounts] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("reactAccordionCounts");
      return stored ? JSON.parse(stored) : Array(reactData.length).fill(0);
    }
    return Array(reactData.length).fill(0);
  });

  // ✅ Keep localStorage in sync when counts change
  useEffect(() => {
    localStorage.setItem("reactAccordionCounts", JSON.stringify(counts));
  }, [counts]);

  const handleToggle = (index) => {
    setShow((prev) => (prev === index ? null : index));
  };

  const handleIncrease = (index) => {
    setCounts((prev) => prev.map((c, i) => (i === index ? c + 1 : c)));
  };

  const handleDecrease = (index) => {
    setCounts((prev) => prev.map((c, i) => (i === index && c > 0 ? c - 1 : c)));
  };

  return (
    <div>
      {reactData?.map((item, index) => (
        <div key={item.id} className="mb-2 lg:mb-5 border rounded">
          <div
            className={`p-2 flex items-center justify-between relative bg-amber-50 ${
              show === index && "bg-amber-200 rounded-b-none"
            } text-md rounded text-slate-950 ${
              item.important && "border-red-600"
            }`}
          >
            <h2
              className={`font-medium rounded p-3 ${
                item.important && "text-red-600"
              } ${show === index && "font-semibold"}`}
            >
              <span>{item.id}</span>. {item.question}
            </h2>

            <div className="flex gap-5 items-center">
              {item.namaste && (
                <span className="border-1 text-sm border-amber-500 text-amber-700 px-3 py-1 rounded">
                  Refer Namaste JavaScript
                </span>
              )}
              {item.important && (
                <span className="bg-red-500 text-white px-3 py-1 rounded">
                  Important
                </span>
              )}

              {/* Counter */}
              <div className="flex items-center justify-between gap-2">
                <button onClick={() => handleDecrease(index)}>
                  <CiSquareMinus className="text-[26px] font-medium cursor-pointer" />
                </button>
                <span className="font-semibold">{counts[index]}</span>
                <button onClick={() => handleIncrease(index)}>
                  <CiSquarePlus className="text-[26px] font-medium cursor-pointer" />
                </button>
              </div>

              {/* Accordion toggle */}
              <div
                onClick={() => handleToggle(index)}
                className="cursor-pointer"
              >
                {show === index ? (
                  <IoIosArrowDown className="text-[25px]" />
                ) : (
                  <IoIosArrowUp className="text-[25px]" />
                )}
              </div>
            </div>
          </div>

          {show === index && (
            <div className="p-3 bg-amber-100 rounded mt-[0.3px]">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ReactQnA;
