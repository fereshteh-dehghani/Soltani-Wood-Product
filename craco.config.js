module.exports = {
  style: {
    postcssOptions: {},
  },
  webpack: {
    configure: {
      ignoreWarnings: [{ message: /Failed to parse source map/ }],
    },
  },
};
