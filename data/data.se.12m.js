
mps = typeof mps !== 'undefined' ? mps : {}
mps.holding = mps.holding || []

// reference classes: port, reef, blkg, watr
// reference line

var s = `
 reference 0 -12 ltr;
 9 watr 13 reef 21 swmp 8 reef
 59 watr
`

mps.holding.push(s)