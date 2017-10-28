
mps = typeof mps !== 'undefined' ? mps : {}
mps.holding = mps.holding || []

// reference classes: port, reef, blkg, watr
// reference line

var s = `
 reference -1 -22 rtl;
 6 watr 7 reef 4 swmp 4 reef 1 swmp 4 reef 7 watr 3 rugh 6 watr
 1 rugh 5 watr 2 rugh 7 watr 4 rugh 8 watr 2 rugh 4 watr 
 2 rugh 4 watr 3 rugh  
 100 watr
 
`

mps.holding.push(s)
