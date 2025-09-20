import React from "react";
import QnA from "./_components/QnA";

const page = () => {
  return (
    <div className="mx-2 lg:max-w-7xl lg:mx-auto my-5 lg:my-10">
      <h1 className="text-xl lg:text-2xl text-center mb-5 lg:mb-10">
        JavaScript - Interview Questions and Answers
      </h1>
      <QnA />
    </div>
  );
};

export default page;
