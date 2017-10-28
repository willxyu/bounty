
mps = typeof mps !== 'undefined' ? mps : {}
mps.holding = mps.holding || []

// reference classes: port, reef, blkg, watr
// reference line

var s = `
 reference -1 -26 rtl;
 11 watr 13 reef 7 watr 2 rugh 3 watr
 7 rugh 8 watr 4 rugh 8 watr 2 rugh 7 watr
 2 rugh 2 watr 1 rugh 4 watr 3 rugh 4 watr 3 rugh
 2 watr 4 rugh 
 100 watr
 
`

mps.holding.push(s)
