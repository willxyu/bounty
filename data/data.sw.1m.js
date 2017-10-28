
mps = typeof mps !== 'undefined' ? mps : {}
mps.holding = mps.holding || []

// reference classes: port, reef, blkg, watr
// reference line

var s = `
 reference -1 -1 rtl;
 7 reef 23 swmp 6 reef 5 watr 2 rugh 12 watr
 2 rugh 5 watr 2 rugh 3 watr 10 rugh 4 watr
 1 rugh 5 watr 2 rugh 6 watr 3 rugh 2 watr 2 rugh
 100 watr
 
`

mps.holding.push(s)
