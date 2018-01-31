

// d3.selectAll('.node')
// 	.data([true, true, true])
// 	.style('background-color', '#6BB9F0');
					
// var styles = ["#6BB9F0", "#67809F"];


// var styles = [
// 	{
// 		color: '#6BB9F0',
// 		width: '200px'
// 	},
// 	{
// 		color: 'red',
// 		width: '300px'
// 	},
// 	{
// 		color: 'orange',
// 		width: '100px'
// 	},
// 	{
// 		color: 'red',
// 		width: '500px'
// 	}
// ]

// d3.selectAll('.node')
// 	.data(styles)
// 	.style('background-color', function(d){
// 		return d.color
// 	})

// 	.style('width', function(d){
// 		return d.width
// 	})


// var styles = [
// 	{
// 		color: '#6BB9F0',
// 		width: '200px',
// 		text: 'blue node'
// 	},
// 	{
// 		color: 'red',
// 		width: '300px',
// 		text: 'red node'
// 	},
// 	{
// 		color: 'orange',
// 		width: '100px',
// 		text: 'orange node'
// 	},
// 	{
// 		color: 'yellow',
// 		width: '500px',
// 		text: 'yellow node'	
// 	}
// ]

// d3.select('#nodeContainer').selectAll('.newNodes')
// 	.data(styles)
// 	.enter().append('div')
// 		.text(function(d) {
// 			return d.text
// 		})
// 		.style('background-color', function(d){
// 			return d.color
// 		})
// 		.style('width', function(d){
// 			return d.width
// 		})

var object = [];
var number = 100;


for (var i = 0; i < number; i++) {
	var width = Math.floor((Math.random() * 100) + 1) + 'px';

	object.push  
		({
			color: '#'+Math.floor(Math.random()*16777215).toString(16),
			width: width,
			text: width,
		})

}


d3.select('#nodeContainer').selectAll('.newNodes')
	.data(object)
	.enter().append('div')
		.text(function(d) {
			return d.text
		})
		.style('background-color', function(d){
			return d.color
		})
		.style('width', function(d){
			return d.width
		}).exit();


























