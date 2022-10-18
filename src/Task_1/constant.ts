export const regExpForFIOFields = /^[A-Za-z-]{1,23}$/;
export const regExpForEmailField = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
export const regExpForLoginField = /^(\w+){3,32}$/;
export const regExpForPasswordField = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}$/;
export const regExpForBirthDateField = /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/;
export const regExpForPhoneNumberField = /^(?<=^|\s|>|\;|\:|\))(?:\+|7|8|9|\()[\d\-\(\) ]{8,}\d?/;

export const SUCCESSFUL_REGISTRATION = "Registration is successful";
export const EMPTY_FIELD_ERROR = "Recheck entered values. All fields should be filling."
export const INVALID_FIRSTNAME = "Invalid Firstname value! Please fill in all fields correctly!";
export const INVALID_LOGIN = "Invalid login value! Please fill in all fields correctly!";
export const INVALID_PASS_CONFIRMATION = "Passwords don't match! Please fill in all fields correctly!";