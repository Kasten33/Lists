productArray = [];




function addProduct() {
    let input = document.getElementById("product").value;
    let output = document.getElementById("product");
    const dive = document.createElement("div");
    dive.innerHTML = output;
    document.body.appendChild(dive);
    let newProduct = { input };
     for (let i = 0; i < productArray.length; i++){
      
      input 
      dive.textContent = `${productArray[i].input}`   
      output.appendChild(dive)
    }
   


     
    productArray.push(newProduct)
    console.log(productArray)
    
    
    







    return false;
}
