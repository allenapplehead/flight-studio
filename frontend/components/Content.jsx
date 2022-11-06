import Image from "next/image";
import mypic from "../assets/southkoreastreet.jpg";
import mypic2 from "../assets/undraw_online_chatting.svg";

function Chat() {
  return (
    <div className="py-16 bg-gradient-to-r from-cyan-100  to-rose-100 text-center grid place-items-center">
      <div className="py-4 space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12 ml-10">
        <div className="md:5/12 lg:w-5/12">
          <Image
            src={mypic}
            alt="image"
            loading="lazy"
            width=""
            height=""
            className="rounded-lg"
          />
        </div>
        
        <div class="md:7/12 lg:w-6/12">
          <div class="text-2xl text-gray-900 font-bold md:text-4xl">
            Anytime, anywhere, with only a single sentence.
          </div>
          <div className="mt-6 text-gray-600 text-lg">
            Skip the hassle of comparing prices and availabilities on different
            airlines. Flight Studio harnesses the power of{" "}
            <strong>artificial intelligence</strong> to predict the expected price of your trip, all from a{" "}
            <strong>single prompt</strong>.
          </div>
        </div>
      </div>
      <div class="grid place-items-center w-2/3 mt-4 py-6">
        <div class="text-2xl text-gray-900 font-bold md:text-4xl v">
          Find flights naturally and effortlessly.
        </div>
        <div class=" text-gray-600 text-lg py-4">
          Using <strong>Natural Language Processing</strong> models, Flight
          Studio identifies where and when you want to go with a single sentence.
        </div>
      </div>
      <div className="container px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="py-4 space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <Image src={mypic2} alt="image" loading="lazy" width="" height="" />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              Share travel advice and experiences with others online
            </h2>
            <p className="mt-6 text-gray-600 text-lg px-100">
              We know planning can be hard, which is why Flight Studio offers{" "}
              <strong>focused chat rooms</strong> for users to share travel
              ideas and strategies. We enable a hub for travel-focused
              discussion, so that everyone can share and discover the best ways
              to plan their travels.
            </p>
          </div>
        </div>
      </div>
      <button className="text-white bg-gradient-to-r from-sky-600  to-teal-300 h-100 w-120 px-10 py-2 rounded-full">
        <a href="">
          <div className="text-center text-lg font-medium">
            Try It Out Yourself
          </div>
        </a>
      </button>
    </div>
  );
}

export default Chat;
