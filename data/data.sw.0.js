
mps = typeof mps !== 'undefined' ? mps : {}
mps.holding = mps.holding || []

// reference classes: port, reef, blkg, watr
// reference line

var s = `
 reference -1 0 rtl;
 2 reef 1 swmp 4 reef 23 swmp 6 reef 4 watr
 1 rugh 1 watr 2 rugh 18 watr 1 rugh
 2 watr 6 rugh 9 watr 2 rugh 4 watr
 3 rugh 6 watr 3 rugh 2 watr 3 rugh 50 watr
 
`

mps.holding.push(s)
