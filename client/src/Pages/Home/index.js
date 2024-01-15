import React, { useEffect, useState } from "react";
import ProgramForm from "../../Components/ProgramForm";
import ProgramList from "./ProgramList";
import ProgramSearch from "./ProgramSearch";

const Home = () => {

  const [searchKey, setSearchKey] = useState("");

  const [program , setProgram] = useState('');

  return (
    <div className="flex gap-20">
      <div className="w-1/4">
        <ProgramSearch searchKey={searchKey} setSearchKey={setSearchKey} />
        <ProgramList
          searchKey={searchKey}
          setProgram={setProgram}
        />
      </div>
      <div className="w-1/2">
      <ProgramForm />
      </div>
    </div>
  );
};

export default Home;
