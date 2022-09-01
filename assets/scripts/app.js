var slider = document.getElementById("myRange");
var output = document.getElementById("value");
var switcher = document.getElementById("switch-theme");
var index1 = document.getElementById("div-status-1");
var index2 = document.getElementById("div-status-2");
var index3 = document.getElementById("div-status-3");
var index4 = document.getElementById("div-status-4");


output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

// Fill progress bar

slider.addEventListener("mousemove", function() {
    var x = slider.value;
    var color = 'linear-gradient(90deg, #3A6DA8 ' + x + '%, #AAAAAA ' + x + '%)';
    slider.style.background = color;
    slider.style.borderRadius = '25px';

    }
);

// Align value tag progress bar

slider.addEventListener("mousemove", function() {
    var x = slider.value;
    const range_width = getComputedStyle(slider).getPropertyValue('width');
    maxperc = 725;
    minperc = 36.5;
    value.style.left = x + '36.5%';
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
    }
}
);

