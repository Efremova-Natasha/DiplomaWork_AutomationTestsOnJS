import { EMPTY_FIELD_ERROR, INVALID_FIRSTNAME, INVALID_LOGIN, INVALID_PASS_CONFIRMATION, SUCCESSFUL_REGISTRATION } from "../constant";
import { RegistrationForm } from "../registrationForm/registrationForm";

let regForm: any;

describe("Tests for registration form with Jest", () => {
    beforeAll(() => {
        regForm = new RegistrationForm();
    });

    test("Positive tests for Firstname & Lastname fields", () => {

        expect(regForm.registrationForm("Nataliya", "Efremova", "+375297141898", "ya.efremova2022@mail.ru", "01/02/1998",
            "natali", "trLMN22!", "trLMN22!"))
            .toEqual(SUCCESSFUL_REGISTRATION);

        expect(regForm.registrationForm("N", "E", "+375297141898", "ya.efremova2022@mail.ru", "01/02/1998",
            "natali", "trLMN22!", "trLMN22!"))
            .toEqual(SUCCESSFUL_REGISTRATION);

        expect(regForm.registrationForm("Supercalifragilisticexp", "Supercalifragilisticexp", "+375297141898",
            "ya.efremova2022@mail.com", "01/02/1998", "natali", "trLMN22!", "trLMN22!"))
            .toEqual(SUCCESSFUL_REGISTRATION);

        expect(regForm.registrationForm("Mariya-Sofiya", "Ivanova-Necrasova", "+375297141898", "ya.efremova2022@mail.ru",
            "01/02/1998", "nat", "trLMN22!", "trLMN22!"))
            .toEqual(SUCCESSFUL_REGISTRATION);
    });

    test("Positive tests for email field", () => {

        expect(regForm.registrationForm("Nataliya", "Efremova", "+375297141898", "ya.efremova2022@mail.ru", "01/02/1998",
            "natali", "trLMN22!", "trLMN22!"))
            .toEqual(SUCCESSFUL_REGISTRATION);

        expect(regForm.registrationForm("Nataliya", "Efremova", "+375297141898", "email-0055@outlook.com", "01/02/1998",
            "natali", "trLMN22!", "trLMN22!"))
            .toEqual(SUCCESSFUL_REGISTRATION);

        expect(regForm.registrationForm("Nataliya", "Efremova", "+375297141898", "a2017_evans@gmail.com", "01/02/1998",
            "natali", "trLMN22!", "trLMN22!"))
            .toEqual(SUCCESSFUL_REGISTRATION);
    });

    test("Positive tests for password field", () => {
        expect(regForm.registrationForm("Mariya-Sofiya", "Ivanova-Necrasova", "+375297141898", "ya.efremova2022@mail.ru",
            "01/02/1998", "nat", "t!4Nm0", "t!4Nm0"))
            .toEqual(SUCCESSFUL_REGISTRATION);

        expect(regForm.registrationForm("Mariya-Sofiya", "Ivanova-Necrasova", "+375297141898", "ya.efremova2022@mail.ru",
            "01/02/1998", "nat", "0@Zl#$Privet&", "0@Zl#$Privet&"))
            .toEqual(SUCCESSFUL_REGISTRATION);

        expect(regForm.registrationForm("Mariya-Sofiya", "Ivanova-Necrasova", "+375297141898", "ya.efremova2022@mail.ru",
            "01/02/1998", "nat", "Ou8&^506YYu%", "Ou8&^506YYu%"))
            .toEqual(SUCCESSFUL_REGISTRATION);
    });
    test("Positive tests for login field", () => {

        expect(regForm.registrationForm("Mariya-Sofiya", "Ivanova-Necrasova", "+375297141898", "ya.efremova2022@mail.ru",
            "01/02/1998", "nat0", "Ou8&^506YYu%", "Ou8&^506YYu%"))
            .toEqual(SUCCESSFUL_REGISTRATION);

        expect(regForm.registrationForm("Mariya-Sofiya", "Ivanova-Necrasova", "+375297141898", "ya.efremova2022@mail.ru",
            "01/02/1998", "nat0nat0nat0nat0nat0nat0nat0nat0", "Ou8&^506YYu%", "Ou8&^506YYu%"))
            .toEqual(SUCCESSFUL_REGISTRATION);
    });
    
    test("Positive tests for birthdate field", () => {

        expect(regForm.registrationForm("Mariya-Sofiya", "Ivanova-Necrasova", "+375297141898", "ya.efremova2022@mail.ru",
            "01.02.1998", "nat0", "Ou8&^506YYu%", "Ou8&^506YYu%"))
            .toEqual(SUCCESSFUL_REGISTRATION);

        expect(regForm.registrationForm("Mariya-Sofiya", "Ivanova-Necrasova", "+375297141898", "ya.efremova2022@mail.ru",
            "31-12-1999", "nat0", "Ou8&^506YYu%", "Ou8&^506YYu%"))
            .toEqual(SUCCESSFUL_REGISTRATION);
    });

    test("Positive tests for phone number field", () => {

        expect(regForm.registrationForm("Mariya-Sofiya", "Ivanova-Necrasova", "+375338796522", "ya.efremova2022@mail.ru",
            "31-12-1999", "nat0", "Ou8&^506YYu%", "Ou8&^506YYu%"))
            .toEqual(SUCCESSFUL_REGISTRATION);

            expect(regForm.registrationForm("Mariya-Sofiya", "Ivanova-Necrasova", "7(999)7896633", "ya.efremova2022@mail.ru",
            "31-12-1999", "nat0", "Ou8&^506YYu%", "Ou8&^506YYu%"))
            .toEqual(SUCCESSFUL_REGISTRATION);
    });

    test(`Negative tests for checking '${EMPTY_FIELD_ERROR}' error`, () => {
        expect(() => {
            regForm.registrationForm("", "Efremova", "+375297141898", "ya.efremova2022@mail.ru", "01/02/1998", "natali",
                "trLMN22!", "trLMN22!");
        }).toThrow(EMPTY_FIELD_ERROR);

        expect(() => {
            regForm.registrationForm("Alesya", "", "+375297141898", "ya.efremova2022@mail.ru", "01/02/1998", "natali",
                "trLMN22!", "trLMN22!");
        }).toThrow(EMPTY_FIELD_ERROR);

        expect(() => {
            regForm.registrationForm("Alesya", "Necrasova", "+375297141898", "ya.efremova2022@mail.ru", "01/02/1998",
                "natali", "trLMN22!", "");
        }).toThrow(EMPTY_FIELD_ERROR);
    });

    test(`Negative tests for checking '${INVALID_FIRSTNAME}' error if First name is wrong`, () => {
        expect(() => {
            regForm.registrationForm("Алеся", "E", "+375297141898", "ya.efremova2022@mail.ru", "01/02/1998", "natali",
                "trLMN22!", "trLMN22!")
        }).toThrow(INVALID_FIRSTNAME);

        expect(() => {
            regForm.registrationForm("Nataliya1", "E", "+375297141898", "ya.efremova2022@mail.ru", "01/02/1998", "natali",
                "trLMN22!", "trLMN22!")
        }).toThrow(INVALID_FIRSTNAME);

        expect(() => {
            regForm.registrationForm("Nataliya_Mariya", "E", "+375297141898", "ya.efremova2022@mail.ru", "01/02/1998",
                "natali", "trLMN22!", "trLMN22!")
        }).toThrow(INVALID_FIRSTNAME);
    });

    test(`Negative tests for checking '${INVALID_LOGIN}' error if login is wrong`, () => {
        expect(() => {
            regForm.registrationForm("Alesya", "E", "+375297141898", "ya.efremova2022@mail.ru", "01/02/1998", "na",
                "trLMN22!", "trLMN22!")
        }).toThrow(INVALID_LOGIN);

        expect(() => {
            regForm.registrationForm("Nataliya-Mariya", "E", "+375297141898", "ya.efremova2022@mail.ru", "01/02/1998",
                "natali-223", "trLMN22!", "trLMN22!")
        }).toThrow(INVALID_LOGIN);
    });

    test(`Negative tests for checking '${INVALID_PASS_CONFIRMATION}' error if confirmation password is wrong`, () => {
        expect(() => {
            regForm.registrationForm("Nataliya", "Efremova", "+375297141898", "ya.efremova2022@mail.ru", "01/02/1998",
                "natali", "trLMN22!", "trLMN22")
        }).toThrow(INVALID_PASS_CONFIRMATION);

        expect(() => {
            regForm.registrationForm("Nataliya", "Efremova", "+375297141898", "ya.efremova2022@mail.ru", "01/02/1998",
                "natali", "trLMN22!", "trLMN22!!")
        }).toThrow(INVALID_PASS_CONFIRMATION);

        expect(() => {
            regForm.registrationForm("Nataliya", "Efremova", "+375297141898", "ya.efremova2022@mail.ru", "01/02/1998",
                "natali", "trLMN22!", "trLN22!")
        }).toThrow(INVALID_PASS_CONFIRMATION);
    })
})