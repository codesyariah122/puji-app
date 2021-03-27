const hbsHelper = {
	if_cond: function(a, b, cond){
		return (a % b == 1) ? cond.fn(this) : cond.inverse(this)
	}
}

export default hbsHelper