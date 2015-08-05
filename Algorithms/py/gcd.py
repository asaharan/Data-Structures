def gcd(f,s):# assuming f > s
	while s!=0:
		t=s
		s=f%s
		f=t
	return f
f=input('First number: ')
s=input('Second number: ')
if f<s:
	t=f
	f=s
	s=t
print "GCD of %d and %d is %d"%( f, s,gcd(f,s))
