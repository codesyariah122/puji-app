function stringToBoolean(string){
	switch(string.toLowerCase().trim()){
		case "true": return true; break;
		case "false": return false;
		default: return Boolean(string);
	}
	console.log(string)
	console.log(typeof string)
}
const hbsHelper = {
	if_cond: function(a, b, cond){
		return (a % b == 1) ? cond.fn(this) : cond.inverse(this)
	},
	if_prod: function(cond, opt1, opt2){
		// const condition = stringToBoolean(cond)
		return (cond == true) ? opt1.fn(this) : opt2.inverse(this)
	}
}

export default hbsHelper