const chokidar = require('chokidar');
const fs = require('fs');
const sass = require('sass');

chokidar.watch('scss').on('all', (event, path) => {
  if (event == "change") {
    console.log(`${path} has changed.`);

    try {
      let result = sass.compile("scss/app.scss");
      console.log("Recompile.");

      fs.writeFile('css/proton.css', result.css, function (err) {
        if (err)  {
          return console.log(err + "\n");
        } else {
          console.log("Write changes to file.\n")
        }
      });
    } catch (err) {
      return console.log(err + "\n");
    }
  }
});

