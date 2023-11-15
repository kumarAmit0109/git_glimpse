import React from "react";

const Loading = () => {
  return (
    <div className=" h-96 flex justify-center items-center w-11/12 md:w-10/12 max-w-6xl mx-auto">
      <span className="border-4 p-5 rounded-full border-b-transparent border-teal-400 animate-spin"></span>
    </div>
  );
};

export default Loading;
