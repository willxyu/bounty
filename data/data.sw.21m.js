
mps = typeof mps !== 'undefined' ? mps : {}
mps.holding = mps.holding || []

// reference classes: port, reef, blkg, watr
// reference line

var s = `
 reference -1 -21 rtl;
 5 watr 7 reef 6 swmp 1 reef 1 swmp 6 reef
 7 watr 4 rugh 5 watr 3 rugh 3 watr 1 rugh 8 watr 
 3 rugh 8 watr 2 rugh 5 watr 2 rugh 4 watr 3 rugh
 12 watr 3 rugh 
 100 watr
 
`

mps.holding.push(s)
