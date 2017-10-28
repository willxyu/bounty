
mps = typeof mps !== 'undefined' ? mps : {}
mps.holding = mps.holding || []

// reference classes: port, reef, blkg, watr
// reference line

var s = `
 reference 0 4 ltr;
 47 swmp 9 reef 42 watr 
 6 reef 
`
mps.holding.push(s)
