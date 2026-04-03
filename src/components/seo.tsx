import { Helmet } from "react-helmet-async";
import { BRAND } from "../constants/constants";

type SEOProps = {
    title: string;
    description: string;
    keywords?: string;
    url?: string;
    image?: string;
    type?: "website" | "article";
};

export default function SEO({
    title,
    description,
    keywords = "",
    url = "",
    image = "/default-og.png",
    type = "website",
}: SEOProps) {
    const siteName = BRAND.NAME
    const fullTitle = `${title} | ${siteName}`;

    return (
        <Helmet>
            {/* Basic */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}

            {/* Open Graph (Facebook, LinkedIn, WhatsApp) */}
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content={type} />
            {url && <meta property="og:url" content={url} />}
            {image && <meta property="og:image" content={image} />}

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            {image && <meta name="twitter:image" content={image} />}

            {/* Optional extras */}
            <meta name="robots" content="index, follow" />
        </Helmet>
    );
}