import React from "react";
import Image from "next/image";
import fs from "fs";
import path from "path";
import { GetStaticProps } from "next";

interface DescriptionProps {
    imagePaths: string[];
}

const Description: React.FC<DescriptionProps> = ({ imagePaths }) => {
    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ flex: 1, padding: "1rem" }}>
                <h1>About the Event</h1>
                <p>
                    <b>“The destiny of world civilization depends upon providing a decent standard of living for all mankind.”</b>
<br/><br/>
                    The <b>'National Conclave on Humanitarian Technologies 2023'</b> was a remarkable event hosted by the <b>IEEE Student branch of Sri Sairam Engineering College</b>, showcasing an inspiring convergence of technology and humanitarianism. Beginning with a pre-inaugural session, the event featured notable guests such as <b>Mr. Rajendran Dhandapani</b>, <b>Director Engineering at Zoho Corporation</b>, and <b>Dr. K Porkumaran</b>, the <b>Principal of Sri Sairam Engineering College</b>. The lamp lighting ceremony symbolized the promise of progress in humanitarian technologies, setting the stage for a thought-provoking event. <b>Dr. K Porkumaran</b>, an esteemed academician and <b>Chairman of IEEE Madras Section</b>, delivered the welcome address, emphasizing the importance of innovation and mentorship in academia. <b>Mr. Dhandapani</b> was honored as the <b>Chief Guest</b> and shared insightful perspectives on technology and innovation, encouraging a holistic approach to learning. The inaugural session welcomed attendees with the <b>Thamizh Thai Vazhthu</b> and featured <b>Dr. Sai Prakash Leo Muthu</b>, <b>Chairman of Sri Sairam Engineering College</b>, who inspired the audience with his dedication to innovation and inclusivity in education. Honorable <b>Dr. Palanivel ThiagaRajan</b>, the <b>Minister for Information Technology & Digital Services in the Tamil Nadu Government</b>, and Honorable <b>Dr T.R.B. Raja</b>, <b>Minister for Industries, Investment Promotion & Commerce in the Tamil Nadu Government</b>, shared valuable insights on transparency and accountability, adding immense value to the event. <b>Mr. Sampathkumar Veeraraghavan</b>, a globally renowned technologist and <b>IEEE leader</b>, highlighted his contributions to humanitarian engineering, inspiring attendees with his remarkable achievements. <b>Mr. Herbert Lwanga</b>, <b>Chairman of IEEE HTB</b> and <b>Mr Marc Beebe</b> <b>Senior Director, IEEE Strategic Research, Public Imperatives & Corporate Development</b> discussed technology’s potential for humanitarian efforts, emphasizing the importance of innovation in addressing global challenges. <b>Mr. Arun Jain</b>, the <b>founder of Polaris Group and Intellect Design Arena</b>, shared his entrepreneurial journey and commitment to technology and community development. <b>Mr. Hari Balachandran</b>, <b>CEO of ICT Academy</b>, proposed the vote of thanks, highlighting the collaborative spirit of the event.
</p><br/><p>
                    A series of impactful technical sessions recently unfolded in the college hall, each one leaving an indelible mark on the eager minds of our students.
                    <b>Mr. Thirukumaran Ranganathan</b>, <b>Talent Acquisition Partner at Nokia</b>, offered valuable insights into the world of talent acquisition and technology trends, providing our students with a clear understanding of the evolving job market.
                    <b>Rtn. Madhu GN</b>, <b>Growth Officer at Gauruda Aerospace Pvt Ltd</b>, delivered an innovative and concise session, shedding light on the latest developments in aerospace technology. <b>Mr. Ashok Balasubramanian</b>, the <b>Chief Executive Officer of OpeanWeaver</b>, shared his wisdom on entrepreneurship and innovation, inspiring our students with his entrepreneurial journey. <b>Mr. Suresh Venugopal</b>, <b>President of Cambridge Mobile Telematics</b>, presented an on-point discussion on mobile telematics, offering students a glimpse into the future of mobile technology. <b>Dr. M. Manivannan</b>, <b>Professor at Touch Lab – IIT Madras</b>, provided a wealth of knowledge on cutting-edge research, and <b>Mr. Stanley George</b>, <b>Vice President – HR at Hexaware Technologies Ltd</b>, shared invaluable insights into HR practices in the technology sector. These sessions have been instrumental in broadening the horizons of our students and preparing them for the challenges and opportunities in the tech world. The <b>‘National Conclave on Humanitarian Technologies’</b> underscored the power of technology, innovation, and collaboration in addressing global challenges, paving the way for a more humanitarian future and reaffirming the importance of technology in creating positive societal impact.
                </p>
            </div>
            <div style={{ flex: 1, padding: "1rem" }}>
                <div style={{ position: "relative", width: "100%", height: "1000px", overflow: "hidden" }}>
                    {imagePaths.map((imagePath, index) => (
                        <div
                            key={index}
                            style={{
                                position: "absolute",
                                top: 0,
                                left: `${index * 100}%`,
                                width: "100%",
                                height: "100%",
                                transition: "transform 0.5s ease-in-out",
                            }}
                        >
                            <Image
                                src={imagePath}
                                alt={`Event Image ${index + 1}`}
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const imagesDirectory = path.join(process.cwd(), "public", "images", "conclave");
    const imageFiles = fs.readdirSync(imagesDirectory);
    const imagePaths = imageFiles.map((file) => `/images/conclave/${file}`);

    return {
        props: {
            imagePaths,
        },
    };
};

export default Description;