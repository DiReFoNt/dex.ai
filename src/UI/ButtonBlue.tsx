import React from "react";

interface TButtonBlue {
    text: string;
    link: string;
    width: string;
    heigth: string;
    styles?: string;
}

const ButtonBlue = ({
    text,
    link,
    width,
    heigth,
    styles,
}: TButtonBlue): React.ReactElement => {
    const claz: string = `w-[${width}] h-[${heigth}] blue-button ${styles}`;

    return (
        <button className={claz}>
            <a href={link}>{text}</a>
        </button>
    );
};

export { ButtonBlue };
