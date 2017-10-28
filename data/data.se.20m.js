
mps = typeof mps !== 'undefined' ? mps : {}
mps.holding = mps.holding || []

// reference classes: port, reef, blkg, watr
// reference line

var s = `
 reference 0 -20 ltr;
 31 watr 7 reef 
 70 watr
`

mps.holding.push(s)