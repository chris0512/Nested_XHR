const firstRequest = new XMLHttpRequest();
firstRequest.addEventListener('load', function(){
	console.log('First request worked');
	const data = JSON.parse(this.responseText);
	const filmURL = data.results[0].films[0];
	const filmReq = new XMLHttpRequest();
	filmReq.addEventListener('load', function(){
		console.log('Second request worked');
		const filmData = JSON.parse(this.responseText);
		console.log(filmData);
	});
	filmReq.addEventListener('error', function(e){
		console.log('Error', e);
	});
	filmReq.open('GET', filmURL);
	filmReq.send();

});


firstRequest.addEventListener('error', (e) => {
	console.log('Error');
});

firstRequest.open('GET', 'https://swapi.dev/api/planets/');
firstRequest.send();
console.log('Request Sent');
