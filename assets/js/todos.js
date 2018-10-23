// check on and off todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//click on X to delete todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(400, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		console.log($(this).val());

		$("ul").append("<li><span> <i class=\"fa fa-trash\"></i> </span>" + $(this).val() + "</li>");
		$(this).val("");
	}
});

$(".fa-edit").on("click", function(){
	$("input[type='text']").fadeToggle();
});