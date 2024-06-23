const Header = () => {
  return (
    <header className="px-5 py-5 bg-black/80">
      <div className="flex justify-between items-center px-5 py-0;">
        <div className="text-white text-[25px] font-bold uppercase;">
          <a href="/">FLIXX</a>
        </div>
        <nav>
          <ul className="flex">
            <li className="ml-5">
              <a
                className="text-base hover:text-[color:var(--color-secondary)]"
                href="/"
              >
                Movies
              </a>
            </li>
            <li className="ml-5">
              <a
                className="text-base hover:text-[color:var(--color-secondary)]"
                href="/shows.html"
              >
                TV Shows
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
