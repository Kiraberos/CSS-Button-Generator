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
		minRadius = 0;

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
				})
				console.log(currentRadius);
				console.log(step);

		})

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
				})
				console.log(currentRadius);
				console.log(step);
		})
}());