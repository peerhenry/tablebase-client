var gulp = require('gulp');

/* The task 'fetch' copies required files to the build directory. Node packages must be installed first!*/

gulp.task('fetch', ['copyscripts', 'copy-fa-fonts', 'copy-fa-stylesheet']);

gulp.task('copyscripts', function(){
  gulp.t
  var sources = [
    'node_modules/immutable/dist/immutable.min.js',
    'node_modules/react/dist/react.min.js',
    'node_modules/react-dom/dist/react-dom.min.js',
    'node_modules/redux/dist/redux.min.js',
    'node_modules/react-redux/dist/react-redux.min.js', 
    'node_modules/redux-thunk/dist/redux-thunk.min.js'
    ];
  var destination = 'build/libs/';
  return gulp
    .src(sources)
    .pipe(gulp.dest(destination))
})

gulp.task('copy-fa-fonts', function(){
  var sources = [
    'node_modules/font-awesome/fonts/FontAwesome.otf',
    'node_modules/font-awesome/fonts/fontawesome-webfont.eot',
    'node_modules/font-awesome/fonts/fontawesome-webfont.svg',
    'node_modules/font-awesome/fonts/fontawesome-webfont.ttf',
    'node_modules/font-awesome/fonts/fontawesome-webfont.woff',
    'node_modules/font-awesome/fonts/fontawesome-webfont.woff2',
  ];
  var destination = 'build/libs/fonts';
  return gulp
    .src(sources)
    .pipe(gulp.dest(destination))
});

gulp.task('copy-fa-stylesheet', function(){
  var sources = [
    'node_modules/font-awesome/css/font-awesome.min.css'
  ];
  var destination = 'build/libs/css';
  return gulp
    .src(sources)
    .pipe(gulp.dest(destination))
});