import heroImage from "../assets/images/heroImage.png";

function Hero() {
  return (
    <section className="bg-white">
      <div className="flex items-center justify-between max-w-7xl mx-auto p-5">
        {/* Left Content */}
        <div className="flex flex-col w-1/2 gap-8">
          <h1 className="text-7xl font-medium leading-tight text-black">
            Navigating the digital landscape for success
          </h1>

          <p className="text-xl leading-relaxed text-gray-700">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>

          <button
            type="button"
            className="w-fit px-8 py-4 rounded-xl border border-black bg-neutral-900 text-lg font-medium text-white transition-colors duration-300 hover:bg-black"
          >
            Book a consultation
          </button>
        </div>

        {/* Right Content */}
        <div className="flex justify-end w-1/2">
          <img
            src={heroImage}
            alt="Hero Illustration"
            className="w-full max-w-xl"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
