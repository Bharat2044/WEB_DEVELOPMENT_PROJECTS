// fetch value from form & input
const form = document.querySelector('form');

form.addEventListener('submit', function(ele) {
    ele.preventDefault();

    let height = parseInt(document.querySelector('#height').value);
    let weight = parseInt(document.querySelector('#weight').value);
    let result = document.querySelector('#results');
    
    if(height === '' || height < 0 || isNaN(height)) 
        result.innerHTML = `Please give a valid height, ${height} is not valid`;
    else if(weight === '' || weight < 0 || isNaN(weight)) 
        result.innerHTML = `Please give a valid weight, ${weight} is not valid`;
    else {      // calculate formula for BMI
        const bmi = (weight /((height*height)/10000)).toFixed(2);
        
        // show the results
        if(bmi < 18.6)
            result.innerHTML = `<span>${bmi}</span>  :)  Under Weight`; 
        else if(bmi >= 18.6 && bmi <=24.9)
            result.innerHTML = `<span>${bmi}</span>  :)  Normal Range`; 
        else 
            result.innerHTML = `<span>${bmi}</span>  :)  Over Weight`; 
    }
})