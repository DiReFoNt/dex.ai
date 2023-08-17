import React from "react";

const NavBar = (): React.ReactElement => {
    return (
        <nav className="flex flex-row flex-nowrap pt-[77px] items-center justify-evenly">
            <a
                href="#"
                className="mr-[250px] animate__animated animate__lightSpeedInLeft animate__delay-1s"
            >
                <img
                    className="w-[202px] h-[44px] hover:scale-110 duration-300"
                    alt="logo"
                    src="/img/logo.svg"
                />
            </a>
            <div className="text-[16px] text-[#F2F2F2] font-semibold leading-normal animate__animated animate__lightSpeedInRight animate__delay-1s">
                <a href="#" className="nav-button">
                    Product
                </a>
                <a href="#" className="nav-button">
                    About
                </a>
                <a href="#" className="nav-button">
                    Pricing
                </a>
                <a href="#" className="nav-button">
                    Community
                </a>
                <a href="#" className="nav-button">
                    Log in
                </a>
                <button className="w-[150px] h-[55px] bg-white flex-shrink-0 rounded-[10px] text-[#1F222C] border-white border-2 hover:bg-[#1F222C] hover:text-white duration-300">
                    <a href="#">Sign Up</a>
                </button>
            </div>
        </nav>
    );
};

export { NavBar };
