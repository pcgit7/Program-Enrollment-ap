import React, { useState } from "react";
import ProgramForm from "../../Components/ProgramForm";
import ProgramList from "./ProgramList";
import ProgramSearch from "./ProgramSearch";

const Home = () => {
  const testData = {
    programName: "React Masterclass",
    programPrice: "199.99",
    programDomain: "Web Development",
    programType: "certificate",
    registrationStatus: "open",
    universityName: "Tech University",
    certification: "Full Stack Developer",
    duration: "12 weeks",
    eligibility: "Bachelor's degree in Computer Science",
    image: "https://example.com/react-masterclass-image.jpg",
    // Add more fields as needed
  };

  const [searchKey, setSearchKey] = useState("");

  return (
    <div className="flex gap-20">
      <div className="w-96">
        <ProgramSearch searchKey={searchKey} setSearchKey={setSearchKey} />
        <ProgramList
          searchKey={searchKey}
        />
      </div>
      <div>
      <ProgramForm data={testData} />
      </div>
    </div>
  );
};

export default Home;
