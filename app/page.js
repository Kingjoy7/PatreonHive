import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="text-white flex flex-col justify-center items-center h-[44vh] gap-4">
        <div className="text-3xl font-bold py-2 flex justify-center gap-5 font-serif">Buy Me A Chai
          <span className="flex justify-center items-center invert-0">
            <img width={44} src="chai.gif" alt="Tea" />
          </span>
        </div>
        <p>
          A crowdFunding Platform for creators.Get funded by your fans and followers.Start Now!
        </p>
        <div className="pt-4 gap-3">
          <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>

          <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
        </div>
      </div>
      <div className="bg-white opacity-10 h-1">
      </div>
      <div className="text-white container mx-auto">
        <h2 className="text-3xl font-bold text-center my-4 font-serif">Your fans can buy you a Chai</h2>
        <div className="flex gap-5 justify-around text-center py-16">
          <div className="space-y-3">
            <img className="item rounded-full bg-slate-400 p-2 mx-auto" width={100} src="man.gif" alt="" />
            <p className="text-white font-bold font-mono">Fans want to help</p>
            <p className="text-white">Your fans are available to help you</p>
          </div>
          <div className="space-y-3">
            <img className="item rounded-full bg-slate-400 p-2 mx-auto" width={100} src="coin.gif" alt="" />
            <p className="text-white font-bold font-mono">Fans want to help</p>
            <p className="text-white">Your fans are available to help you</p>
          </div>
          <div className="space-y-3">
            <img className="item rounded-full bg-slate-400 p-2 mx-auto" width={100} src="man.gif" alt="" />
            <p className="text-white font-bold font-mono">Fans want to help</p>
            <p className="text-white">Your fans are available to help you</p>
          </div>
        </div>
      </div>
      <div className="bg-white opacity-10 h-1">
      </div>
      <div className="text-white container mx-auto flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold text-center my-4 font-serif pb-9">Learn more about us</h2>
        <iframe
          width="780"
          height="400"
          src="https://www.youtube.com/embed/2rLIjqEM3Nw"
          title="🤯 Record-Breaking Run Chase | 378 To Win | England v India 2022"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>

      </div>
    </>
  );
}
