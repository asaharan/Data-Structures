function klarge(){
	var n=new Klarge();
	n.init();
	n.run();
}
function Klarge(){}
Klarge.prototype.init=function(){
	var self=this;
	self.a=[2,1,9,9,4,3,2,4,2];
	self.k=3;
	self.d=Math.ceil(self.a.length/self.k);
}
Klarge.prototype.run=function(){
	var self=this;
	var n=self.a.length;
	self.b=[];
	for(var i=0;i<n;i++){
		if(i%self.k==0){
			self.b.push([]);
		}
		self.b[self.b.length-1].push(self.a[i]);//self.a[i];
	}
	for(var j=0;j<self.d;j++){
		// print(self.b[j],true)
		self.b[j].sort();
		// print(self.b[j],true)
	}
	print(self.b,true);
	var maxList=[];
	for(var m=0;m<self.k;m++){
		var maxValue=self.b[0][self.b[0].length-1];
		var indexForMax=0;
		for(var p=1;p<self.d;p++){
			if(self.b[p].length>0 && maxValue<self.b[p][self.b[p].length-1]){
				maxValue=self.b[p][self.b[p].length-1];
				indexForMax=p
			}
		}
		// print(maxValue)
		maxList.push(maxValue);
		self.b[indexForMax].splice(self.b[indexForMax].length-1,1)
	}
	print(maxList,true);
	print(self.b,true);
	// print(self.b,true);
	// print(self.d);	
}