
mps = typeof mps !== 'undefined' ? mps : {}
mps.holding = mps.holding || []

// reference classes: port, reef, blkg, watr
// reference line

var s = `
 reference 0 -17 ltr;
 21 watr 13 reef 1 swmp 10 reef
 59 watr
`

mps.holding.push(s)