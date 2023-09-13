/* eslint-disable react/prop-types */
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa6'

function GeneralInfo( { onClick, isActive }) {

  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');



  const handleFormSubmit = (e) => {
    e.preventDefault()
    console.log("Person Details: ", email, fullName, phone)
    localStorage.setItem('userDetails',  JSON.stringify({fullName, email, phone}))
  }

  return (
    <div className="bg-light-blue/40 white rounded-md p-3">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl text-navy-blue py-6 font-bold">
          Personal Details
        </h1>
        <FaChevronDown
          className="text-navy-blue text-lg font-bold cursor-pointer"
          onClick={onClick}
        />
      </div>
      {isActive && (
        <form onSubmit={handleFormSubmit} className="flex flex-col space-y-6">
          <div className="flex flex-col space-y-2">
            <h3 className="fullname text-navy-blue font-semibold text-lg">
              Full Name
            </h3>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="p-3 rounded-sm focus:outline-none focus:shadow focus:shadow-navy-blue/40
              transition-shadow duration-200"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <h3 className="email text-navy-blue font-semibold text-lg">
              Email
            </h3>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 rounded-sm focus:outline-none focus:shadow focus:shadow-navy-blue/40
              transition-shadow duration-200"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <h3 className="phone text-navy-blue font-semibold text-lg">
              Phone
            </h3>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="p-3 rounded-sm focus:outline-none focus:shadow focus:shadow-navy-blue/40
              transition-shadow duration-200"
            />
          </div>

          <button className="text-white py-2 px-3 text-center bg-navy-blue">
            SAVE
          </button>
        </form>
      )}
    </div>
  );
}

export default GeneralInfo