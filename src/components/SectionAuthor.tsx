import React from "react";

const SectionAuthor = () => {
    return (
        <div className="bg-[#0D0C16] flex justify-center items-center p-[130px]">
            <img src="/img/author.svg" alt="author" className="img-anim" />
            <div className="ml-24">
                <p className="max-w-[670px] text-[#F2F2F2] text-[30px] font-normal typewriter">
                    “Each new version brings the best features and the real-time
                    support I love they are great, keep it up guys please, I
                    recommend”
                </p>
                <div>
                    <p
                        className="mt-12 text-[#F2F2F2] text-[20px] font-bold"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        Jordam Ghomel
                    </p>
                    <p className="mt-3 text-[#F2F2F2] text-[16px] font-normal" data-aos="fade-up"
                        data-aos-duration="1500">
                        Designr manager at Broq
                    </p>
                </div>
            </div>
        </div>
    );
};

export { SectionAuthor };
