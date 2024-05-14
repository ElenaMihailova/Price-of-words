import gulp from 'gulp';
import plumber from 'gulp-plumber';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import browser from 'browser-sync';

// Styles
export const styles = () => {
  return gulp
    .src('source/css/*.css', {sourcemaps: true})
    .pipe(plumber())
    .pipe(postcss([autoprefixer()]))
    .pipe(gulp.dest('dist/css', {sourcemaps: '.'}))
    .pipe(browser.stream());
};

// Server
const server = (done) => {
  browser.init({
    server: {
      baseDir: 'source',
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
};

// Watcher
const watcher = () => {
  gulp.watch('source/css/**/*.css', gulp.series(styles));
  gulp.watch('source/*.html').on('change', browser.reload);
  gulp.watch('source/js/**/*.js').on('change', browser.reload);
};

// Default Task
export default gulp.series(styles, server, watcher);
