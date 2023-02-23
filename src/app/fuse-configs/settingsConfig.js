const settingsConfig = {
  layout: {
    style: 'layout1', // layout1 layout2 layout3
    config: {}, // checkout default layout configs at app/fuse-layouts for example  app/fuse-layouts/layout1/Layout1Config.js
  },
  customScrollbars: true,
  direction: 'rtl', // rtl, ltr
  theme: {
    main: 'default',
    navbar: 'greyDark',
    toolbar: 'mainThemeLight',
    footer: 'mainThemeDark',
  },
  loginRedirectUrl: '/', // Default redirect url for the logged-in user
};

export default settingsConfig;
