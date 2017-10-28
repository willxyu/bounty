
mps = typeof mps !== 'undefined' ? mps : {}
mps.holding = mps.holding || []

// reference classes: port, reef, blkg, watr
// reference line

var s = `
 reference -1 -20 rtl;
 5 watr 5 reef 9 swmp 7 reef 8 watr 1 rugh 7 watr 3 rugh
 3 watr 1 rugh 7 watr 4 rugh 6 watr 4 rugh 
 2 watr 1 rugh 2 watr 2 rugh 5 watr 3 rugh 
 9 watr 9 rugh
 100 watr
 
`

mps.holding.push(s)
