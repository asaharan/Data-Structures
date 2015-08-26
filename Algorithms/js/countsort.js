function countsort(){
	var n=new Countsort();
	n.init();
	n.run();
}
function Countsort(){

}
Countsort.prototype.init=function() {
	var self=this;
	self.a=[0,9,1,2,3,0,1,2,7,7,7,7,7,7,7,8,12,999,8];
	self.m=10000;
	self.sorted=[];
}
Countsort.prototype.run=function(){
	var self=this;
	self.sort();
}
Countsort.prototype.sort=function(){
	var self=this;
	self.count=[];
	var n=self.a.length;
	for(var i=0;i<self.m;i++){
		self.count[i]=0;
	}
	for(var i=0;i<n;i++){
		self.count[self.a[i]]+=1;
	}
	for(var i=1;i<self.m;i++){
		self.count[i]+=self.count[i-1];
	}
	for(var i=n-1;i>-1;i--){
		self.sorted[self.count[self.a[i]]-1]=self.a[i];
		self.count[self.a[i]]--;
	}
	// print(self.count,true);
	print(self.sorted);
}