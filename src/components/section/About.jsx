import React from "react";

export default function About() {
  return (
    <div className="bg-[#121212] text-white py-20">
      <div className="max-w-screen-xl mx-auto bg-[#1E1E1F] border border-[#383838] rounded-lg">
        <h1 className="mt-5 ml-16 text-3xl font-semibold inline-block">
          About Me
        </h1>
        <div className="flex flex-wrap md:flex-nowrap justify-center items-center py-10 mx-10 gap-10">
          <div className="w-full md:w-1/3 flex justify-center">
            <img src="./images/image (15).png" alt="" className="w-64 object-cover "/>
          </div>
          <div className="w-full md:w-1/2">
            <div className="capitalize text-base p-5 rounded-xl">
              <p>
                Hi! Introducing, I am Fajar Rizki Aprilian, a student from Batam
                who dreams of becoming a UI/UX Designer. I have high enthusiasm
                in the world of design, especially in creating attractive and
                functional user interfaces.
              </p>
              <br />
              <p>
                Although I am still a student and have no professional
                experience, I have explored various design concepts through my
                education. I enjoy learning and continuously developing my
                design skills to understand strong principles.
              </p>
              <br />
              <p>
                I believe that every project is an opportunity to learn and
                improve. I seek opportunities to collaborate with individuals or
                groups who can guide me in the development of my design skills.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
