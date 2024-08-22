import Image from "next/image";
import Link from "next/link";
import Logo from "/public/images/logo.svg";
import Styles from "./header.module.scss";

const Header = () => {
return (
<div className={Styles.container}>

<div className= {Styles.action}>
      <button className= {Styles.button}>Fale conosco</button>
    </div>

    <div className= {Styles.logotipo}>
   <h1>TECHFUTURE</h1>
  </div>

   <div className= {Styles.menu}>
        <Link href="https://www.instagram.com/ahmaddeponti/">Quem somos!</Link>
    </div>
</div>

);

};

export default Header;