import { regExpForBirthDateField, regExpForEmailField, regExpForFIOFields, regExpForLoginField, regExpForPasswordField, regExpForPhoneNumberField } from "../constant";

export class RegistrationForm {
    constructor() { };

    public registrationForm(firstName: string, secondName: string, phoneNumber: string, email: string, birthDate: string,
       login: string, password: string, confirmPassword: string) {

        if (!(firstName && secondName && birthDate && email && phoneNumber && login && password && confirmPassword)) {
            throw new Error("Recheck entered values. All fields should be filling.");
        }

        const firstNameVResult = this.validatorOfFirstNameField(firstName);
        const secondNameVResult = this.validatorOfSecondNameField(secondName);
        const birthDateVResult = this.validatorOfBirthDateField(birthDate);
        const emailVResult = this.validatorOfEmailField(email);
        const loginVResult = this.validatorOfLoginNameField(login);
        const phoneNumberVResult = this.validatorOfPhoneNumberField(phoneNumber);
        const passwordVResult = this.validatorOfPasswordNameField(password);
        const confirmPasswordVResult = this.validatorOfConfirmPasswordNameField(password, confirmPassword);

        if (!firstNameVResult) {
            throw new Error("Invalid Firstname value! Please fill in all fields correctly!");
        }

        if (!secondNameVResult) {
            throw new Error("Invalid Lastname value! Please fill in all fields correctly!");
        }

        if (!birthDateVResult) {
            throw new Error("Invalid birthdate value! Please fill in all fields correctly!");
        }

        if (!emailVResult) {
            throw new Error("Invalid email value! Please fill in all fields correctly!");
        }

        if (!phoneNumberVResult) {
            throw new Error("Invalid phone number value! Please fill in all fields correctly!");
        }

        if (!loginVResult) {
            throw new Error("Invalid login value! Please fill in all fields correctly!");
        }

        if (!passwordVResult) {
            throw new Error("Invalid password! Please fill in all fields correctly!");
        }

        if (!confirmPasswordVResult) {
            throw new Error("Passwords don't match! Please fill in all fields correctly!");
        }

        return "Registration is successful";
    }

    public validatorOfFirstNameField(firstName: string) {
        return regExpForFIOFields.test(firstName);
    }

    public validatorOfSecondNameField(secondName: string) {
        return regExpForFIOFields.test(secondName);
    }

    public validatorOfBirthDateField(birthDate: string) {
        return regExpForBirthDateField.test(birthDate);
    }

    public validatorOfEmailField(email: string) {
        return regExpForEmailField.test(email);
    }

    public validatorOfPhoneNumberField(phoneNumber: string) {
        return regExpForPhoneNumberField.test(phoneNumber);
    }

    public validatorOfLoginNameField(login: string) {
        return regExpForLoginField.test(login);
    }

    public validatorOfPasswordNameField(password: string) {
        return regExpForPasswordField.test(password);
    }

    public validatorOfConfirmPasswordNameField(password: string, confirmPassword: string) {
        return !(confirmPassword.localeCompare(password));
    }
}