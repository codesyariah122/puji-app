new Vue({
	el:'#home',
	data(){
		return {
			ip: this.getCookie('ip_address'),
			city: this.getCookie('city'),
			apiKey: '172033330b26104e83475e409303f1d7',
			map: null,
			result: {},
			weathers: [],
			temp: null,
			feelsLike: null,
			home: {
				title: 'A Dead Simple',
				middleTitle: 'Web',
				polaroid:{
					title: "Hai ! ",
					context: "Selamat datang <br/> perkenalkan saya <span class='puji'>Puji Ermanto</span> dan ini merupakan landing page saya,<span style='font-family:SpringSakura;'>|</span> <br/>salam kenal.",
					image: '/images/home/sayhalo1.gif'
				}
			},
			jumbotron: {
				style: {
					'background-image': 'url(/images/home/story22.jpg)'
				}
			},
			parallax:{
				developer: {
					phone: '6288222668778',
					ig: 'pujiermanto',
					capt: 'Satu peluru hanya dapat menembus satu kepala, tapi satu tulisan dapat menembus jutaan kepala.'
				},
				style: {
					'background-image': 'url(/images/home/parallax2.jpg)'
				}
			},
			polaroidWeather: {
				style: {
					'font-size': '25px',
					'color': 'rgba(0, 0, 0, 0.9)',
					'margin-top': '3rem',
					'margin-left': '-5.7rem'
				}
			},
		}

	},
	beforeMount(){
		this.homeLanding(this.city, this.apiKey)
	},
	mounted(){
		this.getIp(),		
		this.getLocation(this.ip)
	},

	methods: {
		getIp(){
			fetch(`https://api.ipify.org/?format=json`)
			.then(res => res.json())
			.then(res => {
				this.setCookie('ip_address', res.ip, 1)
			})
			.catch(err => console.log(err))
		},
		getLocation(ip){
			fetch(`https://ipapi.co/${ip}/json/`)
			.then(res => res.json())
			.then(res => {
				this.result=res
				// console.log(this.result)
				this.setCookie('city', this.result.city)
				this.map=`https://www.openstreetmap.org/#map=12/${this.result.latitude}/${this.result.longitude}`
			})
			.catch(err => console.log(err))
		},
		homeLanding(city, apiKey){
			fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`)
			.then(res => res.json())
			.then(res => {
				console.log(res)
				this.temp = this.getCelcius(res.main.temp) + '&deg;C'
				this.feelsLike = this.getCelcius(res.main.feels_like) + '&deg;C'
				this.weathers = res.weather
				console.log(this.weathers)
			})
		},

		getCelcius(num){
			return Math.ceil((parseFloat(num) - 32) / 1.8)
		},

		setCookie(cname, cvalue, exdays){
			const date = new Date()
			date.setTime(date.getTime() + (exdays * 24 * 60 * 60 * 1000))
			const expires = `Expires=${date.toGMTString()}`

			document.cookie=`${cname}=${cvalue};${expires}`;
		},

		getCookie(cname) {
			// console.log(cname)
			let name =`${cname}=`;
			let ca = document.cookie.split(';');
			for(let i = 0; i < ca.length; i++) {
				let c = ca[i];
				while (c.charAt(0) == ' ') {
					c = c.substring(1);
				}
				if (c.indexOf(name) == 0) {
					return c.substring(name.length, c.length);
				}
			}
			return "";
		},

	}
})

