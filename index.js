// Assuming your JSON file is named data.json and is in the same directory as your HTML/JS file

// Function to fetch data from the local JSON file
async function fetchData() {
   try {
      // Make an API call using fetch
      const response = await fetch("./data.json");

      // Check if the response is successful (status code 200)
      if (!response.ok) {
         throw new Error("API request failed");
      }
      if (response.ok) {
         Data = data;

         summary.innerHTML = display;
      }
      // Parse the JSON data from the response
      const data = await response.json();

      // Do something with the data, for example, console.log it
      console.log(data);
      // Continue with the rest of your code that depends on the API data
      // ...
   } catch (error) {
      console.error("Error fetching data:", error);
   }
}

// Call the function to initiate the API request
fetchData();

// Call the fetchData function
let Data;
let button = document.getElementById("continue");
let summary = document.getElementById("summary");
fetchData();

var display = `
                        <div class="item item1 d-flex justify-content-between">
                           <div>
                              <div class="img">
                                 <img
                                    src=${Data[0].icon}
                                    alt=""
                                 />
                              </div>
                              <p>Reaction</p>
                           </div>
                           <div><p>83/100</p></div>
                        </div>
                        <div class="item item2 d-flex justify-content-between">
                           <div>
                              <div class="img">
                                 <img
                                    src="assets/images/icon-memory.svg"
                                    alt=""
                                 />
                              </div>
                              <p>memory</p>
                           </div>
                           <div><p>83/100</p></div>
                        </div>
                        <div class="item item3 d-flex justify-content-between">
                           <div>
                              <div class="img">
                                 <img
                                    src="assets/images/icon-verbal.svg"
                                    alt=""
                                 />
                              </div>
                              <p>Verbal</p>
                           </div>
                           <div><p>83/100</p></div>
                        </div>
                        <div class="item item4 d-flex justify-content-between">
                           <div>
                              <div class="img">
                                 <img
                                    src="assets/images/icon-visual.svg"
                                    alt=""
                                 />
                              </div>
                              <p>Visual</p>
                           </div>
                           <div><p>83/100</p></div>
                        </div>
                     `;
// function display(data){
//   for(let i = 0;i<=data.length;i++){
//     s
//   }
// }
