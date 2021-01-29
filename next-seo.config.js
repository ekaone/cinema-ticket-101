const title = "Cinema Ticket";
const description = "Cinema Ticket, order your ticket for awesome movies.";

const SEO = {
  title,
  description,
  canonical: "https://cinema-ticket-101.vercel.app",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://cinema-ticket-101.vercel.app",
    title,
    description,
    images: [
      {
        url: "https://cinema-ticket-101.vercel.app/images/banner.png",
        alt: title,
        width: 1024,
        height: 1024,
      },
    ],
  },
  twitter: {
    handle: "@dannyeka",
    site: "@dannyeka",
    cardType: "summary_large_image",
  },
};

export default SEO;
