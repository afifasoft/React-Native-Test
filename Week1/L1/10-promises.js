const url = '/pos/login';

fetch(url)
	.then(function(res) {
		return res.json()
	})
	.then(function(json) {
		return( {
			importantData: json.importantData
		})
	})
	.then(function(data) {
		console.log(data)
	})
	.catch(function(err) {
		// handle error
	})
