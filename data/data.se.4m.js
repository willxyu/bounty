
mps = typeof mps !== 'undefined' ? mps : {}
mps.holding = mps.holding || []

// reference classes: port, reef, blkg, watr
// reference line

var s = `
 reference 0 -4 ltr;
 1 watr 9 reef 37 swmp 6 reef 
 42 watr 17 reef
`

mps.holding.push(s)