
mps = typeof mps !== 'undefined' ? mps : {}
mps.holding = mps.holding || []

// reference classes: port, reef, blkg, watr
// reference line

var s = `
 reference -1 -17 rtl;
 3 watr 5 reef 15 swmp 8 reef 7 watr
 2 rugh 9 watr 1 rugh 4 watr 1 rugh 2 watr 2 rugh 4 watr 3 rugh
 4 watr 2 rugh 1 watr 4 rugh 7 watr 3 rugh 4 watr 4 rugh
 100 watr
 
`

mps.holding.push(s)
