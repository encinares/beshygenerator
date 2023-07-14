
function generateButton(){
  let generateText =  document.getElementById("generateTextInput").value;
  let emoji = document.getElementById("emoji").innerText;
  generateText = generateText.replaceAll(" ", emoji);
  document.getElementById("generateTextInput").value = generateText;
  document.getElementById("generateText").innerHTML = generateText;
  
  switch (true) {
    case generateText =="":
      document.getElementById("generateText").innerHTML = "Please type anything "+ emoji;
      alert("Please type anything. Copy button may not work on other devices");
      break;
  
    default:
      document.getElementById()
      alert(generateText +" : generated successfully. Copy button may not work on other devices. Please copy manually");
      break;
  }
}
 
function copyButton(){
  let copiedGeneratedText = document.getElementById("generateTextInput").value;
  navigator.clipboard.writeText(copiedGeneratedText);
  switch (true) {
    case copiedGeneratedText =="":
      // console.log("Please type any characters");
      document.getElementById("generateText").innerHTML = "Please type anything 🤸 ";
      break;
  
    default:
      alert("[ "+ copiedGeneratedText + " ] " + " copied successfully");
      break;
  }
}

let selector = 0;
document.getElementById("changeEmoji").onclick = function(){
  selector = Math.floor(Math.random() * 7) + 1;
  console.log(selector);
  switch (true) {
    case selector === 1:
    document.getElementById("generateText").innerHTML = "🤸🏿";
    document.getElementById("emoji").innerHTML = "🤸🏿";
    break;
    case selector === 2:
    document.getElementById("generateText").innerHTML = "🤸🏻‍♂️";
    document.getElementById("emoji").innerHTML = "🤸🏻‍♂️";
    break;
    case selector === 3:
    document.getElementById("generateText").innerHTML = "🤸🏾";
    document.getElementById("emoji").innerHTML = "🤸🏾";
    break;
    case selector === 4:
    document.getElementById("generateText").innerHTML = "🤸‍♀️";
    document.getElementById("emoji").innerHTML = "🤸‍♀️";
    break;
    case selector === 5:
    document.getElementById("generateText").innerHTML = "🤸🏼‍♀️";
    document.getElementById("emoji").innerHTML = "🤸🏼‍♀️";
    break;
    case selector === 6:
    document.getElementById("generateText").innerHTML = "🤸🏼‍♂️";
    document.getElementById("emoji").innerHTML = "🤸🏼‍♂️";
    break;
    case selector === 7:
    document.getElementById("generateText").innerHTML = "🤸‍♂️";
    document.getElementById("emoji").innerHTML = "🤸‍♂️ ";
    break;
  
    default:
    break;
  }
}

// 🤸🤸🏻🤸🏼🤸🏽🤸🏾🤸🏿
// 🤸‍♂️🤸🏻‍♂️🤸🏼‍♂️🤸🏽‍♂️🤸🏾‍♂️🤸🏿‍♂️
// 🤸‍♀️🤸🏻‍♀️🤸🏼‍♀️🤸🏽‍♀️🤸🏾‍♀️🤸🏿‍♀️