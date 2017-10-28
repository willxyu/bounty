
mps = typeof mps !== 'undefined' ? mps : {}
mps.holding = mps.holding || []

// reference classes: port, reef, blkg, watr
// reference line

var s = `
 reference 0 -14 ltr;
 18 watr 6 reef 19 swmp 7 reef
 59 watr
`

mps.holding.push(s)