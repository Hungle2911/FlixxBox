const Footer = () => {
  return (
    <footer className="mt-5 px-0 py-5 bg-black/80">
      <div className="flex justify-between items-center px-4">
        <div className="text-white text-[25px] font-bold uppercase">
          <span>FLIXX</span>
        </div>
        <div className="flex text-xl">
          <a href="https://www.facebook.com" target="_blank">
            <i className="fab fa-facebook-f text-white ml-2.5 hover:text-[color:var(--color-secondary)]" />
          </a>
          <a href="https://www.twitter.com" target="_blank">
            <i className="fab fa-twitter text-white ml-2.5 hover:text-[color:var(--color-secondary)]" />
          </a>
          <a href="https://www.instagram.com" target="_blank">
            <i className="fab fa-instagram text-white ml-2.5 hover:text-[color:var(--color-secondary)]" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
