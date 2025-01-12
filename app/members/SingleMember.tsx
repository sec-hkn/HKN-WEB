import { Members } from "@/types/members";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

const SingleMember = ({
  member,
  className = "",
}: {
  member: Members;
  className?: string;
}) => {
  const { name, image, linkedin, mailid, designation } = member;
  const mailtoRedirect = mailid != "" ? "mailto:" + mailid : "";
  const mailDisabled = true;

  return (
    <div className="h-full rounded-xl bg-white p-6 shadow-xl duration-500 hover:-translate-y-1 dark:bg-slate-800 lg:p-6">
      <img
        src={image != "" ? image : "/images/members/unknown-person.png"}
        alt=""
        className="p-0.4 mx-auto -mt-16 h-40 w-40 rounded-full border-4 border-blue-600 object-cover"
        width="160"
      />
      <div className="mt-6" style={{ alignContent: "end", height: "130px" }}>
        <h4 className="mb-1 text-2xl font-medium">{name}</h4>
        <p className="mb-4 text-sm">
          {designation != "" ? designation : <br />}
        </p>
        <div className="mt-2">
          <div>
            <a
              href={linkedin}
              className="mr-4 inline-block opacity-60 transition duration-300 hover:-translate-y-1 hover:opacity-100"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className="h-6 w-6 text-[12px]"
              />
            </a>
            <a
              href={mailtoRedirect || "#"}
              className={`mr-4 inline-block transition duration-300 ${
                mailtoRedirect
                  ? "opacity-60 hover:-translate-y-1 hover:opacity-100"
                  : "pointer-events-none opacity-30"
              }`}
              target={mailtoRedirect ? "_blank" : "_blank"}
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                className="h-6 w-6 text-[12px]"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};


const professionalMember = ({
  member,
  className = "",
}: {
  member: Members;
  className?: string;
}) => {
  const { name, image, linkedin, mailid, designation } = member;
  const mailtoRedirect = mailid != "" ? "mailto:" + mailid : "";
  const mailDisabled = true;

  return (
    <div className="h-full rounded-xl bg-white p-6 shadow-xl duration-500 hover:-translate-y-1 dark:bg-slate-800 lg:p-6">
      <img
        src={image != "" ? image : "/images/members/unknown-person.png"}
        alt=""
        className="p-0.4 mx-auto -mt-16 h-40 w-40 rounded-full border-4 border-blue-600 object-cover"
        width="160"
      />
      <div className="mt-6" style={{ alignContent: "end", height: "130px" }}>
        <h4 className="mb-1 text-2xl font-medium">{name}</h4>
        <p className="mb-4 text-sm">
          {designation != "" ? designation : <br />}
        </p>
        <div className="mt-2">
          <div>
            <a
              href={linkedin}
              className="mr-4 inline-block opacity-60 transition duration-300 hover:-translate-y-1 hover:opacity-100"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className="h-6 w-6 text-[12px]"
              />
            </a>
            <a
              href={mailtoRedirect || "#"}
              className={`mr-4 inline-block transition duration-300 ${
                mailtoRedirect
                  ? "opacity-60 hover:-translate-y-1 hover:opacity-100"
                  : "pointer-events-none opacity-30"
              }`}
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                className="h-6 w-6 text-[12px]"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleMember;