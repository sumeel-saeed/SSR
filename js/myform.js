// Form Validation using JavaScript

// Create a function called 'validateform'
function validateform(){  
// Create 6 variables, one for each form field
var name=document.myform.name.value;
var email=document.myform.email.value;
var password=document.myform.password.value;  
var phonenumber=document.myform.phonenumber.value;
var message=document.myform.message.value;
var review=document.myform.review.value;

// Create an IF statement with 6 sections, one for each form field
// Section 1 - For the NAME field
if (name==null || name==""){  
  alert("Name can't be blank");  
  return false;
// Section 2 - For the EMAIL field
}else if (email==null || email==""){  
  alert("Email can't be blank");  
  return false;
 // Section 3 - For the password field
}else if (password==null || password==""){  
  alert("password can't be blank");  
  return false
  // Section 4 - For the phone number field
}else if (phonenumber==null || phonenumber==""){  
  alert("phone number can't be blank");  
  return false
//Section 5 - For the MESSAGE field
}else if (message==null || message==""){  
  alert("Message can't be blank");  
  return false;
  //Section 6 - For the review field
}else if (review==null || review==""){  
  alert("review can't be blank");  
  return false;
}else {
  alert("Your message has been SENT!");
}

// Close the 'validateform' function
}