/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

const Education = ({ onClick, isActive }) => {

  const [school, setSchool] = useState("");
  const [degree, setDegree] = useState("");
  const [startDate, setStartDate] = useState("");
  const [finishDate, setFinishDate] = useState("");


  const handleFormSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem(
      "usersEducation",
      JSON.stringify({ school, degree, startDate, finishDate })
    );

    JSON.parse(localStorage.getItem("userDetails"));
  };

  return (
    <div className="bg-light-blue/40 rounded-md p-3">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl text-navy-blue py-6 font-bold">Education</h1>
        <FaChevronDown
          className="text-navy-blue text-lg font-bold cursor-pointer"
          onClick={onClick}
        />
      </div>
      {isActive && (
        <form onSubmit={handleFormSubmit} className="flex flex-col space-y-6">
          <div className="flex flex-col space-y-2">
            <h3 className="school text-navy-blue font-semibold text-lg">
              School
            </h3>
            <input
              type="text"
              value={school}
              onChange={(e) => setSchool(e.target.value)}
              className="p-3 rounded-sm focus:outline-none focus:shadow focus:shadow-navy-blue/40
              transition-shadow duration-200"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <h3 className="email text-navy-blue font-semibold text-lg">
              Degree
            </h3>
            <input
              type="text"
              value={degree}
              onChange={(e) => setDegree(e.target.value)}
              className="p-3 rounded-sm focus:outline-none focus:shadow focus:shadow-navy-blue/40
              transition-shadow duration-200"
            />
          </div>

          <div className="study-dates flex space-x-3">
            <div className="flex flex-col space-y-2">
              <h3 className="phone text-navy-blue font-semibold text-lg">
                From
              </h3>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="p-3 rounded-sm focus:outline-none focus:shadow focus:shadow-navy-blue/40
              transition-shadow duration-200"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <h3 className="phone text-navy-blue font-semibold text-lg">To</h3>
              <input
                type="date"
                value={finishDate}
                onChange={(e) => setFinishDate(e.target.value)}
                className="p-3 rounded-sm focus:outline-none focus:shadow focus:shadow-navy-blue/40
                  transition-shadow duration-200"
              />
            </div>
          </div>
          <button className="text-white py-2 px-3 text-center bg-navy-blue">
            SAVE
          </button>
        </form>
      )}
    </div>
  );
};

export default Education;
