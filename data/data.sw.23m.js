
mps = typeof mps !== 'undefined' ? mps : {}
mps.holding = mps.holding || []

// reference classes: port, reef, blkg, watr
// reference line

var s = `
 reference -1 -23 rtl;
 7 watr 19 reef 6 watr 3 rugh 6 watr 2 rugh 6 watr
 2 rugh 7 watr 5 rugh 
 13 watr 1 rugh 5 watr 2 rugh 
 20 watr 3 rugh
 100 watr
 
`

mps.holding.push(s)
