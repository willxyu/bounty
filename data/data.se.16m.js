
mps = typeof mps !== 'undefined' ? mps : {}
mps.holding = mps.holding || []

// reference classes: port, reef, blkg, watr
// reference line

var s = `
 reference 0 -16 ltr;
 20 watr 30 reef
 59 watr
`

mps.holding.push(s)