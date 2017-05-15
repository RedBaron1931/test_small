var gulp = require('gulp'), 
    sass= require('gulp-sass'),
    browserSync = require('browser-sync'),
    concat = require('gulp-concat'),
    uglifyjs = require('gulp-uglifyjs')
    rename = require('gulp-rename'),
    cssnano = require('gulp-cssnano'),
    del = require('del'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    cache = require('gulp-cache'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('img', function(){
	return gulp.src('app/img/**/*')
		.pipe(cache(imagemin({
					interleced: true,
					progressive: true,
					svgoPlugins: [{removeViewBox: false}],
					use: [pngquant()]
				})))
		.pipe(gulp.dest('dist/img'))
});



gulp.task('clean', function(){
	return del.sync('dist')
});

gulp.task('sass', function(){
		return gulp.src('app/sass/**/*.sass')
				.pipe(sass({outputStyle: 'expanded'}))
				.pipe(autoprefixer(['last 15 versions', 'ie 8', 'ie 7'], {cascade: true}))
				.pipe(gulp.dest('app/css'))
				.pipe(browserSync.reload({stream: true}))
});

gulp.task('scripts', function(){
	return gulp.src('')
		.pipe(concat('libs.min.js'))
		.pipe(uglifyjs())
		.pipe(gulp.dest('app/js'))
});

gulp.task('css', function(){
	return gulp.src('app/css/libs.css')
		.pipe(cssnano())
		.pipe(rename({suffix : '.min'}))
		.pipe(gulp.dest('app/css'))
});

gulp.task('browser-sync', function(){
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false
	})
});


gulp.task('watch',['browser-sync'], function(){
	gulp.watch('app/sass/**/*.sass', ['sass'])
	gulp.watch('app/*.html', browserSync.reload)
	gulp.watch('app/js/**/*.js', browserSync.reload)
});

gulp.task('default', ['watch'])

gulp.task('build', ['clean'], function(){
	var buildHtml = gulp.src('app/*.html')
		.pipe(gulp.dest('dist'))
	var buildJs = gulp.src('app/js/**/*.js')
		.pipe(gulp.dest('dist/js'))
	var buildFonts = gulp.src('app/fonts/**/*')
		.pipe(gulp.dest('dist/fonts'))
	var buildCss = gulp.src(['!app/css/libs.css','app/css/**/*.css'])
		.pipe(gulp.dest('dist/css'))
});