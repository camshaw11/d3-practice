console.log('yes');

// array of objects
// var data = [
// {
// 	age: 12,
// 	weight: 54
// },
// {
// 	age: 54,
// 	weight: 75
// },
// {
// 	age: 64,
// 	weight: 74
// },
// {
// 	age: 73,
// 	weight: 86
// },
// {
// 	age: 17,
// 	weight: 44
// },
// {
// 	age: 66,
// 	weight: 99
// },
// {
// 	age: 32,
// 	weight: 82
// },
// {
// 	age: 40,
// 	weight: 64
// }
// ]


var data;
d3.json('js/ageWeight.json', function(error, jsonData){
	if(error) {
		console.log('something has gone wrong');
		return;
	}
	data = jsonData;



var height 		= 800;
var width 		= 800;

var yMax = 0;
var xMax = 0;


for (var i = 0; i < data.length; i++) {
	if(data[i].age > yMax) {
		yMax = data[i].age
	}

	if(data[i].weight > xMax) {
		xMax = data[i].weight
	}
}

var yScale		= d3.scaleLinear()
	.domain([0, yMax])
	.range([0, height])

var xScale		= d3.scaleLinear()
	.domain([0, xMax])
	.range([0, width])


var color = d3.scaleLinear()
	.domain([0, xMax/2, xMax])
	.range(['#19B5FE','#00E640', '#D91E18'])

// var tb = data.getSelection()

d3.select('body').append('svg')
	.attr('width', width)
	.attr('height', height)
	.style('background-color', 'grey')
	.selectAll('circle')
		.data(data)
		.enter().append('circle')
			.classed('circle', true)
			.style('fill', function(d, i) {
				return color(d.weight)
			})
			.attr('r', '5')
			.attr('cx', function(d) {
				return xScale(d.weight)
			})
			.attr('cy', function(d){
				return height - yScale(d.age)
			})



			.on('mouseover', function(d) {
				d3.select(this)
					.style('opacity', 0.5)
					console.dir(this.__data__.age);
					document.getElementById('ageInput').innerText = "Age:" + " " + this.__data__.age;
					document.getElementById('weightInput').innerText = "Weight:" + " " + this.__data__.weight + " " + "Kgs";
	
			})
			.on('mouseout', function(d) {
				d3.select(this)
					.style('opacity', 1)
			})











			.exit();

});






















