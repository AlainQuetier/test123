import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="Découvrez l'impact environnemental de l'intelligence artificielle et apprenez comment agir pour un avenir numérique plus durable." />
        <meta name="keywords" content="IA, Intelligence Artificielle, Environnement, Écologie, Développement Durable, Numérique Responsable" />
        <meta name="author" content="IA & Environnement" />
        <link rel="icon" href="/greenit/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}