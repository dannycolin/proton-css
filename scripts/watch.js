const chokidar = require('chokidar');
const fs = require('fs');
const sass = require('sass');

chokidar.watch('scss').on('all', (event, path) => {
  if (event == "change") {
    console.log(`${path} has changed.`);

    let result = sass.compile('scss/proton.scss');
    console.log("Recompile.")

    fs.writeFile('css/proton.css', result.css, function (err) {
      if (err)  {
        return console.log(err);
      } else {
        console.log("Write changes to file.\n")
      }
    });
  }
});
