/**
 * Practice: Play with event listeners
 * - Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
 * - Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
 * - Add an event listener to each grid cell to change its background color when it is clicked.
 * - Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 */



//use the enter key to trigger button
var input = document.getElementById("binaryNumberEntry");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("myBtn").click();
  }
});

  // Selecting the input element and get its value 
  function getInputValue(){
    var inputVal = document.getElementById("binaryNumberEntry").value;
  
  // Converting to decimal
  converted = parseInt(inputVal, 2);
  // console.log(converted);

  // Displaying the value
  // alert(inputVal);
  document.getElementById("binaryValue").innerHTML = converted;
  
  // A for loop to check each character input to see if over > 1.
  // Display an error message if character is >= 2
  for (var i = 0; i < inputVal.length; i++) {
    // console.info(inputVal[i]);
    if (inputVal[i] > 1) {
      // console.log("whoopsie")
      // clears the returned number<p>
      document.getElementById("binaryValue").innerHTML = "";
      // updates the error <p> with message
      document.getElementById("error").innerHTML = "That's not a 1 or 0 is it? Muppet.";
    } else {
      // clears the error message <p>
      document.getElementById("error").innerHTML = "";
    }
  }



}