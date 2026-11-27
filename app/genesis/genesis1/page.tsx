import Image from "next/image";

const Genesis1 = () => {
  return (

    <div className="w-full bg-[#FDFEFD] text-[#0C1326] font-sans">
      <div className="container mx-auto px-4 py-6">
        {/* Header Section */}
        <div className="text-center py-10 bg-white shadow-md">
          <h1 className="text-5xl font-bold">IEEE HKN Nu Eta Chapter</h1>
          <h5 className="text-lg mt-2">presents</h5>
          <Image
            src="/images/events/10/gene.png"
            alt="Genesis Event"
            width={320}
            height={200}
            className="mx-auto mt-4"
          />
          <h2 className="text-3xl mt-4 font-semibold">A 2 Days Annual Symposium</h2>
          <h1 className="text-2xl mt-2 text-[#FFC52B] font-bold">
            Sponsored by IEEE Humanitarian Technologies Board
          </h1>
        </div>

        {/* Introduction Section */}
        <main className="my-10">
          <section id="introduction">
            <h3 className="text-2xl bg-[#FFC52B] text-center py-3 font-bold animate-pulse">
              Introduction
            </h3>
            <p className="text-lg mt-4 leading-relaxed">
              GENESIS 1.0 is a two-day symposium happening on July 29th and 30th funded
              by IEEE HTB. This premier SDG-related event aims to share knowledge,
              ideas, and experiences in the field of technology, aligning with the
              United Nations&apos; Sustainable Development Goals (SDGs).
            </p>
          </section>

          {/* Genesis 1.0 Section */}
          <section id="genesis" className="mt-10">
            <h3 className="text-2xl bg-[#FFC52B] text-center py-3 font-bold animate-pulse">
              Genesis 1.0
            </h3>
            <p className="text-lg mt-4 leading-relaxed">
              The GENESIS 1.0 symposium aligns closely with HTB&apos;s vision of fostering
              a global community of engineers committed to using technology for the
              benefit of humanity. By incorporating sessions and activities focused
              on social innovation and sustainable development, the event underscores
              the importance of engineering in addressing societal and environmental
              challenges.
            </p>
          </section>

          {/* Sponsors Section */}
          <section className="mt-10 text-center">
            <h3 className="text-2xl bg-[#FFC52B] text-center py-3 font-bold animate-pulse">
              Our Sponsors
            </h3>
            <Image
              src="/images/events/10/logo.png"
              alt="Sponsors"
              width={240}
              height={120}
              className="mx-auto mt-4"
            />
          </section>
          <section id="events" className="mt-12">
            <h3 className="animate-pulse bg-[#FFC52B] py-3 text-center text-2xl font-bold">
              Events
            </h3>

            {/* Day 1 */}
            <div className="mt-8">
              <h4 className="mb-6 text-2xl font-bold text-[#0C1326] border-b pb-2">
                Day 1
              </h4>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="overflow-hidden rounded-xl bg-white text-[#0C1326] shadow-md flex flex-col justify-between">
                  <div className="p-5">
                    <h5 className="text-base font-bold text-primary mb-1">01:30 PM - 03:40 PM</h5>
                    <h4 className="text-xl font-bold mb-2">TECH TALK: Connected Healthcare for Remote Moms</h4>
                    <p className="text-sm text-gray-700 leading-relaxed mb-4">
                      Join us for an insightful Tech Talk on Connected Healthcare for Remote Moms. This session will delve into the latest advancements in healthcare technology specifically designed to support mothers in remote areas. Discover innovative solutions that bridge the gap in healthcare access and improve maternal health outcomes.
                    </p>
                  </div>
                  <div className="relative h-64 w-full">
                    <Image
                      src="/images/events/10/p11.jpeg"
                      alt="Tech Talk"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="overflow-hidden rounded-xl bg-white text-[#0C1326] shadow-md flex flex-col justify-between">
                  <div className="p-5">
                    <h5 className="text-base font-bold text-primary mb-1">09:30 AM - 04:00 PM</h5>
                    <h4 className="text-xl font-bold mb-2">SustainFest: An Exhibition Promoting Sustainability</h4>
                    <p className="text-sm text-gray-700 leading-relaxed mb-4">
                      Visit SustainFest, an expo dedicated to promoting sustainability. Explore innovative projects, products, and ideas that focus on sustainable practices. This is a fantastic opportunity to learn about the latest trends in sustainability and get inspired to make a positive environmental impact.
                    </p>
                  </div>
                  <div className="relative h-64 w-full">
                    <Image
                      src="/images/events/10/p12.jpeg"
                      alt="SustainFest"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Day 2 */}
            <div className="mt-12">
              <h4 className="mb-6 text-2xl font-bold text-[#0C1326] border-b pb-2">
                Day 2
              </h4>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="overflow-hidden rounded-xl bg-white text-[#0C1326] shadow-md flex flex-col justify-between">
                  <div className="p-5">
                    <h5 className="text-base font-bold text-primary mb-1">10:30 AM - 12:30 PM</h5>
                    <h4 className="text-lg font-bold mb-2">IEEE SIGHT SESSION</h4>
                    <p className="text-sm text-gray-700 leading-relaxed mb-4">
                      Participate in the IEEE SIGHT Session exploring projects and initiatives aimed at leveraging technology for social good and sustainable development.
                    </p>
                  </div>
                  <div className="relative h-56 w-full">
                    <Image
                      src="/images/events/10/p21.jpeg"
                      alt="IEEE SIGHT"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="overflow-hidden rounded-xl bg-white text-[#0C1326] shadow-md flex flex-col justify-between">
                  <div className="p-5">
                    <h5 className="text-base font-bold text-primary mb-1">10:30 AM - 12:30 PM</h5>
                    <h4 className="text-lg font-bold mb-2">Think Tank</h4>
                    <p className="text-sm text-gray-700 leading-relaxed mb-4">
                      Showcase strategic expertise and problem-solving skills to tackle real-world business challenges alongside fellow innovators.
                    </p>
                  </div>
                  <div className="relative h-56 w-full">
                    <Image
                      src="/images/events/10/p22.jpeg"
                      alt="Think Tank"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="overflow-hidden rounded-xl bg-white text-[#0C1326] shadow-md flex flex-col justify-between">
                  <div className="p-5">
                    <h5 className="text-base font-bold text-primary mb-1">01:30 PM - 02:30 PM</h5>
                    <h4 className="text-lg font-bold mb-2">SOCIAL ENTREPRENEURSHIP</h4>
                    <p className="text-sm text-gray-700 leading-relaxed mb-4">
                      Immerse yourself in social entrepreneurship. Gain insights into how business principles can be applied to create lasting social value.
                    </p>
                  </div>
                  <div className="relative h-56 w-full">
                    <Image
                      src="/images/events/10/p23.jpeg"
                      alt="Social Entrepreneurship"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Guest Slideshow */}
          <section className="mt-10">
            <h3 className="text-2xl bg-[#FFC52B] text-center py-3 font-bold animate-pulse">
              We Proudly Welcome
            </h3>
            <div className="relative w-full max-w-3xl mx-auto mt-6 overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/images/events/10/Guest Welcome - CEO.png"
                width={800}
                height={450}
                className="w-full"
                alt="Guest CEO"
              />
              <Image
                src="/images/events/10/Guest Welcome - Sampath Sir.png"
                width={800}
                height={450}
                className="w-full"
                alt="Guest Sampath"
              />
              <Image
                src="/images/events/10/Guest Welcome.png"
                width={800}
                height={450}
                className="w-full"
                alt="Guest Welcome"
              />
            </div>
          </section>
          
        </main>

        {/* Footer */}
        <footer className="bg-[#0C1326] text-[#FFC52B] text-center py-4 mt-10">
          <p>&copy; 2025 IEEE HKN Nu Eta Chapter | All Rights Reserved</p>
        </footer>
      </div>
    </div>
  );
};

export default Genesis1;
