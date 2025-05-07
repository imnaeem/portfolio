const mobileNumber = String.fromCharCode(52, 52, 55, 56, 52, 57, 56, 50, 48, 50, 51, 50); // "447849820232"
const formattedMobileNumber = mobileNumber.replace(/^(\d{2})(\d{3})(\d{4})(\d{3})$/, '$1-$2-$3-$4');

export { formattedMobileNumber };
