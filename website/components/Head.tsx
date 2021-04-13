import NextHead from "next/head";
import { FC } from "react";

interface Props {
  title: string | string[];
  description?: string;
  url?: string;
  img?: string;
}

const Head: FC<Props> = ({ title, description, url, img, children }) => {
  const t = typeof title === "string" ? title : title.join(" | ");

  return (
    <NextHead>
      <title key="title">{t} | Anolis UI</title>
      <meta property="og:title" content={`${t} | Anolis UI`} key="og_title" />

      {description && (
        <>
          <meta name="description" content={description} key="description" />
          <meta property="og:description" content={description} key="og_description" />
        </>
      )}

      {img && <meta property="og:image" content={img} key="og_image" />}

      {children}
    </NextHead>
  );
};

export default Head;
