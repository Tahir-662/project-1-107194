function logIn(){
 
  let fullName = document.getElementById("fullName").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;


    if(email === "admin@user.com" && password === "123456"){

     
        window.location.assign("home.html");
        
    }else{
        Toastify({
            text: "Wrong Email and Passwod",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #000066, #0033cc)",
            },
            onClick: function(){} // Callback after click
          }).showToast();
          return;
    }
    
}

function checkAddress(){

  event.preventDefault();
 
  let fullName = document.getElementById("fullName").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    
    if(email === "admin@user.com" && password === "123456"){
      window.location.assign("home.html");
    }else{
      Toastify({
          text: "Wrong Email and Passwod",
          duration: 3000,
          destination: "https://github.com/apvarun/toastify-js",
          newWindow: true,
          close: true,
          gravity: "top", // `top` or `bottom`
          position: "center", // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            background: "linear-gradient(to right, #000066, #0033cc)",
          },
          onClick: function(){} // Callback after click
        }).showToast();
        return;
  }
  
  }
