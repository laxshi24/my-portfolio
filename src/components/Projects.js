import React, { useState } from 'react';
import proj1 from '../assets/project1.jpg';
import logistic from '../assets/project_logistic.jpg';

const Projects = () => {
  const [isGymModalOpen, setGymModalOpen] = useState(false);
  const [isLogisticModalOpen, setLogisticModalOpen] = useState(false);

  const handleGymModalToggle = () => {
    setGymModalOpen(!isGymModalOpen);
  };

  const handleLogisticModalToggle = () => {
    setLogisticModalOpen(!isLogisticModalOpen);
  };

  return (
    <div className="max-w-[1200px] mx-auto p-5" id="work">
      <div className="pb-8">
        <p className="text-4xl mb-3 font-bold primary-color">Projects</p>
        <p className="text-gray-400">Check out some of my recent projects</p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Gym Frontend App */}
        <div>
          <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center h-[200px] bg-cover relative">
            <img src={proj1} alt="Gym Frontend" />
            <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
              <span className="text-2xl font-bold text-white tracking-wider">Project</span>
              <div className="pt-8 text-center">
                <button
                  onClick={handleGymModalToggle}
                  className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                >
                  Live
                </button>
              </div>
            </div>
          </div>
          <br />
          <a
            href="https://gymfrontendapp.vercel.app/"
            className="text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Gym Frontend App
          </a>
        </div>

        {/* Logistic Management System */}
        <div>
          <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center h-[200px] bg-cover relative">
            <img src={logistic} alt="Logistic Management System" />
            <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
              <span className="text-2xl font-bold text-white tracking-wider">Project</span>
              <div className="pt-8 text-center">
                <button
                  onClick={handleLogisticModalToggle}
                  className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                >
                  Live
                </button>
              </div>
            </div>
          </div>
          <br />
          <a
            href="https://logisticmanagementsystem.example.com/"
            className="text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Logistic Management System
          </a>
        </div>
      </div>

      {/* Gym Modal */}
      {isGymModalOpen && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-4 max-w-[800px] w-full">
            <button
              onClick={handleGymModalToggle}
              className="text-black font-bold text-lg float-right"
            >
              &times;
            </button>
            <video
              src="/gymfe.mp4"
              controls
              autoPlay
              className="w-full rounded-lg"
            ></video>
          </div>
        </div>
      )}

      {/* Logistic Modal */}
      {isLogisticModalOpen && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-4 max-w-[800px] w-full">
            <button
              onClick={handleLogisticModalToggle}
              className="text-black font-bold text-lg float-right"
            >
              &times;
            </button>
            <video
              src="/logistic.mp4"
              controls
              autoPlay
              className="w-full rounded-lg"
            ></video>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
