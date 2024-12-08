import { useEffect, useState } from "react";
import { Button } from "./button";
import { FaCartPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/sliceCart";
import { ModalAddCart } from "./modal-add-cart";
export interface ProductDetailsProps {
  id: string;
  title: string;
  price: number;
  pictures: { url: string }[];
}

export function ProductCard() {
  const [products, setProducts] = useState([]);
  const [productDetails, setProductDetails] = useState<{
    [key: string]: ProductDetailsProps;
  }>({});
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch(`https://api.mercadolibre.com/sites/MLB/search?q=iphone`)
      .then((response) => response.json())
      .then((data) => {
        const limitedProducts = data.results.slice(8, 16);
        setProducts(limitedProducts);

        limitedProducts.forEach((product: { id: string }) => {
          fetch(`https://api.mercadolibre.com/items/${product.id}`)
            .then((response) => response.json())
            .then((details) => {
              setProductDetails((prevDetails) => ({
                ...prevDetails,
                [product.id]: details,
              }));
            });
        });
      });
  }, []);


  const dispatch = useDispatch();
  return (
    <div className="max-w-7xl mx-auto mt-10">
      <div className="grid grid-cols-4 gap-8">
        {products.map((product: { id: string }) => (
          <div key={product.id}>
            {productDetails[product.id] && (
              <div className="p-4 shadow-md rounded-xl text-center h-full flex flex-col justify-center items-center">
                <img
                  src={productDetails[product.id].pictures[0].url}
                  alt={productDetails[product.id].title}
                  className="w-40 mx-auto"
                />
                <div className="flex flex-col gap-2 justify-center items-center flex-grow">
                  <h2 className="text-center">
                    {productDetails[product.id].title}
                  </h2>
                  <p>
                    {productDetails[product.id].price.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </p>
                </div>
                <div className="flex justify-between items-center w-full mt-4">
                  <Button theme="light" className="w-40 py-3 text-white hover:border-black">Buy Now</Button>
                  <div className="flex">
                    <button
                      onClick={() => {
                        dispatch(addToCart(productDetails[product.id]));
                        setTimeout(() => {
                          setShowModal(true);
                          setTimeout(() => {
                            setShowModal(false);
                          }, 2000);
                        }, 100);
                      }}
                    >
                      <FaCartPlus size={24} />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      {showModal && <ModalAddCart />}
    </div>
  );
}
