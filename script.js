$(document).ready(function () {
	$(document).on('click','#link', function(e) {
		$.ajax({
  			url: 'https://bootstrap-4.ru/',
  			success: function(){
    		alert('Load was performed.');
  			}
		});
	});

});