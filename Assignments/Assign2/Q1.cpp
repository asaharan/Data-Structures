#include <stdio.h>
#include <iostream>
using namespace std;
struct stack{
	int s,e,h;
	stack* next;
};
stack pop(stack* st){
	stack t=st;
	st=st->next;
	return t;
}
stack push(stack* st, int s, int e, int h){
	stack t= new stack();
	t->s=s;
	t->e=e;
	t->h=h;
	t->next=st;
	//cout<<t->h;
	st=t;
	//cout<<st->h;
	return st;
}
bool empty(stack st){
	if(st==NULL)
		return true;
	return false;
}
int area(stack st){
	return (st->e-st->s+1)*st->h;
}
int main(){
	int H[]={1,2,3,1,2};
	stack M;
	push(&M,0,-1,0);
	stack st,a,b,c;
	st=NULL;
	int i=0;
	push(&st,0,0,H[0]);
	return 0;
	/*for(i=1;i<sizeof(H)/sizeof(int);i++){
		a=pop(st);
		cout<<a->h;
			while(false && a->h>=H[i] && !empty(st)){
				if(area(a)>area(M))
					M=a;
				a=pop(st);
			}
		if(empty(st)){
			push(st,0,i,H[i]);
		}else{
			b=pop(st);
			push(st,b->s,b->e,b->h);
			push(st,b->s,i,H[i]);
		}
	}
	return 0;
	while(!empty(st)){
		c=pop(st);
		if(area(c)>area(M)){
			M=a;
		}
	}
	cout<<area(M);
	return 0;*/
}
