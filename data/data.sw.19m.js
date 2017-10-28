
mps = typeof mps !== 'undefined' ? mps : {}
mps.holding = mps.holding || []

// reference classes: port, reef, blkg, watr
// reference line

var s = `
 reference -1 -19 rtl;
 4 watr 5 reef 13 swmp 7 reef 13 watr 1 rugh 
 13 watr 3 rugh 5 watr 5 rugh 2 watr 2 rugh 1 watr 3 rugh 3 watr 1 rugh 2 watr 2 rugh
 7 watr 13 rugh
 100 watr
 
`

mps.holding.push(s)
