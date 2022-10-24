const fs = require(`fs`);

const content = `
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
    <div class="jumbotron jumbotron-fluid bg-dark text-white text-center">
      <div class="container">
        <h1 class="display-4">My Team</h1>
      </div>
    </div>
    <div class="container-fluid d-flex align-items-middle justify-content-center bg-info align-items-center mb-5">
    <div class="row cards d-flex justify-content-center flex-wrap col-11">
    <div class="card col-md-4 col-lg-3 p-0 mb-5 ms-3 me-3 rounded">
        <div class="card-header w-100 col-12">
            <h3>${data[i].name}</h3>
            <h4>${data[
              i
            ].getPosition()}<span class="material-icons">${iconName}</span>
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
}</a>
                <a href="#" class="list-group-item list-goup-item-action disabled">${
                  data[i].cardInfo
                }
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

const generateHTML = function (data) {
  console.log(data);
  let icon = ``;
  let cardInfo = ``;
  for (i = 0; i < data.length; i++) {
    console.log(data[i].name);
    console.log(data[i].getPosition());
    switch (data[i].getPosition()) {
      case `Manager`:
        icon = `coffee`;
        cardInfo = `<a href="#" class="list-group-item list-group-item-action disabled">Office Number: ${data[0].officeNumber}</a>`;
        break;
      case `Engineer`:
        icon = `glasses`;
        cardInfo = `<a href="https://github.com/${data[i].github}" class="list-group-item list-group-item-action">GitHub: ${data[0].github}</a>`;
        break;
      case `Intern`:
        icon = `school`;
        cardInfo = `<a href="#" class="list-group-item list-group-item-action disabled">School: ${data[0].school}</a>`;
        break;
    }
  }
};
