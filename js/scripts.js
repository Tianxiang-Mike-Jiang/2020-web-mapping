$('.Color').on('click', function() {
	var backgroundPictureUrl = $(this).attr('data-background')
	console.log(backgroundPictureUrl)
	$('body').css('background-image', `url(${backgroundPictureUrl})`)
})
$('#answer').on('click', function() {
	$('.rightanswer').css('opacity', '1')
})
$('#reload').on('click', function() {
	location.reload();
})
