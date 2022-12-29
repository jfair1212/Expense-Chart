var chart = document.getElementsByClassName("chart")
var popup = document.getElementsByClassName("popup")

for ( let i = 0; i < chart.length; i++ ) {
    chart[i].addEventListener("mouseover", function() {
        number = i;
        popup[number].style.display = "flex"
    })
}

for ( let i = 0; i < chart.length; i++ ) {
    chart[i].addEventListener("mouseout", function() {
        number = i;
        popup[number].style.display = "none"
    })
}

