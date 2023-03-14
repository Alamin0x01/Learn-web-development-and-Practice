const addToLocalStorage = () => {
  const idInput = document.getElementById("storage-id");
  const id = idInput.value;
  const valueInput = document.getElementById("storage-value");
  const value = valueInput.value;
//   
if(id && value){

    localStorage.setItem(id, value);
};
  idInput.value='';
  valueInput.value='';
};

// browser console
// Storage.setItem('friends',[44,56,77])
// Storage.setItem('friends',JSON.stringify([44,55,33,334]))

// const pen ={price:20, color:'black'}
// Storage.setItem('pen',pen)
// Storage.setItem('pen',JSON.stringify(pen))



// browser theke jodi nei data 

// const storagedPen =localStorage.getItem('pen')
// storagedPen

// const prenObj = JSON.parse(storagedPen)
// prenObj


// pen.price =59;
// localStorage.setItem('pen', JSON.stringify(pen))