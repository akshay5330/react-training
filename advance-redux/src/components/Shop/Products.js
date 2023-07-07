import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const dummyData = [
  {
    id: "a1",
    title: "My First Book",
    price: 5,
    description: "This Is My First Book",
  },
  {
    id: "a2",
    title: "My Second Book",
    price: 6,
    description: "This Is My Second Book",
  },
];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {dummyData.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
