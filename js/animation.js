/* $('.box1').click(function() {
	$(this).toggleClass('active')
}); */

var count = 0;
var seconds = 0;

$('.box1').click(function(){
	count = count + 1;
	$(this).css('animation-play-state', 'paused')
	console.log(count)
	if(count == 7) {
		$('.modal-wrapper').css('display', 'table')
		$('.score-wrap > span').text(seconds/1000)
	}
})

$('#second').change(function(){
	$('.box1').css('animation-duration', $(this).val())
	$('.box1').css('animation-play-state', 'running')
	setInterval(function() {
		seconds = seconds + 1;
	}, 1)
})