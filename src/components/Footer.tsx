import React from "react";

const Footer = (): React.ReactElement => {
    return (
        <section className="w-[100%] flex flex-col justify-center items-center py-[130px]">
            <div className=" w-[1200px] flex flex-row justify-center border-t-2 border-[#0D0C16] pt-[120px]">
                <div className="w-[270px] mr-[130px] ml-[50px]">
                    <a href="#">
                        <img
                            className="w-[202px] h-[44px] hover:scale-110 duration-300"
                            alt="logo"
                            src="/img/logo.svg"
                        />
                    </a>
                    <p className="mt-[40px] text-[#797C84] text-[18px] font-normal">
                        We offer a constantly improving service with monthly
                        updates and dedicated customer service, The solution for
                        yourcompany.
                    </p>
                </div>
                <div className="w-[930px] flex flex-row">
                    <div>
                        <p className="text-[#F2F2F2] text-[20px] font-semibold">
                            Social & Links
                        </p>
                        <div className="flex flex-col">
                            <a href="#" className="footer-link mt-[50px]">
                                Twitter
                            </a>
                            <a href="#" className="footer-link">
                                Facebook
                            </a>
                            <a href="#" className="footer-link">
                                GitHub
                            </a>
                            <a href="#" className="footer-link">
                                Instagram
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-row ">
                        <div>
                            <p className="text-[#F2F2F2] text-[20px] font-semibold ml-[200px]">
                                Explore
                            </p>
                            <div className="flex flex-row">
                                <div className="flex flex-col">
                                    <a
                                        href="#"
                                        className="footer-link mt-[50px]"
                                    >
                                        Pricing
                                    </a>
                                    <a href="#" className="footer-link">
                                        Customers
                                    </a>
                                    <a href="#" className="footer-link ">
                                        Integrations
                                    </a>
                                    <a href="#" className="footer-link">
                                        Contact
                                    </a>
                                    <a href="#" className="footer-link">
                                        Chat online
                                    </a>
                                    <a href="#" className="footer-link">
                                        Forum
                                    </a>
                                </div>
                                <div className="flex flex-col">
                                    <a
                                        href="#"
                                        className="footer-link mt-[50px]"
                                    >
                                        Blog
                                    </a>
                                    <a href="#" className="footer-link">
                                        Downloads
                                    </a>
                                    <a href="#" className="footer-link">
                                        Support
                                    </a>
                                    <a href="#" className="footer-link">
                                        Learn design
                                    </a>
                                    <a href="#" className="footer-link">
                                        Careers
                                    </a>
                                    <a href="#" className="footer-link">
                                        About us
                                    </a>
                                </div>
                                <div className="flex flex-col">
                                    <a
                                        href="#"
                                        className="footer-link mt-[50px]"
                                    >
                                        Privacy
                                    </a>
                                    <a href="#" className="footer-link">
                                        Status
                                    </a>
                                    <a href="#" className="footer-link">
                                        Terms
                                    </a>
                                    <a href="#" className="footer-link">
                                        Conditions
                                    </a>
                                    <a href="#" className="footer-link">
                                        Security
                                    </a>
                                    <a href="#" className="footer-link">
                                        Partner
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p className="mt-[120px] text-[#A79EB2] text-[16px] font-medium">
                © 2021 Hoverbox. designed by Iroshandezilva
            </p>
            <p className="mt-[20px] text-[#A79EB2] text-[16px] font-medium">
                Develop by Basiuk Oleksandr
            </p>
        </section>
    );
};

export { Footer };
