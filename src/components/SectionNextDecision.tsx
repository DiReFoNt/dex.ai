import React from "react";
import { MyTitle } from "../UI/index";

const SectionNextDecision = (): React.ReactElement => {
    return (
        <section className="bg-[#0D0C16] flex justify-center items-center pb-[80px]">
            <div
                className="mr-16 relative w-[700px] h-[800px]"
                data-aos="fade-left"
                data-aos-delay="1000"
                data-aos-duration="1300"
            >
                <img
                    src="/img/des1.svg"
                    alt="table"
                    className="mt-20 w-[500px] h-[600px] img-anim"
                />
                <img
                    src="/img/des2.svg"
                    alt="statistic"
                    className="absolute bottom-0 right-0 z-10 img-anim"
                />
            </div>
            <MyTitle
                title="Your next decision could be thanks to the analyzes"
                subtitle="Every detail has been designed for high efficiency when it comes to teamwork, the maximum performance at the lowest cost in the entire market."
            />
        </section>
    );
};

export { SectionNextDecision };
