function tree(){
	print('object created');
	var n=new Tree();
	n.init();
	n.run();
}
function Tree(){

}
Tree.prototype.init=function(){
	print('init');
}
Tree.prototype.run=function(){
	print('run');
}