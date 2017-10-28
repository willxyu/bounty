

mps = typeof mps !== 'undefined' ? mps : {}

mps.holding = []
mps.geojson = {}

mps.recover = function(str) {
 mps.holding.push(str)
}

mps.complete = function() {
 var out = []
 for (var i=0;i<mps.holding.length;i++) {
  out.push(mps.interpret(mps.holding[i]))
 }
 log(out)
 mps.draw()
}

mps.draw = function() {
 
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
 return out
}

mps.numberparsable = function(str) {
 var n = parseInt(str)
 if (isNaN(n)) { return str }
 return parseInt(str)
}
