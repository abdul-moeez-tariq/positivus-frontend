import FooterLinks from "./FooterLinks";
import Newsletter from "./Newsletter";
import SocialLinks from "./SocialLinks";
import FooterBottom from "./FooterBottom";

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#191A23] pt-20">
      {/* Background Glow */}
      <div className="absolute -left-40 top-0 h-80 w-80 rounded-full bg-[#B9FF66]/10 blur-3xl"></div>

      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#B9FF66]/5 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="rounded-[40px] border border-white/10 bg-white/5 p-8 backdrop-blur-md sm:p-10 lg:p-12">
          {/* Top Row */}
          <div className="flex flex-col gap-10 xl:flex-row xl:items-start xl:justify-between">
            {/* Company Info */}
            <div className="max-w-md">
              <h2 className="text-4xl font-bold text-white">Positivus</h2>

              <p className="mt-6 text-base leading-8 text-gray-300">
                We build modern, scalable and high-performance digital
                experiences that help businesses grow with confidence.
              </p>

              <div className="mt-8">
                <SocialLinks />
              </div>
            </div>

            {/* Navigation */}
            <FooterLinks />
          </div>

          {/* Newsletter */}
          <div className="mt-16">
            <Newsletter />
          </div>
        </div>

        {/* Bottom */}
        <FooterBottom />
      </div>
    </footer>
  );
}

export default Footer;
