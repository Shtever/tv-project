var api = require("./api");

inquirer.prompt([
  {
    type: "list",
    name: "choice",
    message: "Are you looking for a show or actor",
    choices: ["Show", "Actor"],
  }
]).then(function(input){
  switch(input.choices) {
    case "Show":
      console.log("show chosen")
        inquirer.prompt([
          {
            type: "input",
            name: "showName",
            message: "Please enter the name of a show",
          }
        ]).then(function(showName) {
          Name = showName.showName

        })
      }
    })