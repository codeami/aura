module.exports = {
    launch: {
      dumpio: true,
      headless: process.env.HEADLESS === 'true',
      args: ['--disable-infobars', '--window-size=1200,800', '--headless'],
      defaultViewport: null,
    },
    browserContext: 'default',
  };