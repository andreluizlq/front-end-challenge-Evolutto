/* eslint-disable react/style-prop-object */
import logo from "./logoImage.png";

const logoImage = ({ width }) => {
  return <img src={logo} alt="imagePNG" style={{ width: width }} />;
};

export default logoImage;
