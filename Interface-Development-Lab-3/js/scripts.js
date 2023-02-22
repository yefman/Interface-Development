function validateForm() {
    // Form
    const form = document.forms["registrationForm"];
  
    // Input Fields
    // const usernameInput = form["username"];
    // const emailInput = form["email"];
    // const passwordInput = form["password"];

  // Validate the username field

  if (username === "") {
    console.log("Username cannot be empty.");
    console.log("Form submission failed.");
    return false;
  } else if (!/^[a-zA-Z0-9]+$/.test(username.value)) {
    console.log("Username must contain only letters and numbers.");
    console.log("Form submission failed.");
    return false;
  }

    // Validate the email field
    if (email === "") {
        console.log("Email cannot be empty.");
        console.log("Form submission failed.");
        return false;
      } else if (!/@/.test(email.value)) {
        console.log("Email must contain an '@' character.");
        console.log("Form submission failed.");
        return false;
      }

       // Validate the password field
       if (password === "") {
        console.log("Password cannot be empty.");
        console.log("Form submission failed.");
        return false;
      } else if (password.length < 8) {
        console.log("Password must be at least 8 characters long.");
        console.log("Form submission failed.");
        return false;
      }

  // If all validation passes, login succesful
  console.log("Form submitted successfully.");
  return true;
}

// Products
const products = [
    "Mitra",
    "Haniye",
    "Lee",
    "David",
    "Karlo",
    "Yefri",
    "Ahmet",
    "Macbook Pro",
    "Coding",
    "Sweater"
  ];

  function displayProductList(productList) {
    const ul = document.getElementById("productList");
    ul.innerHTML = ""; // clear previous list items
    for (const product of productList) {
      const li = document.createElement("li");
      li.textContent = product;
      ul.appendChild(li);
    }
  }
  
  function searchProducts(query) {
    const lowerCaseQuery = query.toLowerCase();
    const filteredProducts = products.filter(product =>
      product.toLowerCase().includes(lowerCaseQuery)
    );
    return filteredProducts;
  }
  
  const searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("input", event => {
    const query = event.target.value;
    const filteredProducts = searchProducts(query);
    displayProductList(filteredProducts);
  });
  
  
  
  