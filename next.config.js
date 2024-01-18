module.exports = async (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
      domains: ["api.fostech.vn"],
    },
    env: {
      // Biến môi trường
      API_URL: "https://api.fostech.vn/api/60939744ac969b4078488026",
      ACCESS_TOKEN: "f2ff5f0947d68f32d344142f38a2094b",

      //consultant.fostech@gmail.com
      // EMAIL_JS_SERVICE: "service_utnh49k",
      // EMAIL_JS_USER: "qrhSD4tg9Ih-v4UjY",
      // EMAIL_JS_TEMPLATE: "template_05wvxwf",

      //yandex
      EMAIL_JS_SERVICE: "service_k5mi2ag",
      EMAIL_JS_USER: "qrhSD4tg9Ih-v4UjY",
      EMAIL_JS_TEMPLATE: "template_05wvxwf",

      // GOOGLE_ID:
      //   "617409688993-5mlsluqkl84n758m4sogrllqsbrq20ch.apps.googleusercontent.com",
      // GOOGLE_SECRET: "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",

      // FACEBOOK_ID: "782511933196689",
      // FACEBOOK_SECRET: "47415a6a843e415a54edc3914421a7db",

      // NEXTAUTH_URL: "http://localhost:3000",

      // JWT_SECRET: "RBrQfd51Swx0xxstIFWGRgxvw",
    },
  };

  return nextConfig;
};
