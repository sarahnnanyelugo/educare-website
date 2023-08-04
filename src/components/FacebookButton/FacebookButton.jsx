import "./facebook-button.scss";
import Facebook from "../../assets/images/fb.png";

export const FacebookButton = () => {
  return (
    <>
      <button className="facebook-button">
        {" "}
        <img className="" src={Facebook} alt="Scholar" width="5%" />
        Facebook
      </button>
    </>
  );
};
