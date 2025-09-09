import products from '../data/products';
import './ItemListContainer.css';

export default function ItemListContainer(props) {
  console.log(products);

  return (
    <section>
      <h1>{props.greeting}</h1>
    </section>
  );
}
