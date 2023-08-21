import React from "react";
import { Subscribe } from "./index";

const SectionSubscribe = (): React.ReactElement => {
    return (
        <section className="flex flex-col items-center py-[116px] bg-[#0D0C16]">
            <p className="text-[#F2F2F2] text-center text-[52px] font-bold max-w-[470px] mb-[62px]">Subscribe to our newsletter</p>
            <Subscribe/>
            <p className="mt-[35px] text-[#797C84]">Stay updated in our newsletter</p>
        </section>
    );
};

export {SectionSubscribe};
