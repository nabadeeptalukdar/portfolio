export const siteUrl = "https://nabadeeptalukdar.com";

export function buildAbsoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

export function buildMetadata({
  title,
  description,
  path = "/",
  image = "/images/nabadeep.png",
  robots = "index,follow",
}) {
  const canonical = buildAbsoluteUrl(path);
  const ogImage = buildAbsoluteUrl(image);

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    robots,
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Nabadeep Talukdar",
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
