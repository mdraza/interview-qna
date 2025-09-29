"use client";

import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { nextjsData } from "../nextjs-data";

const NextQnA = () => {
  const [show, setShow] = useState(null);

  const handleToggle = (index) => {
    setShow((prev) => (prev === index ? null : index));
  };

  return (
    <div>
      {nextjsData?.map((data, index) => (
        <div key={data.id} className="mb-2 lg:mb-5 border rounded">
          <div
            className={`p-2 cursor-pointer flex items-center justify-between relative bg-amber-50 ${
              show === index && "bg-amber-200 rounded-b-none"
            } text-md rounded text-slate-950 ${
              data.important && "border-red-600"
            }`}
            onClick={() => handleToggle(index)}
          >
            <h2
              className={`font-medium rounded p-3 ${
                data.important && "text-red-600"
              } ${show === index && "font-semibold"}`}
            >
              <span>{data.id}</span>. {data.question}{" "}
            </h2>
            <div className="flex gap-5">
              {data.namaste && (
                <span className="border-1 text-sm border-amber-500 text-amber-700 px-3 py-1 rounded">
                  Refer Namaste JavaScript
                </span>
              )}
              {data.important && (
                <span className="bg-red-500 text-white px-3 py-1 rounded">
                  Important
                </span>
              )}
              {show === index ? (
                <IoIosArrowDown className="text-[25px]" />
              ) : (
                <IoIosArrowUp className="text-[25px]" />
              )}
            </div>
          </div>
          {show === index && (
            <div className="p-3 bg-amber-100 rounded mt-[0.3px]">
              {data.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default NextQnA;
