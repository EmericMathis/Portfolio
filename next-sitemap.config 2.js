/** @type {import('next-sitemap').IConfig} */
const config = {
    siteUrl: process.env.SITE_URL || 'https://www.emericmathis.com',
    generateRobotsTxt: true, // Génère aussi un fichier robots.txt
    sitemapSize: 7000, // Le nombre maximum de liens dans chaque sitemap
    alternateRefs: [
        {
            href: 'https://emericmathis.com',
            hreflang: 'en',
        },
        {
            href: 'https://emericmathis.com/fr',
            hreflang: 'fr',
        },
    ],
};

module.exports = config;
