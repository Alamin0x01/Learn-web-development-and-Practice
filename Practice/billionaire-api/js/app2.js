const setInnerHtml = (data) => {
  const tbody = document.getElementById("tbody");
  tbody.innerHTML = "";
  let serial = 0;
  let totalField = document.getElementById('total');
  let amount = 0;
  data.forEach((billionaire) => {
    const { person, countryOfCitizenship, industries, position, finalWorth } =
      billionaire;
    tbody.innerHTML += `
        <tr data-bs-toggle="modal" data-bs-target="#billionairesDetails">
        <th scope="row">${serial++}</th>
        <td>${person.name}</td>
        <td>${countryOfCitizenship}</td>
        <td>${industries}</td>
        <td>${position}</td>
        <td>$${finalWorth}</td>
      </tr>
        `;
        amount += finalWorth;
      });
      totalField.innerText = '$'+ amount.toFixed(2);

      tbody.addEventListener('click', (e) => {
        console.log(e.target.parentNode);
      })
};

const loadData = async () => {
  const URL = `https://raw.githubusercontent.com/Chayti/Billionaire-Diary-resources/main/AllBillionaires.json`;
  try {
    const res = await fetch(URL);
    const data = await res.json();
    console.log(data);
    setInnerHtml(data);
  } catch (error) {
    console.log(error);
  }
};

document
  .getElementById("technology-btn")
  .addEventListener("click", async () => {
    const URL = `https://raw.githubusercontent.com/Chayti/Billionaire-Diary-resources/main/ByIndustryTechnology.json`;
    try {
      const res = await fetch(URL);
      const data = await res.json();
      setInnerHtml(data);
    } catch (error) {
      console.log(error);
    }
  });

document.getElementById("state-btn").addEventListener("click", async () => {
  const URL = `https://raw.githubusercontent.com/Chayti/Billionaire-Diary-resources/main/ByStateZhejiang.json`;
  try {
    const res = await fetch(URL);
    const data = await res.json();
    setInnerHtml(data);
  } catch (error) {
    console.log(error);
  }
});

document.getElementById('total-btn').addEventListener('click', ()=> {
  document.getElementById('tfoot').classList.remove('d-none')
})