import imgFem from "./imgFem.png";
import imgMas from "./imgMas.png";

const UserImage = ({ image }) => {
  const srcImagem = image === "Masculino" ? imgMas : imgFem;

  return <img src={srcImagem} alt="imagePNG" />;
};

export default UserImage;
