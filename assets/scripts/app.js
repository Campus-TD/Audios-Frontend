var slider = document.getElementById("myRange");
var output = document.getElementById("value");
var switcher = document.getElementById("switch-theme");
var index1 = document.getElementById("div-status-1");
var index2 = document.getElementById("div-status-2");
var index3 = document.getElementById("div-status-3");
var index4 = document.getElementById("div-status-4");
var index = 1;
var indexController = document.getElementById("control-index");

function frame1() {
	const trasladar = indexController.animate([
		{ transform: 'translateX(52.5%)' },
	], {
		easing: 'ease-in-out',
		iterations : 1,
		duration: 1000,
	});

	return trasladar.finished;
}

function displacer1() {
	frame1().then((res) => {
		console.log('Animation finished');
		indexController.setAttribute("style", "transform: translateX(52.5%);");
	});
}

function frame2() {
	const trasladar = indexController.animate([
		{ transform: 'translateX(17.5%)' },
	], {
		easing: 'ease-in-out',
		iterations : 1,
		duration: 1000,
	});
	
	return trasladar.finished;
}

function displacer2() {
	frame2().then((res) => {
		console.log('Animation 2 finished');
		indexController.setAttribute("style", "transform: translateX(17.5%);");
	});
}

function frame3() {
	const trasladar = indexController.animate([
		{ transform: 'translateX(-17.5%)' },
	], {
		easing: 'ease-in-out',
		iterations : 1,
		duration: 1000,
	});

	return trasladar.finished;
}

function displacer3() {
	frame3().then((res) => {
		console.log('Animation 3 finished');
		indexController.setAttribute("style", "transform: translateX(-17.5%);");
	});
}

function frame4() {
	const trasladar = indexController.animate([
		{ transform: 'translateX(-52.0%)' },
	], {
		easing: 'ease-in-out',
		iterations : 1,
		duration: 1000,
	});

	return trasladar.finished;
}

function displacer4() {
	frame4().then((res) => {
		console.log('Animation 4 finished');
		indexController.setAttribute("style", "transform: translateX(-52.0%);");
	});
}

// Vars for recorder
//webkitURL is deprecated but nevertheless
URL = window.URL || window.webkitURL;

var gumStream; 						//stream from getUserMedia()
var rec; 							//Recorder.js object
var input; 							//MediaStreamAudioSourceNode we'll be recording

// shim for AudioContext when it's not avb. 
var AudioContext = window.AudioContext || window.webkitAudioContext;
var audioContext //audio context to help us record

var recordButton = document.getElementById("recordButton");
var stopButton = document.getElementById("stopButton");

//add events to those 2 buttons
recordButton.addEventListener("click", startRecording);
stopButton.addEventListener("click", stopRecording);

// Fill progress bar

slider.addEventListener("mousemove", function() {
    var x = slider.value;
    var color = 'linear-gradient(90deg, #3A6DA8 ' + x + '%, #AAAAAA ' + x + '%)';
    slider.style.background = color;
    slider.style.borderRadius = '25px';

    }
);

// Theme switcher

switcher.addEventListener("click", function() {
    
    if (document.querySelector('link[rel="stylesheet"]').getAttribute('href') == 'assets/styles/style-light-theme.css') 
    {
        document.getElementById('logo').setAttribute('src', 'assets/images/logo.png')
        document.querySelector('link[rel="stylesheet"]').removeAttribute('href', 'assets/styles/style-light-theme.css');
        document.querySelector('link[rel="stylesheet"]').setAttribute('href', 'assets/styles/style-dark-theme.css');
        document.getElementById("ico").classList.add("fa-sun");
        document.getElementById("ico").classList.remove("fa-moon");
        document.getElementById("wave-image").setAttribute("src", "assets/images/wave-dark.svg");
    }
    else
    {
        document.getElementById('logo').setAttribute('src', 'assets/images/logo_black.png')
        document.querySelector('link[rel="stylesheet"]').removeAttribute('href', 'assets/styles/style-dark-theme.css');
        document.querySelector('link[rel="stylesheet"]').setAttribute('href', 'assets/styles/style-light-theme.css');
        document.getElementById("ico").classList.add("fa-moon");
        document.getElementById("ico").classList.remove("fa-sun");
        document.getElementById("wave-image").setAttribute("src", "assets/images/wave-light.svg");
    }
}
);

// Status   

index1.addEventListener("click", function() {
    if (document.getElementById("div-status-1").classList.contains("active"))
    {

    }
    else {
        document.getElementById("div-status-1").classList.remove("inactive");
        document.getElementById("div-status-1").classList.add("active");
        document.getElementById("div-status-2").classList.remove("active");
        document.getElementById("div-status-2").classList.add("inactive");
        document.getElementById("div-status-3").classList.remove("active");
        document.getElementById("div-status-3").classList.add("inactive");
        document.getElementById("div-status-4").classList.remove("active");
        document.getElementById("div-status-4").classList.add("inactive");
		frame1();
		displacer1();
        index = 1;
    }
}
);

index2.addEventListener("click", function() {
    if (document.getElementById("div-status-2").classList.contains("active")) 
    {

    }
    else {
        document.getElementById("div-status-2").classList.remove("inactive");
        document.getElementById("div-status-2").classList.add("active");
        document.getElementById("div-status-1").classList.remove("active");
        document.getElementById("div-status-1").classList.add("inactive");
        document.getElementById("div-status-3").classList.remove("active");
        document.getElementById("div-status-3").classList.add("inactive");
        document.getElementById("div-status-4").classList.remove("active");
        document.getElementById("div-status-4").classList.add("inactive");
		frame2();
		displacer2();
        index = 2;
    }
}
);

index3.addEventListener("click", function() {
    if (document.getElementById("div-status-3").classList.contains("active")) 
    {

    }
    else {
        document.getElementById("div-status-3").classList.remove("inactive");
        document.getElementById("div-status-3").classList.add("active");
        document.getElementById("div-status-1").classList.remove("active");
        document.getElementById("div-status-1").classList.add("inactive");
        document.getElementById("div-status-2").classList.remove("active");
        document.getElementById("div-status-2").classList.add("inactive");
        document.getElementById("div-status-4").classList.remove("active");
        document.getElementById("div-status-4").classList.add("inactive");
		frame3();
		displacer3();
        index = 3;
    }
}
);

index4.addEventListener("click", function() {
    if (document.getElementById("div-status-4").classList.contains("active")) 
    {

    }
    else {
        document.getElementById("div-status-4").classList.remove("inactive");
        document.getElementById("div-status-4").classList.add("active");
        document.getElementById("div-status-1").classList.remove("active");
        document.getElementById("div-status-1").classList.add("inactive");
        document.getElementById("div-status-2").classList.remove("active");
        document.getElementById("div-status-2").classList.add("inactive");
        document.getElementById("div-status-3").classList.remove("active");
        document.getElementById("div-status-3").classList.add("inactive");
		frame4();
		displacer4();
        index = 4;
    }
}
);



// recorder

function startRecording() {
	console.log("recordButton clicked");

	/*
		Simple constraints object, for more advanced audio features see
		https://addpipe.com/blog/audio-constraints-getusermedia/
	*/
    
    var constraints = { audio: true, video:false }

 	/*
    	Disable the record button until we get a success or fail from getUserMedia() 
	*/

	

	/*
    	We're using the standard promise based getUserMedia() 
    	https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
	*/

	navigator.mediaDevices.getUserMedia(constraints).then(function(stream) {
		console.log("getUserMedia() success, stream created, initializing Recorder.js ...");

		/*
			create an audio context after getUserMedia is called
			sampleRate might change after getUserMedia is called, like it does on macOS when recording through AirPods
			the sampleRate defaults to the one set in your OS for your playback device
		*/
		audioContext = new AudioContext();

		//update the format 
		document.getElementById("formats").innerHTML="Format: 1 channel pcm @ "+audioContext.sampleRate/1000+"kHz"

		/*  assign to gumStream for later use  */
		gumStream = stream;
		
		/* use the stream */
		input = audioContext.createMediaStreamSource(stream);

		/* 
			Create the Recorder object and configure to record mono sound (1 channel)
			Recording 2 channels  will double the file size
		*/
		rec = new Recorder(input,{numChannels:1})

		//start the recording process
		rec.record();

		console.log("Recording started");

	}).catch(function(err) {
	  	//enable the record button if getUserMedia() fails
    	
	});

	//if clicked none display recordButton

	if (recordButton.getAttribute("style") == "display: flex;") 
	{
		recordButton.setAttribute("style", "display: none;");
		stopButton.setAttribute("style", "display: flex;");
	}
	else {
		recordButton.setAttribute("style", "display: flex;");
		stopButton.setAttribute("style", "display: none;");
	}

}

/*function pauseRecording(){
	console.log("pauseButton clicked rec.recording=",rec.recording );
	if (rec.recording){
		//pause
		rec.stop();
		//pauseButton.innerHTML="Resume";
	}else{
		//resume
		rec.record()
		//pauseButton.innerHTML="Pause";

	}
}
*/

function stopRecording() {
	console.log("stopButton clicked");

	//reset button just in case the recording is stopped while paused
	//pauseButton.innerHTML="Pause";
	
	//tell the recorder to stop the recording
	rec.stop();

	//stop microphone access
	gumStream.getAudioTracks()[0].stop();

	//create the wav blob and pass it on to createDownloadLink
	rec.exportWAV(createDownloadLink);

	//disable the stop button, enable the record too allow for new recordings
	if (stopButton.getAttribute("style") == "display: flex;") 
	{
		stopButton.setAttribute("style", "display: none;");
		recordButton.setAttribute("style", "display: flex;");
	}
	else 
	{
		stopButton.setAttribute("style", "display: flex;");
		recordButton.setAttribute("style", "display: none;");
	}
}

function createDownloadLink(blob) {
	
	var url = URL.createObjectURL(blob);
	var au = document.createElement('audio');
	var li = document.createElement('li');
	var link = document.createElement('a');

	//name of .wav file to use during upload and download (without extendion)
	var filename = new Date().toISOString();

	//add controls to the <audio> element
	au.controls = true;
	au.src = url;

	//save to disk link
	link.href = url;
	link.download = filename+".wav"; //download forces the browser to donwload the file using the  filename
	link.innerHTML = "Save to disk";

	//add the new audio element to li
	li.appendChild(au);
	
	//add the filename to the li
	li.appendChild(document.createTextNode(filename+".wav "))

	//add the save to disk link to li
	li.appendChild(link);
	
	//upload link
	var upload = document.createElement('a');
	upload.href="#";
	upload.innerHTML = "Upload";
	upload.addEventListener("click", function(event){
		  var xhr=new XMLHttpRequest();
		  xhr.onload=function(e) {
		      if(this.readyState === 4) {
		          console.log("Server returned: ",e.target.responseText);
		      }
		  };
		  var fd=new FormData();
		  fd.append("audio_data",blob, filename);
		  xhr.open("POST","upload.php",true);
		  xhr.send(fd);
	})
	li.appendChild(document.createTextNode (" "))//add a space in between
	li.appendChild(upload)//add the upload link to li

	//add the li element to the ol
	recordingsList.appendChild(li);
}

// finish recorder



