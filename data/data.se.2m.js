
mps = typeof mps !== 'undefined' ? mps : {}
mps.holding = mps.holding || []

// reference classes: port, reef, blkg, watr
// reference line

var s = `
 reference 0 -2 ltr;
 1 watr 3 reef 1 swmp 3 reef 40 swmp 5 reef
 38 watr 13 reef 2 swmp 8 reef
`

mps.holding.push(s)
