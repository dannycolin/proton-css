const browsersync = require('browser-sync');
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function sync(done) {
    browsersync.init({
        files: [
            '*.html'
        ],
        server: './docs',
        notify: false
    });
    done();
}

function styles() {
    return gulp.src('./scss/**/*.scss')
        .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
        .pipe(gulp.dest('./docs/css'))
        .pipe(browsersync.stream());
}

function watchFiles() {
    gulp.watch('./scss/**/*.scss', styles);
}

gulp.task('start', gulp.series(sync, styles, watchFiles));
