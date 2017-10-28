
mps = typeof mps !== 'undefined' ? mps : {}
mps.holding = mps.holding || []

// reference classes: port, reef, blkg, watr
// reference line

var s = `
 reference 0 1 ltr;
 48 swmp 5 reef 45 watr 
 5 reef 
`
mps.holding.push(s)
