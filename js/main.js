// (function(){

	//Varuables
// 	var increaseRad = $('#increase-radius'),
// 		reduseRad = $('#reduce-radius'),
// 		create = $('.create'),
// 		maxRadius = 20,
// 		minRadius = 0;

// 		increaseRad.on('click', function() {

// 			var currentRadius = create.css('border-radius'),
// 				step = $('#step').val(),
// 				newRadius = (parseInt(currentRadius) + parseInt(step));

// 				if(newRadius > maxRadius){
// 					newRadius = maxRadius;
// 					$(this).addClass('disabled');
// 				}
// 				if(newRadius > minRadius){
// 					reduseRad.removeClass('disabled');
// 				}

// 				create.css({
// 					'border-radius' : newRadius
// 				})
// 				console.log(currentRadius);
// 				console.log(step);

// 		});

// 		reduseRad.on('click', function() {

// 			var currentRadius = create.css('border-radius'),
// 				step = $('#step').val(),
// 				newRadius = (parseInt(currentRadius) - parseInt(step));

// 				if(newRadius < minRadius){
// 					newRadius = minRadius;
// 					$(this).addClass('disabled');
// 				}
// 				if(newRadius < maxRadius){
// 					increaseRad.removeClass('disabled');
// 				}

// 				create.css({
// 					'border-radius' : newRadius
// 				})
// 				console.log(currentRadius);
// 				console.log(step);

// 		});


// }());

(function(){

	var increaseRad = $('#increase-radius'),
		reduceRad = $('#reduce-radius'),
		create = $('.create'),
		maxRadius = 20,
		minRadius = 0,
		bgColorInp = $('#bg-color'),
		brColorInp = $('#border-color'),
		codeResult = $('#result');

		increaseRad.on('click', function(){
			var currentRadius = create.css('border-radius'),
				step = $('#step').val(),
				newRadius = (parseInt(currentRadius) + parseInt(step));

				if(newRadius > maxRadius){
					newRadius = maxRadius,
					$(this).addClass('disabled')
				}

				if(newRadius > minRadius){
					reduceRad.removeClass('disabled');
				}

				create.css({
					'border-radius' : newRadius
				});
				updateResult();

		});

		reduceRad.on('click', function(){
			var currentRadius = create.css('border-radius'),
				step = $('#step').val(),
				newRadius = (parseInt(currentRadius) - parseInt(step));

				if(newRadius < minRadius){
					newRadius = maxRadius,
					$(this).addClass('disabled')
				}

				if(newRadius < maxRadius){
					increaseRad.removeClass('disabled');
				}

				create.css({
					'border-radius' : newRadius
				});
				updateResult();
		});

		bgColorInp.on('change', function(){
			var newRadius = '#' + $(this).val();
			create.css({
				'background-color' : newRadius
			});
			updateResult();
		});

		brColorInp.on('change', function(){
			var newRadius = '#' + $(this).val();
			create.css({
				'border-color': newRadius
			});
			updateResult();
		});


		var updateResult = function(){

			var borderRad = create.css('border-radius'),
				bgColor = create.css('background-color'),
				brColor = create.css('border-color');

			codeResult.text(
				'-moz-border-radius:' + borderRad + ';\n' + 
				'-webkit-border-radius:' + borderRad + ';\n' + 
				'border-radius:' + borderRad + ';\n' + 
				'border-color:' + brColor + ';\n' +
				'background-color:' + bgColor + ';'
				);
		}

		updateResult();

}());