
mps = typeof mps !== 'undefined' ? mps : {}
mps.holding = mps.holding || []

// reference classes: port, reef, blkg, watr
// reference line

var s = `
 reference 0 -19 ltr;
 30 watr 13 reef 
 70 watr
`

mps.holding.push(s)