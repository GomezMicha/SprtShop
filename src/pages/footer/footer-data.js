import {
  Instagram,
  Twitter,
  Facebook,
  Pinterest,
  Youtube,
} from "react-bootstrap-icons";

export const socialMediaSvgData = [
  { id: "Instagram", url: "https://instagram.com", svg: <Instagram /> },
  { id: "Twitter", url: "https://twitter.com", svg: <Twitter /> },
  { id: "Facebook", url: "https://facebook.com", svg: <Facebook /> },
  { id: "Pinterest", url: "https://pinterest.com", svg: <Pinterest /> },
  { id: "Youtube", url: "https://youtube.com", svg: <Youtube /> },
];

export const paymentMethodsData = [
  {
    id: "amex01",
    src: "/images/paymentmethods/americanexpress.svg",
    alt: "AmericanExpress",
    height: 13,
  },
  {
    id: "discover02",
    src: "/images/paymentmethods/discover.svg",
    alt: "Discover",
    height: 7,
  },
  {
    id: "master03",
    src: "/images/paymentmethods/master.svg",
    alt: "MasterCard",
    height: 20,
  },
  {
    id: "paypal04",
    src: "/images/paymentmethods/paypal.svg",
    alt: "PayPal",
    height: 10,
  },
  {
    id: "visa05",
    src: "/images/paymentmethods/visa.svg",
    alt: "Visa",
    height: 13,
  },
];
