const Path = require("path");

const repoPackagesDir = Path.join(__dirname, "../../../../packages");

module.exports = {
  resolve: {
    alias: {
      
      "test-explorer": Path.join(repoPackagesDir, "test-explorer/src"),
      
    },
  modules: [
        
      Path.join(repoPackagesDir, "test-explorer"),
      Path.join(repoPackagesDir, "test-explorer/node_modules"),
      
    ]
  }
};
