var gulp = require('gulp');

gulp.task('fetch', function(){
  var sources = [
    'node_modules/immutable/dist/immutable.min.js',
    'node_modules/react/dist/react.min.js',
    'node_modules/react-dom/dist/react-dom.min.js',
    'node_modules/redux/dist/redux.min.js',
    'node_modules/react-redux/dist/react-redux.min.js', 
    'node_modules/redux-thunk/dist/redux-thunk.min.js',
    'node_modules/purecss/build/pure-min.css'
    //'node_modules/bootstrap/dist/css/bootstrap.min.css'
    ];
  var destination = 'build/libs/';
  return gulp
    .src(sources)
    .pipe(gulp.dest(destination))
})