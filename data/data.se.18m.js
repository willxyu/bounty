
mps = typeof mps !== 'undefined' ? mps : {}
mps.holding = mps.holding || []

// reference classes: port, reef, blkg, watr
// reference line

var s = `
 reference 0 -18 ltr;
 22 watr 6 reef 2 watr 14 reef 
 70 watr
`

mps.holding.push(s)