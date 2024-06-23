/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            outputPath: 'static/fonts/',
            publicPath: '/_next/static/fonts/',
            name: '[path][name].[ext]',
            context: 'src/', // This makes sure the [path] includes the subdirectories
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
