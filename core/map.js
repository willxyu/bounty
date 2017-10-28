
map = typeof map !== 'undefined' ? map : {}

map.hw = 8
map.hh = 12
map.uw = map.hw     // unit width
map.uh = map.hh     // unit height
map.pr = 'explicit' // 'explicit' or 'clasr'
map.ft = 'SaxMono'
map.hf = 9
map.fs = map.fs || 9

map.restartFontup = 1.8 // pixels (width of unit) to start incrementing font-size
map.windowHeight  = 0
map.windowWidth   = 0

/* Used by map.monitor */
map.interval  = 100 // ms
map.longpress = 1500 // ms
map.start;
map.zoomtimer;

/* Performance Testing */
map.performance = false
map.performanceX = 50
map.performanceY = 50
map.performanceCutoff = 140

/* Mapping data */
map.explicitColors = {
 yellow : 'rgba(150,160, 50,1)',
 lblue  : 'rgba(140,190,190,1)',
}
/* Width => Font */
map.widthtofont = [
   1,
   1,
   1,
   2,
   3,
   5, //  5
   7,
   9,
   9,
   9, // 10
   9,
  10,
  10,
  11,
  12, // 15
  13,
  14,
  15,
  16,
  16, // 20
]

map.coordinateThis = function(data) {
 /*
   data structure, minimum
   data
    .x
    .y
    .fg
    .bg
    .sy
    .quadrant
  */
 var quad  = data.quad     || 'southeast'
 var x     = data.x        || 0
 var y     = data.y        || 0
 var clasr = data.clasr    || ''
 var fg    = data.fg       || 'blue'
 var bg    = data.bg       || 'blue'
 var sy    = data.sy       || ''
 var ocean = data.ocean    || ''
 var named = data.named    || ''

 if (!map[quad]) { return }
 var t = {
  x     : x,
  y     : y,
  clasr : clasr,
  fg    : fg,
  bg    : bg,
  sy    : sy,
  quad  : quad,
  ocean : ocean,
  named : named,
 }
 map[quad].push(t)
}

map.draw = function() {
 map.windowHeight = $(window).height()
 map.windowWidth  = $(window).width()

 $('#map').remove()
 $('#ctn').append('<div id="map"></div>')
 
 var drag = new Draggable( document.getElementById('map') );
 /*
 $('#map').draggable({ 
   // containment: "#ctn", scroll: false 
 })*/
 map.drawQuadrant('northwest')
 map.drawQuadrant('southwest')
 map.drawQuadrant('northeast')
 map.drawQuadrant('southeast')
 // $('.unit').css('font-size',map.fs+'px')
 var o = map.currentview()
 map.position(o.x, o.y)
 /*
 var o = map.currentview() */
}

map.drawQuadrant = function(which) {
 var quad = which || 'northwest'
 var list = map[quad] || []
 var drawingX = 0
 var drawingY = 0
 var uh = map.uh
 var uw = map.uw

 for (var i=0;i<list.length;i++) {
  var item = list[i]
  var style = 'position: absolute; '
  switch (quad) {
   case 'northwest':
    style += 'top: '  +(item.y*uh*-1)+'px; '
    style += 'left: ' +(item.x*uw)+'px; '
    break
   case 'southwest':
    style += 'top: '  +(Math.abs(item.y)*uh)+'px; '
    style += 'left: ' +(item.x*uw)+'px; '
    break
   case 'northeast':
    style += 'top: '  +(item.y*uh*-1)+'px; '
    style += 'left: ' +(item.x*uw)+'px; '
    break
   case 'southeast':
    style += 'top: '  +(Math.abs(item.y)*uh)+'px; '
    style += 'left: ' +(item.x*uw)+'px; '
    break
   default:
    break
  }
  style += 'width: '+uw+'px; '
  style += 'height:'+uh+'px; '

  // priorities: Explicit or Clasr

  // Map
  var fg = item.fg  // prevent being overwritten
  var bg = item.bg  // prevent being overwritten
  if (map.explicitColors[item.fg]) { fg = map.explicitColors[item.fg] }
  if (map.explicitColors[item.bg]) { bg = map.explicitColors[item.bg] }
  style += 'color: '+fg+'; '
  style += 'background: '+bg+'; '

  var sy = item.sy
  if (sy == '.') { sy = '&compfn;' }

  var d =''
  d += '<span id="unit_'+item.x+'_'+item.y
  d += '" style="'+style
  d += '"'
  d += ' class="unit '+item.clasr+'"'
  d += '>'
  d += item.sy
  d += '</span>'
  crel(document.getElementById('map'), 
   crel('div', {
   id   : 'unit_'+item.x+'_'+item.y,
   class: 'unit '+item.clasr,
   style: style,
   // text : item.sy,
  }))
  // $('#map').append(d)
 }
 
/*
  Performance testing
 */
 var perfY = map.performanceY
 var perfX = map.performanceX
 var perfFG = ['green','blue','lblue','brown']
 var perfBG = ['black','blue']
 var perfSY = ['']

  var drawmore = function(x,y) {
  var item = {}
  item.x = x - 100
  item.y = y - 100
  item.fg = perfFG[Math.floor(Math.random()*perfFG.length)]
  item.bg = perfBG[Math.floor(Math.random()*perfBG.length)]
  item.sy = perfSY[Math.floor(Math.random()*perfSY.length)]

  var style = 'position: absolute; '
  switch (quad) {
   case 'northwest':
    style += 'top: '  +(item.y*uh*-1)+'px; '
    style += 'left: ' +(item.x*uw)+'px; '
    break
   case 'southwest':
    style += 'top: '  +(Math.abs(item.y)*uh)+'px; '
    style += 'left: ' +(item.x*uw)+'px; '
    break
   case 'northeast':
    style += 'top: '  +(item.y*uh*-1)+'px; '
    style += 'left: ' +(item.x*uw)+'px; '
    break
   case 'southeast':
    style += 'top: '  +(Math.abs(item.y)*uh)+'px; '
    style += 'left: ' +(item.x*uw)+'px; '
    break
   default:
    break
  }
  style += 'width: '+uw+'px; '
  style += 'height:'+uh+'px; '
  var fg = item.fg  // prevent being overwritten
  var bg = item.bg  // prevent being overwritten
  if (map.explicitColors[item.fg]) { fg = map.explicitColors[item.fg] }
  if (map.explicitColors[item.bg]) { bg = map.explicitColors[item.bg] }
  style += 'color: '+fg+'; '
  style += 'background: '+bg+'; '

  var sy = item.sy
  if (sy == '.') { sy = '&compfn;' }

  var d =''
  d += '<span id="unit_'+item.x+'_'+item.y
  d += '" style="'+style
  d += '"'
  d += ' class="unit '+item.clasr+'"'
  d += '>'
  d += item.sy
  d += '</span>'
  crel(document.getElementById('map'), 
   crel('div', {
   id   : 'unit_'+item.x+'_'+item.y,
   class: 'unit '+item.clasr,
   style: style,
   // text : item.sy,
  }))
  // $('#map').append(d)
 }
 
 var cutoff = map.performanceCutoff
 if (map.performance) { 
 if (list.length < 400) {
 for (var i=perfX;i<cutoff;i++) {
  for (var j=perfY;j<cutoff;j++) {
   drawmore(i,j)
  }
 }
 }
 }
}

map.currentview = function() {
 var whalf = map.windowWidth/2
 var hhalf = map.windowHeight/2

 var out = {}
 out.x = whalf
 out.y = hhalf

 /*
   
  */
 // map.sparse()

 return out
/*
 var e = getElsAt(whalf, hhalf)
log(e)
 var f = document.elementFromPoint(-12,12)
log(window.pageXOffset)
log(window.pageYOffset)
 f = document.elementFromPoint(-100 - window.pageXOffset, 12 - window.pageYOffset);
log(f) */
}

map.sparse = function(x, y) {
 var w = map.windowWidth
 var h = map.windowHeight
 var whalf = w/2
 var hhalf = h/2

var hmax = 0
var hmin = 0
var wmax = 0
var wmin = 0

var thmax = 0
var thmin = 0
var twmax = 0
var twmin = 0

 var close = []
 var r = function(elem) {
  var d = elem
  var o = d.getBoundingClientRect()
  var x = o.left
  var y = o.top
  
  if (o.top < hmin) { hmin = o.top }
  if (o.top > hmax) { hmax = o.top }
  if (hmin == 0) { hmin = o.top }
  if (hmax == 0) { hmax = o.top }
  if (o.left < wmin) { wmin = o.left }
  if (o.left > wmax) { wmax = o.left }
  if (wmin == 0) { wmin = o.left }
  if (wmax == 0) { wmax = o.left }

  // x += whalf
  // y += hhalf
  x += whalf
  y += hhalf
  if (y < thmin) { thmin = y }
  if (y > thmax) { thmax = y }
  if (thmin == 0) { thmin = y }
  if (thmax == 0) { thmax = y }
  if (x < twmin) { twmin = x }
  if (x > twmax) { twmax = x }
  if (twmin == 0) { twmin = x }
  if (twmax == 0) { twmax = x }
  if (x < 5 && x > -5 && y < 5 && y > -5) {
   return true
  }
  return false
 }
 var allUnits = document.getElementsByClassName('unit')
 for (var i=0;i<allUnits.length;i++) {
  if ( r(allUnits[i]) ) {
   close.push(allUnits[i])
  }
 }
 /*
 log(whalf + ', '+hhalf + '  --- ::: '+hmin +', '+hmax +' , '+wmin + ', '+wmax +' ::: '+thmin + ', '+thmax + ', '+twmin+', '+twmax)
 log(close)
 for (var k=0; k<close.length; k++) {
  log(close[k])
 }
 */
}

map.position = function(x,y) {
 var w = map.windowWidth
 var h = map.windowHeight

 var whalf = w/2
 var hhalf = h/2

 var x = x || whalf
 var y = y || hhalf
 $('#map').css({
  left : whalf,
   top : hhalf,
 })
}

map.zoom = function(what) {
 var what = what || '+'
 var factor = 1
 switch (what) {
  case '-':
   factor = 0.8
   break
  case '+':
  default:
   factor = 1.1
   break
 }
 map.uw *= factor
 map.uh *= factor
 map.draw()

 /* Font handling */
 var w = $('.unit').css('width')
 w = map.clean(w)
 w = Math.round(w)
 var f = map.fs
 if (map.widthtofont[w]) {
  f = map.widthtofont[w]
 } else {
  f = map.widthtofont[map.widthtofont.length - 1]
 }

 $('.unit').css('font-size',f)
}


map.monitor = function() {
 var plus = $('#pls')
 var mins = $('#mns')
 plus.on('mousedown',  function(e) { start = new Date().getTime()
  map.zoomtimer = window.setTimeout(function() {
   map.fs = map.hf
   map.uh = map.hh
   map.uw = map.hw
   map.draw()
  }, map.longpress)
 })
 plus.on('mouseleave', function(e) { start = 0; clearTimeout(map.zoomtimer) })
 plus.on('mouseup',    function(e) {
  clearTimeout(map.zoomtimer)
  if (new Date().getTime() >= (start + map.longpress)) {
   map.uh = map.hh
   map.uw = map.hw 
   map.draw()
  } else {
   map.zoom('+')
  }
 })
 mins.on('mousedown',  function(e) { start = new Date().getTime()
  map.zoomtimer = window.setTimeout(function() {
   map.fs = map.hf
   map.uh = map.hh
   map.uw = map.hw
   map.draw()
  }, map.longpress)
 })
 mins.on('mouseleave', function(e) { start = 0; clearTimeout(map.zoomtimer) })
 mins.on('mouseup',    function(e) {
  clearTimeout(map.zoomtimer)
  if (new Date().getTime() >= (start + map.longpress)) {
   map.uh = map.hh
   map.uw = map.hw 
   map.draw()
  } else {
   map.zoom('-')
  }
 })
}


map.clean = function(n) {
 var x = Number(n.replace(/[^-\d\.]/g, ''))
 return x
}