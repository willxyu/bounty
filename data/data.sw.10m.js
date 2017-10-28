
mps = typeof mps !== 'undefined' ? mps : {}
mps.holding = mps.holding || []

// reference classes: port, reef, blkg, watr
// reference line

var s = `
 reference -1 -10 rtl;
 3 watr 5 reef 18 swmp 5 reef 5 watr 3 rugh 3 watr 3 rugh 6 watr 
 6 rugh 2 watr 8 rugh 3 watr 4 rugh 1 watr 3 rugh 5 watr 3 rugh 2 watr 3 rugh 4 watr 3 rugh 
 9 watr 2 rugh
 100 watr
 
`

mps.holding.push(s)
