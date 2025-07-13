import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="text-white flex flex-col justify-center items-center min-h-[44vh] gap-4 px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-3xl sm:text-4xl font-bold py-2 flex flex-wrap justify-center gap-5 font-serif">
          Get your Funds here
          <span className="flex justify-center items-center">
            <img width={44} src="chai.gif" alt="Tea" />
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
          {[{ src: "man.gif" }, { src: "coin.gif" }, { src: "man.gif" }].map((item, idx) => (
            <div key={idx} className="space-y-3">
              <img className="rounded-full bg-slate-400 p-2 mx-auto" width={100} src={item.src} alt="" />
              <p className="font-bold font-mono">Fans want to help</p>
              <p>Your fans are available to help you</p>
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
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/2rLIjqEM3Nw"
            title="🤯 Record-Breaking Run Chase | 378 To Win | England v India 2022"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
}