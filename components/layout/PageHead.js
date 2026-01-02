import Head from 'next/head'

const PageHead = ({ headTitle, description, ogImage, url }) => {
    const defaultTitle = "Autoniukas - Profesionalios Krovinių Pervežimo Paslaugos";
    const defaultDescription = "Patikimos logistikos ir krovinių pervežimo paslaugos Lietuvoje ir Europoje. Daugiau nei 20 metų patirtis. Saugus ir laiku atliekamas pristatymas.";
    const defaultOgImage = "/autoniukas.png";
    const siteUrl = "https://autoniukas.lt";

    const title = headTitle || defaultTitle;
    const desc = description || defaultDescription;
    const image = ogImage || defaultOgImage;
    const pageUrl = url || siteUrl;

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={desc} />
                
                {/* Favicon */}
                <link rel="icon" type="image/svg+xml" href="/autoniukas_icon.svg" />
                <link rel="shortcut icon" href="/autoniukas_icon.svg" />
                <link rel="apple-touch-icon" href="/autoniukas_icon.svg" />
                
                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content={pageUrl} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={desc} />
                <meta property="og:image" content={image} />
                
                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={pageUrl} />
                <meta property="twitter:title" content={title} />
                <meta property="twitter:description" content={desc} />
                <meta property="twitter:image" content={image} />
                
                {/* Additional Meta Tags */}
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="Autoniukas, UAB" />
                <link rel="canonical" href={pageUrl} />
            </Head>
        </>
    )
}

export default PageHead