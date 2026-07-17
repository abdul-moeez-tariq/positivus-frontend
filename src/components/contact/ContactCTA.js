import { Link } from "react-router-dom";
import { HiArrowRight, HiCheckCircle, HiSparkles } from "react-icons/hi2";

function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-[#191A23] py-20 sm:py-24 lg:py-28">
      {/* Background Glow */}
      <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-[#B9FF66]/20 blur-3xl"></div>

      <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[36px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-2xl sm:p-10 lg:p-16">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Left Side */}

            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#B9FF66] px-4 py-2">
                <HiSparkles className="text-xl text-black" />

                <span className="text-sm font-semibold text-black">
                  Ready To Get Started?
                </span>
              </div>

              <h2 className="mt-8 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                Let's Build Something Amazing Together.
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-300">
                Whether you need a modern website, web application, mobile app,
                or complete digital solution, our Full Stack Development team is
                ready to turn your ideas into reality.
              </p>

              <div className="mt-10 flex flex-col gap-5">
                <div className="flex items-center gap-4">
                  <HiCheckCircle className="text-2xl text-[#B9FF66]" />

                  <span className="text-gray-300">
                    Free Project Consultation
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <HiCheckCircle className="text-2xl text-[#B9FF66]" />

                  <span className="text-gray-300">
                    Modern & Scalable Solutions
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <HiCheckCircle className="text-2xl text-[#B9FF66]" />

                  <span className="text-gray-300">
                    Dedicated Technical Support
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <HiCheckCircle className="text-2xl text-[#B9FF66]" />

                  <span className="text-gray-300">
                    Fast Delivery & Clean Code
                  </span>
                </div>
              </div>
            </div>

            {/* Right Side */}

            <div className="rounded-[32px] bg-white p-8 shadow-2xl sm:p-10">
              <h3 className="text-3xl font-bold text-[#191A23]">
                Why Choose Positivus?
              </h3>

              <p className="mt-5 leading-8 text-gray-600">
                We build high-performance digital products with premium user
                experience, clean architecture, and scalable technologies that
                help businesses grow faster.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-6">
                <div className="rounded-2xl bg-[#F8FAFC] p-6 text-center">
                  <h4 className="text-4xl font-bold text-[#191A23]">150+</h4>

                  <p className="mt-2 text-gray-600">Projects</p>
                </div>

                <div className="rounded-2xl bg-[#F8FAFC] p-6 text-center">
                  <h4 className="text-4xl font-bold text-[#191A23]">98%</h4>

                  <p className="mt-2 text-gray-600">Satisfaction</p>
                </div>

                <div className="rounded-2xl bg-[#F8FAFC] p-6 text-center">
                  <h4 className="text-4xl font-bold text-[#191A23]">24/7</h4>

                  <p className="mt-2 text-gray-600">Support</p>
                </div>

                <div className="rounded-2xl bg-[#F8FAFC] p-6 text-center">
                  <h4 className="text-4xl font-bold text-[#191A23]">5★</h4>

                  <p className="mt-2 text-gray-600">Reviews</p>
                </div>
              </div>

              <Link
                to="/contact"
                className="mt-10 inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-[#191A23] px-8 py-5 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#B9FF66] hover:text-black hover:shadow-2xl"
              >
                Start Your Project
                <HiArrowRight className="text-2xl" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactCTA;
