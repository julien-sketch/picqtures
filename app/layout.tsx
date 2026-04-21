import type { Metadata } from "next";
import Script from "next/script";
import { Figtree, Instrument_Serif, Syne } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-farmasi-body",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-farmasi-display",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-farmasi-serif",
});

export const metadata: Metadata = {
  title: "Julien Veyrac | Business, image, gain de temps, sans filtre",
  description:
    "Hub personnel de Julien Veyrac pour decouvrir ses services, ses ressources et ses projets autour du business, de l'image et du gain de temps.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MPL9N94V');
          `}
        </Script>
      </head>
      <body
        className={`${figtree.variable} ${syne.variable} ${instrumentSerif.variable} min-h-screen bg-[#faf6ef] text-[#1f1a16] [font-family:var(--font-farmasi-body)] antialiased`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MPL9N94V"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {children}
      </body>
    </html>
  );
}