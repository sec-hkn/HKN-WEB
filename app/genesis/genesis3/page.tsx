import Image from "next/image";

const Genesis3 = () => {
  return (
    <div className="w-full bg-[#FDFEFD] text-[#0C1326] font-sans">
      <div className="container mx-auto px-4 py-6">

        {/* Header Section */}
        <div className="text-center py-10 bg-white shadow-md">
          <h1 className="text-5xl font-bold">IEEE HKN Nu Eta Chapter</h1>
          <h5 className="text-lg mt-2">presents</h5>

          <Image
            src="/images/events/16/genesis3.0.jpg" 
            alt="Genesis 3.0"
            width={320}
            height={200}
            className="mx-auto mt-4"
          />

          <h2 className="text-3xl mt-4 font-semibold">GENESIS 3.0</h2>

          <h1 className="text-2xl mt-2 text-[#FFC52B] font-bold">
            A 2-Day Annual Symposium
          </h1>
        </div>

        {/* Main Content */}
        <main className="my-10">

          {/* Introduction */}
          <section>
            <h3 className="text-2xl bg-[#FFC52B] text-center py-3 font-bold animate-pulse">
              Introduction
            </h3>

            <p className="text-lg mt-4 leading-relaxed">
              GENESIS 3.0 marks the next evolution of innovation, creativity, and technological excellence. Building upon the success of its previous editions, GENESIS has consistently served as a dynamic platform where ideas are transformed into reality, and aspiring minds are empowered to explore beyond boundaries. With each version, it has grown not just in scale, but in vision—and GENESIS 3.0 stands as a bold testament to that journey.

At its core, GENESIS 3.0 is more than just an event—it is an ecosystem of learning, collaboration, and competition. It brings together students, innovators, developers, designers, and thinkers from diverse backgrounds, uniting them under a shared goal: to create, innovate, and inspire. Whether you are a beginner taking your first step into the world of technology or an experienced individual looking to challenge your limits, GENESIS 3.0 offers something for everyone.

This edition focuses on fostering a spirit of exploration and problem-solving. Participants are encouraged to think critically, work collaboratively, and develop solutions that address real-world challenges. Through a wide range of events including technical competitions, workshops, hackathons, and interactive sessions, GENESIS 3.0 provides a hands-on experience that goes beyond theoretical knowledge. It emphasizes practical learning, skill enhancement, and innovation-driven thinking.

One of the defining aspects of GENESIS 3.0 is its emphasis on adaptability and future readiness. In a rapidly evolving digital era, staying relevant requires continuous learning and experimentation. GENESIS 3.0 aims to equip participants with the tools, knowledge, and mindset needed to thrive in this ever-changing landscape. 







              By integrating emerging technologies, creative problem-solving approaches, and collaborative learning environments, it prepares individuals to face the challenges of tomorrow with confidence.

Moreover, GENESIS 3.0 is designed to inspire and connect. It serves as a networking hub where like-minded individuals can exchange ideas, build meaningful connections, and collaborate on innovative projects. The event creates opportunities for participants to interact with peers, mentors, and industry enthusiasts, fostering a community that thrives on knowledge sharing and mutual growth.

In essence, GENESIS 3.0 is a celebration of innovation, passion, and progress. It is a platform where curiosity meets opportunity, where ideas take shape, and where the next generation of thinkers and creators begin their journey. As we step into this new chapter, GENESIS 3.0 invites you to be a part of something bigger—to learn, to create, and to redefine what is possible.
            </p>
          </section>

          {/* Sponsors */}
          <section className="mt-10 text-center">
            <h3 className="text-2xl bg-[#FFC52B] py-3 font-bold animate-pulse">
              Our Sponsors
            </h3>

            <Image
              src="/images/events/10/logo.png" // update later
              alt="Sponsors"
              width={300}
              height={150}
              className="mx-auto mt-4"
            />
          </section>

        </main>

        {/* Footer */}
        <footer className="bg-[#0C1326] text-[#FFC52B] text-center py-4 mt-10">
          <p>&copy; 2026 IEEE HKN Nu Eta Chapter | All Rights Reserved</p>
        </footer>

      </div>
    </div>
  );
};

export default Genesis3;