const yearEl = document.querySelector("#showyear");
const mapDIV = document.querySelector("#map");
const ageDIV = document.querySelector("#age");
const navLogo = document.querySelector("#navLogo");

const Month = ["Jan","Feb","Mar", "Apr", "May", "Jun","Jul","Aug","Sept", "Oct","Nov","Dec"]


const currentYear = new Date().getFullYear();

yearEl.innerHTML = currentYear;


const myAge = calculateMyAge(1992)

ageDIV.innerHTML = myAge;







function calculateMyAge(DOB) {
	
 
	
	const currentMonth = new Date().getMonth(); 

	
	
	if (currentMonth < 4) {
		return (currentYear-DOB)-1
	} else {
		return currentYear-DOB
	}

	
}


function changeLogoColor() {
	
	let res = Array.from(navLogo.classList).includes('logoChange');

	if (res) {
		navLogo.classList.remove('logoChange');
		navLogo.classList.add('fa-flip-horizontal');
	}else{
		navLogo.classList.add('logoChange')
		navLogo.classList.remove('fa-flip-horizontal');

	}
	
}



setInterval(() => {
	changeLogoColor()
}, 4000);







// code for map


// mapboxgl.accessToken ="pk.eyJ1IjoidGRhbW15IiwiYSI6ImNrdzl2ZHpxbTFscG0yb3Jodmx6NGhoaWIifQ.xzuImP1lJ5EQ6eKgHZt7RQ";


// map.addControl(new mapboxgl.NavigationControl());

// function myLocation() {
	// 	if (navigator.geolocation) {
		// 		return navigator.geolocation.getCurrentPosition((position) => {
			// 			// console.log(position.coords.latitude, position.coords.longitude);
			// 			console.log(position);
// 		});
// 	} else {
	// 		console.log(error);
	// 	}
// }



// let map = new mapboxgl.Map({
// 	container: "mapDIV",
// 	style: "mapbox://styles/mapbox/streets-v11",
// 	center: [-6.451513, 3.417751],
// 	// zoom: 10
// });