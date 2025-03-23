import React from 'react';

const Welcome: React.FC = () => {
    return (
        <div className="relative flex h-screen items-start justify-center bg-cover bg-center" style={{ backgroundImage: "url('/images/conclave/welcome.jpg')" }}>
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Text content */}
            <h1 className="relative z-10 mt-[32vh] text-[3rem] font-bold text-white lg:text-[5rem]">
                CONCLAVE 23
            </h1>
        </div>
    );
};

export default Welcome;