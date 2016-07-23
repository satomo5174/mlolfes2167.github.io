$(function(){
$('#fullscreen')
	.find('img:gt(0)').hide();
setInterval(function(){
$('#fullscreen :first-child')
	.fadeOut(1000)
	.next('img').fadeIn(2000)
	.end().appendTo('#fullscreen');},5000);
});
