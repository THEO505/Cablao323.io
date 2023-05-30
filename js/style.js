

// Get the modal
var modal = document.getElementById('id00');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Get the modal
var modal = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Get the modal
var modal = document.getElementById('id03');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Get the modal
var modal = document.getElementById('id04');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Get the modal
var modal = document.getElementById('id05');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



          // Get the modal
var modal = document.getElementById("myModalimg");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("sideimg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
// Get the <span> element that closes the modal
  var span = document.getElementsByClassName("closeimg")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";}


  
//Re-change this javascript password to "X Invalid password"

  var myInput1 = document.getElementById("psw");
          var letter1 = document.getElementById("letter");
          var capital1 = document.getElementById("capital");
          var number1 = document.getElementById("number");
          var length1 = document.getElementById("length");
          
          
          
          // When the user clicks on the password field, show the message box. Don't add
          myInput1.onfocus = function() {
           document.getElementById("message").style.display = "block";
          }
          
          // When the user clicks outside of the password field, hide the message box. Don't Add
          myInput1.onblur = function() {
           document.getElementById("message").style.display = "none";
          }
          
          // When the user starts to type something inside the password field
          myInput1.onkeyup = function() {
           // Validate lowercase letters
           var lowerCaseLetters = /[a-z]/g;
           if(myInput1.value.match(lowerCaseLetters)) {
           letter1.classList.remove("invalid");
           letter1.classList.add("valid");
           } else {
           letter1.classList.remove("valid");
           letter1.classList.add("invalid");
           }
          
           // Validate capital letters
           var upperCaseLetters = /[A-Z]/g;
           if(myInput1.value.match(upperCaseLetters)) {
           capital1.classList.remove("invalid");
           capital1.classList.add("valid");
           } else {
           capital1.classList.remove("valid");
           capital1.classList.add("invalid");
           }
          
          
          
           // Validate numbers
           var numbers = /[0-9]/g;
           if(myInput1.value.match(numbers)) {
           number1.classList.remove("invalid");
           number1.classList.add("valid");
           } else {
           number1.classList.remove("valid");
           number1.classList.add("invalid");
           }
          
           // Validate length
           if(myInput1.value.length >= 8) {
           length1.classList.remove("invalid");
           length1.classList.add("valid");
           } else {
           length1.classList.remove("valid");
           length1.classList.add("invalid");
           }
          }




   var myInput2 = document.getElementById("psw2");
          var letter2 = document.getElementById("letter2");
          var capital2 = document.getElementById("capital2");
          var number2 = document.getElementById("number2");
          var length2 = document.getElementById("length2");
          
          
          
          // When the user clicks on the password field, show the message box. Don't add
          myInput2.onfocus = function() {
           document.getElementById("message2").style.display = "block";
          }
          
          // When the user clicks outside of the password field, hide the message box. Don't Add
          myInput2.onblur = function() {
           document.getElementById("message2").style.display = "none";
          }
          
          // When the user starts to type something inside the password field
          myInput2.onkeyup = function() {
           // Validate lowercase letters
           var lowerCaseLetters = /[a-z]/g;
           if(myInput2.value.match(lowerCaseLetters)) {
           letter2.classList.remove("invalid");
           letter2.classList.add("valid");
           } else {
           letter2.classList.remove("valid");
           letter2.classList.add("invalid");
           }
          
           // Validate capital letters
           var upperCaseLetters = /[A-Z]/g;
           if(myInput2.value.match(upperCaseLetters)) {
           capital2.classList.remove("invalid");
           capital2.classList.add("valid");
           } else {
           capital2.classList.remove("valid");
           capital2.classList.add("invalid");
           }
          
          
          
           // Validate numbers
           var numbers = /[0-9]/g;
           if(myInput2.value.match(numbers)) {
           number2.classList.remove("invalid");
           number2.classList.add("valid");
           } else {
           number2.classList.remove("valid");
           number2.classList.add("invalid");
           }
          
           // Validate length
           if(myInput2.value.length >= 8) {
           length2.classList.remove("invalid");
           length2.classList.add("valid");
           } else {
           length2.classList.remove("valid");
           length2.classList.add("invalid");
           }
          }
          var myInput21 = document.getElementById("psw2.1");
          var letter21 = document.getElementById("letter2.1");
          var capital21 = document.getElementById("capital2.1");
          var number21 = document.getElementById("number2.1");
          var length21 = document.getElementById("length2.1");
          
          
          
          // When the user clicks on the password field, show the message box. Don't add
          myInput21.onfocus = function() {
           document.getElementById("message21").style.display = "block";
          }
          
          // When the user clicks outside of the password field, hide the message box. Don't Add
          myInput21.onblur = function() {
           document.getElementById("message21").style.display = "none";
          }
          
          // When the user starts to type something inside the password field
          myInput21.onkeyup = function() {
           // Validate lowercase letters
           var lowerCaseLetters = /[a-z]/g;
           if(myInput21.value.match(lowerCaseLetters)) {
           letter21.classList.remove("invalid");
           letter21.classList.add("valid");
           } else {
           letter21.classList.remove("valid");
           letter21.classList.add("invalid");
           }
          
           // Validate capital letters
           var upperCaseLetters = /[A-Z]/g;
           if(myInput21.value.match(upperCaseLetters)) {
           capital21.classList.remove("invalid");
           capital21.classList.add("valid");
           } else {
           capital21.classList.remove("valid");
           capital21.classList.add("invalid");
           }
          
          
          
           // Validate numbers
           var numbers = /[0-9]/g;
           if(myInput21.value.match(numbers)) {
           number21.classList.remove("invalid");
           number21.classList.add("valid");
           } else {
           number21.classList.remove("valid");
           number21.classList.add("invalid");
           }
          
           // Validate length
           if(myInput21.value.length >= 8) {
           length21.classList.remove("invalid");
           length21.classList.add("valid");
           } else {
           length21.classList.remove("valid");
           length21.classList.add("invalid");
           }
          }

        
var myInput3 = document.getElementById("psw3");
          var letter3 = document.getElementById("letter3");
          var capital3 = document.getElementById("capital3");
          var number3 = document.getElementById("number3");
          var length3 = document.getElementById("length3");
          
          
          
          // When the user clicks on the password field, show the message box. Don't add
          myInput3.onfocus = function() {
           document.getElementById("message3").style.display = "block";
          }
          
          // When the user clicks outside of the password field, hide the message box. Don't Add
          myInput3.onblur = function() {
           document.getElementById("message3").style.display = "none";
          }
          
          // When the user starts to type something inside the password field
          myInput3.onkeyup = function() {
           // Validate lowercase letters
           var lowerCaseLetters = /[a-z]/g;
           if(myInput3.value.match(lowerCaseLetters)) {
           letter3.classList.remove("invalid");
           letter3.classList.add("valid");
           } else {
           letter3.classList.remove("valid");
           letter3.classList.add("invalid");
           }
          
           // Validate capital letters
           var upperCaseLetters = /[A-Z]/g;
           if(myInput3.value.match(upperCaseLetters)) {
           capital3.classList.remove("invalid");
           capital3.classList.add("valid");
           } else {
           capital3.classList.remove("valid");
           capital3.classList.add("invalid");
           }
          
          
          
           // Validate numbers
           var numbers = /[0-9]/g;
           if(myInput3.value.match(numbers)) {
           number3.classList.remove("invalid");
           number3.classList.add("valid");
           } else {
           number3.classList.remove("valid");
           number3.classList.add("invalid");
           }
          
           // Validate length
           if(myInput3.value.length >= 8) {
           length3.classList.remove("invalid");
           length3.classList.add("valid");
           } else {
           length3.classList.remove("valid");
           length3.classList.add("invalid");
           }
          }

var myInput4 = document.getElementById("psw4");
          var letter4 = document.getElementById("letter4");
          var capital4 = document.getElementById("capital4");
          var number4 = document.getElementById("number4");
          var length4 = document.getElementById("length4");
          
          
          
          // When the user clicks on the password field, show the message box. Don't add
          myInput4.onfocus = function() {
           document.getElementById("message4").style.display = "block";
          }
          
          // When the user clicks outside of the password field, hide the message box. Don't Add
          myInput4.onblur = function() {
           document.getElementById("message4").style.display = "none";
          }
          
          // When the user starts to type something inside the password field
          myInput4.onkeyup = function() {
           // Validate lowercase letters
           var lowerCaseLetters = /[a-z]/g;
           if(myInput4.value.match(lowerCaseLetters)) {
           letter4.classList.remove("invalid");
           letter4.classList.add("valid");
           } else {
           letter4.classList.remove("valid");
           letter4.classList.add("invalid");
           }
          
           // Validate capital letters
           var upperCaseLetters = /[A-Z]/g;
           if(myInput4.value.match(upperCaseLetters)) {
           capital4.classList.remove("invalid");
           capital4.classList.add("valid");
           } else {
           capital4.classList.remove("valid");
           capital4.classList.add("invalid");
           }
          
          
          
           // Validate numbers
           var numbers = /[0-9]/g;
           if(myInput4.value.match(numbers)) {
           number4.classList.remove("invalid");
           number4.classList.add("valid");
           } else {
           number4.classList.remove("valid");
           number4.classList.add("invalid");
           }
          
           // Validate length
           if(myInput4.value.length >= 8) {
           length4.classList.remove("invalid");
           length4.classList.add("valid");
           } else {
           length4.classList.remove("valid");
           length4.classList.add("invalid");
           }
          }
    
var myInput = document.getElementById("psw5");
          var letter = document.getElementById("letter5");
          var capital = document.getElementById("capital5");
          var number = document.getElementById("number5");
          var length = document.getElementById("length5");
          
          
          
          // When the user clicks on the password field, show the message box. Don't add
          myInput.onfocus = function() {
           document.getElementById("message5").style.display = "block";
          }
          
          // When the user clicks outside of the password field, hide the message box. Don't Add
          myInput.onblur = function() {
           document.getElementById("message5").style.display = "none";
          }
          
          // When the user starts to type something inside the password field
          myInput.onkeyup = function() {
           // Validate lowercase letters
           var lowerCaseLetters = /[a-z]/g;
           if(myInput.value.match(lowerCaseLetters)) {
           letter.classList.remove("invalid");
           letter.classList.add("valid");
           } else {
           letter.classList.remove("valid");
           letter.classList.add("invalid");
           }
          
           // Validate capital letters
           var upperCaseLetters = /[A-Z]/g;
           if(myInput.value.match(upperCaseLetters)) {
           capital.classList.remove("invalid");
           capital.classList.add("valid");
           } else {
           capital.classList.remove("valid");
           capital.classList.add("invalid");
           }
          
          
          
           // Validate numbers
           var numbers = /[0-9]/g;
           if(myInput.value.match(numbers)) {
           number.classList.remove("invalid");
           number.classList.add("valid");
           } else {
           number.classList.remove("valid");
           number.classList.add("invalid");
           }
          
           // Validate length
           if(myInput.value.length >= 8) {
           length.classList.remove("invalid");
           length.classList.add("valid");
           } else {
           length.classList.remove("valid");
           length.classList.add("invalid");
           }
          }
 

        function Validateusername(input) {

            var validRegex = /^[a-zA-Z][a-zA-Z0-9_]{6,19}$/;
            
            if (input.value.match(validRegex)) {
            
            alert("Valid username");
            
            document.form1.uname.focus();
            
            return true;
            
            } else {
            
            alert("Invalid username address Username length must be at the range between 7-20.It is allowed to contain only underscores(_).The first character of the username must be an alphabetic character.");
            
            document.form1.uname.focus();
            
            return false;
            
            }
            
            }

            function Validateusername2(input) {

                var validRegex = /^[a-zA-Z][a-zA-Z0-9_]{6,19}$/;
                
                if (input.value.match(validRegex)) {
                
                alert("Valid username");
                
                document.form12.uname.focus();
                
                return true;
                
                } else {
                
                alert("Invalid username address Username length must be at the range between 7-20.It is allowed to contain only underscores(_).The first character of the username must be an alphabetic character.");
                
                document.form12.uname.focus();
                
                return false;
                
                }
                
                }

                function Validateusername3(input) {

                    var validRegex = /^[a-zA-Z][a-zA-Z0-9_]{6,19}$/;
                    
                    if (input.value.match(validRegex)) {
                    
                    alert("Valid username");
                    
                    document.form13.uname.focus();
                    
                    return true;
                    
                    } else {
                    
                    alert("Invalid username address Username length must be at the range between 7-20.It is allowed to contain only underscores(_).The first character of the username must be an alphabetic character.");
                    
                    document.form13.uname.focus();
                    
                    return false;
                    
                    }
                    
                    }

            function ValidateEmail(input) {

                var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
                
                if (input.value.match(validRegex)) {
                
                alert("Valid email address!");
                
                document.form2.email.focus();
                
                return true;
                
                } else {
                
                alert("The username should only contain alphanumeric, underscore, dash, and/or dot characters.The email id string must have one @ character.The domain name should only contain alphanumeric, underscore, or dash characters.There must be a dot after the domain name.The domain extension should only contain alphanumeric, underscore, or dash characters.The domain extension length should be between 2 and 4.");
                
                document.form2.email.focus();
                
                return false;
                
                }
         
                }

                function ValidateEmail2(input) {

                    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
                    
                    if (input.value.match(validRegex)) {
                    
                    alert("Valid email address!");
                    
                    document.form22.email.focus();
                    
                    return true;
                    
                    } else {
                    
                    alert("The username should only contain alphanumeric, underscore, dash, and/or dot characters.The email id string must have one @ character.The domain name should only contain alphanumeric, underscore, or dash characters.There must be a dot after the domain name.The domain extension should only contain alphanumeric, underscore, or dash characters.The domain extension length should be between 2 and 4.");
                    
                    document.form22.email.focus();
                    
                    return false;
                    
                    }
             
                    }


  