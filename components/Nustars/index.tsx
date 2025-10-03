import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const Nustar = () => {
  const months = [
    { name: "July", content: "THARUSHI S S", image: "/images/nustars/Tharushri.jpeg" },
    { name: "August", content: "RAHUL V", image: "/images/nustars/Rahul.png" },
    { name: "September", content: "SAVITHA N", image: "/images/nustars/Savitha.jpeg" },
    { name: "October", content: "THRISALA K", image: "/images/nustars/trishala.jpeg" },
    {name: "November", content: "SHREEJA S", image: "/images/members/24/shreeja.jpg" },
    { name: "December", content: "NASREEN BEGAM Z", image: "/images/members/24/nasreenbegam.png" },

  ];
  const months2 = [
    { name: "January", content: "HARISH V P", image: "/images/members/24/harishvp.png" },
    { name: "January", content: "SOLAI GANESH S", image: "/images/members/23/solaiganesh.jpg" },
    { name: "February", content: "JAGADEESH G", image: "/images/members/24/jagadeesh.jpg" },
  ];

  return (
      <>
        <section id="about" className="pt-16 md:pt-20 lg:pt-28">
        <div className="container">
            <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
              <div className="-mx-4 flex flex-wrap items-center">
                <div className="w-full px-4 lg:w-1/2">
                  <SectionTitle
                      title="THE NU STARS"
                      paragraph="The Nu Stars initiative is a heartfelt recognition of the exceptional efforts and unwavering dedication of our student members. Every month, we honor those whose outstanding contributions have played a pivotal role in the success of the IEEE HKN Nu Eta Chapter’s activities and events.
These individuals, fondly called 'The Twilights', shine bright in their commitment to excellence, innovation, and teamwork. By spotlighting their achievements, Nu Stars not only celebrates the spirit of collaboration but also motivates the entire chapter to continue striving for excellence.
Explore this section to meet our Twilights and celebrate the stars who illuminate the path of success for the IEEE HKN Nu Eta Chapter!"
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
          <h2 className={"mb-4 text-3xl font-bold !leading-tight text-black text-center dark:text-white sm:text-4xl md:text-[45px]"}>YEAR 2024</h2>
          <div
              className="wow fadeInUp mx-auto max-w-[1400px] text-center"
              data-wow-delay=".2s"
          >
             <div className="flex flex-wrap justify-center gap-20 py-8 bg-gray-100">
        {months.map((month, index) => (
          <div
            key={index}
            className="w-56 h-64 bg-yellow-300 flex flex-col items-center justify-between rounded-2xl shadow-lg p-4"
          >
            <div className="text-lg font-bold text-black">{month.name}</div>
            <div className="h-[100px] w-full max-w-[100px] overflow-hidden rounded-full border-4 border-white shadow-lg">
              <Image
                src={month.image}
                alt={`${month.name} image`}
                width={100}
                height={100}
                className="object-cover"
              />
            </div>
            <div className="text-center text-black font-semibold text-sm">
              {month.content}
            </div>
          </div>
        ))}
      </div>
     
          </div>
        </div>
        <div>
          <h2 className={"mb-4 text-3xl font-bold !leading-tight text-black text-center dark:text-white sm:text-4xl md:text-[45px]"}>YEAR 2025</h2>
          <div
              className="wow fadeInUp mx-auto max-w-[1400px] text-center"
              data-wow-delay=".2s"
          >
             <div className="flex flex-wrap justify-center gap-20 py-8 bg-gray-100">
        {months2.map((month, index) => (
          <div
            key={index}
            className="w-56 h-64 bg-yellow-300 flex flex-col items-center justify-between rounded-2xl shadow-lg p-4"
          >
            <div className="text-lg font-bold text-black">{month.name}</div>
            <div className="h-[100px] w-full max-w-[100px] overflow-hidden rounded-full border-4 border-white shadow-lg">
              <Image
                src={month.image}
                alt={`${month.name} image`}
                width={100}
                height={100}
                className="object-cover"
              />
            </div>
            <div className="text-center text-black font-semibold text-sm">
              {month.content}
            </div>
          </div>
        ))}
      </div>
     
          </div>
        </div>
        
      </>
  );
};

export default Nustar;
