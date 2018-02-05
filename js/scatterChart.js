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

var margin = {
	top: 50,
	right: 50,
	bottom: 50,
	left: 50
}



var height 	= 800 - margin.top - margin.bottom;
var width 	= 800 - margin.left - margin.right;

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

var Graph = d3.select('#nodeContainer').append('svg')
	.attr('width', width + margin.left + margin.right)
	.attr('height', height + margin.top + margin.bottom)
	.style('background-color', 'grey')
	.append('g') //group svgs together
	.attr('transform', 'translate('+margin.left+','+margin.top+')')
	.selectAll('circle')
		.data(data)
		.enter().append('circle')
			.classed('circle', true)
			.style('fill', function(d, i) {
				return color(d.weight)
			})
			.attr('r', '5')
			.attr('cx', 0)
			.attr('cy', height)



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




			Graph.transition()
				.attr('cx', function(d) {
					return xScale(d.weight)
				})
				.attr('cy', function(d){
					return height - yScale(d.age)
				})
				.delay(function(d, i) {
					return i * 20
				})
				.duration(1000)
				.ease(d3.easeBounce);






			// y axis
			var vGuideScale = d3.scaleLinear()
				.domain([0, yMax])
				.range([height, 0])

			var vAxis = d3.axisLeft(vGuideScale)
				.ticks(10)

			var vGuide = d3.select('svg').append('g')
			vAxis(vGuide)
			vGuide.attr('transform', 'translate('+margin.left+','+margin.top+')')

			// x axis
			var hGuideScale = d3.scaleLinear()
				.domain([0, xMax])
				.range([0, width])

			var hAxis = d3.axisBottom(hGuideScale)
				.ticks(10)

			var hGuide = d3.select('svg').append('g')
			hAxis(hGuide)
			hGuide.attr('transform', 'translate('+margin.left+','+(height + margin.top)+')')







});






















