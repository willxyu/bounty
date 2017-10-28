
mps = typeof mps !== 'undefined' ? mps : {}
mps.holding = mps.holding || []

// reference classes: port, reef, blkg, watr
// reference line

var s = `
 reference 0 -10 ltr;
 7 watr 13 reef 23 swmp 8 reef
 59 watr
`

mps.holding.push(s)