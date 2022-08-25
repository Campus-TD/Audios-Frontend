var slider = document.getElementById("myRange");
var output = document.getElementById("value");
var switcher = document.getElementById("switch-theme");

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
        document.getElementById('logo').setAttribute('src', 'assets')
        document.querySelector('link[rel="stylesheet"]').removeAttribute('href', 'assets/styles/style-light-theme.css');
        document.querySelector('link[rel="stylesheet"]').setAttribute('href', 'assets/styles/style-dark-theme.css');
        document.getElementById("ico").classList.add("fa-sun");
        document.getElementById("ico").classList.remove("fa-moon");
        document.getElementById("wave-image").setAttribute("src", "assets/images/wave-dark.svg");
    }
    else
    {
        document.querySelector('link[rel="stylesheet"]').removeAttribute('href', 'assets/styles/style-dark-theme.css');
        document.querySelector('link[rel="stylesheet"]').setAttribute('href', 'assets/styles/style-light-theme.css');
        document.getElementById("ico").classList.add("fa-moon");
        document.getElementById("ico").classList.remove("fa-sun");
        document.getElementById("wave-image").setAttribute("src", "assets/images/wave-light.svg");
    }
}
);