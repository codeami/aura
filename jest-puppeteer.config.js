module.exports = {
    launch: {
      dumpio: true,
      headless: process.env.HEADLESS === 'false',
      args: ['--disable-infobars', '--window-size=1200,800'],
      defaultViewport: null,
    },
    browserContext: 'default',
  };