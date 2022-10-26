const fs = require(`fs`);

let teamInfo = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Team Profile Generator</title>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
      integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="./style.css" />
  </head>
  <body>
    <div class="jumbotron jumbotron-fluid text-white text-center">
      <div class="container">
        <h1 class="display-4">My Team</h1>
      </div>
    </div>
    <div class="container-fluid d-flex align-items-middle justify-content-center align-items-center mb-5">
    <div class="row cards d-flex justify-content-center flex-wrap col-11">
   </div>
   </div>
    <script
      src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
      integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
`;

function generateCard(data) {
  for (i = 0; i < data.length; i++) {
    switch (data[i].getPosition()) {
      case `Manager`:
        cardInfoEnd = `<a href="#" class="list-group-item list-group-item-action disabled">Office Number: ${data[i].officeNumber}</a>`;
        break;
      case `Engineer`:
        cardInfoEnd = `<a href="https://github.com/${data[i].github}" class="list-group-item list-group-item-action">GitHub: ${data[i].github}</a>`;
        break;
      case `Intern`:
        cardInfoEnd = `<a href="#" class="list-group-item list-group-item-action disabled">School: ${data[i].school}</a>`;
        break;
    }
    let cardInfoStart = `<div class="card col-md-4 col-lg-3 p-0 mb-5 ms-3 me-3 rounded">
        <div class="card-header w-100 col-12">
            <h3>${data[i].name}</h3>
            <h4>${data[i].getPosition()}
        </div>
        <div class="card-body ">
            <div class="list-group">
                <a href="#" class="list-group-item list-group-item-action disabled">Employee ID: ${
                  data[i].id
                }</a>
                <a href="mailto:${
                  data[i].email
                }" class="list-group-item list-group-item-action">E-mail: ${
      data[i].email
    }</a>`;
    page = teamInfo + cardInfoStart + cardInfoEnd + endingInfo;
  }
}

const generateHTML = function (data) {
  let cardInfoEnd = ``;
  let cardInfoStart = ``;
  generateCard(data);

  const page = teamInfo + cardInfoStart + cardInfoEnd + endingInfo;

  fs.writeFile(`./content/index.html`, page, (err) => {
    err ? console.error(err) : console.log(`Page created!`);
  });
};

module.exports = { generateHTML };
