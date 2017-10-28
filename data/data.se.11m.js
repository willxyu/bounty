
mps = typeof mps !== 'undefined' ? mps : {}
mps.holding = mps.holding || []

// reference classes: port, reef, blkg, watr
// reference line

var s = `
 reference 0 -11 ltr;
 8 watr 13 reef 22 swmp 3 reef 1 swmp 4 reef
 59 watr
`

mps.holding.push(s)