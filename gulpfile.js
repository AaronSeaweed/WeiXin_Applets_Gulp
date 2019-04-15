//导入工具包 require('node_modules里对应模块')
const gulp = require('gulp'),
rename = require("gulp-rename"),
less = require("gulp-less"),
uglify = require("gulp-uglify"),
babel = require("gulp-babel"),
cleanCSS = require("gulp-clean-css"),
jsonminify = require('gulp-jsonminify2');


gulp.task('clean', () => {
  return del(['./dist/**'])
})

gulp.task('images', function () {
  gulp.src('./src/img/*.{png,jpg,gif,svg}') //该任务针对的文件
  .pipe(gulp.dest('./dist/img'));
});


gulp.task('less', function () {
    gulp.src('./src/**/**/*.less') //该任务针对的文件
    .pipe(less()) //该任务调用的模块
    .pipe(cleanCSS())//压缩
    .pipe(rename(function (path) { // 修改生成文件后缀名
        path.extname = ".wxss";
      })
    ).pipe(gulp.dest('./dist')); //生成*.wxss
  });



//定义一个js任务
gulp.task('scripts', () => {
    return gulp.src('./src/**/**/*.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('./dist'))
  })
  
gulp.task('scriptsPro', () => {
  return gulp.src('./src/**/**/*.js')
  .pipe(babel({
    presets: ['es2015']
  }))
  .pipe(uglify({
    compress: true,
  }))
  .pipe(gulp.dest('./dist'))
})


//wxml文件开发时候直接复制到dist目录下，生产的时候使用htmlmin压缩
gulp.task('templates', () => {
    return gulp.src('./src/**/**/*.wxml')
      .pipe(gulp.dest('./dist'))
  })
  
  gulp.task('templatesPro', () => {
    return gulp.src('./src/**/**/*.wxml')
      .pipe(htmlmin({
        collapseWhitespace: true,
        removeComments: true,
        keepClosingSlash: true
      }))
      .pipe(gulp.dest('./dist'))
  });


//json文件开发时候直接复制到dist目录下，生产的时候使用jsonminify压缩
gulp.task('json',() => {
    return gulp.src('./src/**/**/*.json')
      .pipe(gulp.dest('./dist'))
  })
  
gulp.task('jsonPro',  () => {
    return gulp.src('./src/**/**/*.json')
      .pipe(jsonminify())
      .pipe(gulp.dest('./dist'))
})


gulp.task('watch',function(){
    gulp.watch(['./src/**/**/*.less'],['less']);
    gulp.watch('./src/**/**/*.js',['scripts']);
    gulp.watch('./src/**/**/*.wxml',['templates']);
    gulp.watch('./src/**/**/*.json',['json']);
    gulp.watch('./src/**/**/*.{png,jpg,gif,svg}',['images']);
})

gulp.task('default',['watch']); //定义默认任务 elseTask为其他任务，该示例没有定义elseTask任务