import React from "react";

interface TButtonBlue {
    text: string;
    width: string;
    heigth: string;
    styles?: string;
}

const ButtonBlue = ({ text, width, heigth, styles }: TButtonBlue) : React.ReactElement => {
    const claz: string = `w-[${width}] h-[${heigth}] blue-button ${styles}`;

    return <button className={claz}>{text}</button>;
};

export { ButtonBlue };
