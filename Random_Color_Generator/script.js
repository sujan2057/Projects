const clickBtn = document.querySelector("#btn");
const getColor = () => {
  //Hex Code
  const randomNumber = Math.floor(Math.random() * 16777215);
  const randomCode = "#" + randomNumber.toString(16);
  console.log(randomNumber, randomCode);
  document.body.style.backgroundColor = randomCode;
  document.querySelector("#color_code").innerText = randomCode;

  navigator.clipboard.writeText(randomCode);
};
clickBtn.addEventListener("click", getColor);
getColor();
