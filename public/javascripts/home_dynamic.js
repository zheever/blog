(function() {

	$(document).ready(function () {
        add_triggle_menu_listener();
        $(document).on('click', 'a', function(event) {
    		var container = $('#list_container');
   		 	$.pjax.click(event, container);
   		});
   		$('#blog_dynamic_button').click();
});


	function add_triggle_menu_listener() {
		$(".triggle_menu li").click(function(){
			$(this).siblings().each(function(){
				$(this).removeClass("active");
			})
			$(this).addClass("active");
		})
	}


})();