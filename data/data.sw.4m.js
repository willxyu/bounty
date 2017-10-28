
mps = typeof mps !== 'undefined' ? mps : {}
mps.holding = mps.holding || []

// reference classes: port, reef, blkg, watr
// reference line

var s = `
 reference -1 -4 rtl;
 2 watr 5 reef 22 swmp 5 reef 19 watr
 5 rugh 1 watr 1 rugh 12 watr 7 rugh 3 watr 2 rugh 4 watr 1 rugh
 3 watr 1 rugh 3 watr 2 rugh 1 watr 2 rugh 
 100 watr
 
`

mps.holding.push(s)
