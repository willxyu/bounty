
mps = typeof mps !== 'undefined' ? mps : {}
mps.holding = mps.holding || []

// reference classes: port, reef, blkg, watr
// reference line

var s = `
 reference -1 -12 rtl;
 3 watr 4 reef 18 swmp 5 reef 8 watr 3 rugh 
 2 watr 4 rugh 5 watr 5 rugh 1 watr 2 rugh 3 watr 5 rugh 
 4 watr 1 rugh 2 watr 3 rugh 4 watr 2 rugh 3 watr 4 rugh 5 watr 
 11 rugh 
 100 watr
 
`

mps.holding.push(s)
