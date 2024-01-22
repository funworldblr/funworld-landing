import Footer from "@/components/Repeating/Footer";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Repeating/Navbar";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Funworld Bangalore - Premier Amusement & Water Park Adventures",
  description:
    "Prepare to be amazed by the incredible park attractions at our amusement park in Bangalore. From thrilling rides to captivating shows, there's something for everyone to enjoy. Get ready to experience a world of fun and create memories that will last a lifetime at Fun World!",
};

export default function RootLayout({ children }) {
  // useEffect(() => {
  //   Modal.setAppElement("#__next");
  // }, []);

  // useEffect(() => {
  //   // Your Google Tag Manager script here
  //   (function (w, d, s, l, i) {
  //     w[l] = w[l] || [];
  //     w[l].push({
  //       "gtm.start": new Date().getTime(),
  //       event: "gtm.js",
  //     });
  //     var f = d.getElementsByTagName(s)[0],
  //       j = d.createElement(s),
  //       dl = l != "dataLayer" ? "&l=" + l : "";
  //     j.async = true;
  //     j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
  //     f.parentNode.insertBefore(j, f);
  //   })(window, document, "script", "dataLayer", "GTM-MTC3R6J3");
  // }, []); // Empty dependency array to ensure it runs only on the client side

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      <html lang="en">
        <title>Funworld </title>
        {/* {typeof window !== "undefined" && (
          <AnimatedCursor
            innerSize={8}
            outerSize={24}
            color="0,0,0"
            outerAlpha={0.2}
            innerScale={0.7}
            outerScale={2}
            clickables={[
              "a",
              'input[type="text"]',
              'input[type="email"]',
              'input[type="number"]',
              'input[type="submit"]',
              'input[type="image"]',
              "label[for]",
              "select",
              "textarea",
              "button",
              ".link",
            ]}
          />
        )} */}
        <body className={`${inter.className} relative overflow-x-hidden`}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
}
