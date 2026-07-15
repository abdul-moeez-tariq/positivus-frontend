import ServiceCard from "./ServiceCard";
import servicesData from "./servicesData";

export default function Services() {
  return (
    <section id="services" className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-center">
          <span className="w-fit rounded-md bg-lime-300 px-3 py-1 text-3xl font-semibold">Services</span>
          <p className="max-w-2xl text-gray-600">
            Full Stack Development services tailored to build modern, scalable and high-performance web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
