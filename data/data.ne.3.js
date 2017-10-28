
mps = typeof mps !== 'undefined' ? mps : {}
mps.holding = mps.holding || []

// reference classes: port, reef, blkg, watr
// reference line

var s = `
 reference 0 3 ltr;
 47 swmp 5 reef 45 watr 
 6 reef 
`
mps.holding.push(s)
