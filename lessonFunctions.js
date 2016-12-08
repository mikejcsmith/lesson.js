	function checkAQuiz(quiz, quizItem, quizOption ){
	// check a single quiz
	console.log('quiz, quizItem, quizOption', quiz, quizItem, quizOption);
	var destinationSpan = '#quiz-select-grade-'+quiz+'-'+quizItem;
	console.log ('destinationSpan',destinationSpan );
	var checkSpan = '#quiz-select-check-'+quiz+'-'+quizItem;
	
		if (quizOption){
			console.log ('something selected');
			$(destinationSpan).html('Grade: '+dataMedia.lesson.quizzes[Number(quiz)].quiz.quizItems[Number(quizItem)].quizItem.options[Number(quizOption)].grade);
			$(checkSpan).html('Check...');
			$(checkSpan).addClass('hidden');
		
		} else {
			console.log ('nothing selected');
			$(destinationSpan).html('nothing selected');
			$(checkSpan).html('Check...');
		}
	
	};
	
	function selectHasChanged ( quiz, quizItem, quizOption){
	console.log ('select has changed');
	console.log('quiz, quizItem, quizOption', quiz, quizItem, quizOption);

	var destinationSpan = '#quiz-select-grade-'+quiz+'-'+quizItem;
	var checkSpan = '#quiz-select-check-'+quiz+'-'+quizItem;
	
		if (quizOption){
			console.log ('something selected');
			$(destinationSpan).html('Grade will show when you click on Check. ');
			$(checkSpan).html('Check');
			$(checkSpan).removeClass('hidden');
		
		} else {
			console.log ('nothing selected');
			$(destinationSpan).html('Select an option...');
			$(checkSpan).html('');
			$(checkSpan).addClass('hidden');
		}
	
	};

	function hintQuiz (quiz, quizItem, quizOption){
		var hintSpan = '#quiz-select-hint-'+quiz+'-'+quizItem;
			$(hintSpan).toggleClass('hidden');
		
	
	};

	function explanationQuiz (quiz, quizItem, quizOption){
		var explanationSpan = '#quiz-select-explanation-'+quiz+'-'+quizItem;
			$(explanationSpan).toggleClass('hidden');
		
	
	};

	
