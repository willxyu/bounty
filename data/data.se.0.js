
mps = typeof mps !== 'undefined' ? mps : {}
mps.holding = mps.holding || []

// reference classes: port, reef, blkg, watr
// reference line

var s = `
 reference 0 0 ltr;
 1 port 1 reef 1 swmp 2 reef 42 swmp 6 reef 
 36 watr 6 reef 1 swmp 6 reef 3 swmp 2 reef 3 swmp 12 reef
 
`

mps.holding.push(s)
