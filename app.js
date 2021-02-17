(()=>{

  const encodeBtn = document.querySelector("#encode-btn");
  const decodeBtn = document.querySelector("#decode-btn");
  const userInput = document.querySelector(".string");
  const outputCell = document.querySelector("#output")
  const urlEncodedCell = document.querySelector('#url-encoded');

  const encodeString = (string) => {
    const urlencoded = encodeURIComponent(string);
    const base64encoded = window.btoa(urlencoded);
    urlEncodedCell.innerText = urlencoded;
    return base64encoded;
  }

  const decodeString = (string) => {
    const base64decoded = window.atob(string);
    const urldecoded = decodeURIComponent(base64decoded);
    urlEncodedCell.innerText = "";
    return urldecoded;
  }

  encodeBtn.addEventListener("click", () => {
    outputCell.innerText = encodeString(userInput.value.trim());
  });

  decodeBtn.addEventListener("click", () => {
    outputCell.innerText = decodeString(userInput.value.trim());
  });

})()