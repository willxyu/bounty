
mps = typeof mps !== 'undefined' ? mps : {}
mps.holding = mps.holding || []

// reference classes: port, reef, blkg, watr
// reference line

var s = `
 reference 0 -9 ltr;
 7 watr 12 reef 25 swmp 7 reef
 59 watr
`

mps.holding.push(s)