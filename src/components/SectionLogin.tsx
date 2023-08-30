import React from "react";
import { MyLogin } from "../UI/index";

const SectionLogin = (): React.ReactElement => {
    return (
        <section className="flex flex-col items-center">
            <MyLogin />
        </section>
    );
};

export { SectionLogin };
