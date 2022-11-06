import Image from "next/image";
import mypic from "../assets/southkoreastreet.jpg";
import mypic2 from "../assets/undraw_online_chatting.svg";

function Chat() {
  return (
    <div class="py-16 bg-gradient-to-r from-cyan-100  to-rose-100 text-center grid place-items-center">
      <div class="py-4 space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
        <div class="md:5/12 lg:w-5/12">
          <Image
            src={mypic}
            alt="image"
            loading="lazy"
            width=""
            height=""
            class="pl-6 rounded-lg"
          />
        </div>
        <div class="md:7/12 lg:w-6/12">
          <div class="text-2xl text-gray-900 font-bold md:text-4xl">
            Know the price of a flight anytime and to anywhere, with only a single sentence.
          </div>
          <div class="mt-6 text-gray-600 text-lg">
            Skip the hassle of comparing prices and availabilities on different
            airlines. Flight Studio harnesses the power of{" "}
            <strong>artificial intelligence</strong> to predict the expected price of your trip, all from a{" "}
            <strong>single prompt</strong>.
          </div>
        </div>
        
      </div>
      <div class="grid place-items-center w-2/3 mt-4 py-6">
        <div class="text-2xl text-gray-900 font-bold md:text-4xl v">
          Get your price effortlessly.
        </div>
        <div class=" text-gray-600 text-lg py-4">
          Using a <strong>Machine Learning</strong> model with a correlation rate of 97%, Flight
          Studio only needs to know where and when you want to go, to give you an accurate price prediction.
        </div>
      </div>
      <div class="container px-6 text-gray-600 md:px-12 xl:px-6">
        <div class="py-4 space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div class="md:5/12 lg:w-5/12">
            <Image src={mypic2} alt="image" loading="lazy" width="" height="" />
          </div>
          <div class="md:7/12 lg:w-6/12">
            <h2 class="text-2xl text-gray-900 font-bold md:text-4xl">
              Share travel advice and experiences with others online
            </h2>
            <p class="mt-6 text-gray-600 text-lg px-100">
              We know planning can be hard, which is why Flight Studio offers{" "}
              <strong>focused chat rooms</strong> for users to share travel
              ideas and strategies. We enable a hub for travel-focused
              discussion, so that everyone can share and discover the best ways
              to plan their travels.
            </p>
          </div>
        </div>
      </div>
      <button class="text-white bg-gradient-to-r from-violet-600  to-rose-600 h-100 w-120 px-10 py-2 rounded-full">
        <a href="/flight-finder ">
          <div class="text-center text-lg font-medium">Try It Out Yourself</div>
        </a>
      </button>
    </div>
  );
}

export default Chat;
