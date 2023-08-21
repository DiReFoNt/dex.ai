import React from "react";
import { MyTitle } from "../UI/index";

const SectionMultiply = (): React.ReactElement => {
    return (
        <section className="bg-[#1A1923] flex justify-center items-center pb-[80px]">
            <MyTitle
                title="Multiple controls with different items"
                subtitle="Each control has been designed for multiple use, several administrators will be able to assign content remotely from their mobile phones, without any worries."
            />
            <div
                className="ml-16 relative w-[700px] h-[800px]"
                data-aos="fade-right"
                data-aos-delay="1000"
                data-aos-duration="1300"
            >
                <img
                    src="/img/Mul1.svg"
                    alt="calendar"
                    className="mt-20 ml-52 w-[500px] h-[600px] img-anim"
                />
                <img
                    src="/img/Mul2.svg"
                    alt="groups"
                    className="absolute bottom-0 left-0  img-anim"
                />
            </div>
        </section>
    );
};

export { SectionMultiply };
