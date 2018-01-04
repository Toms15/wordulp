// Create Variables
var gulp                = require('gulp');
var $                   = require('gulp-load-plugins')();
var runSequence         = require('run-sequence');
var mainBowerFiles      = require('main-bower-files');
var browserSync         = require("browser-sync").create();

// Task for SASS files.
gulp.task('sass', function () {
  return gulp.src('wp-content/themes/name-theme/assets/scss/**/*.scss')
  .pipe($.sass().on('error', $.sass.logError))
  .pipe($.autoprefixer({
    browsers: ['last 2 versions'],
    cascade: true
  }))
  .pipe($.cleanCss({compatibility: 'ie8'}))
  .pipe(gulp.dest('wp-content/themes/name-theme/css/'))
  .pipe(browserSync.stream());
});

gulp.task('php', function() {
  return gulp.src('wp-content/themes/name-theme/**/*.php')
  .pipe(browserSync.stream());
})

// Task for JS files.
gulp.task('js', function() {
  return gulp.src('wp-content/themes/name-theme/assets/js/**/*.js')
  .pipe($.uglify())
  .pipe(gulp.dest('wp-content/themes/name-theme/js'))
  .pipe(browserSync.stream());
});

// Task for BOWER files. 
gulp.task('bower', function() {
    return gulp.src(mainBowerFiles(), {base: 'bower_components'})
        .pipe(gulp.dest('wp-content/themes/name-theme/vendor'));
});

// Task for VENDOR JS files. 
gulp.task('vendor-js', () => {
  return gulp.src(['wp-content/themes/name-theme/vendor/jquery/**/*.js', 'wp-content/themes/name-theme/vendor/**/*.js'])
      .pipe($.concat('vendor.js'))
      .pipe($.uglify())
      .pipe(gulp.dest('wp-content/themes/name-theme/js'))
});

// Task for VENDOR CSS files.
gulp.task('vendor-css', () => {
  return gulp.src('wp-content/themes/name-theme/vendor/**/*.css')
      .pipe($.concat('vendor.css'))
      .pipe($.cleanCss({compatibility: 'ie8'}))
      .pipe(gulp.dest('wp-content/themes/name-theme/css'))
});

// Task INJECT
gulp.task('inject', () => {
     runSequence('bower', ['vendor-css', 'vendor-js']);
});

// Task for FONT files
gulp.task('font', () => {
  return gulp.src(['bower_components/**/fonts/*.eot','bower_components/**/fonts/*.woff','bower_components/**/fonts/*.svg','bower_components/**/fonts/*.ttf',])
  .pipe($.flatten())
  .pipe(gulp.dest('wp-content/themes/name-theme/fonts'))
});

// Task SERVE. Init Browser Sync
gulp.task('serve', function() {
  browserSync.init({
    // Your local server name
    // proxy: "folder.dev"
  })
  gulp.watch("wp-content/themes/name-theme/assets/scss/**/*.scss", ['sass'])
  gulp.watch("wp-content/themes/name-theme/assets/js/**/*.js", ['js'])
  gulp.watch("wp-content/themes/name-theme/**/*.php", ['php'])
});