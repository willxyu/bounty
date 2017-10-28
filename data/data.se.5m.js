
mps = typeof mps !== 'undefined' ? mps : {}
mps.holding = mps.holding || []

// reference classes: port, reef, blkg, watr
// reference line

var s = `
 reference 0 -5 ltr;
 1 watr 10 reef 35 swmp 2 reef 1 swmp 4 reef
 47 watr 6 reef
`

mps.holding.push(s)