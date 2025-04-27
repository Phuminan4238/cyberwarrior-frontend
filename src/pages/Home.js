import React, { useState, useEffect } from "react";
import backgroundImg from "../assets/background.png"; // Background image
import "../index.css";
import cpeLogo from "../assets/cpe-logo.png";
import kmuttLogo from "../assets/kmutt-logo.png";
import policeLogo from "../assets/police-logo.png";

const Home = () => {
  // Countdown Logic
  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-05-12T00:00:00"); // Target date
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="w-full min-h-screen bg-cover bg-initial bg-no-repeat bg-fixed"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      {/* New Section Start */}
      <section className="text-white">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-[6rem] lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <div className="grid  gap-8">
              {/* Left Column */}
              <div>
                <h1 className="max-w-2xl mb-4 text-4xl font-normal uppercase tracking-tight leading-none md:text-5xl xl:text-8xl dark:text-white">
                  Cyber
                </h1>
                <h1 className="max-w-2xl mb-4 text-4xl font-normal uppercase tracking-tight leading-none md:text-5xl xl:text-8xl dark:text-white">
                  Warrior
                </h1>
                <h1 className="max-w-2xl mb-4 text-4xl font-normal uppercase tracking-tight leading-none  md:text-5xl xl:text-7xl dark:text-white">
                  Hackathon
                </h1>
                <h1 className="max-w-2xl mb-0 text-4xl text-right font-normal uppercase tracking-tight leading-none md:text-5xl xl:text-8xl dark:text-white">
                  2025
                </h1>
              </div>
            </div>
          </div>

          <div className="lg:mt-0 lg:col-span-5 lg:flex">
            <div className="lg:mt-0 lg:col-span-5 lg:flex">
              {/* Right Column */}
              <div className="flex flex-col items-center justify-end ">
                {/* Countdown Section */}
                <div className="flex items-center space-x-4 text-center ">
                  {/* Days */}
                  <div className="flex flex-col items-center">
                    <div className="flex space-x-1 gap-3">
                      {String(timeLeft.days || "00")
                        .padStart(2, "0")
                        .split("")
                        .map((digit, index) => (
                          <div
                            key={`day-${index}`}
                            className="text-8xl font-normal text-white border border-white rounded-lg p-[0.6rem] py-0"
                          >
                            {digit}
                          </div>
                        ))}
                    </div>
                    <div className="mt-2 text-2xl font-medium uppercase text-white pt-3">
                      Day
                    </div>
                  </div>

                  {/* Colon */}
                  <div className="text-8xl font-normal text-white flex flex-col items-center pb-10">
                    <div>:</div>
                    <div className="h-6" />
                  </div>

                  {/* Hours */}
                  <div className="flex flex-col items-center">
                    <div className="flex space-x-1 gap-3">
                      {String(timeLeft.hours || "00")
                        .padStart(2, "0")
                        .split("")
                        .map((digit, index) => (
                          <div
                            key={`hour-${index}`}
                            className="text-8xl font-normal text-white border border-white rounded-lg p-[0.6rem] py-0"
                          >
                            {digit}
                          </div>
                        ))}
                    </div>
                    <div className="mt-2 text-2xl font-medium uppercase text-white pt-3">
                      Hour
                    </div>
                  </div>

                  {/* Colon */}
                  <div className="text-8xl font-normal text-white flex flex-col items-center pb-10">
                    <div>:</div>
                    <div className="h-6" />
                  </div>

                  {/* Minutes */}
                  <div className="flex flex-col items-center">
                    <div className="flex space-x-1 gap-3">
                      {String(timeLeft.minutes || "00")
                        .padStart(2, "0")
                        .split("")
                        .map((digit, index) => (
                          <div
                            key={`minute-${index}`}
                            className="text-8xl font-normal text-white border border-white rounded-lg p-[0.6rem] py-0"
                          >
                            {digit}
                          </div>
                        ))}
                    </div>
                    <div className="mt-2 text-2xl font-medium uppercase text-white pt-3">
                      Minute
                    </div>
                  </div>
                </div>

                {/* Submission Text */}
                <div className="mt-10 mb-3 text-center  text-white uppercase font-thai pt-4 px-14 py-4 border-l-2 border-r-2 border-white rounded-[26px]">
                  <span className="text-[1.4rem] font-normal">
                    <p>สมัครเข้าแข่งขันพร้อมกัน</p>
                  </span>
                  <p className="text-2xl font-bold pt-2">12 พฤษภาคม 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* New Section End */}

      <section className="">
        <div className=" mx-auto max-w-screen-sm px-4">
          <h2 className="font-thai mb-4 text-2xl font-extrabold tracking-tight leading-tight text-center text-white md:text-2xl">
            โดย
          </h2>

          <div class="bg-white rounded-3xl grid grid-cols-2 gap-8 text-gray-500  md:grid-cols-3  dark:text-gray-400">
            <a
              href="#"
              className="inline-flex items-center  px-8 py-3 gap-4 flex-shrink-0 justify-center hover:text-gray-900 dark:hover:text-white"
            >
              <img src={policeLogo} alt="Police Logo" />
            </a>
            <a
              href="#"
              className="inline-flex items-center px-8 py-3 gap-4 flex-shrink-0 justify-center hover:text-gray-900 dark:hover:text-white"
            >
              <img src={kmuttLogo} alt="KMUTT Logo" />
            </a>
            <a
              href="#"
              className="inline-flex items-center px-8 py-3 gap-4 flex-shrink-0 justify-center hover:text-gray-900 dark:hover:text-white"
            >
              <img src={cpeLogo} alt="CPE Logo" />
            </a>
          </div>
        </div>
      </section>

      <section className="h-20 py-20"></section>
    </div>
  );
};

export default Home;
