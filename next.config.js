/** @type {import('next').NextConfig} */

module.exports = (phase, { defaultConfig }) => {
    return {
        ...defaultConfig,

        images: {
            domains: ["cloudflare-ipfs.com"],
        },

        webpack: (config) => {
            config.resolve = {
                ...config.resolve,
                fallback: {
                    fs: false,
                    path: false,
                    os: false,
                },
            };
            return config;
        },
    };
};
