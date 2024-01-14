import React, { useState } from "react";

const ProgramForm = ({ data }) => {
  const [formData, setFormData] = useState(data);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div>
      <form className="w-full max-w-lg mx-auto mt-8">
        {/* row 1 */}
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="programName"
            >
              Program Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="programName"
              type="text"
              placeholder="Enter program name"
              value={formData.programName}
              onChange={handleChange}
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="programPrice"
            >
              Price
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="programPrice"
              type="text"
              placeholder="Enter price"
              value={formData.programPrice}
              onChange={handleChange}
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="programDomain"
            >
              Domain
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="programDomain"
              type="text"
              placeholder="Enter domain"
              value={formData.programDomain}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* row 2 */}
        <div className="mb-6">
          <p className="text-lg font-semibold mb-4">Information</p>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="programType"
              >
                Program Type
              </label>
              <div className="flex">
                <label className="mr-4">
                  <input
                    type="radio"
                    id="programType"
                    value="certificate"
                    checked={formData.programType === "certificate"}
                    onChange={handleChange}
                  />
                  <span className="ml-2">Certificate</span>
                </label>
                <label>
                  <input
                    type="radio"
                    id="programType"
                    value="diploma"
                    checked={formData.programType === "diploma"}
                    onChange={handleChange}
                  />
                  <span className="ml-2">Diploma</span>
                </label>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="registrationStatus"
              >
                Registration Status
              </label>
              <div className="flex">
                <label className="mr-4">
                  <input
                    type="radio"
                    id="registrationStatus"
                    value="open"
                    checked={formData.registrationStatus === "open"}
                    onChange={handleChange}
                  />
                  <span className="ml-2">Open</span>
                </label>
                <label>
                  <input
                    type="radio"
                    id="registrationStatus"
                    value="closed"
                    checked={formData.registrationStatus === "closed"}
                    onChange={handleChange}
                  />
                  <span className="ml-2">Closed</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* row 3 */}
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="universityName"
            >
              University Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="universityName"
              type="text"
              placeholder="Enter university name"
              value={formData.universityName}
              onChange={handleChange}
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="certification"
            >
              Certification
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="certification"
              type="text"
              placeholder="Enter certification details"
              value={formData.certification}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* row 4 */}
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="duration"
            >
              Learning Duration
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="duration"
              type="text"
              placeholder="Enter duration of program"
              value={formData.duration}
              onChange={handleChange}
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="eligibility"
            >
              Eligibility Criteria
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="eligibility"
              type="text"
              placeholder="Enter eligibility"
              value={formData.eligibility}
              onChange={handleChange}
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="image"
            >
              ImageURL
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="image"
              type="text"
              placeholder="ImageURL"
              value={formData.image}
              onChange={handleChange}
            />
          </div>
        </div>

        
        {/* Description */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            className="resize-none appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="description"
            placeholder="Enter program description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        {/* submit button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={submitHandler}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProgramForm;
