# gulp-visual-studio-csslint

CSSLint Visual Studio reporter

### Install

Install with npm: `npm install --save-dev gulp-visual-studio-csslint`

#### gulp-csslint

```
// csslint Task 
gulp.task('csslint', function() {
    return gulp.src(pathToCss)
    .pipe(csslint.reporter(csslintVisualStudioReporter));
});
```

### License

Thanks to Patrick Lafrance.

MIT © Laurent Bonnot
