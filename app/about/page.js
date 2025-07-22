import React from "react";

const About = () => {
    return (
        <div className="text-gray-100 bg-gradient-to-br from-black via-gray-900 to-black p-8 min-h-screen flex flex-col items-center justify-start space-y-12">
            {/* Hero Section */}
            <div className="mt-24 text-center space-y-6 max-w-4xl">
                <h1 className="text-5xl font-extrabold font-serif tracking-wide text-white">
                    About Us
                </h1>
                <p className="text-lg font-light font-mono text-gray-200">
                    Welcome to our crowdfunding platform — a digital space designed to empower dreamers, creators, and changemakers. Here, ideas transcend boundaries, and communities rally behind the initiatives they believe in.
                </p>
            </div>

            {/* Vision Section */}
            <div className="bg-gray-950 rounded-xl shadow-lg p-10 w-full max-w-5xl text-center">
                <h2 className="text-4xl font-bold font-serif mb-4 text-white">Our Vision</h2>
                <p className="text-lg font-mono leading-relaxed text-gray-300">
                    We envision a world where creativity is not limited by access to capital. Our platform bridges the gap between creators and contributors, fostering authentic collaboration and sustainable innovation. We believe that every story deserves to be heard and supported.
                </p>
            </div>

            {/* Impact Section */}
            <div className="bg-gray-950 rounded-xl shadow-lg p-10 w-full max-w-5xl text-center">
                <h2 className="text-4xl font-bold font-serif mb-4 text-white">Why We Exist</h2>
                <p className="text-lg font-mono leading-relaxed text-gray-300">
                    In an era of digital expression, creators need tools, not just applause. We offer those tools—and a community. Whether it's funding a breakthrough product or amplifying voices from underrepresented groups, we exist to turn potential into impact.
                </p>
            </div>

            {/* Call to Action */}
            <div className="text-center space-y-4">
                <p className="text-md font-light font-mono text-gray-300">
                    Ready to support brilliant minds or launch your own idea?
                </p>
                <a href="/login">
                    <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 mt-5 rounded-lg font-semibold">
                        Join the Movement
                    </button>
                </a>
            </div>
        </div>
    );
};

export default About;

//export meta data
export const metadata = {
    title: "About - PatreonHive",
};