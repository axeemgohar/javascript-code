// ######################### Identifiers #########################
const firstName = document.getElementById("first_name");
const lastName = document.getElementById("last_name");
const address = document.getElementById("address");
const addressLine2 = document.getElementById("Rv0g4OBP0sXq8UQ1qyJk");
const city = document.getElementById("city");
const state = document.getElementById("state");
const postalCode = document.getElementById("postal_code");
const dateOfBirth = document.querySelector('[name="date_of_birth"] input');
const currentAge = document.querySelector('[name="4tYUvFqnuggEf36oigbG"]');
const phone = document.getElementById("phone");
const email = document.querySelector('[name="email"]');
const deliveryCity = document.querySelector('[name="kGsrcndIzsB0AtrlOtff"]');
const experienceInCatering = document.querySelector(
  '[name="OqV2RfpTugtKlb99nh2n"]'
);
const checkboxes = [
  document.getElementById("Doordash_YghuM9vrvf99AEWw6PyS_0_4q7ux95s1hj"),
  document.getElementById("Uber_YghuM9vrvf99AEWw6PyS_1_4q7ux95s1hj"),
  document.getElementById("Grubhub_YghuM9vrvf99AEWw6PyS_2_4q7ux95s1hj"),
  document.getElementById("Instacart_YghuM9vrvf99AEWw6PyS_3_4q7ux95s1hj"),
  document.querySelector('[name="YghuM9vrvf99AEWw6PyS"]'),
  document.querySelector('[name="YghuM9vrvf99AEWw6PyS"]'),
];

// ######################### Retrieving Saved Data #########################
const savedFirstName = localStorage.getItem("firstName");
const savedLastName = localStorage.getItem("lastName");
const savedAddress = localStorage.getItem("address");
const savedAddressLine2 = localStorage.getItem("addressLine2");
const savedCity = localStorage.getItem("city");
const savedState = localStorage.getItem("state");
const savedPostalCode = localStorage.getItem("postalCode");
const savedDateOfBirth = localStorage.getItem("dateOfBirth");
const savedCurrentAge = localStorage.getItem("currentAge");
const savedPhone = localStorage.getItem("phone");
const savedEmail = localStorage.getItem("email");
const savedDeliveryCity = localStorage.getItem("deliveryCity");
const savedExperienceInCatering = localStorage.getItem("experienceInCatering");
const savedCheckboxes = checkboxes.forEach((checkbox, index) => {
  const savedState = localStorage.getItem(`checkbox${index + 1}`);
  checkbox.checked = savedState === "true";
  const event = new Event("input", { bubbles: true });
  checkbox.dispatchEvent(event);
});

// ######################### Checking If Data Exists #########################
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
if (savedAddress) {
  address.value = savedAddress;
  const event = new Event("input", { bubbles: true });
  address.dispatchEvent(event);
}
if (savedAddressLine2) {
  addressLine2.value = savedAddressLine2;
  const event = new Event("input", { bubbles: true });
  addressLine2.dispatchEvent(event);
}
if (savedCity) {
  city.value = savedCity;
  const event = new Event("input", { bubbles: true });
  city.dispatchEvent(event);
}
if (savedState) {
  state.value = savedState;
  const event = new Event("input", { bubbles: true });
  state.dispatchEvent(event);
}
if (savedPostalCode) {
  postalCode.value = savedPostalCode;
  const event = new Event("input", { bubbles: true });
  postalCode.dispatchEvent(event);
}
if (savedDateOfBirth) {
  dateOfBirth.value = savedDateOfBirth;
  const event = new Event("input", { bubbles: true });
  dateOfBirth.dispatchEvent(event);
}
if (savedCurrentAge) {
  currentAge.value = savedCurrentAge;
  const event = new Event("input", { bubbles: true });
  currentAge.dispatchEvent(event);
}
if (savedPhone) {
  phone.value = savedPhone;
  const event = new Event("input", { bubbles: true });
  phone.dispatchEvent(event);
}
if (savedEmail) {
  email.value = savedEmail;
  const event = new Event("input", { bubbles: true });
  email.dispatchEvent(event);
}

if (savedDeliveryCity) {
  deliveryCity.value = savedDeliveryCity;
  const event = new Event("input", { bubbles: true });
  deliveryCity.dispatchEvent(event);
}
if (savedExperienceInCatering) {
  experienceInCatering.value = savedExperienceInCatering;
  const event = new Event("input", { bubbles: true });
  experienceInCatering.dispatchEvent(event);
}

// ######################### Storing Data #########################
firstName.addEventListener("input", () => {
  localStorage.setItem("firstName", firstName.value);
});

lastName.addEventListener("input", () => {
  localStorage.setItem("lastName", lastName.value);
});

address.addEventListener("input", () => {
  localStorage.setItem("address", address.value);
});

addressLine2.addEventListener("input", () => {
  localStorage.setItem("addressLine2", addressLine2.value);
});

city.addEventListener("input", () => {
  localStorage.setItem("city", city.value);
});

state.addEventListener("input", () => {
  localStorage.setItem("state", state.value);
});

postalCode.addEventListener("input", () => {
  localStorage.setItem("postalCode", postalCode.value);
});

dateOfBirth.addEventListener("input", () => {
  localStorage.setItem("dateOfBirth", dateOfBirth.value);
});

currentAge.addEventListener("input", () => {
  localStorage.setItem("currentAge", currentAge.value);
});

phone.addEventListener("input", () => {
  localStorage.setItem("phone", phone.value);
});

email.addEventListener("input", () => {
  localStorage.setItem("email", email.value);
});

deliveryCity.addEventListener("input", () => {
  localStorage.setItem("deliveryCity", deliveryCity.value);
});

experienceInCatering.addEventListener("input", () => {
  localStorage.setItem("experienceInCatering", experienceInCatering.value);
});

checkboxes.forEach((checkbox, index) => {
  checkbox.addEventListener("change", () => {
    localStorage.setItem(`checkbox${index + 1}`, checkbox.checked);
  });
});
