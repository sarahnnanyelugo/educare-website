import "./linkedin-button.scss";
import Facebook from "../../assets/images/link.jpeg";

export const LinkedInButton = () => {
  return (
    <>
      <button className="linkedin-button">
        {" "}
        <img className="" src={Facebook} alt="Scholar" />
        LinkedIn
      </button>
    </>
  );
};
