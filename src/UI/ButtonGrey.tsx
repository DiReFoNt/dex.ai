import React from "react";

interface TButtonGrey {
    text: string;
    link: string;
    styles?: string;
}

const ButtonGrey = ({
    text,
    styles,
    link,
}: TButtonGrey): React.ReactElement => {
    const claz: string = `w-[230px] h-[60px] grey-button ${styles}`;

    return (
        <button className={claz}>
            <a href={link}>{text}</a>
        </button>
    );
};

export { ButtonGrey };
