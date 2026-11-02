import Image from "next/image";
import styles from "../home.module.css";

// One shared source for every topic and viewport, supplied by the user.
const photograph = { src: "/images/picqtures-background.png" };

export function HomeBackground() {
  return <div className={styles.background} aria-hidden="true" data-background="unique" data-photo={Boolean(photograph.src)}>
    {photograph.src ? <Image src={photograph.src} alt="" fill priority sizes="100vw" /> : null}
  </div>;
}
