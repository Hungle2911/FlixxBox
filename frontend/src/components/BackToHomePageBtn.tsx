import { Link } from "react-router-dom";
const BackToHomepageBtn = () => {
  return (
    <div className="back">
      <Link
        className="inline-block border border-[color:var(--color-secondary)] text-white cursor-pointer transition-all duration-[0.3s] ease-[ease-in-out] px-4 py-2 rounded-[5px] border-solid"
        to="/"
      >
        Back To Movies
      </Link>
    </div>
  );
};

export default BackToHomepageBtn;
