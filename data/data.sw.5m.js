
mps = typeof mps !== 'undefined' ? mps : {}
mps.holding = mps.holding || []

// reference classes: port, reef, blkg, watr
// reference line

var s = `
 reference -1 -5 rtl;
 2 watr 5 reef 22 swmp 5 reef 18 watr
 8 rugh 17 watr 3 rugh 3 watr 2 rugh 3 watr 1 rugh 6 watr
 3 rugh 1 watr 2 rugh 
 100 watr
 
`

mps.holding.push(s)
