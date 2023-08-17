import React from "react";
import { NavBar } from "./index";
import { ButtonBlue, ButtonGrey } from "../UI/index";

const Main = () : React.ReactElement => {
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
                <ButtonBlue text="Request Demo" width="230px" heigth="60px" />
                <ButtonGrey text="Try hoverbox for free" />
            </div>
            <div className="w-[100%] bg-[#1A1923] mt-[300px] flex flex-col justify-center items-center">
                <div>
                    <img
                        src="/img/main.jpg"
                        alt="mail"
                        className="w-[1170px] h-[741px] relative top-[-170px] hover:scale-105 duration-300"
                    />
                    <img
                        src="/img/main-company.svg"
                        alt="company"
                        className="hover:scale-105 duration-300"
                    />
                </div>
                <ButtonGrey
                    text="Our customers"
                    styles="mt-[60px] mb-[130px]"
                />
            </div>
        </main>
    );
};

export { Main };
