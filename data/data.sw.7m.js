
mps = typeof mps !== 'undefined' ? mps : {}
mps.holding = mps.holding || []

// reference classes: port, reef, blkg, watr
// reference line

var s = `
 reference -1 -7 rtl;
 3 watr 4 reef 21 swmp 5 reef 4 watr 5 rugh 3 watr 2 rugh 5 watr 
 13 rugh 2 watr 5 rugh 11 watr 3 rugh 2 watr 2 rugh 5 watr 2 rugh 3 watr 4 rugh 
 100 watr
 
`

mps.holding.push(s)
