export const checkValidateData = (email, password, name) => {

   const isEmailValidated = /^[a-zA-Z0–9._%+-]+@[a-zA-Z0–9.-]+\.[a-zA-Z]{2,}$/.test(email);

   const isPasswordValidated = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password);

   if(name) {
    const isNameValidated = /^[A-Za-z]+(?: [A-Za-z]+)+$/.test(name);

    if(!isNameValidated) return "Name is not valid";
   }

   if(!isEmailValidated) return "Email is not valid";

   if(!isPasswordValidated) return "Password is not valid";
}
