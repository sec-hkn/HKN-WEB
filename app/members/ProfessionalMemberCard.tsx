import { Members, ProfMembers } from "@/types/members";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./style.css";


const ProfessionalMemberCard = ({
  member,
  className = "",
}: {
  member: ProfMembers;
  className?: string;
}) => {
  const { name, image, linkedin, mailid, desig, desig2 } = member;
  const mailtoRedirect = mailid ? "mailto:" + mailid : "";

  return (
    <div className={`flex flex-col justify-between h-full rounded-xl bg-white p-6 shadow-xl duration-500 hover:-translate-y-1 dark:bg-slate-800 lg:p-6 ${className}`}>
      <div>
        <img
          src={image || "/images/members/unknown-person.png"}
          alt={name}
          className="p-0.4 mx-auto -mt-16 h-40 w-40 rounded-full border-4 border-blue-600 object-cover shadow-md"
          width="160"
          height="160"
        />
        <div className="mt-6 text-center">
          <h4 className="mb-1 text-2xl font-semibold text-dark dark:text-white">{name}</h4>
          <div className="min-h-[50px] flex flex-col justify-center mb-4">
            <p className="text-sm text-body-color dark:text-body-color-dark">
              {desig || "\u00A0"}
            </p>
            {desig2 && (
              <p className="text-xs text-body-color/80 dark:text-body-color-dark/80 mt-0.5">
                {desig2}
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="mt-4 pt-2 border-t border-gray-100 dark:border-gray-700/40 text-center">
        <div className="flex items-center justify-center gap-4">
          <a
            href={linkedin}
            aria-label={`${name}'s LinkedIn profile`}
            className="inline-block opacity-60 transition duration-300 hover:-translate-y-0.5 hover:opacity-100 text-primary dark:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className="h-5 w-5"
              style={{ width: "20px", height: "20px" }}
            />
          </a>
          <a
            href={mailtoRedirect || "#"}
            aria-label={`Email ${name}`}
            className={`inline-block transition duration-300 ${
              mailtoRedirect
                ? "opacity-60 hover:-translate-y-0.5 hover:opacity-100 text-primary dark:text-white"
                : "pointer-events-none opacity-30 text-gray-400"
            }`}
            target={mailtoRedirect ? "_blank" : undefined}
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              className="h-5 w-5"
              style={{ width: "20px", height: "20px" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalMemberCard;