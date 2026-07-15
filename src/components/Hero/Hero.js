import heroImage from "../../assets/images/hero/heroImage.png";

function Hero() {
  return (
    <section id="hero" className="bg-white">
      <div className="mx-auto flex max-w-7xl flex-col px-5 py-10 sm:px-6 md:py-14 lg:px-8 lg:py-20">
        {/* Mobile Heading */}
        <div className="lg:hidden">
          <h1 className="text-5xl font-medium leading-tight text-center text-black sm:text-5xl">
            Navigating the digital landscape for success
          </h1>
        </div>

        {/* Content */}
        <div className="mt-10 flex flex-col gap-10 lg:mt-0 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          {/* Left Side */}
          <div className="order-2 flex w-full flex-col items-center text-center lg:order-1 lg:w-1/2 lg:items-start lg:text-left">
            {/* Desktop Heading */}
            <h1 className="hidden text-6xl font-medium leading-tight text-black xl:text-7xl lg:block">
              Navigating the digital landscape for success
            </h1>

            <p className="mt-8 max-w-lg text-base leading-8 text-gray-600 sm:text-lg lg:text-xl">
              Our digital marketing agency helps businesses grow and succeed
              online through a range of services including SEO, PPC, social
              media marketing, and content creation.
            </p>

            <a
              href="#contact"
              className="mt-10 inline-flex items-center justify-center rounded-2xl bg-black px-8 py-4 text-lg font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#B9FF66] hover:text-black hover:shadow-xl"
            >
              Book a consultation
            </a>
          </div>

          {/* Right Side */}
          <div className="order-1 flex w-full justify-center lg:order-2 lg:w-1/2">
            <img
              src={heroImage}
              alt="Digital Marketing"
              className="w-full max-w-xs transition duration-500 hover:scale-105 sm:max-w-md lg:max-w-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
