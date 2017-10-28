
mps = typeof mps !== 'undefined' ? mps : {}
mps.holding = mps.holding || []

// reference classes: port, reef, blkg, watr
// reference line

var s = `
 reference -1 -13 rtl;
 3 watr 4 reef 18 swmp 6 reef 
 3 watr 1 rugh 5 watr 1 rugh 4 watr 4 rugh 4 watr 6 rugh 
 7 watr 1 rugh 8 watr 3 rugh 2 watr 4 rugh 3 watr 3 rugh 8 watr
 5 rugh 
 100 watr
 
`

mps.holding.push(s)
