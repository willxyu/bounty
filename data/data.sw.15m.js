
mps = typeof mps !== 'undefined' ? mps : {}
mps.holding = mps.holding || []

// reference classes: port, reef, blkg, watr
// reference line

var s = `
 reference -1 -15 rtl;
 3 watr 4 reef 17 swmp 2 reef 1 swmp 4 reef
 3 watr 2 rugh 3 watr 3 rugh 6 watr 2 rugh 4 watr 2 rugh
 2 watr 1 rugh 1 watr 2 rugh 2 watr 2 rugh 3 watr 3 rugh 2 watr 4 rugh 2 watr
 2 rugh 3 watr 4 rugh 2 watr 2 rugh 8 watr 1 rugh 
 100 watr
 
`

mps.holding.push(s)
