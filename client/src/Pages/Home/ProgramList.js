import React from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from 'moment';
import { SetCurrentProgram } from "../../Redux/userSlice";

const ProgramList = ({searchKey,setProgram}) => {
  
  const {allPrograms , currentProgram} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  
  const getData = () => {
    if(searchKey==='')
    return allPrograms;

    return allPrograms.filter((program) => program.name.toLowerCase().includes(searchKey.toLowerCase()));
  };

  const getIsSelectedProgramOrNot = (program) => {
    if(program==='empty')
    return true;

    return currentProgram?.programId === program.programId;
  }
  return (
    <div className="flex flex-col gap-3 mt-5 lg:w-96 xl:w-96 md:w-60 sm:w-60">
      <div
            className={`shadow border p-5 rounded-2xl bg-white flex flex-col justify-between items-center cursor-pointer
            ${getIsSelectedProgramOrNot('empty') && "border-primary border-2"}`}
            onClick={() => dispatch(SetCurrentProgram(null))}
          >
            <div className="flex-grow">New Program</div>
            
          </div>

      {allPrograms && getData().map((program,index) => {
        return (
          <div
            key={index}
            className={`shadow border p-5 rounded-2xl bg-white flex flex-col justify-between items-center cursor-pointer
            ${getIsSelectedProgramOrNot(program) && "border-primary border-2"}`}
            onClick={() => dispatch(SetCurrentProgram(program))}
          >
            <div className="flex-grow">{program.name}</div>
            <div className="text-gray-500">{`Last Modified: ${moment(program.lastModified).format('MM/DD/YYYY')}`}</div>
          </div>
        );
      })}
    </div>
  );
};

export default ProgramList;
