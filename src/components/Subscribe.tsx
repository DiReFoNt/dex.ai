import React from "react";

const Subscribe = () => {
    return (
        <div>
            <form className="border-2 border-[#37335F] rounded-[10px] w-[570px] h-[60px] relative ">
                <input
                    type="email"
                    className="w-[100%] bg-[#0D0C16]/0 h-[100%] rounded-[10px] text-[#f2f2f2]"
                    placeholder="Write your email and hit enter"
                />
                <button
                    type="submit"
                    className="text-[#F2F2F2] text-[18px] bg-[#3B38FF] w-[170px] h-[100%] rounded-r-[10px] absolute right-0 blue-button mr-0 rounded-l-[0px]"
                >
                    Subscribe
                </button>
            </form>
        </div>
    );
};

export { Subscribe };
