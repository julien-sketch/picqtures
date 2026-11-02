import Image from "next/image";
import styles from "../services.module.css";

const shop = "https://www.fr.farmasi.com/marionjulien";
const products = [
 {name: "Aloe Glow Mango", image: "/images/farmasi-1002123.webp", description: "Consultez la fiche et l’étiquetage du produit pour connaître ses caractéristiques et ses conditions d’utilisation.", url: `${shop}/product-detail/aloe-glow-mango?pid=1002123`},
 {name: "Nutriplus Café Instantané Soluble Mélange de Chicorée", image: "/images/farmasi-9000850.webp", description: "Consultez la fiche et l’étiquetage du produit pour connaître ses caractéristiques et ses conditions d’utilisation.", url: `${shop}/product-detail/nutriplus-cafe-instantane-soluble-melange-de-chicoree?pid=9000850`},
 {name: "Nutriplus Serenity Thé Noir", image: "/images/farmasi-1000809.webp", description: "Consultez la fiche et l’étiquetage du produit pour connaître ses caractéristiques et ses conditions d’utilisation.", url: `${shop}/product-detail/nutriplus-serenity-the-noir?pid=1000809`},
];


export function FarmasiSelection() {
  return <section id="farmasi" className={styles.editorialSection}>
    <h2>Découvrir ma sélection Farmasi</h2>
    <p>Je propose également des produits Farmasi dans le cadre de mon activité commerciale. Cette sélection est distincte de l’accompagnement PICQ’TURES : aucun achat n’est nécessaire pour me confier une recherche.</p>
    <p>Consultez les fiches et l’étiquetage des produits pour connaître leurs caractéristiques et conditions d’utilisation.</p>
    <a className={styles.textLink} href={shop} target="_blank" rel="noreferrer">Découvrir la sélection Farmasi <span aria-hidden="true">↗</span></a>
    <ul className={styles.farmasiProducts}>{products.map(product => <li key={product.url}>
      <Image src={product.image} alt={product.name} width={180} height={180} sizes="(max-width: 600px) 120px, 180px" />
      <div><h3>{product.name}</h3><p>{product.description}</p><a className={styles.textLink} href={product.url} target="_blank" rel="noreferrer">Consulter la fiche produit <span aria-hidden="true">↗</span></a></div>
    </li>)}</ul>
  </section>;
}
