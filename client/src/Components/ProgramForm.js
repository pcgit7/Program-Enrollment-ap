import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UpdateProgram } from "../ApiCalls/user";
import { ShowLoader , HideLoader } from '../Redux/loaderSlice';
import toast from "react-hot-toast";

const ProgramForm = ({deleteProgram ,program}) => {

  const currentProgram = useSelector(state => state.userReducer.currentProgram);
  const [formData, setFormData] = useState(program || '') ;
  const dispatch = useDispatch();

  const updateProgram = async () => {
    try 
    {
      dispatch(ShowLoader());
      const response = await UpdateProgram(formData);
      dispatch(HideLoader());
      if(response.success){
        toast.success(response.message);
      }

      else{
        toast.error(response.message);
      }
    } catch (error) {
      console.log(error);
      dispatch(HideLoader());
      toast.error(error.message);
    }
  };

  useEffect( () => {
    setFormData(program);
  },[program]);
  
  const handleChange = (e) => {
    const { id, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };


  return (
    <div>
      <form className="w-[1000px] max-w-full mx-auto">
        {/* row 1 */}
        <h1 className="text-2xl font-bold mb-4">Confirm Program</h1>
        <div className="flex -mx-3 mb-6">
          
          <div className="w-full md:w-1/3 px-4 mb-6 md:mb-0">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="programPrice"
            >
              <span className="text-red-500">*</span>Price
            </label>
            <input
              className="appearance-none block w-[300px] bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 "
              id="programPrice"
              type="text"
              placeholder="Enter price"
              value={formData?.price || ''}
              onChange={handleChange}
            />

            { /*<select
              className="block w-[300px] bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="currency"
              value={formData?.currency}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select a currency
              </option>
              <option value="USD">USD</option>
              <option value="INR">INR</option>
              
            </select>
  */}
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 ml-20">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="programDomain"
            >
             <span className="text-red-500">*</span>Domain
            </label>
            <select
              className="block w-[300px] bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="domain"
              value={formData?.domain}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select a domain
              </option>
              <option value="Data">Data</option>
              <option value="Finance">Finance</option>
              <option value="Future Tech">Future Tech</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 flex mt-6 ml-20">
          <input
              type="checkbox"
              id="placementAssurance"
              checked={formData?.placementAssurance}
              onChange={(e) => {
                const { id, checked } = e.target;
                handleChange({ target: { id, value: checked } });
              }}
            />
            <label
              className="block text-gray-700 text-sm font-bold mt-2 ml-2"
              htmlFor="placementAssurance"
            >
            Placement Assurance
            </label>
            
          </div>
        </div>

        {/* row 2 */}
        <div className="mb-6">
          <h1 className="text-xl font-bold mb-4">Information</h1>

          <div className="flex -mx-3 mb-6">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="programName"
              >
                <span className="text-red-500">*</span>Program Name
              </label>
              <input
                className="appearance-none block w-[300px] bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="name"
                type="text"
                placeholder="Enter program name"
                value={formData?.name || ''}
                onChange={handleChange}
              />
            </div>

            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 ml-24">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="programType"
              >
                <span className="text-red-500">*</span>Program Type
              </label>
              <div className="flex">
                <label className="mr-4 flex">
                  <input
                    type="radio"
                    id="programType"
                    value="FT"
                    checked={formData?.programType === "FT"}
                    onChange={handleChange}
                  />
                  <span className="ml-2 mt-2">FT</span>
                </label>
                <label className="flex ml-8">
                  <input
                    type="radio"
                    id="programType"
                    value="PT"
                    checked={formData?.programType === "PT"}
                    onChange={handleChange}
                  />
                  <span className="ml-2 mt-2">PT</span>
                </label>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 ml-28">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="registrationStatus"
              >
                <span className="text-red-500">*</span>Registration Open
              </label>
              <div className="flex">
                <label className="mr-4 flex">
                  <input
                    type="radio"
                    id="registrations"
                    value="Yes"
                    checked={formData?.registrations === "Yes"}
                    onChange={handleChange}
                  />
                  <span className="ml-2 mt-2">Yes</span>
                </label>
                <label className="flex ml-8">
                  <input
                    type="radio"
                    id="registrations"
                    value="No"
                    checked={formData?.registrations === "No"}
                    onChange={handleChange}
                  />
                  <span className="ml-2 mt-2">No</span>
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
              <span className="text-red-500">*</span>University Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="universityName"
              type="text"
              placeholder="Enter university name"
              value={formData?.universityName || ''}
              onChange={handleChange}
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="certificateDiploma"
            >
              <span className="text-red-500">*</span>Certificate or Diploma
            </label>
            <select
              className="block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="certificateDiploma"
              value={formData?.certificateDiploma || ''}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select a domain
              </option>
              <option value="Certificate">Certificate</option>
              <option value="Diploma">Diploma</option>
              {/* Add more options as needed */}
            </select>
          </div>
        </div>

        {/* row 4 */}
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="duration"
            >
              <span className="text-red-500">*</span>Learning Duration
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="duration"
              type="text"
              placeholder="Enter duration of program"
              value={formData?.duration || ''}
              onChange={handleChange}
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="eligibility"
            >
              <span className="text-red-500">*</span>Eligibility Criteria
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="eligibilityCriteria"
              type="text"
              placeholder="Enter eligibility"
              value={formData?.eligibilityCriteria || ''}
              onChange={handleChange}
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="image"
            >
              <span className="text-red-500">*</span>ImageURL
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="imageUrl"
              type="text"
              placeholder="ImageURL"
              value={formData?.imageUrl || ''} 
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Description */}
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            <span className="text-red-500">*</span>Description
          </label>
          <textarea
            className="resize-none appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="description"
            placeholder="Enter program description"
            value={formData?.description || ''}
            onChange={handleChange}
          />
        </div>

        {/* submit button */}
        <div className="flex justify-between">

        <div className="bg-white hover:bg-blue-700 text-rose-700  py-2 px-4 rounded focus:outline-none focus:shadow-outline border-2 border-red-700">
          <i class="ri-delete-bin-line"></i>
          <button className="ml-1 font-bold" onClick = {deleteProgram}>Delete</button>
          </div>

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={updateProgram}
          >
            Save Program
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProgramForm;