import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";

const FilteredProducts = () => {
  const products = useSelector((state) => state.products.filteredProducts);
  console.log("Products", products);
  const { type } = useParams();
  console.log("Params", type);

  return (
    <>
      <div className="pt-16">
        <div className="pl-14">
          <h1 className="text-4xl font-inter text-gray-600 font-bold tracking-normal leading-none">
            {type}
          </h1>
          <div className="grid grid-cols-4 justify-center py-8 gap-12">
            {products
              .filter((product) => product.type === type) 
              .map((product, index) => (
                <ProductCard
                  key={index}
                  id={product.id}
                  name={product.name}
                  text={product.text}
                  img={product.img}
                  price={product.price}
                  colors={product.colors}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FilteredProducts;