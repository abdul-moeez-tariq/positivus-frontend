import {
  HiOutlineMapPin,
  HiOutlinePhone,
  HiOutlineEnvelope,
} from "react-icons/hi2";

function OfficeMap() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-[#B9FF66] px-4 py-2 text-sm font-semibold text-black">
            Our Office
          </span>

          <h2 className="mt-6 text-4xl font-bold text-[#191A23] sm:text-5xl">
            Visit Our Workspace
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            We'd love to meet you in person. Visit our office or schedule a
            meeting with our team.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-3">
          {/* Left Side */}
          <div className="rounded-3xl bg-[#191A23] p-8 text-white shadow-2xl lg:p-10">
            <h3 className="text-3xl font-bold">Positivus Digital Agency</h3>

            <p className="mt-5 leading-8 text-gray-300">
              Building modern websites, scalable web applications and mobile
              apps for startups and businesses worldwide.
            </p>

            <div className="mt-10 flex flex-col gap-8">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#B9FF66] text-2xl text-black">
                  <HiOutlineMapPin />
                </div>

                <div>
                  <h4 className="text-lg font-semibold">Address</h4>

                  <p className="mt-2 text-gray-300">
                    123 Business Avenue
                    <br />
                    Lahore, Punjab
                    <br />
                    Pakistan
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#B9FF66] text-2xl text-black">
                  <HiOutlinePhone />
                </div>

                <div>
                  <h4 className="text-lg font-semibold">Phone</h4>

                  <p className="mt-2 text-gray-300">+92 300 1234567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#B9FF66] text-2xl text-black">
                  <HiOutlineEnvelope />
                </div>

                <div>
                  <h4 className="text-lg font-semibold">Email</h4>

                  <p className="mt-2 text-gray-300">hello@positivus.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="overflow-hidden rounded-3xl shadow-2xl lg:col-span-2">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps?q=Lahore,Pakistan&output=embed"
              className="h-[450px] w-full border-0 lg:h-full"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OfficeMap;
