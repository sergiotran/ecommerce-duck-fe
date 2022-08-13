const path = require("path");
const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require("next/constants");

/** @type {import('next').NextConfig} */
module.exports = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  // when `next build` or `npm run build` is used
  const isProd =
    phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== "1";
  // when `next build` or `npm run build` is used
  const isStaging =
    phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === "1";

  const env = {
    BACKEND_URL: (() => {
      if (isDev) {
        return `http://localhost:3000`;
      }
      return null;
    })()
  }

  return {
    reactStrictMode: true,
    swcMinify: true,
    sassOptions: {
      includePaths: [path.join(__dirname, "src/styles")],
    },
    env,
  };
};
