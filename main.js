productArray = [];




function addProduct() {
    let input = document.getElementById("product").value;
    let output = document.getElementById("product");
    const dive = document.createElement("div");
    dive.classList.add('container2')
    dive.innerText = output;
    let newProduct = { input };

    productArray.push(newProduct)

     for (let i = 0; i < productArray.length; i++){
 
      dive.style.display = "block";
      dive.textContent = `${productArray[i].input}`;
      output.appendChild(dive);
      document.body.appendChild(dive);
    }
   


     
   
    console.log(productArray)
    
    
    







    return false;
}
