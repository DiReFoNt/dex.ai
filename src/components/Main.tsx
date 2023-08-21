import React from "react";
import { NavBar } from "./index";
import { ButtonBlue, ButtonGrey } from "../UI/index";
import "aos/dist/aos.css";

const Main: React.FC = () => {
    return (
        <main className="bg-[#1F222C]  flex flex-col items-center">
            <NavBar />
            <h1
                className="text-[#F2F2F2] text-[100px] font-semibold leading-[100px] h-[228px] mt-[245px] justify-center text-center"
                data-aos="fade-down"
                data-aos-delay="150"
                data-aos-duration="3000"
            >
                Email, done right.
                <br /> Lightning Fast Mail Client
            </h1>
            <h2
                className="w-[516px] text-[#9EA4B2] font-normal text-[24px] justify-center text-center mt-[31px]"
                data-aos="fade-down"
                data-aos-duration="3000"
            >
                The best personal email client. Revolutionary email for teams.
            </h2>
            <div
                className="mt-[64px] font-semibold text-[16px]"
                data-aos="fade-up"
                data-aos-delay="1500"
            >
                <ButtonBlue
                    text="Request Demo"
                    width="230px"
                    heigth="60px"
                    link="#"
                    // styles="animate__animated animate__lightSpeedInLeft animate__delay-3s"
                />
                <ButtonGrey
                    text="Try hoverbox for free"
                    link="#"
                    // styles="animate__animated animate__lightSpeedInRight animate__delay-3s"
                />
            </div>
            <div className="w-[100%] bg-[#1A1923] mt-[300px] pb-[130px] flex flex-col justify-center items-center">
                <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay='100'>
                    <img
                        src="/img/main.jpg"
                        alt="mail"
                        className="w-[1170px] h-[741px] relative top-[-170px] img-anim"
                    />
                    <img
                        src="/img/main-company.svg"
                        alt="company"
                        className="img-anim"
                    />
                </div>
                <ButtonGrey text="Our customers" link="#" styles="mt-[60px]" />
            </div>
        </main>
    );
};

export { Main };
