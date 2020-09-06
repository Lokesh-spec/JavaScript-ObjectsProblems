// JavaScript Pricey products

function products(r) {
  let arr = [];
	for(let entry of Object.entries(r)){
		if(entry[1] >= 500) arr.push(entry);
	}
	arr.sort((a,b) => b[1] -a[1]);
	return arr.map( item => item[0]);
}


console.log(products({"Computer" : 600, "TV" : 800, "Radio" : 50}));

console.log(products({"Bike1" : 510, "Bike2" : 401, "Bike3" : 501}));

console.log(products({"Loafers" : 50, "Vans" : 10, "Crocs" : 20}));
