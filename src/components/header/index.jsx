import Image from "next/image";
import Link from "next/link";
import Logo from "/public/logo.svg";
import Styles from "./header.module.scss";

export const Header = () => {
  return (
    <div className={Styles.container}>
      <div className="logotipo">
        <Image src={Logo} />
      </div>
      <div className={Styles.menu}>
        <Link href="/">Home</Link>
        <Link href="/">O que fazemos</Link>
        <Link href="/">Cases</Link>
      </div>
      <button className={Styles.button}>Fale conosco</button>
    </div>
  );
};
