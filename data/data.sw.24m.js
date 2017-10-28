
mps = typeof mps !== 'undefined' ? mps : {}
mps.holding = mps.holding || []

// reference classes: port, reef, blkg, watr
// reference line

var s = `
 reference -1 -24 rtl;
 8 watr 18 reef 6 watr 2 rugh
 4 watr 4 rugh 7 watr 4 rugh 5 watr 7 rugh
 7 watr 1 rugh 3 watr 1 rugh
 5 watr 2 rugh 3 watr 1 rugh 1 watr 2 rugh 
 100 watr
 
`

mps.holding.push(s)
