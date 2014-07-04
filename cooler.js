var path = require('path')
var colors = require('colors')

var cwd = process.cwd()

module.exports = global.console.cool = function cooler(e) {
  var s = e.stack.toString()
  var lines = s.split('\n')
  lines[0] = lines[0].red

  lines = lines.map(function(l) {
    if (l.trim().indexOf('at') === -1) return l
    
    // it is node core
    if (l.indexOf(cwd) === -1) return l.grey

    // it is a project dependency
    if (l.indexOf('node_modules') > -1) return l

    // it is your program
    return l.green
  })
  console.error(lines.join('\n'))
}
