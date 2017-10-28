
mps = typeof mps !== 'undefined' ? mps : {}
mps.holding = mps.holding || []

// reference classes: port, reef, blkg, watr
// reference line

var s = `
 reference -1 -9 rtl;
 3 watr 5 reef 19 swmp 5 reef 4 watr 3 rugh 4 watr 2 rugh 6 watr 5 rugh 3 watr
 7 rugh 4 watr 4 rugh 2 watr 1 rugh 2 watr 1 rugh 3 watr
 3 rugh 2 watr 3 rugh 4 watr 3 rugh 10 watr 2 rugh
 100 watr
 
`

mps.holding.push(s)
