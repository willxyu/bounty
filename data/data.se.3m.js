
mps = typeof mps !== 'undefined' ? mps : {}
mps.holding = mps.holding || []

// reference classes: port, reef, blkg, watr
// reference line

var s = `
 reference 0 -3 ltr;
 1 watr 7 reef 39 swmp 6 reef 
 39 watr 21 reef
`

mps.holding.push(s)