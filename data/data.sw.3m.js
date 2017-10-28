
mps = typeof mps !== 'undefined' ? mps : {}
mps.holding = mps.holding || []

// reference classes: port, reef, blkg, watr
// reference line

var s = `
 reference -1 -3 rtl;
 1 watr 5 reef 24 swmp 4 reef 19 watr
 7 rugh 8 watr 9 rugh 5 watr 2 rugh
 7 watr 2 rugh 2 watr 3 rugh 1 watr 3 rugh 
 100 watr
 
`

mps.holding.push(s)
