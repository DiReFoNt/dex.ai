import React from "react";
import { NavBar } from "./index";

const Main = () => {
    return (
        <main className="bg-[#1F222C]  flex flex-col items-center">
            <NavBar />
            <h1 className="text-[#F2F2F2] text-[100px] font-semibold leading-[100px] h-[228px] mt-[245px] justify-center text-center">
                Email, done right.
                <br /> Lightning Fast Mail Client
            </h1>
            <h2 className="w-[516px] text-[#9EA4B2] font-normal text-[24px] justify-center text-center mt-[31px]">
                The best personal email client. Revolutionary email for teams.
            </h2>
            <div className="mt-[64px] font-semibold text-[16px]">
                <button className="w-[230px] h-[60px] rounded-[10px] border-[#3B38FF] border-2 mr-[30px] bg-[#3B38FF] text-white hover:bg-opacity-0 duration-300">
                    Request Demo
                </button>
                <button className="w-[230px] h-[60px] rounded-[10px] border-[#37335F] border-2 text-[#9EA4B2] hover:text-[#1F222C] hover:bg-white duration-500 transition-all ease-in-out">
                    Try hoverbox for free
                </button>
            </div>
            <div className="w-[100%] bg-[#1A1923] mt-[300px] flex flex-col justify-center items-center">
                <img
                    src="/img/main.jpg"
                    alt="mail"
                    className="w-[1170px] h-[741px] relative top-[-170px]"
                />
                <img src="/img/main-company.svg" alt="company" />
                <button className="mt-[60px] mb-[130px] w-[230px] h-[60px] rounded-[10px] border-[#37335F] border-2 text-[#9EA4B2] hover:text-[#1F222C] hover:bg-white duration-500 transition-all ease-in-out">
                    Our customers
                </button>
            </div>
        </main>
    );
};

export { Main };
