// describe("Registration with correct data", () => {
//     it("Registration with correct data", () => {cy.visit("https://testzootopia.loremipsum.ge/ka");
//     cy.viewport(1400,1000)
// //     რეგისტრაცია სწორი მონაცემებით:
// // 1.	შევდივართ ბმულზე https://testzootopia.loremipsum.ge/ka.
// // 2.	საიტის ჰედერის მარჯვენა კუთხეში ვაჭერთ ღილაკს „შესვლა“, რის შედეგადაც ამოვა ავტორიზაციის პოპაპი.
// // 3.	ავტორიზაციის პოპაპზე ვაჭერთ წითლად მონუშნულ ტექსტს „გაიარეთ რეგისტრაცია“, გადავალთ რეგისტრაციის გვერდზე.
// // 4.	ვავსებთ ველებს: სახელი გვარი, ელ ფოსტა, პირადი ნომერი, ტელეფონი, პაროლი, პაროლის გამეორება.
// // 5.	მოვნიშნოთ მოსანიშნი ღილაკი „ვეთანხმები წესებს და პირობებს“.
// // 6.	ვაწვებით ღილაკს „რეგისტრაცია“.
// cy.get('.iprof').click();
// cy.get('.input-shablon > p > a').click();
// cy.get(':nth-child(1) > .ismile').type("ვახო ნატრიაშვილი");
// cy.get('.ipir').type("43535353535353");
// cy.get(':nth-child(2) > .imail').type("rame@rame.com");
// cy.get(':nth-child(4) > .itel').type("4545465465465465");
// cy.get(':nth-child(5) > .ipass').type("123456");
// cy.get('.reg-form-left > :nth-child(6) > .ipass').type("123456");
// cy.get("#etx").check({force: true});
// cy.get('.regsub').click();

// })})


// describe("Registration The number of password characters is less than 6", () => {
//         it("Registration The number of password characters is less than 6", () => {cy.visit("https://testzootopia.loremipsum.ge/ka");
// //         3)	რეგისტრაცია პაროლის სიმბოლოების რაოდენობა 6 ზე ნაკლები:
// // 1.	შევდივართ ბმულზე https://testzootopia.loremipsum.ge/ka.
// // 2.	საიტის ჰედერის მარჯვენა კუთხეში ვაჭერთ ღილაკს „შესვლა“, რის შედეგადაც ამოვა ავტორიზაციის პოპაპი.
// // 3.	ავტორიზაციის პოპაპზე ვაჭერთ წითლად მონუშნულ ტექსტს „გაიარეთ რეგისტრაცია“, გადავალთ რეგისტრაციის გვერდზე.
// // 4.	ვავსებთ ველებს: სახელი გვარი, პირადი ნომერი, ტელეფონი, ელ. ფოსტა.
// // 5.	ვწერთ პაროლის ველში 5 სიმბოლოს, ვიმეორებთ
// // 6.	ვაწვებით ღილაკს „რეგისტრაცია“. 
// // 7.	დარწმუნდით რომ რეგისტრაცია ვერ გაიარეთ პაროლის არასწორი ფორმატის გამო(უნდა გამოიტენოს შეცდომა პაროლის ველზე)

//             cy.viewport(1400,1000)
//             cy.get('.iprof').click();
// cy.get('.input-shablon > p > a').click();
// cy.get(':nth-child(1) > .ismile').type("ვახო ნატრიაშვილი");
// cy.get('.ipir').type("43535353535353");
// cy.get(':nth-child(2) > .imail').type("rame@rame.com");
// cy.get(':nth-child(4) > .itel').type("4545465465465465");
// cy.get(':nth-child(5) > .ipass').type("12345");
// cy.get('.reg-form-left > :nth-child(6) > .ipass').type("12345");
// cy.get("#etx").check({force: true});
// cy.get('.regsub').click();
// cy.get(':nth-child(5) > .alert >  .alert-text').contains("უნდა შეიცავდეს მინიმუმ 6 სიმბოლოს")

// })})


// describe("Register Enter a different password when repeating", () => {
//     it("Register Enter a different password when repeating", () => {cy.visit("https://testzootopia.loremipsum.ge/ka");
//     cy.viewport(1400,1000)
// //     4)	რეგისტრაცია სხვა პაროლის ჩაწერა გამეორებისას:
// // 1.	შევდივართ ბმულზე https://testzootopia.loremipsum.ge/ka.
// // 2.	საიტის ჰედერის მარჯვენა კუთხეში ვაჭერთ ღილაკს „შესვლა“, რის შედეგადაც ამოვა ავტორიზაციის პოპაპი.
// // 3.	ავტორიზაციის პოპაპზე ვაჭერთ წითლად მონუშნულ ტექსტს „გაიარეთ რეგისტრაცია“, გადავალთ რეგისტრაციის გვერდზე.
// // 4.	ვავსებთ ველებს: სახელი გვარი, პირადი ნომერი, ტელეფონი, ელ. ფოსტა.
// // 5.	პაროლის ველში ვწერთ პაროლს სწორი ფორმატით და გამეორებისას ვწერთ განსხვავებულ პაროლს.
// // 6.	ვაწვებით ღილაკს „რეგისტრაცია“.
// // 7.	დარწმუნდით რომ ვერ გაიარეთ რეგისტრაცია პაროლის არასწორად გამეორების გამო(უნდა გამოიტანოს შეცდომა პაროლის ველზე)
// cy.get('.iprof').click();
// cy.get('.input-shablon > p > a').click();
// cy.get(':nth-child(1) > .ismile').type("ვახო ნატრიაშვილი");
// cy.get('.ipir').type("43535353535353");
// cy.get(':nth-child(2) > .imail').type("rame@rame.com");
// cy.get(':nth-child(4) > .itel').type("4545465465465465");
// cy.get(':nth-child(5) > .ipass').type("123456");
// cy.get('.reg-form-left > :nth-child(6) > .ipass').type("123457");
// cy.get("#etx").check({force: true});
// cy.get('.regsub').click();
// cy.get(':nth-child(5) > .alert >  .alert-text').contains("პაროლები არ ემთხვევა")

// })})


// describe("Omission of name during registration:", () => {
//     it("Omission of name during registration:", () => {cy.visit("https://testzootopia.loremipsum.ge/ka");
//     cy.viewport(1400,1000)
// //     5)	რეგისტრაციისას სახელი გვარის გამოტოვება:
// // 1.	შევდივართ ბმულზე https://testzootopia.loremipsum.ge/ka.
// // 2.	საიტის ჰედერის მარჯვენა კუთხეში ვაჭერთ ღილაკს „შესვლა“, რის შედეგადაც ამოვა ავტორიზაციის პოპაპი.
// // 3.	ავტორიზაციის პოპაპზე ვაჭერთ წითლად მონუშნულ ტექსტს „გაიარეთ რეგისტრაცია“, გადავალთ რეგისტრაციის გვერდზე.
// // 4.	ვავსებთ ველებს: პაროლი, პაროლის გამეორება პირადი ნომერი, ტელეფონი, ელ. ფოსტა.
// // 5.	ვაწვებით ღილაკს „რეგისტრაცია“.
// // 6.	დარწმუნდით რომ ვერ გაიარეთ რეგისტრაცია „სახელი გვარი“ ის გამოტოვების გამო. (უნდა გამოიტანოს შეცდომა სახელი გვარის ველზე)
// cy.get('.iprof').click();
// cy.get('.input-shablon > p > a').click();

// cy.get('.ipir').type("43535353535353");
// cy.get(':nth-child(2) > .imail').type("rame@rame.com");
// cy.get(':nth-child(4) > .itel').type("4545465465465465");
// cy.get(':nth-child(5) > .ipass').type("123456");
// cy.get('.reg-form-left > :nth-child(6) > .ipass').type("123457");
// cy.get("#etx").check({force: true});
// cy.get('.regsub').click();
// cy.get(':nth-child(1) > .alert >  .alert-text').contains("შეავსეთ ველი")

// })})


describe("Omission of name during registration:", () => {
    it("Omission of name during registration:", () => {cy.visit("https://testzootopia.loremipsum.ge/ka");
    cy.viewport(1400,1000)
    // 9)	ავტორიზაცია არასწორი ელ ფოსთით:
    // 1.	შევდივართ ბმულზე https://testzootopia.loremipsum.ge/ka.
    // 2.	საიტის ჰედერის მარჯვენა კუთხეში ვაჭერთ ღილაკს „შესვლა“, რის შედეგადაც ამოვა ავტორიზაციის პოპაპი.
    // 3.	ვწერთ არასწორ ელ ფოსტას.
    // 4.	ვწერთ პაროლს.
    // 5.	ვაწვებით ღილაკს „ავტორიზაცია“
    // 6.	დარწმუნდით რომ ავტორიზაცია ვერ გაიარეთ არასწორი ელ ფოსტის გამო (შეცდომა უნდა გამოვიდეს ელ ფოსტის ველში).
    cy.get('.iprof').click();
    cy.get(':nth-child(5) > .imail').type("ragac@ragac.com");
    cy.get('.ipass').type("123456");
    cy.get('.avtorization > .input-shablon > .form-button').click();
    cy.get('.input-div.alert > .alert > .alert-text').contains("არასწორი ელ.ფოსტა ან პაროლი")

})})