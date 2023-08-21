import React from "react";
import { MyTitle } from "../UI";

const SectionStatistic = (): React.ReactElement => {
    return (
        <section className="bg-[#1A1923] flex justify-evenly  py-32 ">
            <MyTitle
                title="Trusted data"
                subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
            />
            <div>
                <p
                    id="static-first"
                    className="text-[#F2F2F2] text-[150px] font-medium"
                    data-aos="flip-up"
                    data-aos-delay="250"
                    data-aos-duration="1000"
                >
                    10k
                </p>
                <p
                    className="text-[#787B83] text-[18px] font-normal leading-normal"
                    data-aos="flip-down"
                    data-aos-delay="400"
                    data-aos-duration="1000"
                >
                    More than 10k users loyal to our software
                </p>
            </div>
            <div>
                <p
                    id="static-second"
                    className="text-[#F2F2F2] text-[150px] font-medium"
                    data-aos="flip-up"
                    data-aos-delay="750"
                    data-aos-duration="1200"
                >
                    17k
                </p>
                <p
                    className="text-[#787B83] text-[18px] font-normal leading-normal w-[270px]"
                    data-aos="flip-down"
                    data-aos-delay="900"
                    data-aos-duration="1200"
                >
                    Followers on facebook who constantly interact with each
                    improvement
                </p>
            </div>
        </section>
    );
};

export { SectionStatistic };
