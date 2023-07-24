// /** @type {import('next').NextConfig} */

// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,

// };

// module.exports = nextConfig;
module.exports = {
    images: {
        domains: ["cdn.sanity.io"],
    },
    // ...
    webpack(config) {
        config.module.rules.push({
            test: /\.css$/,
            use: [
                "style-loader",
                "css-loader",
                {
                    loader: "postcss-loader",
                    options: {
                        postcssOptions: {
                            config: "./postcss.config.js",
                        },
                    },
                },
            ],
        });

        return config;
    },
    // ...
};
