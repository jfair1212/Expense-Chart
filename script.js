var rankings = document.getElementsByName("ranking");
var main = document.getElementById("main-div");
var thankYou = document.getElementById("thank-you-state");
var submit = document.getElementById("submit");
var rateSelection = document.getElementById("rate-selection")
var error = document.getElementById("error")



submit.onclick = function() {
    for ( i = 0; i < rankings.length; i++ ) {
        if ( rankings[i].checked ) {
            selection = document.querySelector('input[name="ranking"]:checked').value;
            error.style.display = "none";
            main.style.display = "none";
            rateSelection.innerHTML = `You chose ${selection} out of 5 stars`;
            thankYou.style.display = "flex"
            return true;
        }
    }
    error.style.display = "flex";
    return false;
}



