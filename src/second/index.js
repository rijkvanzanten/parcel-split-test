console.log("JS 2");

import("./async")
  .then(() => {
    console.log("Loaded!");
  });
