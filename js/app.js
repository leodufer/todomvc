$('input').keyup(function(e) {
	
	var todoText = $(this).val();
	if(todoText && e.keyCode === 13){
		$(this).val('');
		$('.todo-list').append($('<div>').append($('<h3>').append(todoText)));
	}
});