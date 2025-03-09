import Image from "next/image";
import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const Genesis = () => {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
    {/* Genesis Logo */}
   <Image
      src="/images/events/10/genesis.jpeg" // Replace with actual logo path
      alt="Genesis Logo"
      width={600}
      height={150}
      className="mb-4"
    />

    {/* Divider */}
    <hr className="w-full border-t-2 border-gray-400 mb-6" />

    {/* Genesis Buttons */}
    <div className="flex flex-col space-y-4">
      <Link href="genesis/genesis1">
        <button style={{
    width: "50rem",
    backgroundColor: "#FACC15", // Equivalent to bg-yellow-500
    color: "white",
    fontSize: "1.5rem",
    fontWeight: "bold",
    padding: "1rem 0",
    borderRadius: "0.5rem",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "background-color 0.3s ease",
    
  }}
>
          GENESIS 1.0
        </button>
      </Link>

      <Link href="genesis/genesis2">
        <button className="w-80 bg-blue-600 text-white text-2xl font-bold py-4 rounded-lg shadow-md transition hover:bg-blue-600" style={{width: "50rem",}}>
          GENESIS 2.0
        </button>
      </Link>
    </div>
  </div>
  );
};

export default Genesis;
