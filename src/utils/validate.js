export const validateData = (name, email, password) => {
    const isNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPwdValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if (name != null && !isNameValid)
        return "Invalid Name";

    if (!isEmailValid)
        return "Invalid email";

    if (!isPwdValid)
        return "Invalid password";

    return;
}