import Head from "next/head";

export default function SEO({
  title = "LlamaCorp",
  description = "Open and transparent solutions for the decentralized world",
  imageUrl = "https://llama-corp.com/og.png",
}) {
  const windowURL =
    typeof window !== "undefined" && window.location.href
      ? window.location.href
      : "";

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />

      <meta property="og:url" content={windowURL} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="LlamaCorp" />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="llama-corp.com" />
      <meta property="twitter:url" content={windowURL} />
      <meta name="twitter:title" content="LlamaCorp" />
      <meta name="twitter:site" content="@LlamaCorpOrg" />
      <meta name="twitter:creator" content="@LlamaCorpOrg" />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Head>
  );
}
