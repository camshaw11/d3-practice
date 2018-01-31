

var barData 	= [12,54,23,12,100,25,86,31,63,14,78,75,1,58];
var height 		= 400;
var width 		= 800;
var barWidth 	= 50;
var barOffset 	= 5;

var yScale		= d3.scaleLinear()
	.domain([0, d3.max(barData)])
	.range([0, height])

var xScale		= d3.scaleBand()
	.domain(d3.range(0, barData.length))
	.range([0, width])

d3.select('body').append('svg')
	.attr('width', width)
	.attr('height', height)
	.style('background-color', 'grey')
	.selectAll('rect')
		.data(barData)
		.enter().append('rect')
			.style('background-color', 'purple')
			.attr('width', xScale.bandwidth())
			.attr('height', function(d) {
				return yScale(d)
			})
			.attr('x', function(d,i){
				return xScale(i)
			})
			.attr('y', function(d){
				return height - yScale(d)
			}).exit();