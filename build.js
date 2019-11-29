const merge = require('concat');

const files = [
  './dist/ng-demo/runtime-es2015.js',
  './dist/ng-demo/polyfills-es2015.js',
  './dist/ng-demo/scripts.js',
  './dist/ng-demo/main-es2015.js'
]

merge(files, './dist/ng-demo/ele.js');
console.info('file generated');
