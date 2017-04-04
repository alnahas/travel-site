var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars =require('postcss-simple-vars'),
nested = require('postcss-nested')

gulp.task('default',function(){
    console.log('hello world')
})

gulp.task('html',function(){
    console.log('hello world html')
});

gulp.task('style',function(){
   return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssvars,nested,autoprefixer]))
    .pipe(gulp.dest('./app/assets/temp/styles'))
})

gulp.task('watch',function(){
    watch('./app/index.html',function(){
        gulp.start('html');
    })

     watch('./app/assets/**/*.css',function(){
        gulp.start('style');
    })
})