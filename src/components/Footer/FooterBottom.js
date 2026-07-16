function FooterBottom() {
  return (
    <section className="py-10">
      {/* Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

      <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        {/* Left */}
        <div className="flex flex-col gap-4">
          <p className="text-sm leading-7 text-white">
            © {new Date().getFullYear()} Positivus. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <a
              href="/privacy-policy"
              className="text-sm text-[#B9FF66] transition-all duration-300 hover:text-[#B9FF66]"
            >
              Privacy Policy
            </a>

            <a
              href="/terms-and-conditions"
              className="text-sm text-[#B9FF66] transition-all duration-300 hover:text-[#B9FF66]"
            >
              Terms & Conditions
            </a>

            <a
              href="/cookies"
              className="text-sm text-[#B9FF66] transition-all duration-300 hover:text-[#B9FF66]"
            >
              Cookie Policy
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-5">
          <span className="text-sm text-white">
            Designed & Developed by{" "}
            <span className="font-semibold text-[#B9FF66]">Abdul Moeez</span>
          </span>
        </div>
      </div>
    </section>
  );
}

export default FooterBottom;
