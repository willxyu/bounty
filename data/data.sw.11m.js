
mps = typeof mps !== 'undefined' ? mps : {}
mps.holding = mps.holding || []

// reference classes: port, reef, blkg, watr
// reference line

var s = `
 reference -1 -11 rtl;
 3 watr 4 reef 18 swmp 6 reef 6 watr 2 rugh
 4 watr 2 rugh 7 watr 5 rugh 6 watr 5 rugh
 3 watr 2 rugh 2 watr 3 rugh 4 watr 3 rugh 3 watr 3 rugh 
 5 watr 3 rugh 6 watr 3 rugh 
 100 watr
 
`

mps.holding.push(s)
