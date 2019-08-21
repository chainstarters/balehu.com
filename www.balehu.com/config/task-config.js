const pathConfig = require("./path-config.json");

module.exports = {
  html: true,
  images: true,
  fonts: false,
  static: true,
  svgSprite: false,
  stylesheets: true,

  javascripts: {
    entry: {
      app: ["./app.js"]
    }
  },

  browserSync: {
    server: {
      // should match `dest` in
      // path-config.json
      baseDir: pathConfig.dest
    }
  },

  production: {
    rev: true
  }
};
