
mps = typeof mps !== 'undefined' ? mps : {}
mps.holding = mps.holding || []

// reference classes: port, reef, blkg, watr
// reference line

var s = `
 reference -1 -27 rtl;
 31 watr 2 rugh 3 watr 3 rugh 4 watr 4 watr 4 watr 1 watr
 3 rugh 9 watr 2 rugh 5 watr 3 rugh 7 watr 3 rugh 3 watr 3 rugh 
 3 watr 4 rugh 6 watr 6 rugh
 100 watr
 
`

mps.holding.push(s)
