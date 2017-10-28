
mps = typeof mps !== 'undefined' ? mps : {}
mps.holding = mps.holding || []

// reference classes: port, reef, blkg, watr
// reference line

var s = `
 reference 0 -1 ltr;
 1 watr 6 reef 40 swmp 1 reef 1 swmp 4 reef 
 37 watr 13 reef 2 swmp 12 reef 
`
mps.holding.push(s)
