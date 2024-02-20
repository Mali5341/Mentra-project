
let error = false;

function Validationform(event){
    event.preventDefault()
    const cardnumber = document.getElementById('card').value;
    const selectCountary = document.getElementById('selectCountary').value;
    const name = document.getElementById('name').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;
    const cvc = document.getElementById('cvc').value;


    if(name.trim() === ""){
        document.getElementById('nameerror').innerText= "input valid"
        event.preventDefault();
        error = true;

    }
    else{
        document.getElementById("nameerror").innerText= ''
        error = false;
    }
    if( cardnumber.length < 19 ){
        document.getElementById('card-number-error').innerHTML = "enetr valid number"
        error = true
     event.preventDefault()
    }
    else{
        document.getElementById('card-number-error').innerHTML = "";
        error = false;
    } 
const monthrigex =  /(0[1-9]|1[012])/;
    if(!monthrigex.test(month) || month > 12){
        document.getElementById('montherror').innerHTML = "enter month"
        error = true;
        event.preventDefault()
    }
    else{
        document.getElementById('montherror').innerHTML = ""
        error = false

    }
const yearrigex =  /(0[1-9]|1[012])/;

    if(!yearrigex.test(year) || year.trim() ===''){
        document.getElementById('yearerror').innerHTML = 'enter year'
        error  = true
        event.preventDefault()
    }
    else{
        document.getElementById('yearerror').innerHTML = '';
        error = false
    }

    if(cvc.length <3){
        document.getElementById('cvcerror').innerHTML = ' input 3 dig';
        error = true
        event.preventDefault();
    } else{
        document.getElementById('cvcerror').innerHTML  = ''
        error = false
    }
    if(selectCountary.trim() == ''){
        document.getElementById('countaryerror').innerHTML = "enter your countary"
        event.preventDefault('')
    }
    else{
        document.getElementById('countaryerror').innerHTML = ""
    }
    if( error === false){
        alert('Your Order has been Sucessfully Submited')
        console.log(cardnumber);
    }
    else{
        alert('please input Valid Data')
    }
  
}

// document.getElementById('card').oninput = () =>{
//    document.querySelector('.cardnumber').innerHTML = document.getElementById('card').value;
//    }
// document.getElementById('name').oninput =() =>{
//    document.getElementById('chname').innerHTML = document.getElementById('name').value;
//    }
// document.getElementById('month').oninput =() =>{
//    document.getElementById('cardmonth').innerHTML = document.getElementById('month').value;
//    }
// document.getElementById('year').oninput =() =>{
//    document.getElementById('cardyear').innerHTML = document.getElementById('year').value;
//    }
// document.getElementById('cvc').oninput =() =>{
//    document.getElementById('cvcinput').innerHTML = document.getElementById('cvc').value;
//    }
// formvalidation(event)

    // Function to format the number with spaces
    function formatNumberWithSpaces(value) {
        return value.replace(/\D/g, '').replace(/(\d{4})/g, '$1 ').trim();
    }

    // Event listener for input changes
    document.getElementById('card').addEventListener('input', function (event) {
        // Get the input value
        let inputValue = event.target.value;

        // Format the number with spaces
        let formattedValue = formatNumberWithSpaces(inputValue);

        // Update the input value
        event.target.value = formattedValue;
    });