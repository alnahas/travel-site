var gulp = require('gulp'),
watch = require('gulp-watch')

gulp.task('default',function(){
    console.log('hello world')
})

gulp.task('html',function(){
    console.log('hello world html')
});

gulp.task('style',function(){
    console.log('imagine sass')
})

gulp.task('watch',function(){
    watch('./app/index.html',function(){
        gulp.start('html');
    })

     watch('./app/assets/**/*.css',function(){
        gulp.start('style');
    })
})