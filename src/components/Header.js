import logo from "../assets/logos/logo.png";

function Header() {
  return (
    <header className="bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <img src={logo} alt="Positivus Logo" className="h-6 w-auto" />
          <h1 className="text-3xl font-semibold tracking-tight">Positivus</h1>
        </a>

        {/* Navigation */}
        <nav>
          <ul className="flex items-center gap-12 font-medium">
            <li>
              <a href="/">About us</a>
            </li>

            <li>
              <a href="/">Services</a>
            </li>

            <li>
              <a href="/">Use Cases</a>
            </li>

            <li>
              <a href="/">Pricing</a>
            </li>

            <li>
              <a href="/">Blog</a>
            </li>
          </ul>
        </nav>

        {/* Button */}
        <button className="px-8 py-4 text-lg border border-black rounded-xl transition hover:bg-black hover:text-white hover:shadow-md">
          Request a quote
        </button>
      </div>
    </header>
  );
}

export default Header;
