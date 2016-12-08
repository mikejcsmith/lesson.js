<!-- lesson processing code -->

(function(){

	function dataHandler(dataMedia){
		//console.log("dataMedia", dataMedia);
		window.dataMedia  = dataMedia;
		console.log ("dataMedia ready");
	};
	window.dataHandler = dataHandler;


	$("document").ready(function() {
	
		// set video element
		if (dataMedia.media.video.useThis){
			
			// set document title
			$(document).attr("title", dataMedia.media.title);
			
			// set video element
			var videoSource   = $("#video-template").html();
			var videoTemplate = Handlebars.compile(videoSource);
			var videoHtml    = videoTemplate(dataMedia.media.video);
					 console.log ("VIDEO TEMPLATE: ");
					 console.log (videoHtml);
			$("#divVideoInner").html(videoHtml);
			console.log ("video ready");
			
			// set synchronised transcript	
			var popcorn = Popcorn( '#myVideo');
			window.popcorn = popcorn;

			var vid = document.getElementById("myVideo");
			window.vid = vid;
			doPopcorn(popcorn, vid);	
			
		} 

		// set compare texts
		console.log ("dataMedia.lesson.compareTexts.useThis",dataMedia.lesson.compareTexts.useThis);
		if (dataMedia.lesson.compareTexts.useThis){
			$('#compareTexts').removeClass('hidden');

			if (dataMedia.lesson.compareTexts.useRAW){
				var source = $('#templateTitleAndParasRaw').html();	
				console.log("using raw");		
			} else {
				var source = $('#templateTitleAndParas').html();			
			}



			// intro
			var destination =  '#compareTextsIntro';
			var template = Handlebars.compile(source);
			var html = template(dataMedia.lesson.compareTexts.intro);
			$(destination).html(html);
				console.log ("html",html, "to", destination);

			// Text A
			var destination =  '#compareTextsTextA';
			var template = Handlebars.compile(source);
			var html = template(dataMedia.lesson.compareTexts.textA);
			$(destination).html(html);
				console.log ("html",html, "to", destination);

			// Text B
			var destination =  '#compareTextsTextB';
			var template = Handlebars.compile(source);
			var html = template(dataMedia.lesson.compareTexts.textB);
			$(destination).html(html);
				console.log ("html",html, "to", destination);		
		} else {
			$('#compareTexts').addClass('hidden');
		}

		// set reflection
		console.log ("dataMedia.lesson.reflection.useThis",dataMedia.lesson.reflection.useThis,"dataMedia.lesson.reflection.useRAW", dataMedia.lesson.reflection.useRAW);
		if (dataMedia.lesson.reflection.useThis){
			$('#reflection').removeClass('hidden');

			if (dataMedia.lesson.reflection.useRAW){
				var source = $('#templateTitleAndParasRaw').html();	
				console.log("using raw");		
			} else {
				var source = $('#templateTitleAndParas').html();			
			}

			var destination =  '#reflectionContent';
			var template = Handlebars.compile(source);
			var html = template(dataMedia.lesson.reflection);
			$(destination).html(html);
				console.log ("html",html, "to", destination);
		} else {
			$('#reflection').addClass('hidden');
		}

		// set teacherNotes
		console.log ("dataMedia.lesson.teacherNotes.useThis",dataMedia.lesson.teacherNotes.useThis, "dataMedia.lesson.teacherNotes.useRaw",dataMedia.lesson.teacherNotes.useRAW);
		if (dataMedia.lesson.teacherNotes.useThis){
			$('#teacherNotes').removeClass('hidden');

			if (dataMedia.lesson.teacherNotes.useRAW){
				var source = $('#templateTitleAndParasRaw').html();	
				console.log("using raw");		
			} else {
				var source = $('#templateTitleAndParas').html();			
			}
		
			var destination =  '#teacherNotesContent';
			var template = Handlebars.compile(source);
			var html = template(dataMedia.lesson.teacherNotes);
			$(destination).html(html);
				console.log ("html",html, "to", destination);
		} else {
			$('#teacherNotes').addClass('hidden');
		}

		// set Quiz General
		console.log('Quiz General Output');
		
			var source = $('#templateQuizGeneral').html();	
			var destination =  '#quizGeneralOutput';
			var template = Handlebars.compile(source);
			var html = template(dataMedia.lesson);
			$(destination).html(html);
				//console.log ("html",html, "to", destination);
	
		//process play buttons
			processPlayButtons();		

		// set Quiz Select boxes
		console.log('Quiz Select Output');
		
			var source = $('#templateQuizSelect').html();	
			var destination =  '#select-quiz-output';
			var template = Handlebars.compile(source);
			var html = template(dataMedia.lesson);
			$(destination).html(html);
				//console.log ("html",html, "to", destination);
		

	});
	
	
	function checkAQuiz(quiz, quizItem, quizOption ){
	// check a single quiz
	console.log('quiz, quizItem, quizOption', quiz, quizItem, quizOption);
	
	};
	
})();


	
	
