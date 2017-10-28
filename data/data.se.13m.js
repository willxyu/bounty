
mps = typeof mps !== 'undefined' ? mps : {}
mps.holding = mps.holding || []

// reference classes: port, reef, blkg, watr
// reference line

var s = `
 reference 0 -13 ltr;
 17 watr 6 reef 20 swmp 1 reef 1 swmp 6 reef
 59 watr
`

mps.holding.push(s)