def pNode(n):
	#return the parent node of nth child
	return int((n-1)/2)

def lcNode(n):
	#left child of nth element
	return 2*n+1

def rcNode(n):
	return 2*(n+1)

def bubbleUp(A,n):
	p=pNode(n)
	if A[p]>A[n]:
		t=A[p]
		A[p]=A[n]
		A[n]=t
	if p!=0:
		bubbleUp(A,p)

def bubbleDown(A,n):
	#bubbleDown a element if it is greater than its child
	l=lcNode(n)
	r=l+1
	print A[n]
	if r<len(A):
		#both child  node exists
		if A[l]<A[r] and  A[l]<A[n]:
			t=A[l]
			A[l]=A[n]
			A[n]=t
			bubbleDown(A,l)
			return
		else:
			if A[r]<A[n]:
				t=A[r]
				A[r]=A[n]
				A[n]=t
				bubbleDown(A,r)
				return
	else:
		#only left child node exists
		if l< len(A):
			if A[l]<A[n]:
				t=A[l]
				A[l]=A[n]
				A[n]=t
				bubbleDown(A,l)

def delete(A):
	#delete the min element from heap
	t=A[0]
	A[0]=A[len(A)-1]
	del A[len(A)-1]
	bubbleDown(A,0)

def insert(A,e):
	#insert number e in list A
	A.append(e)
	bubbleUp(A,len(A)-1)
def make(A):
	print A

def heapify(A):
	#this makes heap out of radom array
	l=pNode(len(A)-1)
	for i in reversed(range(0,l+1)):
		bubbleDown(A,i)
A=[10,8,7,6,5,4,3,2,1,0]
heapify(A)
'''
A=[0,1,9,3,4,5]
bubbleDown(A,2)
insert(A,1)
insert(A,2)
insert(A,0)
insert(A,0)
insert(A,6)
insert(A,1)
insert(A,0)
'''
print A
v=True
while v:
	x=input("delete more")
	if x!=1:
		v=False
	else:
		delete(A)
		print 'deleted', A
