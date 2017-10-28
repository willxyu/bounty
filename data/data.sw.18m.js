
mps = typeof mps !== 'undefined' ? mps : {}
mps.holding = mps.holding || []

// reference classes: port, reef, blkg, watr
// reference line

var s = `
 reference -1 -18 rtl;
 3 watr 6 reef 13 swmp 8 reef 7 watr 3 rugh 2 watr 1 rugh 
 13 watr 3 rugh 4 watr 4 rugh 4 watr 1 rugh 2 watr 3 rugh 6 watr 3 rugh 6 watr 
 7 rugh 5 watr 3 rugh 
 100 watr
 
`

mps.holding.push(s)
