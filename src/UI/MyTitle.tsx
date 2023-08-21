import React from "react";
import { ButtonGrey } from "./index";

interface TMyTitle {
    title: string;
    subtitle: string;
}

const MyTitle = ({ title, subtitle }: TMyTitle): React.ReactElement => {
    return (
        <section className="max-w-[470px]">
            <p className="text-[#F2F2F2] text-[52px]  font-bold leading-normal">{title}</p>
            <p className="text-[#787B83] text-[18px] font-normal leading-normal mt-11">{subtitle}</p>
            <ButtonGrey text="Lear more" link="#" styles="mt-16"/>
        </section>
    );
};

export { MyTitle };
