
mps = typeof mps !== 'undefined' ? mps : {}
mps.holding = mps.holding || []

// reference classes: port, reef, blkg, watr
// reference line

var s = `
 reference -1 -2 rtl;
 1 watr 4 reef 25 swmp 5 reef 18 watr
 6 rugh 9 watr 10 rugh 17 watr 3 rugh 2 watr 2 rugh 
 100 watr
 
`

mps.holding.push(s)
