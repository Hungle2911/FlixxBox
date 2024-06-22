import { Link } from "react-router-dom";
const BackToHomepageBtn = () => {
  return (
    <div className="back">
      <Link className="btn" to="/">
        Back To Movies
      </Link>
    </div>
  );
};

export default BackToHomepageBtn;
