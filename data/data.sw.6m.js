
mps = typeof mps !== 'undefined' ? mps : {}
mps.holding = mps.holding || []

// reference classes: port, reef, blkg, watr
// reference line

var s = `
 reference -1 -6 rtl;
 3 watr 5 reef 21 swmp 4 reef 5 watr 4 rugh 1 watr 1 rugh 1 watr 2 rugh
 5 watr 9 rugh 1 watr 2 rugh 3 watr 4 rugh
 8 watr 2 rugh 2 watr 3 rugh 2 watr 2 rugh 5 watr
 2 rugh 2 watr 4 rugh 
 100 watr
 
`

mps.holding.push(s)
