#include <stdio.h>
int c=0;
int main(){
	int a,b,t;
	printf("Enter a:");
	scanf("%d",&a);
	printf("You entred %d\n",a);
	printf("Enter b:");
	scanf("%d",&b);
	printf("You entred %d",b);
	if(b>a){
		t=a;
		a=b;
		b=t;
	}
	while(b!=0){
		t=b;
		b=a%b;
		a=t;
		c+=4;
	}
	printf("\nGCD is %d\n",a);
	printf("Time taken is %d",c);
	return 0;
}
