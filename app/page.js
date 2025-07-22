import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="text-white flex flex-col justify-center items-center min-h-[44vh] gap-4 px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-3xl sm:text-4xl font-bold py-2 flex flex-wrap justify-center gap-5 font-serif">
          Get your Funds here
          <span className="flex justify-center items-center">
            <Image width={44} height={44} src="/chai.gif" alt="Tea" />
          </span>
        </div>
        <p className="text-lg sm:text-xl font-mono">
          A crowdFunding Platform for creators. Get funded by your fans and followers. Start Now!
        </p>
        <div className="pt-4 flex flex-wrap gap-3 justify-center">
          <Link href={"/login"}>
            <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2">
              Start Here
            </button>
          </Link>
          <Link href={"/about"}>
            <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2">
              Read More
            </button>
          </Link>
        </div>
      </div>

      <div className="bg-white opacity-10 h-1" />

      <div className="text-white container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center my-4 font-serif">
          Your fans can fund you here
        </h2>
        <div className="flex flex-col sm:flex-row gap-8 justify-around text-center py-8 sm:py-16">
          {[
            {
              src: "/man.gif",
              title: "Build your tribe",
              desc: "Engage your fans and grow your community.",
            },
            {
              src: "/coin.gif",
              title: "Monetize your passion",
              desc: "Get direct support from fans with flexible plans.",
            },
            {
              src: "/man.gif",
              title: "Deliver exclusive value",
              desc: "Reward loyal fans with behind-the-scenes perks.",
            },
          ].map((item, idx) => (
            <div key={idx} className="space-y-3">
              <Image
                className="rounded-full bg-slate-400 p-2 mx-auto"
                width={100}
                height={100}
                src={item.src}
                alt=""
              />
              <p className="font-bold font-mono">{item.title}</p>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

      </div>

      <div className="bg-white opacity-10 h-1" />

      <div className="text-white container mx-auto px-4 flex flex-col justify-center items-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-center my-4 font-serif pb-6">
          Learn more about us
        </h2>
        <div className="w-full max-w-5xl aspect-video">
          <section className="max-w-4xl mx-auto px-4 text-center text-white py-12">
            <p className="text-2xl text-gray-300 leading-relaxed">
              PatreonHive is a platform built to empower creators. We help you connect with your audience,
              monetize your content, and grow your creative journey. Whether you&apos;re an artist, developer,
              writer, or podcaster — your supporters can fund you directly with flexible, secure tools.
            </p>
          </section>

          <section className="bg-black text-white py-12 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4 font-serif">Contact Us</h2>
              <p className="text-gray-300 mb-6">
                Have questions, suggestions, or want to collaborate? We&apos;d love to hear from you.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-6 text-left">
                <div>
                  <h3 className="text-xl font-semibold mb-1">📧 Email Id</h3>
                  <p className="text-gray-400">sujoysenmail@gmail.com</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-1">📱 Phone</h3>
                  <p className="text-gray-400">+91 81046 80815</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-1">🔗 LinkedIn</h3>
                  <a
                    href="https://www.linkedin.com/in/sujoy-sen710/"
                    className="text-blue-400 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkedin.com/in/sujoy-sen
                  </a>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </>
  );
}