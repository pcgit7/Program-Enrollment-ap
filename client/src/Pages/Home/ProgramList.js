import React from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from 'moment';
import { SetCurrentProgram } from "../../Redux/userSlice";

const ProgramList = ({searchKey,setProgram , program}) => {
  
  const {allPrograms , currentProgram} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  
  const getData = () => {
    if(searchKey==='')
    return allPrograms;

    return allPrograms.filter((program) => program.name.toLowerCase().includes(searchKey.toLowerCase()));
  };

  const getIsSelectedProgramOrNot = (data) => {
    if(program==='empty')
    return true;

    return program?.programId === data.programId;
  }
  return (
    <div className="flex flex-col gap-3 mt-5 lg:w-96 xl:w-96 md:w-60 sm:w-60 h-[80vh] overflow-y-scroll">
      <div
            className={`shadow border p-5 rounded-2xl bg-white flex flex-col justify-between items-center cursor-pointer
            ${getIsSelectedProgramOrNot('empty') && "border-primary border-2"}`}
            onClick={() => setProgram(null)}
          >
            <div className="flex-grow">New Program</div>
            
          </div>
          
      {allPrograms && getData().map((program,index) => {
        return (
          <div
            key={index}
            className={`shadow border p-5 rounded-2xl bg-white flex flex-col justify-between items-center cursor-pointer
            ${getIsSelectedProgramOrNot(program) && "bg-indigo-200"}`}
            onClick={() => setProgram(program)}
          >
            <div className="flex gap-5 items-center">
              {program?.imageUr && (
                <img
                  src={program.imageUrl}
                  alt="profile pic"
                  className="w-10 h-10 rounded-full"
                />
              )}
              {!program?.imageUr && (
                <div>
                  <h1 className="uppercase font-semibold text-2xl w-10 h-10 rounded-full bg-violet-300 text-center">
                    {program?.name[0]}
                  </h1>
                </div>
              )}
              <div className="flex flex-col gap-1">
            <div className="flex-grow">{program.name}</div>
            <div className="text-gray-500">{`Last Modified: ${moment(program.lastModified).format('MM/DD/YYYY')}`}</div>
          </div>
          </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProgramList;
