// This term project is done by: Surendra 918640, Archita 908092, Tanishka 912053, Harmeet 911940 , Mehakdeep 912074, 18 April 2024 
// Toggle navigation menu
let icon = document.querySelector(".icon");
let ul = document.querySelector("ul");

icon.addEventListener("click", () => {
	ul.classList.toggle("showData");
	if (ul.className == "showData") {
		document.getElementById("bar").className = "fa-solid fa-xmark";
	} else {
		document.getElementById("bar").className = "fa-solid fa-bars";
	}
});

// Navbar
let shops = document.getElementById("shops");
let reviews = document.getElementById("reviews");
let blogs = document.getElementById("blogs");
let contacts = document.getElementById("contacts");

shops.addEventListener("click", () => {
    // Change color of clicked link
	shops.style.color = "rgb(4, 219, 219)";
    // Reset other links' colors
	products.style.color = "black";
	reviews.style.color = "black";
	blogs.style.color = "black";
	contacts.style.color = "black";
});

reviews.addEventListener("click", () => {
    // Change color of clicked link
	reviews.style.color = "rgb(4, 219, 219)";
    // Reset other links' colors
	products.style.color = "black";
	shops.style.color = "black";
	blogs.style.color = "black";
	contacts.style.color = "black";
});

blogs.addEventListener("click", () => {
    // Change color of clicked link
	blogs.style.color = "rgb(4, 219, 219)";
    // Reset other links' colors
	products.style.color = "black";
	reviews.style.color = "black";
	shops.style.color = "black";
	contacts.style.color = "black";
});

contacts.addEventListener("click", () => {
    // Change color of clicked link
	contacts.style.color = "rgb(4, 219, 219)";
    // Reset other links' colors
	products.style.color = "black";
	reviews.style.color = "black";
	blogs.style.color = "black";
	shops.style.color = "black";
});

// Card JS
let crd = document.querySelectorAll(".crd");
let itemPage = document.querySelector(".itemPage");
let container = document.querySelector(".container");
let itemImg = document.getElementById("itemImg");
let buyBtn = document.getElementById("buyBtn");

crd.forEach(function (curValue) {
	curValue.addEventListener("click", function () {
        // Show item page and hide container
		itemPage.style.display = "flex";
		container.style.display = "none";
        
        // Update item image
		let imgSrc = curValue.firstElementChild.src;
		itemImg.src = imgSrc;

        // Handle buy button click
		let buyText = document.querySelector(".buyText");
		buyBtn.addEventListener("click", function () {
			// Show buy page
            document.querySelector(".buyPage").style.display = "block";
			// Add input fields and submit button
            buyText.innerHTML = `
                <h3>Enter Details :</h3>
                <input type="text" placeholder="Enter Your Name" id="name"> <br>
                <input type="text" placeholder="Enter Your Address" id="address"> <br>
                <input type="text" placeholder="Enter Your Mobile Number" id="num"> <br>
                <h3>Payment Option :</h3>
                <select>
                    <option value="Google-Pay">Google-Pay</option>
                    <option value="Apple-Pay">Apple-Pay</option>
                    <option value="Bharat-Pay">Credit/Debit</option>
                    <option value="Cash-on-Delivery">Cash-on-Delivery</option>
                </select> <br>    
                `;

			let button = document.createElement("button");
			button.innerText = "Submit";
			buyText.appendChild(button);

			button.addEventListener("click", function () {
				let name = document.getElementById("name");

				if (name.value == "" && address.value == "" && num.value == "") {
					alert("Please Enter Detail");
				} else {
					alert("Your Response Recorded");
					document.querySelector(".buyPage").style.display = "none";
				}
			});

			let cross = document.querySelector(".cross");
			cross.addEventListener("click", function () {
				document.querySelector(".buyPage").style.display = "none";
			});
		});
	});
});

// Connect
function connect() {
	let names = document.getElementById("name");
	let num = document.getElementById("number");
	if (name.value == "" && num.value == "") {
		alert("Fill Details");
	} else {
		alert("Thanks For Connecting");
	}
}
