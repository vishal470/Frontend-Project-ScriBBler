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



/*Modal Code In create Button*/
var modal2 = document.getElementById("myModal2");
var btn3 = document.getElementById("create-btn");
var span2 = document.getElementsByClassName("close2")[0];
btn3.onclick = function () {
    modal2.style.display = "block";
}
span2.onclick = function () {
    modal2.style.display = "none";
}
