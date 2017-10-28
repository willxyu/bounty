
mps = typeof mps !== 'undefined' ? mps : {}
mps.holding = mps.holding || []

// reference classes: port, reef, blkg, watr
// reference line

var s = `
 reference 0 -15 ltr;
 19 watr 6 reef 2 swmp 7 reef 1 swmp 1 reef 2 swmp 3 reef 1 swmp 7 reef
 59 watr
`

mps.holding.push(s)