import Script from "next/script";

export const metadata = {
  title: "Perdana Main",
  description: "Solution with codes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
        <link href="assets/style.css" rel="stylesheet" />
        <title>Perdana Main</title>

        <Script src="https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js"></Script>
        <Script src="/assets/script.js"></Script>
      </head>

      <body>{children}</body>
    </html>
  );
}
