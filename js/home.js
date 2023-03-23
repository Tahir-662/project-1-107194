
document.getElementById("clear").onclick = function(){
  document.getElementById("output").innerHTML = ""
}

function logOut(){
  alert("Are you sure?")
  window.location.assign("index.html");
}

let cities = ["Faisalabad", "Lahore", "Islamabad", "Karachi", "Peshawar", "Quetta"]

for (let i=0; i < cities.length; i++) {
    let num = i + 1; 
    document.getElementById("citiesName").innerHTML += num + ")" + cities[i] + "<br>"
}

let inputText = document.getElementById("inputText").value



function addCity(){
    let city = document.getElementById("input").value;
    if(!city){
        Toastify({
            text: "Enter city",
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
    }
    let cityFirstLetter = city.slice(0, 1).toUpperCase();
        let cityAllLetters = city.slice(1).toLowerCase();
        let cityfullName = cityFirstLetter + cityAllLetters;
    if(cities.includes(cityfullName)){
      Toastify({
                    text: "city already present",
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
    }else{
      cities.push(cityfullName);
      document.getElementById("output").innerHTML= "<span>Your city</span> '" + cityfullName + "' is added"
      console.log()
      Toastify({
                        text: "city is added",
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
                      }).showToast(); return;
                      
    }
    
  }

  function showCity(){
    document.getElementById("output").innerHTML = ""
   for(let i=0; i < cities.length; i++){
    let num = i + 1;
    document.getElementById("output").innerHTML += num + ")" + cities[i] + "<br>" 
   }

  }


