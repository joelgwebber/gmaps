var gulp = require("gulp");
var webpack = require('webpack-stream');

var extFiles = ['node_modules/twgl.js/dist/4.2/twgl-full.js'];

var wpConfig = {
  devtool: "inline-source-map",
  mode: "development",
  output: {
    filename: "gmaps.js"
  },
  resolve: {
    extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {test: /\.ts$/, loader: "ts-loader"}
    ]
  }
};

gulp.task('compile', function() {
  return gulp.src('./src/main.ts')
    .pipe(webpack(wpConfig))
    .pipe(gulp.dest('dist'));
});

gulp.task('copy', function(done) {
  // return gulp.src(extFiles).pipe(gulp.dest('./dist/'));
  done();
});

function watch() {
  const watchOpts = {interval: 500};
  gulp.watch(['./src/**/*.ts'], watchOpts, gulp.parallel('compile'));
  // gulp.watch(extFiles, watchOpts, gulp.parallel('copy'));
}

gulp.task('watch', gulp.series('copy', 'compile', watch));

gulp.task('default', gulp.series('copy', 'compile'));

