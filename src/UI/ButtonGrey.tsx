import React from "react";

interface TButtonGrey {
    text: string;
    styles?: string;
}

const ButtonGrey = ({ text, styles }: TButtonGrey) : React.ReactElement => {
    const claz: string = `w-[230px] h-[60px] grey-button ${styles}`;

    return <button className={claz}>{text}</button>;
};

export { ButtonGrey };
 