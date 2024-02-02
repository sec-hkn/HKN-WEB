import { Members } from "@/types/members";
import Image from "next/image";
import './style.css';

const SingleMember = ({member, className = ""}: { member: Members, className?: string }) => {
    const {name, image, linkedin, mailid, designation} = member;


    return (
        <div className={className}>
            <div
                className="shadow-two dark:shadow-three dark:hover:shadow-gray-dark rounded-sm bg-white p-8 duration-300 hover:shadow-one dark:bg-dark lg:px-5 xl:px-8"
            >
                <div className="flex items-center">
                    <div className="relative mr-4 h-[100px] w-full max-w-[100px] overflow-hidden rounded-full">
                        <Image unoptimized src={image} alt={name} fill/>
                    </div>
                    <div className="w-full">
                        <h3 className="mb-1 text-lg font-semibold text-dark dark:text-white lg:text-base xl:text-lg">
                            {name}
                        </h3>
                        <p className="text-sm text-body-color">{designation}</p>

                        <br/>
                        <div className="flex items-center gap-2">

                            <a
                                href={linkedin}
                                aria-label="social-link"
                                className="dark:text-body-color-dark text-body-color duration-300 hover:text-primary dark:hover:text-primary"
                            >
                                <svg
                                    width="17"
                                    height="16"
                                    viewBox="0 0 17 16"
                                    className="fill-current"
                                >
                                    <path
                                        d="M15.2196 0H1.99991C1.37516 0 0.875366 0.497491 0.875366 1.11936V14.3029C0.875366 14.8999 1.37516 15.4222 1.99991 15.4222H15.1696C15.7943 15.4222 16.2941 14.9247 16.2941 14.3029V1.09448C16.3441 0.497491 15.8443 0 15.2196 0ZM5.44852 13.1089H3.17444V5.7709H5.44852V13.1089ZM4.29899 4.75104C3.54929 4.75104 2.97452 4.15405 2.97452 3.43269C2.97452 2.71133 3.57428 2.11434 4.29899 2.11434C5.02369 2.11434 5.62345 2.71133 5.62345 3.43269C5.62345 4.15405 5.07367 4.75104 4.29899 4.75104ZM14.07 13.1089H11.796V9.55183C11.796 8.7061 11.771 7.58674 10.5964 7.58674C9.39693 7.58674 9.222 8.53198 9.222 9.47721V13.1089H6.94792V5.7709H9.17202V6.79076H9.19701C9.52188 6.19377 10.2466 5.59678 11.3711 5.59678C13.6952 5.59678 14.12 7.08925 14.12 9.12897V13.1089H14.07Z"/>
                                </svg>
                            </a>
                            <a
                              href={mailid}
                              aria-label="social-link"
                              className="dark:text-body-color-dark text-body-color duration-300 hover:text-primary dark:hover:text-primary"
                            >

                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="28"
                                  height="28"
                                  viewBox="0 -5.5 26 26"
                                  fill="none"
                                  stroke="currentColor"
                                >
                                    {/*<path*/}
                                    {/*    d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zM8 6l4 3 4-3"></path>*/}
                                    <path
                                      d="m 13,3.25 0,7.5 c 0,0.425 -0.325,0.75 -0.75,0.75 l -0.75,0 0,-6.8065 L 7,7.925 2.5,4.6935 2.5,11.5 1.75,11.5 C 1.3245,11.5 1,11.175 1,10.75 L 1,3.25 C 1,3.0375 1.081,2.85 1.2155,2.716 1.35,2.58 1.538,2.5 1.75,2.5 L 2,2.5 7,6.125 12,2.5 l 0.25,0 c 0.2125,0 0.4,0.081 0.5345,0.216 C 12.9195,2.85 13,3.0375 13,3.25 Z" />


                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
</div>
)
    ;
};

export default SingleMember;
