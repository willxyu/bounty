
mps = typeof mps !== 'undefined' ? mps : {}
mps.holding = mps.holding || []

// reference classes: port, reef, blkg, watr
// reference line

var s = `
 reference 0 5 ltr;
 46 swmp 11 reef 43 watr 
 7 reef 
`
mps.holding.push(s)
