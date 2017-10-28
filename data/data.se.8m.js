
mps = typeof mps !== 'undefined' ? mps : {}
mps.holding = mps.holding || []

// reference classes: port, reef, blkg, watr
// reference line

var s = `
 reference 0 -8 ltr;
 6 watr 5 reef 3 swmp 1 reef 29 swmp 6 reef
 60 watr
`

mps.holding.push(s)