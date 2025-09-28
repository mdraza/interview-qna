import React from "react";
import Tab from "./_components/Tab";

const page = () => {
  return (
    <div className="mx-2 lg:max-w-7xl lg:mx-auto my-5 lg:my-8">
      <h1 className="text-xl lg:text-2xl text-center mb-5 lg:mb-5">
        Interview Questions and Answers
      </h1>
      <Tab />
      {/* <QnA /> */}
    </div>
  );
};

export default page;
