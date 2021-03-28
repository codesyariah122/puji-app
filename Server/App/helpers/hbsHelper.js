const hbsHelper = {
	if_cond: function(a, b, cond){
		return (a % b == 1) ? cond.fn(this) : cond.inverse(this)
	},

	if_prod: function(cond, opt1, opt2){
		return (cond == true) ? opt1.fn(this) : opt2.inverse(this)
	}
}

export default hbsHelper