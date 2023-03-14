const loadPhones = async (searchText, dataLimit) => {
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
  const res = await fetch(url);
  const data = await res.json();
  displayPhones(data.data, dataLimit);
};

const displayPhones = (phones, dataLimit ) => {
  const phoneContainer = document.getElementById("phones-container");
  phoneContainer.textContent = "";
  // display only 10 phones
  const showAll = document.getElementById('show-all');
  if(dataLimit && phones.length > 10){

      phones = phones.slice(0, 10);
      showAll.classList.remove('d-none');
  }
  else{showAll.classList.add('d-none');
}
  // display Phone founds
  const noPhone = document.getElementById("no-phones");
  if (phones.length === 0) {
    noPhone.classList.remove("d-none");
  } else {
    noPhone.classList.add("d-none");
  }
  // display all Phones
  phones.forEach((phone) => {
    const phoneDiv = document.createElement("div");
    phoneDiv.classList.add("col");
    phoneDiv.innerHTML = `
    <div class="card p-4">
                <img src="${phone.image}" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">${phone.phone_name}</h5>
                  <p class="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                  <button onclick="loadPhoneDetails('${phone.slug}')" href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#phoneDetailsModal">Show details</button>
                </div>
              </div>
              `;
    phoneContainer.appendChild(phoneDiv);
  });
//   stop loader or spinner
toggleSpinner(false);
};
const processSearch = (dataLimit) =>{
    toggleSpinner(true);
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  loadPhones(searchText, dataLimit);
}
// handle search button click 
document.getElementById("btn-search").addEventListener("click", function () {
    // start loader
   processSearch(10);
});
// search input field enter key handler
document.getElementById('search-field').addEventListener('keypress', function (e){
    if (e.key ==='Enter'){
        processSearch(10);
    }
})

const toggleSpinner = isLoading => {
    const loaderSection =document.getElementById('loader');
    if(isLoading){
        loaderSection.classList.remove('d-none')
    }
    else{loaderSection.classList.add('d-none');
}
}

// not the best way to load show all
document.getElementById('btn-show-all').addEventListener('click', function(){
    processSearch();
})

const loadPhoneDetails =async id => {
    const url =`https://openapi.programming-hero.com/api/phone/${id}`;
    const res = await fetch (url);
    const data = await res.json();
    displayPhoneDetails(data.data);
}

const displayPhoneDetails =phone =>{
    console.log (phone);
    const modalTitle =document.getElementById('phoneDetailsModalLabel');
    modalTitle.innerText =phone.name;
    const phoneDetails= document.getElementById ('phone-details');
    phoneDetails.innerHTML=`
    <P>Release date: ${phone.releaseDate ? phone.releaseDate : 'No release date found'}</P>
    <P>Storage: ${phone.mainFeatures ? phone.mainFeatures.storage : 'No storage information'}</P>
    <P>others: ${phone.others ? phone.others.Bluetooth : 'No Bluetooth information'}</P>
    
    `;
}
loadPhones('apple');
