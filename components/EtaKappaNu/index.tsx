"use client";

import Image from "next/image";
import { useState } from "react";

import ModalVideo from "react-modal-video";
// bg-[url('/images/hero/landing-page.jpg')] bg-cover

const EtaKappaNu = () => {
    return (
        <section className="py-16 md:py-20 lg:py-28">
            <div className="container">
                <div className="-mx-4 flex flex-wrap items-center">
                    <div className="w-full px-4 lg:w-1/2">
                        <div
                            className="relative mx-auto mb-12 aspect-[25/20] max-w-[500px] text-center lg:m-0"
                        >
                            <Image
                                src="/images/logo/IEEEEtaKappaNuStackedLogo.png"
                                alt="IEEE HKN Logo"
                                fill
                                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
                            />
                            {/*<Image*/}
                            {/*    src="/images/about/SUMMA-white.png"*/}
                            {/*    alt="about image"*/}
                            {/*    fill*/}
                            {/*    className="drop-shadow-three hidden dark:block dark:drop-shadow-none"*/}
                            {/*/>*/}
                        </div>
                    </div>
                    <div className="w-full px-4 lg:w-1/2">
                        <div className="max-w-[470px]">
                            <div className="mb-9">
                                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                                    {/*Bug free code*/}
                                </h3>
                                <p className="text-black text-xl font-medium text-justify !leading-relaxed">
                                    The IEEE HKN (Institute of Electrical and Electronics Engineers Eta Kappa Nu)
                                    Society is a prestigious honor society for students and professionals in the fields
                                    of electrical engineering, computer engineering, and related disciplines. The
                                    primary mission of the society is to recognize and promote excellence guided by its
                                    three ideals: <span className={"font-bold"}>scholarship, character, and attitude.</span> The society aims to achieve this
                                    mission by identifying and inviting students who have demonstrated exceptional
                                    academic performance and leadership qualities to join the society. With a rich
                                    history and a global presence, it continues to recognize and nurture the brightest
                                    minds in technology, contributing to advancements that benefit humanity in the
                                    ever-evolving world of technology.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};



export default EtaKappaNu;
