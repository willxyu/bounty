
mps = typeof mps !== 'undefined' ? mps : {}
mps.holding = mps.holding || []

// reference classes: port, reef, blkg, watr
// reference line

var s = `
 reference 0 -7 ltr;
 5 watr 6 reef 33 swmp 7 reef
 60 watr
`

mps.holding.push(s)