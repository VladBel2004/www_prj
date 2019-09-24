var gulp     = require('gulp'),
    sass     = require('gulp-sass'),
    bowser   = require('browser-sync'),
    concat   = require('gulp-concat'),
    ugif     = require('gulp-uglifyjs'),
    cssnano  = require('gulp-cssnano'),
    rename   = require('gulp-rename'),
    del      = require('del'),
    imagemin = require('gulp-imagemin'),
    pngq     = require('imagemin-pngquant'),
    cache    = require('gulp-cache'),
    autopref = require('gulp-autoprefixer')

gulp.task('mytask', function(){
  console.log("Hi");
  //return gulp.src('source-files').pipe(plugin()).pipe(gulp.dest('folder'));
});

gulp.task('sass', function(){
  return gulp.src('app/sass/*.sass')
  .pipe(sass())
  .pipe(autopref(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {cascade: true}))
  .pipe(gulp.dest('app/css'))
  .pipe(bowser.reload({stream: true}))
});

gulp.task('watch', ['bowser', 'css-libs', 'scripts'],function(){
  gulp.watch('app/sass/*.sass', ['sass']);
  gulp.watch('app/*.html', bowser.reload);
  gulp.watch('app/*.php', bowser.reload);
});

gulp.task('bowser', function(){
  bowser({
    server: {
      baseDir: 'app'
    },
    notify: false,
    port: 444,
    UI: 445
  });
});

gulp.task('scripts', function(){
  return gulp.src([
    'app/libs/jquery/dist/jquery.min.js',
    'app/libs/magnific-popup/dist/jquery.magnific-popup.min.js'
  ])
  .pipe(concat('libs.min.js'))
  .pipe(ugif())
  .pipe(gulp.dest('app/js'))
});

gulp.task('css-libs', ['sass'], function(){
  gulp.src('app/css/libs.css')
  .pipe(cssnano())
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('app/css'))
});

gulp.task('build', ['cleen', 'sass', 'scripts', 'img'],function(){
  Bjs    = gulp.src('app/js/**/*').pipe(gulp.dest('dist/js'));
  Bhtml  = gulp.src('app/*.html').pipe(gulp.dest('dist/html'));
  Bcss   = gulp.src('app/css/**/*').pipe(gulp.dest('dist/css'));

});

gulp.task('cleen', function(){
  del(['dist/js/**/*', 'dist/css/**/*', 'dist/html/**/*']);
});

gulp.task('img', function(){
  return gulp.src('app/img/**/*').pipe((imagemin({
    interlaced:  true,
    progressive: true,
    svgoPlugins: [{removeVierBox: false}],
    une:         [pngq()]
    })))
  .pipe(gulp.dest('dist/img'))
});

gulp.task('clear', function(){
  return cache.clearAll();
});
