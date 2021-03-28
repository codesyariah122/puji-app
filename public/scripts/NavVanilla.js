document.addEventListener('scroll', function(){
	let isDesktop = window.matchMedia('only screen and (min-width: 992px)').matches;
	const nav = document.querySelector('.navbar')
	const scrollTop = $(this).scrollTop()
	if(!isDesktop){
		if(scrollTop > 150){
			nav.classList.remove('navbar-light')
			nav.classList.add('navbar-light')
			nav.classList.add('transition')
			if(scrollTop > 400){
				nav.classList.add('bg-white')
			}else{
				nav.classList.remove('bg-white')
				nav.classList.add('transparent-nav')
			}
		}else{
			nav.classList.remove('transparent-nav')
			nav.classList.remove('bg-white')
			nav.classList.remove('transition')
		}
		// console.log("is mobile")
	}else{
		// console.log(scrollTop)
		if(scrollTop > 150){
			nav.classList.remove('transparent-nav')
			nav.classList.add('transition')
			if(scrollTop > 400){
				nav.classList.add('bg-dark')
			}else{
				nav.classList.remove('bg-dark')
				nav.classList.add('transparent-nav')
			}
		}else{
			nav.classList.remove('transparent-nav')
			nav.classList.remove('bg-dark')
			nav.classList.remove('transition')
		}
		// console.log("is Desktop")
	}
})