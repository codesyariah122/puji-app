new Vue({
	el: '#nav',
	data:{
		brand: 'Hallo',
	},

	created(){
		this.handleScroll()
	},
	methods: {
		handleScroll(){
			// console.log("Ok")
			window.document.body.onscroll=function(){
				let isDesktop = window.matchMedia('only screen and (min-width: 992px)').matches;
				const nav = document.querySelector('.navbar')
				const scrollTop = $(this).scrollTop()
				if(!isDesktop){
					nav.classList.add('mobileNav')
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
					nav.classList.remove('mobileNav')
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
			}
		},
	}
})

