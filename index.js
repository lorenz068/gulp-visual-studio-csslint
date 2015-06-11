var customReporter = function (file) {
  console.log();
  console.log(file.csslint.errorCount + ' errors in ' + file.path);

  file.csslint.results.forEach(function (result) {
      console.log(file.path + "(" + result.error.line + "," + result.error.col + ")" + ": " + result.error.rule.desc + "(" + result.error.rule.id + ")");
  });
};

module.exports = customReporter;
