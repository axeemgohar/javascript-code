

const firstName = document.getElementById('first_name');
const lastName = document.getElementById('last_name');
const phone = document.getElementById('phone');
const submitForm = document.querySelector('button')


const savedFirstName = localStorage.getItem('firstName');
const savedLastName = localStorage.getItem('lastName');
const savedPhone = localStorage.getItem('phone');

if (savedFirstName) {
    firstName.value = savedFirstName;
    const event = new Event("input", { bubbles: true });
    firstName.dispatchEvent(event);
}
if (savedLastName) {
    lastName.value = savedLastName;
    const event = new Event("input", { bubbles: true });
    lastName.dispatchEvent(event);
}
if (savedPhone) {
    phone.value = savedPhone;
    const event = new Event("input", { bubbles: true });
    phone.dispatchEvent(event);
}


firstName.addEventListener('input', () => {

    localStorage.setItem('firstName', firstName.value);
})

lastName.addEventListener('input', () => {

    localStorage.setItem('lastName', lastName.value);
})

phone.addEventListener('input', () => {

    localStorage.setItem('phone', phone.value);
})





submitForm.addEventListener('click', () => {
    if (savedFirstName) {
        firstName.value = savedFirstName;
    }

    if (savedLastName) {
        lastName.value = savedLastName;
    }
    if (savedPhone) {
        phone.value = savedPhone;
    }
})