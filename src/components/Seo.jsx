import { buildMetadata } from "@/lib/siteMetadata";

export default function Seo({
  title,
  description,
  canonical,
  ogTitle,
  ogDescription,
  ogUrl,
  ogImage,
  robots = "index,follow",
}) {
  const metadata = buildMetadata({
    title,
    description,
    path: canonical || "/",
    image: ogImage || "/images/nabadeep.png",
    robots,
  });

  return null;
}

export { buildMetadata };
