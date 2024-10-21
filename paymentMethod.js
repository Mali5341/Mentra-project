let cardNumInput = document.querySelector('#cardNum');

cardNumInput.addEventListener('keyup', () => {
    let cNumber = cardNumInput.value;
    cNumber = cNumber.replace(/\s/g, "");

    if (Number(cNumber)) {
        cNumber = cNumber.match(/.{1,4}/g);
        cNumber = cNumber.join(" ");
        cardNumInput.value = cNumber;
    }
});

function VerifyCarditionals() {
    // Get input values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const address = document.getElementById('address').value.trim();
    const city = document.getElementById('city').value.trim();
    const state = document.getElementById('state').value.trim();
    const zip = document.getElementById('zip').value.trim();
    const cardName = document.getElementById('cardName').value.trim();
    const cardNum = document.getElementById('cardNum').value.trim();

    const cvv = document.getElementById('cvv').value.trim();

    // Basic validations
    if (!name || !email || !address || !city || !state || !zip || !cardName || !cardNum || !cvv) {
        alert("Please fill in all fields.");
        return false;
    }

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

   

    // Show success alert if all validations pass
    alert("Payment details are valid! Proceeding to checkout.");
    return true;
}

document.querySelector('form').addEventListener('submit', function(e) {
    if (!VerifyCarditionals()) {
        e.preventDefault(); // Prevent form submission
    }
});
