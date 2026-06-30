import amazon from "../assets/logos/amazon.png";
import dribbble from "../assets/logos/dribbble.png";
import hubspot from "../assets/logos/hubspot.png";
import notion from "../assets/logos/notion.png";
import netflix from "../assets/logos/netflix.png";
import zoom from "../assets/logos/zoom.png";

function Companies() {
  return (
    <section className="bg-white py-12">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-5">
        <img src={amazon} alt="Amazon" className="h-10 object-contain" />

        <img src={dribbble} alt="Dribbble" className="h-10 object-contain" />

        <img src={hubspot} alt="HubSpot" className="h-10 object-contain" />

        <img src={notion} alt="Notion" className="h-10 object-contain" />

        <img src={netflix} alt="Netflix" className="h-10 object-contain" />

        <img src={zoom} alt="Zoom" className="h-10 object-contain" />
      </div>
    </section>
  );
}

export default Companies;
