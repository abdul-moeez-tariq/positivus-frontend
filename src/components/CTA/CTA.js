import ctaImage from "../../assets/images/cta/ctaImage.png";

function CTA() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[40px] bg-gray-100 shadow-sm">
          <div className="flex flex-col items-center gap-12 p-8 sm:p-10 lg:flex-row lg:justify-between lg:p-14">
            {/* Left Content */}
            <div className="max-w-xl text-center lg:text-left">
              <h2 className="text-3xl font-semibold leading-tight text-black sm:text-4xl">
                Let's make things happen
              </h2>

              <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg">
                Contact us today to learn more about how our Full Stack
                Development services can help your business grow with modern,
                scalable and high-performance web applications.
              </p>

              <a
                href="#contact"
                className="mt-8 inline-flex items-center justify-center rounded-2xl bg-black px-8 py-4 text-lg font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#B9FF66] hover:text-black hover:shadow-xl"
              >
                Get your free proposal
              </a>
            </div>

            {/* Right Image */}
            <div className="flex justify-center">
              <img
                src={ctaImage}
                alt="CTA Illustration"
                className="w-full max-w-xs transition duration-500 hover:scale-105 sm:max-w-sm lg:max-w-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
