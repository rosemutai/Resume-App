/* eslint-disable react-hooks/exhaustive-deps */
// import { useState } from 'react'
import { useEffect, useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai'
import { FaPhone } from 'react-icons/fa6'
import './App.css'
import Career from './components/Career';
import Education from './components/Education';
import GeneralInfo from './components/GeneralInfo';

function App() {

  const [activeIndex, setActiveIndex] = useState(0)
  const [personalData, setPersonalData] = useState({});
  const [educationData, setEducationData] = useState({});



  useEffect(() => {
    if (
      JSON.parse(localStorage.getItem("userDetails")) !== null &&
      JSON.parse(localStorage.getItem("usersEducation")) !== null
    ) {
      const storedPersonalData = JSON.parse(
        localStorage.getItem("userDetails")
      );
      const storedEducationalData = JSON.parse(
        localStorage.getItem("usersEducation")
      );

      setPersonalData(storedPersonalData);
      setEducationData(storedEducationalData);

    } else {
      setPersonalData({});
      setEducationData({})
    }
  }, [])

  return (
    <main className="main-page flex w-full min-h-screen bg-greyish">
      <div className="left-section bg-greyish w-[30%] px-8 py-4 flex flex-col space-y-6">
        <GeneralInfo
          isActive={activeIndex === 0}
          onClick={() => setActiveIndex(0)}
          personalInfo={personalData}
        />
        <Education
          isActive={activeIndex === 1}
          onClick={() => setActiveIndex(1)}
          educationData={educationData}
        />
        <Career
          isActive={activeIndex === 2}
          onClick={() => setActiveIndex(2)}
        />
      </div>
      <div className="right-section w-[70%] px-12">
        <h1 className="text-3xl font-bold py-4 text-navy-blue traking-wider">
          {personalData.fullName}
        </h1>
        <div className="w-full flex space-x-8 items-center bg-navy-blue text-white h-16 p-4">
          <div className="flex space-x-1 items-center">
            <AiOutlineMail className="text-lg text-white" />
            <p className="text-lg">{personalData.email}</p>
          </div>

          <div className="flex space-x-1 items-center">
            <FaPhone className="text-xl pt-1 text-white" />
            <p className="text-lg">{personalData.phone}</p>
          </div>
        </div>

        <div className="education mt-9">
          <h1 className="text-2xl font-bold text-navy-blue traking-wider">
            Education
          </h1>
          <div className="dates flex space-x-4 items-center">
            <p className="text-lg">
              {educationData.startDate} - {educationData.finishDate} -
            </p>
            <h4 className="text-xl font-bold py-4 traking-wider">
              {educationData.school}
            </h4>
          </div>
          <p className="text-lg font-semibold"> {educationData.degree}</p>
        </div>

        <div className="education mt-9">
          <h1 className="text-2xl font-bold text-navy-blue traking-wider">
            Experience
          </h1>
          <div className="dates flex space-x-4 items-center">
            <p className="text-lg">08/01/2019 - 08/08/2020 -</p>
            <h4 className="text-xl font-bold py-4 traking-wider">Apps Lab</h4>
          </div>
          <p className="text-lg font-semibold"> UI/UX Designer</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
            dolorem, repellat voluptatum natus voluptatibus quos quod
            consequatur? Accusantium debitis soluta inventore ea aliquam.
            Pariatur officiis facilis eum voluptate expedita cumque rerum ex
            consequatur tenetur maiores? Voluptates similique eaque labore nam?
          </p>
        </div>
      </div>
    </main>
  );
}

export default App
