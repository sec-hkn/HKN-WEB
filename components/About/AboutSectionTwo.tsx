import Image from "next/image";
// bg-[url('/images/hero/landing-page.jpg')] bg-cover

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/20] w-auto text-center lg:m-0"
            >
              <Image
                src="/images/about/SUMMA-black.png"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/SUMMA-white.png"
                alt="about image"
                fill
                className="drop-shadow-three hidden dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <p className="text-xl font-medium leading-relaxed text-black text-justify sm:leading-relaxed">
                  Sri Sairam Engineering College, Chennai was established in the year 1995 by MJF. Ln. LeoMuthu,
                  Chairman of Sapthagiri Educational Trust. Our Institution is an Autonomous Institution, affiliated to
                  Anna University and approved by AICTE, New Delhi. Besides, the institution has been accredited by
                  National Accreditation and Assessment Council (NAAC) with &quot;A+&quot; Grade and our Institution has been
                  upgraded to ISO 9001:2015 Certification. Our Institution has secured a place in the 151-200 Rank Band
                  in the National Institutional Ranking Framework 2023 (NIRF), prestigious ranking released by the
                  MHRD, Government of India. All the eligible programs of the institution have been accredited by the
                  National Board of Accreditation, confirming our endeavor of offering quality education and bearing
                  testimony to the highest standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
