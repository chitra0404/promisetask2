//In Eventlistener function ,passing the click function to display the data and async function for fetching the API URl
document.getElementById("getit").addEventListener("click", async () => {
    let response = await fetch(`https://api.breakingbadquotes.xyz/v1/quotes/5`);
   let data = await response.json();//It shows the promises as json format
   
   document.getElementById(
      "posts"
    ).innerHTML = `Quote: ${data[0].quote}`;
    document.getElementById(
      "posts1"
    ).innerHTML =`Author:  ${data[0].author}`;
   
   
  });