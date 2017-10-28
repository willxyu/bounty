
mps = typeof mps !== 'undefined' ? mps : {}
mps.holding = mps.holding || []

// reference classes: port, reef, blkg, watr
// reference line

var s = `
 reference 0 -6 ltr;
 2 watr 9 reef 34 swmp 7 reef
 60 watr
`

mps.holding.push(s)