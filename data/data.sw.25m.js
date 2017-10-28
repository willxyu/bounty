
mps = typeof mps !== 'undefined' ? mps : {}
mps.holding = mps.holding || []

// reference classes: port, reef, blkg, watr
// reference line

var s = `
 reference -1 -25 rtl;
 10 watr 15 reef 7 watr 1 rugh
 4 watr 2 rugh 2 watr 2 rugh 6 watr 6 rugh
 4 watr 2 rugh 1 watr 3 rugh 7 watr 2 rugh
 2 watr 1 rugh 4 watr 3 rugh 4 watr 3 rugh
 100 watr
 
`

mps.holding.push(s)
