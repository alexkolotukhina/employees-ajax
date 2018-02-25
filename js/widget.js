;(function($){

	$(document).ready(function(){

		$.getJSON('data/employees.json')
			.done(function(res){
				
				if (Array.isArray(res) && res.length) {

					var items = [];
					for (var i = 0; i < res.length; i++) {
						var item = '';
						var itemClass = res[i].inoffice ? "in" : "out";

						item += '<li class=' + itemClass + '>' + res[i].name + '</li>';
						items.push(item);
					}

					$("<ul/>", {
						"class": 'bulleted',
						html: items.join('')
					}).appendTo('#employeeList');


				}
			})
	});

})(jQuery);