/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        loader: 'imgix',
        path: '',
        domains: ['assets.aceternity.com'], // Ajoutez le domaine ici
    },
};

export default nextConfig;