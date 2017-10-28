
mps = typeof mps !== 'undefined' ? mps : {}
mps.holding = mps.holding || []

// reference classes: port, reef, blkg, watr
// reference line

var s = `
 reference -1 -14 rtl;
 3 watr 4 reef 17 swmp 7 reef 
 3 watr 2 rugh 4 watr 1 rugh 6 watr 3 rugh 3 watr 4 rugh
 4 watr 1 rugh 7 watr 2 rugh 4 watr 3 rugh 2 watr 2 rugh 4 watr 4 rugh 2 watr 1 rugh 
 100 watr
 
`

mps.holding.push(s)
