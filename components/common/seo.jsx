import React from "react";
import Head from "next/head";

export default function Seo(props) {
  const { title, description, url, thumbnailUrl } = props.data;

  return (
    <Head>
      <title>{title ? title : "Fostech Consultant"}</title>

      <meta name="title" content={title} />
      <meta name="description" content={description} />

      <meta itemprop="name" content={title} />
      <meta itemprop="description" content={description} />
      <meta itemprop="image" content={thumbnailUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={thumbnailUrl} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={thumbnailUrl} />
    </Head>
  );
}
