import React from "react";

const ProgramList = () => {
  const data = [
    { name: "Data-science", lastModified: "12-01-2024" },
    { name: "Machine-learning", lastModified: "15-01-2024" },
    { name: "Artificial-intelligence", lastModified: "18-01-2024" },
    { name: "Big-data", lastModified: "20-01-2024" },
    { name: "Data-visualization", lastModified: "22-01-2024" },
  ];

  return (
    <div className="flex flex-col gap-3 mt-5 lg:w-96 xl:w-96 md:w-60 sm:w-60">
      {data.map((program,index) => {
        return (
          <div
            key={index}
            className="flex flex-col shadow-sm border p-2 rounded-xl bg-white justify-between items-center cursor-pointer w-full"
          >
            <div className="flex-grow">{program.name}</div>
            <div className="text-gray-500">{`Last Modified: ${program.lastModified}`}</div>
          </div>
        );
      })}
    </div>
  );
};

export default ProgramList;
