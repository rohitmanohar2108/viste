export const checkValidData = (email, password, name, mobile) => {
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const isNameValid = /^[a-zA-Z ]{2,}$/.test(name);
    const isMobileValid = /^\d{10}$/.test(mobile);

    if (!isEmailValid) return "Email ID is not valid";
    if (!isPasswordValid) return "Password must be at least 8 characters, include uppercase, lowercase letters, and a number.";
    if (!isNameValid) return "Name must be at least 2 characters long and contain only letters.";
    if (!isMobileValid) return "Mobile number must be 10 digits long.";

    return null;
};
