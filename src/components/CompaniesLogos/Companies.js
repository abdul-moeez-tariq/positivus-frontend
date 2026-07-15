import amazon from "../../assets/images/logos/amazon.png";
import dribbble from "../../assets/images/logos/dribbble.png";
import hubspot from "../../assets/images/logos/hubspot.png";
import notion from "../../assets/images/logos/notion.png";
import netflix from "../../assets/images/logos/netflix.png";
import zoom from "../../assets/images/logos/zoom.png";

function Companies() {
  const companies = [
    {
      id: 1,
      name: "Amazon",
      logo: amazon,
    },
    {
      id: 2,
      name: "Dribbble",
      logo: dribbble,
    },
    {
      id: 3,
      name: "HubSpot",
      logo: hubspot,
    },
    {
      id: 4,
      name: "Notion",
      logo: notion,
    },
    {
      id: 5,
      name: "Netflix",
      logo: netflix,
    },
    {
      id: 6,
      name: "Zoom",
      logo: zoom,
    },
  ];

  return (
    <section className="bg-white py-10 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 items-center justify-items-center gap-8 sm:grid-cols-3 lg:grid-cols-6">
          {companies.map((company) => (
            <div
              key={company.id}
              className="group flex h-24 w-full items-center justify-center rounded-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="h-8 w-auto object-contain grayscale transition-all duration-300 group-hover:scale-110 group-hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Companies;
