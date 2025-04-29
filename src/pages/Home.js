import React, { useState, useEffect } from "react";
import backgroundImg from "../assets/background.png"; // Background image
import "../index.css";
import cpeLogo from "../assets/cpe-logo.png";
import kmuttLogo from "../assets/kmutt-logo.png";
import kmuttLogo2 from "../assets/kmutt-logo-02.png";
import policeLogo from "../assets/police-logo.png";
import policeLogo2 from "../assets/police-logo-02.png";
import sponsorlogo from "../assets/sponsor-logo.png";

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
        seconds: Math.floor((difference / 1000) % 60), // Seconds Calculation
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
          <div className="mr-auto place-self-center lg:col-span-6">
            <div className="grid gap-8">
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

          <div className="lg:mt-0 lg:col-span-6 lg:flex">
            <div className="lg:mt-0 lg:col-span-6 lg:flex">
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
                            className="text-7xl font-normal text-white border border-white rounded-lg p-[0.6rem] py-0 w-16" // Fixed width
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
                            className="text-7xl font-normal text-white border border-white rounded-lg p-[0.6rem] py-0 w-16" // Fixed width
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
                            className="text-7xl font-normal text-white border border-white rounded-lg p-[0.6rem] py-0 w-16" // Fixed width
                          >
                            {digit}
                          </div>
                        ))}
                    </div>
                    <div className="mt-2 text-2xl font-medium uppercase text-white pt-3">
                      Minute
                    </div>
                  </div>

                  {/* <div className="text-8xl font-normal text-white flex flex-col items-center pb-10">
                    <div>:</div>
                    <div className="h-6" />
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="flex space-x-1 gap-3">
                      {String(timeLeft.seconds || "00")
                        .padStart(2, "0")
                        .split("")
                        .map((digit, index) => (
                          <div
                            key={`second-${index}`}
                            className="text-7xl font-normal text-white border border-white rounded-lg p-[0.6rem] py-0 w-16" // Fixed width
                          >
                            {digit}
                          </div>
                        ))}
                    </div>
                    <div className="mt-2 text-2xl font-medium uppercase text-white pt-3">
                      Second
                    </div>
                  </div> */}
                </div>

                {/* Submission Text */}
                <div className="mt-10 mb-3 text-center text-white uppercase font-thai pt-4 px-14 py-4 border-l-2 border-r-2 border-white rounded-[26px]">
                  <span className="text-[1.4rem] font-normal">
                    <p>สมัครเข้าแข่งขันพร้อมกัน</p>
                  </span>
                  <p className="text-[1.6rem] font-bold pt-2">
                    12 พฤษภาคม 2025
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* New Section End */}
      <section className="">
        <div className="mx-auto max-w-screen-sm px-4">
          <h2 className="font-thai mb-4 text-2xl font-extrabold tracking-tight leading-tight text-center text-white md:text-3xl">
            โดย
          </h2>

          <div className="bg-white rounded-3xl grid grid-cols-2 gap-8 text-gray-500 md:grid-cols-5 dark:text-gray-400 p-6">
            <button className="inline-flex items-center justify-center w-full h-34 hover:text-gray-900 dark:hover:text-white">
              <img
                src={policeLogo2}
                alt="Police Logo2"
                className="h-24 object-contain"
              />
            </button>
            <button className="inline-flex items-center justify-center w-full h-24 hover:text-gray-900 dark:hover:text-white">
              <img
                src={policeLogo}
                alt="Police Logo"
                className="h-24 object-contain"
              />
            </button>
            <button className="inline-flex items-center justify-center w-full h-24 hover:text-gray-900 dark:hover:text-white">
              <img
                src={kmuttLogo}
                alt="KMUTT Logo"
                className="h-24 object-contain"
              />
            </button>
            <button className="inline-flex items-center justify-center w-full h-24 hover:text-gray-900 dark:hover:text-white">
              <img
                src={cpeLogo}
                alt="CPE Logo"
                className="h-24 object-contain"
              />
            </button>
            <button className="inline-flex items-center justify-center w-full h-24 hover:text-gray-900 dark:hover:text-white">
              <img
                src={kmuttLogo2}
                alt="KMUTT Logo2"
                className="h-24 object-contain"
              />
            </button>
          </div>
        </div>
      </section>

      <section className="pt-10">
        <div className="mx-auto max-w-screen-sm px-4">
          <h2 className="font-thai  mb-4 text-2xl font-bold tracking-tight leading-tight text-center text-white md:text-3xl">
            ผู้สนับสนุน
          </h2>

          <div className="bg-white rounded-3xl grid gap-8 text-gray-500 md:grid-cols-1 dark:text-gray-400 p-6">
            <button className="inline-flex items-center justify-center w-full h-24 hover:text-gray-900 dark:hover:text-white">
              <img
                src={sponsorlogo}
                alt="Sponsor Logo"
                className="h-24 object-contain"
              />
            </button>
          </div>
        </div>
      </section>

      {/* New Section Start */}
      <section className="text-white">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-[6rem] lg:grid-cols-12">
          {/* ด้านบน (ข้อมูลการแข่งขัน / เกี่ยวกับการแข่งขัน) */}
          <div className="lg:col-span-12">
            <h4 className="max-w-2xl text-2xl mb-4 font-thai text-start font-bold uppercase tracking-tight leading-none md:text-3xl xl:text-3xl">
              ข้อมูลการแข่งขัน
            </h4>
            <h4 className="max-w-2xl text-2xl font-thai text-start font-bold uppercase tracking-tight leading-none md:text-2xl xl:text-xl">
              เกี่ยวกับการแข่งขัน
            </h4>
          </div>
        </div>
      </section>

      {/* New Section Start */}
      <section className="text-white">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-[6rem] lg:grid-cols-12">
          {/* ด้านบน (ข้อมูลการแข่งขัน / เกี่ยวกับการแข่งขัน) */}
          <div className="lg:col-span-12">
            <h4 className="max-w-2xl text-2xl font-thai text-start font-bold uppercase tracking-tight leading-none md:text-2xl xl:text-xl">
              กำหนดการ
            </h4>
          </div>

          {/* ด้านล่าง (รับสมัคร + วันที่) */}
          <div className="grid grid-cols-8 gap-4 lg:col-span-12 mt-8 mb-4">
            <div className="col-span-4 flex items-center gap-2 font-thai">
              <i className="fas fa-star text-yellow-400"></i>
              <span className="text-lg font-normal">รับสมัคร</span>
            </div>

            <div className="col-span-4 flex items-center justify-start font-thai">
              <span className="text-lg font-normal">12-31 พฤษภาคม 2025</span>
            </div>
          </div>

          {/* Repeat the same layout for the next section */}
          <div className="grid grid-cols-8 gap-4 lg:col-span-12 mb-4">
            <div className="col-span-4 flex items-center gap-2 font-thai">
              <i className="fas fa-star text-yellow-400"></i>
              <span className="text-lg font-normal">
                ประกาศรายชื่อผู้มีสิทธิ์เข้าแข่งขัน
              </span>
            </div>

            <div className="col-span-4 flex items-center justify-start font-thai">
              <span className="text-lg font-normal">1 มิถุนายน 2025</span>
            </div>
          </div>
        </div>
      </section>
      {/* New Section End */}

      {/* New Section Start */}
      <section className="text-white">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 ">
          {/* ด้านบน (ข้อมูลการแข่งขัน / เกี่ยวกับการแข่งขัน) */}
          <div className="lg:col-span-12">
            <h4 className="max-w-2xl text-2xl font-thai text-start font-bold uppercase tracking-tight leading-none md:text-2xl xl:text-xl">
              ไทม์ไลน์การแข่งขัน
            </h4>
          </div>
        </div>
      </section>

      {/* New Section Start */}
      <section className="text-white">
        <div className="grid grid-cols-7 gap-4 max-w-screen-xl px-4 mx-auto lg:gap-4 xl:gap-4 ">
          {/* Each Column */}
          {[...Array(7)].map((_, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center font-thai gap-2 p-2 h-[122px] rounded-2xl border border-white bg-gradient-to-b from-[#2F65AF66] to-[#0032D266]"
            >
              <i className="fas fa-star text-yellow-400"></i>
              <span className="text-lg font-normal  text-center">รับสมัคร</span>
              <span className="text-sm font-normal text-start">
                12-31 พฤษภาคม
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="text-white">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-[6rem] lg:grid-cols-12">
          {/* ด้านบน (ข้อมูลการแข่งขัน / เกี่ยวกับการแข่งขัน) */}
          <div className="lg:col-span-12">
            <h4 className="max-w-2xl text-2xl font-thai text-start font-bold uppercase tracking-tight leading-none md:text-2xl xl:text-xl">
              คุณสมบัติผู้เข้าแข่งขัน
            </h4>
          </div>

          {/* ด้านล่าง (รับสมัคร + วันที่) */}
          <div className="grid grid-cols-8 gap-4 lg:col-span-12 mt-8 mb-4">
            <div className="col-span-12 flex items-center gap-2 font-thai">
              <i className="fas fa-star text-yellow-400"></i>
              <span className="text-lg font-normal">สัญชาติไทย</span>
            </div>
            <div className="col-span-12 flex items-center gap-2 font-thai">
              <i className="fas fa-star text-yellow-400"></i>
              <span className="text-lg font-normal">
                อายุ 15 ปีบริบูรณ์ขึ้นไป
              </span>
            </div>
            <div className="col-span-12 flex items-center gap-2 font-thai">
              <i className="fas fa-star text-yellow-400"></i>
              <span className="text-lg font-normal">
                นักศึกษาที่กำลังศึกษาในระดับอุดมศึกษา และพำนักอยู่ในประเทศไทย
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="text-white">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0  lg:grid-cols-12">
          {/* ด้านบน (ข้อมูลการแข่งขัน / เกี่ยวกับการแข่งขัน) */}
          <div className="lg:col-span-12">
            <h4 className="max-w-2xl text-2xl font-thai text-start font-bold uppercase tracking-tight leading-none md:text-2xl xl:text-xl">
              รางวัลทั้งหมด
            </h4>
          </div>

          {/* ด้านล่าง (รับสมัคร + วันที่) */}
          <div className="grid grid-cols-8 gap-4 lg:col-span-12 mt-8 mb-4">
            <div className="col-span-4 flex items-center gap-2 font-thai">
              <i className="fas fa-star text-yellow-400"></i>
              <span className="text-lg font-normal">รางวัลชนะเลิศอันดับ 1</span>
            </div>

            <div className="col-span-4 flex items-center justify-start font-thai">
              <span className="text-lg font-normal">
                100,000 บาท จำนวน 1 รางวัล พร้อมโล่เกียรติยศ
              </span>
            </div>
          </div>

          {/* ด้านล่าง (รับสมัคร + วันที่) */}
          <div className="grid grid-cols-8 gap-4 lg:col-span-12 mt-8 mb-4">
            <div className="col-span-4 flex items-center gap-2 font-thai">
              <i className="fas fa-star text-yellow-400"></i>
              <span className="text-lg font-normal">รางวัลชนะเลิศอันดับ 2</span>
            </div>

            <div className="col-span-4 flex items-center justify-start font-thai">
              <span className="text-lg font-normal">
                50,000 บาท จำนวน 1 รางวัล พร้อมโล่เกียรติยศ
              </span>
            </div>
          </div>

          {/* ด้านล่าง (รับสมัคร + วันที่) */}
          <div className="grid grid-cols-8 gap-4 lg:col-span-12 mt-8 mb-4">
            <div className="col-span-4 flex items-center gap-2 font-thai">
              <i className="fas fa-star text-yellow-400"></i>
              <span className="text-lg font-normal">รางวัลชนะเลิศอันดับ 3</span>
            </div>

            <div className="col-span-4 flex items-center justify-start font-thai">
              <span className="text-lg font-normal">
                30,000 บาท จำนวน 1 รางวัล พร้อมโล่เกียรติยศ
              </span>
            </div>
          </div>

          <div className="grid grid-cols-8 gap-4 lg:col-span-12 mt-8 mb-4">
            <div className="col-span-4 flex items-center gap-2 font-thai">
              <i className="fas fa-star text-yellow-400"></i>
              <span className="text-lg font-normal">
                ** พร้อมโล่ประกาศเกียรติคุณจากสำนักงานตำรวจแห่งชาติ
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="h-20 py-20"></section>
    </div>
  );
};

export default Home;
