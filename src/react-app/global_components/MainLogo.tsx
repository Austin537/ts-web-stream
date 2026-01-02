import logo from "../assets/ts_main_logo.svg";

type MainLogoProps = {
  size?: number;
};

function MainLogo({ size = 80 }: MainLogoProps) {
  return (
    <img
      src={logo}
      alt="Talonspire Main Logo"
      width={size}
      height={size}
    />
  );
}

export default MainLogo;
