const displayData = (data) => {
  const container = document.getElementById("billionaires-container");
  container.innerHTML = "";
  data.forEach((billionaire) => {
    const randomImg = "https://random.imagecdn.app/500/150";
    const { person, countryOfCitizenship, state, city } = billionaire;
    console.log(billionaire);
    container.innerHTML += `
          <div class="col">
          <div class="card mb-3 h-100">
              <div class="row g-0 h-100">
                <div class="col-md-6">
                  <img src="${
                    person.squareImage ? person.squareImage : randomImg
                  }" class="img-fluid h-100 rounded-start" alt="...">
                </div>
                <div class="col-md-6">
                  <div class="card-body">
                    <h5 class="card-title">${person.name}</h5>
                    <p class="card-text">Citizenship: ${countryOfCitizenship}</p>
                    <p class="card-text">State: ${state}</p>
                    <p class="card-text">City: ${city}</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
          `;
  });
};

const loadBillionaires = async () => {
  const URL = `https://forbes400.onrender.com/api/forbes400?limit=10`;
  try {
    console.log("loaded");
    const res = await fetch(URL);
    const data = await res.json();
    displayBillionaires(data);
  } catch (error) {
    console.log(error);
  }
};

const displayBillionaires = (data) => {
  displayData(data);
};

document.getElementById("moreBtn").addEventListener("click", async () => {
  const URL = `https://forbes400.onrender.com/api/forbes400/`;
  try {
    const res = await fetch(URL);
    const data = await res.json();
    displayAllBillionaires(data);
  } catch (error) {
    console.log(error);
  }
});

const displayAllBillionaires = (data) => {
  displayData(data);
};

loadBillionaires();
