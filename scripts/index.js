const addToList = (e) => {
  //preventing the form from sending data
  e.preventDefeult();
  let userData = document.querySelector("#userData").value;
  console.log(userData);
  // validation
  if (userData != "") {
    let newLi = document.createElement("li");
    let text = document.createTextNode(userData);
    newLi.appendChild(text);
    document.querySelector(".result").appendChild(newLi);
    document.querySelector("#userData").value = "";
  } else {
    document.querySelector("#userData").placeholder = "write down";
  }
};
