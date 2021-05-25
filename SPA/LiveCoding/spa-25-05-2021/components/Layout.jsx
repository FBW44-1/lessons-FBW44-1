import React, { useState } from "react";
import Link from "next/link";
import cssStyles from "../styles/Layout.module.css";

export default function Layout(props) {
  const [footer, setFooter] = useState("2021 footer");
  return (
    <div>
      <nav className={cssStyles.navbar}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      {props.children}
      <footer className={cssStyles.footer}>&copy;{footer}</footer>
    </div>
  );
}
