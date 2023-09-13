/* eslint-disable react/prop-types */
import { FaChevronDown } from "react-icons/fa6";

const Career = ({ onClick, isActive }) => {
  return (
    <div className="bg-light-blue/40 rounded-md p-3">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl text-navy-blue py-6 font-bold">Experience</h1>
        <FaChevronDown
          className="text-navy-blue text-lg font-bold cursor-pointer"
          onClick={onClick}
        />
      </div>
      {isActive && (
        <form className="flex flex-col space-y-6">
          <div className="flex flex-col space-y-2">
            <h3 className="school text-navy-blue font-semibold text-lg">
              Company
            </h3>
            <input
              type="text"
              className="p-3 rounded-sm focus:outline-none focus:shadow focus:shadow-navy-blue/40
              transition-shadow duration-200"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <h3 className="title text-navy-blue font-semibold text-lg">
              Title
            </h3>
            <input
              type="text"
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
                className="p-3 rounded-sm focus:outline-none focus:shadow focus:shadow-navy-blue/40
              transition-shadow duration-200"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <h3 className="phone text-navy-blue font-semibold text-lg">To</h3>
              <input
                type="date"
                className="p-3 rounded-sm focus:outline-none focus:shadow focus:shadow-navy-blue/40
              transition-shadow duration-200"
              />
            </div>
          </div>

          <div className="flex flex-col space-y-2">
            <h3 className="title text-navy-blue font-semibold text-lg">
              Description
            </h3>
            <textarea
              type="text"
              className="p-3 rounded-sm focus:outline-none focus:shadow focus:shadow-navy-blue/40
              transition-shadow duration-200"
            ></textarea>
          </div>
          <button className="text-white py-2 px-3 text-center bg-navy-blue">
            SAVE
          </button>
        </form>
      )}
    </div>
  );
};

export default Career;
