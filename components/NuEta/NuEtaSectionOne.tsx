import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const NuEtaSectionOne = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
      <>
        <section id="about" className="pt-16 md:pt-20 lg:pt-28">
          <div className="container">
            <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
              <div className="-mx-4 flex flex-wrap items-center">
                <div className="w-full px-4 lg:w-1/2">
                  <SectionTitle
                      title="Nu Eta Chapter"
                      paragraph="The Nu Eta Chapter of IEEE HKN was installed at Sri Sairam Engineering College on 29 September 2023. It is the 4th IEEE HKN chapter to be installed in India and the 272nd chapter to be installed worldwide. 'Nu Eta' symbolizes a commitment to new-age technology and innovation. Under the visionary leadership of the Chairman and CEO of Sairam Institutions, Dr. Sai Prakash Leo Muthu, who is also a professional member, the chapter is on track to achieve great success and also spread the spirit and values of  IEEE Eta Kappa Nu. The Nu Eta team is guided by the faculty advisor of the chapter, Dr. Soma Prathibha, and is committed to harnessing innovation for the advancement of society."
                      mb="44px"
                      className={"text-justify"}
                  />

                  <div
                      className="mb-12 max-w-[570px] lg:mb-0"
                  >

                  </div>
                </div>

                <div className="w-full px-4 lg:w-1/2">
                  <div
                      className="relative mx-auto aspect-[25/24] lg:mr-0"
                  >
                    <Image src={"/images/sairam-nu-eta.jpeg"}
                           alt={"Nu Eta Chapter"}
                           fill
                           className={"drop-shadow-three mx-auto max-w-full dark:hidden dark:drop-shadow-none lg:mr-0"}/>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
        <div>
          <h2 className={"mb-4 text-3xl font-bold !leading-tight text-black text-center dark:text-white sm:text-4xl md:text-[45px]"}>VISION
            & MISSION</h2>
          <div
              className="wow fadeInUp mx-auto max-w-[800px] text-center"
              data-wow-delay=".2s"
          >
            <ul className="text-black list-disc dark:text-body-color-dark mb-12 text-base !leading-relaxed sm:text-lg md:text-xl space-y-6">
              <li>
                Foster and support innovation in technology to build solutions to societal problems through student
                fraternity.
              </li>
              <li>Provide innovators with the right resources and a global platform for their success</li>
              <li>Promote the values of the IEEE HKN society among students and professionals.</li>
            </ul>
          </div>
        </div>
      </>
  );
};

export default NuEtaSectionOne;
