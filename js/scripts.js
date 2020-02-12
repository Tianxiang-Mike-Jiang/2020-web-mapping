//Click to change background-image
$('.Color').on('click', function() {
	var backgroundPictureUrl = $(this).attr('data-background')
	console.log(backgroundPictureUrl)
	$('body').css('background-image', `url(${backgroundPictureUrl})`)
})
//Use click function to change the opacity in CSS to show the answers
$('#answer').on('click', function() {
	$('.rightanswer').css('opacity', '1')
})
// Reload the page
$('#reload').on('click', function() {
	location.reload();
})
