import Image from "next/image";

const Genesis2 = () => {
  return (
    <div className="w-full bg-[#FDFEFD] font-sans text-[#0C1326]">
      <div className="container mx-auto px-4 py-6">
        {/* Header Section */}
        <div className="bg-white py-10 text-center shadow-md">
          <h1 className="text-5xl font-bold">IEEE HKN Nu Eta Chapter</h1>
          <h5 className="mt-2 text-lg">presents</h5>
          <Image
            src="/images/events/16/genesis2.o.jpg"
            alt="Genesis 2.0 Event"
            width={320}
            height={200}
            className="mx-auto mt-4"
          />
          <h2 className="mt-4 text-3xl font-semibold">
            GENESIS 2.0 – Annual Symposium
          </h2>
          <h1 className="mt-2 text-2xl font-bold text-[#FFC52B]">
            July 31 & August 1, 2025
          </h1>
          <h2 className="mt-2 text-xl font-semibold">
            Sponsored by IEEE Humanitarian Technologies Board
          </h2>
        </div>

        {/* Introduction Section */}
        <main className="my-10">
          <section id="introduction">
            <h3 className="animate-pulse bg-[#FFC52B] py-3 text-center text-2xl font-bold">
              Introduction
            </h3>
            <p className="mt-4 text-lg leading-relaxed">
              GENESIS 2.0 is a two-day annual symposium designed to ignite
              innovation, inspire collaboration, and explore emerging
              technologies that align with the United Nations&apos; Sustainable
              Development Goals (SDGs). The event serves as a platform for
              students, researchers, and industry leaders to exchange ideas and
              address societal challenges through technology.
            </p>
          </section>

          {/* Genesis 2.0 Vision Section */}
          <section id="genesis" className="mt-10">
            <h3 className="animate-pulse bg-[#FFC52B] py-3 text-center text-2xl font-bold">
              Genesis 2.0
            </h3>
            <p className="mt-4 text-lg leading-relaxed">
              Building on the legacy of Genesis 1.0, this year&apos;s symposium
              introduces thought-provoking sessions, exhibitions, and
              interactive events that encourage sustainable development and
              human-centered innovation. With a blend of technical expertise and
              social impact, Genesis 2.0 continues to empower future engineers
              to create solutions for a better world.
            </p>
          </section>

          {/* Sponsors Section */}
          <section className="mt-10 text-center">
            <h3 className="animate-pulse bg-[#FFC52B] py-3 text-center text-2xl font-bold">
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
          {/* Event Highlights */}
          <h3 className="animate-pulse bg-[#FFC52B] py-3 text-center text-2xl font-bold">
            Events
          </h3>
          <section id="events" className="mt-12">
            {/* Day 1 */}
            <h3 className="mb-6 text-2xl font-bold text-[#FFC52B]">
              Day 1: Ignite the Change
            </h3>
            <div className="grid gap-6 md:grid-cols-3">
              {/* Event Card 1 */}
              <div className="overflow-hidden rounded-xl bg-white text-[#0C1326] shadow-md">
                <Image
                  src="/images/events/16/expo.jpg"
                  alt="Pitch for the Planet"
                  width={500}
                  height={250}
                  className="h-48 w-full object-cover"
                />
                <div className="p-4">
                  <h4 className="text-lg font-semibold">
                    Pitch for the Planet: SDG Innovation Expo
                  </h4>
                  <p className="mt-2 text-sm">
                    Students showcase SDG-based projects judged for innovation
                    and impact.
                  </p>
                </div>
              </div>

              {/* Event Card 2 */}
              <div className="overflow-hidden rounded-xl bg-white text-[#0C1326] shadow-md">
                <Image
                  src="/images/events/16/code.jpg"
                  alt="Hack Sprint"
                  width={500}
                  height={250}
                  className="h-48 w-full object-cover"
                />
                <div className="p-4">
                  <h4 className="text-lg font-semibold">
                    Code for Cause: The Humanitarian Hack-Sprint
                  </h4>
                  <p className="mt-2 text-sm">
                    Coding challenge with humanitarian-themed problems
                    (disaster, energy, health).
                  </p>
                </div>
              </div>

              {/* Event Card 3 */}
              <div className="overflow-hidden rounded-xl bg-white text-[#0C1326] shadow-md">
                <Image
                  src="/images/events/16/linkedwork.jpg"
                  alt="Power Within"
                  width={500}
                  height={250}
                  className="h-48 w-full object-cover"
                />
                <div className="p-4">
                  <h4 className="text-lg font-semibold">
                    Power Within: Personal Identity, Growth & Impact
                  </h4>
                  <p className="mt-2 text-sm">
                    Hands-on LinkedIn and resume building workshop.
                  </p>
                </div>
              </div>
            </div>

            {/* Day 2 */}
            <h3 className="mb-6 mt-12 text-2xl font-bold text-[#FFC52B]">
              Day 2: Think, Solve, Impact
            </h3>
            <div className="grid gap-6 md:grid-cols-3">
              {/* Event Card 1 */}
              <div className="overflow-hidden rounded-xl bg-white text-[#0C1326] shadow-md">
                <Image
                  src="/images/events/16/aiwork.jpg"
                  alt="GreenMind AI"
                  width={500}
                  height={250}
                  className="h-48 w-full object-cover"
                />
                <div className="p-4">
                  <h4 className="text-lg font-semibold">
                    GreenMind: Sustainable AI for a Better Tomorrow
                  </h4>
                  <p className="mt-2 text-sm">
                    Hands-on AI sessions focused on ethics, inclusivity, and
                    sustainability.
                  </p>
                </div>
              </div>

              {/* Event Card 2 */}
              <div className="overflow-hidden rounded-xl bg-white text-[#0C1326] shadow-md">
                <Image
                  src="/images/events/16/smartcities.jpg"
                  alt="UrbanThink"
                  width={500}
                  height={250}
                  className="h-48 w-full object-cover"
                />
                <div className="p-4">
                  <h4 className="text-lg font-semibold">
                    UrbanThink 2025: Designing Cities that Feel Human
                  </h4>
                  <p className="mt-2 text-sm">
                    Ideathon to redesign urban spaces using sustainable
                    practices.
                  </p>
                </div>
              </div>

              {/* Event Card 3 */}
              <div className="overflow-hidden rounded-xl bg-white text-[#0C1326] shadow-md">
                <Image
                  src="/images/events/16/paneldisc.jpg"
                  alt="Voices of Fire"
                  width={500}
                  height={250}
                  className="h-48 w-full object-cover"
                />
                <div className="p-4">
                  <h4 className="text-lg font-semibold">
                    Voices of Fire: Igniting Purpose-Driven Careers with IEEE
                  </h4>
                  <p className="mt-2 text-sm">
                    IEEE leaders discuss impact-driven innovation and careers.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Guest Slideshow */}
          <section className="mt-10">
            <h3 className="animate-pulse bg-[#FFC52B] py-3 text-center text-2xl font-bold">
              We Proudly Welcome
            </h3>
            <div className="relative mx-auto mt-6 w-full max-w-3xl overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/images/events/16/s1.png"
                width={800}
                height={450}
                className="w-full"
                alt="Guest 1"
              />
              <Image
                src="/images/events/16/s2.png"
                width={800}
                height={450}
                className="w-full"
                alt="Guest 2"
              />
              <Image
                src="/images/events/16/s3.png"
                width={800}
                height={450}
                className="w-full"
                alt="Guest 3"
              />
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="mt-10 bg-[#0C1326] py-4 text-center text-[#FFC52B]">
          <p>&copy; 2025 IEEE HKN Nu Eta Chapter | All Rights Reserved</p>
        </footer>
      </div>
    </div>
  );
};

export default Genesis2;
