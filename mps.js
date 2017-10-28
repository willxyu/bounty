
/*

 Workflow: 
   read data.cardinal.xcoord.js
   

 */


mps = typeof mps !== 'undefined' ? mps : {}

mps.holding = []
mps.geojson = {}

mps.HEIGHT  =   38
mps.WIDTH   =   30
mps.height  =  800
mps.width   = 1080

mps.recover = function(str) {
 mps.holding.push(str)
}

mps.complete = function() {
 var out = []
 for (var i=0;i<mps.holding.length;i++) {
  out.push(mps.interpret(mps.holding[i]))
 }
 out = mps.convert(out)
 return out
}

mps.main = function(t) {
  var colorify, d, data, height, path_generator, squares, svg, width;
  var height = mps.height || 800;
  var width  = mps.width  || 1080;
  svg = d3.select('body')
          .append('svg')
          .attr('width', width)
          .attr('height', height)
          .call(d3.zoom().on("zoom", function () {
            svg.attr("transform", d3.event.transform)
          }))
          .append("g")

  var data = t
  
  /* Stress testing
  log(Math.sqrt(40000))
  var testTo = 40000
  var upperX = 1000
  var upperY = 1000
  var lowerX = -1000
  var lowerY = -1000
  var list   = ['watr','swmp','reef','port']
  for (var k=0;k<testTo;k++) {
   var generated = {}
   generated.i = Math.floor(Math.random() * upperY)
   generated.j = Math.floor(Math.random() * upperX)
   generated.type = list[Math.floor(Math.random() * list.length)]
   // data.push(generated)
  }
  var len = Math.floor(Math.sqrt(testTo))
  for (var k=0;k<len;k++) {
    for (var v=0;v<len;v++) {
     // data.push({i: v, j: k, type: list[Math.floor(Math.random() * list.length)]})
    }
  } */
  
  tiles = {
    type: 'FeatureCollection',
    features: ( function() {
       var _i, _len, _results;
       _results = []
       for (_i=0, _len=data.length; _i<_len; _i++) {
         d = data[_i]
         _results.push(mps.new_square(d))
       }
       return _results
      })()
  }
  // COLORS
  var palette = [
       // having to meld elevation and terrain into a single codifier to use scaleOrdinal with ease
   '#ff4dff', // volc; bg gold,       txt = 'W',
   '#0000cc', // volc; bg gold,       txt = 'W',
   '#0000cc', // lava; bg red,        txt = 'Y',
   '#0000cc', // tear; bg white,      txt = '%'
   '#0000cc', // savu; bg supergreen, txt = '#',
   '#0000cc', // sava; bg supergreen, txt = '!',
   '#0000cc', // grss; bg green,      txt = 'L'
   '#0000cc', // isld; bg bluegreen,  txt = ';'
   '#0000cc', // watr; bg blue,       txt ''
   '#6699ff', // reef; bg blue,       txt 'w'
   '#778cb2', // rugh; bg blue,       txt '#'
   '#0000cc', // rivr; bg blue,       txt '~'
   '#0000cc', // chop; bg blue,       txt = ^'
   '#001a00', // swmp; bg black,      txt = '.'
   '#0000cc', // main; bg black,      txt = 'M'
   '#0000cc', // swmn; bg black,      txt = 'M',
   '#0000cc', // lwld; bg black,      txt = 'm',
   '#0000cc', // ashs; bg black,      txt = '.',
   '#0000cc', // wstr; bg black,      txt = '(',
   '#0000cc', // mrsh; bg black,      txt = 'n',
   '#0000cc', // snow; bg white,      txt = '.',

   '#0000cc', // path; bg any,        txt = '+',
  ]
  // colorify = d3.scaleOrdinal(d3.schemeCategory20).domain(['watr', 'B', 'C', 'D']);
  var terrains = [
       // having to meld elevation and terrain into a single codifier to use scaleOrdinal with ease
   'port', // port; bg gold,       txt = '?',
   'volc', // volc; bg gold,       txt = 'W',
   'lava', // lava; bg red,        txt = 'Y',
   'tear', // tear; bg white,      txt = '%'
   'savu', // savu; bg supergreen, txt = '#',
   'sava', // sava; bg supergreen, txt = '!',
   'grss', // grss; bg green,      txt = 'L'
   'isld', // isld; bg bluegreen,  txt = ';'
   'watr', // watr; bg blue,       txt ''
   'reef', // reef; bg blue,       txt 'w'
   'rugh', // rugh; bg blue,       txt '#'
   'rivr', // rivr; bg blue,       txt '~'
   'chop', // chop; bg blue,       txt = ^'
   'swmp', // swmp; bg black,      txt = '.'
   'main', // main; bg black,      txt = 'M'
   'swmn', // swmn; bg black,      txt = 'M',
   'lwld', // lwld; bg black,      txt = 'm',
   'ashs', // ashs; bg black,      txt = '.',
   'wstr', // wstr; bg black,      txt = '(',
   'mrsh', // mrsh; bg black,      txt = 'n',
   'snow', // snow; bg white,      txt = '.',

   '', // path; bg any,        txt = '+',
  ]
  colorify = d3.scaleOrdinal(palette).domain(terrains);

  path_generator = d3.geoPath().projection(d3.geoTransform({
    point: function(x, y) {
      return this.stream.point(x, y);
    }
  }));

  return svg.selectAll('.square').data(tiles.features).enter().append('path').attr('class', 'square').style('fill', function(d) { return colorify(d.properties.type); }).attr('d', path_generator)
}

mps.new_square = function(d) {
  return {
    type: 'Feature',
    geometry: {
      type: 'Polygon',
      coordinates: [[[d.j * mps.WIDTH, d.i * mps.HEIGHT], [(d.j + 1) * mps.WIDTH, d.i * mps.HEIGHT], [(d.j + 1) * mps.WIDTH, (d.i + 1) * mps.HEIGHT], [d.j * mps.WIDTH, (d.i + 1) * mps.HEIGHT], [d.j * mps.WIDTH, d.i * mps.HEIGHT]]]
      // coordinates: [[[d.j * mps.SIDE, d.i * mps.SIDE], [(d.j + 1) * mps.SIDE, d.i * mps.SIDE], [(d.j + 1) * mps.SIDE, (d.i + 1) * mps.SIDE], [d.j * mps.SIDE, (d.i + 1) * mps.SIDE], [d.j * mps.SIDE, d.i * mps.SIDE]]]
    },
    properties: { type: d.type } }
}

mps.convert = function(arr) {
 var master = []
 while (arr.length) {
  var t = arr.shift()
  var x = t.x
  var y = t.y

  if (t.dir == 'rtl') { x += 1 }
  if (t.dir == 'ltr') { x -= 1 }
  // assuming all is ltr atm
  for (var i=0;i<t.actual.length;i++) {
    var n = t.actual[i]
    var arrLen = n[0]
    var arrTyp = n[1]
    for (var j=0;j<arrLen;j++) {

    /* important */
     if (t.dir == 'rtl') { 
      // if (i==0) { x += 1 };
      x -= 1 } else {
      // if (i==0) { x -= 1 };
      x += 1 }
     master.push({i: (y*-1), j: x, type: arrTyp})
    }
  }
 }
 return master
}

mps.interpret = function(str) {
 var s = str
 s = s.replace(/\r?\n|\r/g,'')
 var t = s.split('\;')
 var ref = t[0].replace('reference ','')
 var cdr = t[1]
 var n = cdr.split(/(\d+)/g)
 n.shift()
 var swap = false
 var holding = []
 for (var i=0;i<n.length;i++) {
  var v = mps.numberparsable(n[i].replace(/\s/g,''))
  n[i] = v
 }
 cdr = mps.arraycompact(n,2)
 var x = ref.split(/(-?\d+ -?\d+)/g)
 x.shift()
 var coords = x[0].split(/[ ]+/g).map(mps.numberparsable)
 var out = {}
 out.x = coords[0]
 out.y = coords[1]
 out.dir = x[1].replace(/\s/g,'')
 out.actual = cdr
 return out
}

/* Helper Functions */

mps.arraycompact = function(arr, steps, merge) {
  var n = steps
  var count = 0
  var holding = []
  var out = []
  for (var i=0;i<arr.length;i++) {
    holding.push(arr[i])
    count += 1
    if (count >= steps) {
      out.push(holding)
      holding = []
      count = 0
    }
  }
  return out }

mps.numberparsable = function(str) {
  var n = parseInt(str)
  if (isNaN(n)) { return str }
  return parseInt(str) }

