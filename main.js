/* 
Template Literals
*/
let Title_Content="Elzero",
    Description_Content= "Elzero Web School",
    Date_Content = "25/10";

let markup = `
    <div class="child-box">
        <h3>${Title_Content}</h3>
        <p>${Description_Content}</p>
        <span>${Date_Content}</span>
    </div>
`;

document.write(markup.repeat(4));

    















