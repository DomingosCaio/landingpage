import Image from "next/image";
import Link from "next/link";
import Logo from "/public/logo.svg";
import Styles from "./header.module.scss";
import { Button } from "../button";

export const Header = () => {
  return (
    <div className={Styles.container}>
      <div className="logotipo">
        <Image src={Logo} alt="Logo" />
      </div>
      <div className={Styles.menu}>
        <Link href="/">Home</Link>
        <Link href="/">O que fazemos</Link>
        <Link href="/">Cases</Link>
      </div>
      <div>
        <Button title="Fale conosco" kind="primary" />
      </div>
    </div>
  );
};
