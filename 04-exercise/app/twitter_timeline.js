var posts = [{name: 'jojo', content: 'jonimo'}, {name: 'bright', content: 'wefwef'}];

exports.timeline = function(){
	return posts;
}

exports.post = function(user, content){

	if(user == undefined) return "error user undefined";

	if(content == undefined) return "error content undefined";

	return "success";
}