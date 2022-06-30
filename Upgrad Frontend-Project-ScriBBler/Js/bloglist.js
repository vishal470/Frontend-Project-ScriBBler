/*Modal Code In SignIn Button*/
var modal = document.getElementById("myModal");
// Get the button that opens the modal
var btn = document.getElementById("in");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}


/*Modal Code In SignUp Button*/
var modal1 = document.getElementById("myModal1");
var btn2 = document.getElementById("up");
var span1 = document.getElementsByClassName("close1")[0];
btn2.onclick = function () {
    modal1.style.display = "block";
}
span1.onclick = function () {
    modal1.style.display = "none";
}

/*Linking SignIn and SignUp*/
var resignup = document.getElementById('resignup');
resignup.addEventListener('click', function () {
    document.getElementById('myModal').style.display = "none";
    document.getElementById('myModal1').style.display = "block";
})



// Get the modal
var modal3 = document.getElementById('id05');

// on clicking No button modal will hide
var btn3 = document.getElementsByClassName("cancelbtn")[0];

btn3.onclick = function() {
    modal3.style.display = "none";
}