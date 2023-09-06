import React from "react";

const MyLogin = () => {
    return (
        <form className="w-[470px] pt-[190px] flex flex-col items-center">
            <p className="text-center text-[52px] font-bold text-[#F2F2F2]">
                Start your free trial
            </p>
            <input
                className="bg-[#0D0C16]/0 mt-[90px] h-[60px] w-[80%] bg-opacity-100 border-2 border-[#37335F] rounded-[10px] text-[#797C84]"
                type="email"
                placeholder="Your email"
            />
            <input
                className="bg-[#0D0C16]/0 mt-8 mb-[50px] h-[60px] w-[80%] border-2 border-[#37335F] rounded-[10px] text-[#797C84] "
                type="password"
                placeholder="Password"
            />
            <button
                type="submit"
                className="w-[80%] h-[70px] rounded-[10px] bg-[#3B38FF] text-center text-[#FFFFFF] text-[20px] font-semibold blue-button mr-0"
            >
                Create account
            </button>
            <p className="text-[#797C84] text-[16px] font-normal mt-[46px]">
                Already have an account?
                <a className="text-[#F2F2F2] hover:opacity-75 duration-300" href="#">
                    Log in
                </a>
            </p>
        </form>
    );
};

export { MyLogin };
