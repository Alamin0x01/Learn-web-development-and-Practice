import logo from "./logo.svg";
import "./App.css";

function App() {
  const products = [
    { name: "laptop", price: 154443 },
    { name: "Phone", price: 44433 },
    { name: "Tablet", price: 30443 },
    { name: "computer", price: 1584443 },
  ];

  return (
    <div className="App">
      {products.map((product) => (
        <Product name={product.name} price={product.price}></Product>
      ))}
      {/* <Product name="Laptop" price="88454"></Product>
      <Product name="Phone" price="45454"></Product>
      <Product name="Tablet" price="25454"></Product> */}
    </div>
  );
}

function Product(props) {
  return (
    <div className="product">
      <h1>Name: {props.name}</h1>
      <h1>Price: {props.price}</h1>
    </div>
  );
}

export default App;
