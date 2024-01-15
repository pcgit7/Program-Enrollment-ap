import React from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from 'moment';
import { SetCurrentProgram } from "../../Redux/userSlice";

const ProgramList = ({searchKey,setProgram}) => {
  
  const {allPrograms} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  const getData = () => {
    if(searchKey==='')
    return allPrograms;

    return allPrograms.filter((program) => program.name.toLowerCase().includes(searchKey.toLowerCase()));
  };

  return (
    <div className="flex flex-col gap-3 mt-5 lg:w-96 xl:w-96 md:w-60 sm:w-60">
      {allPrograms && getData().map((program,index) => {
        return (
          <div
            key={index}
            className="flex flex-col shadow-sm border p-2 rounded-xl bg-white justify-between items-center cursor-pointer w-full"
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
