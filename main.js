let advice =""
fetch("https://api.adviceslip.com/advice")
  .then((response)=>{
    if (!response.ok) {
      throw new Error(`HTTP error, status = ${response.status}`);
    }
    return response.json()
  })
  .then((data)=>{
    // console.log(data)
    advice = data
    document.getElementById("advice-text").textContent= data.slip.advice
  })



const screenshotTarget = document.querySelector("#advice-container");

function takeScreenshot(){
  console.log("taking screenshot")
  html2canvas(screenshotTarget).then((canvas) => {
    const base64image = canvas.toDataURL("image/png");
    // window.location.href = base64image;
    // console.log(base64image)
      const link = document.createElement('a')
      link.href = base64image
      link.download = `advice${advice.slip.id}`
      // document.body.appendChild(link)
      link.click()
      // document.body.removeChild(link)
  })
}

document.getElementById("advice-icon").addEventListener("click", takeScreenshot)
