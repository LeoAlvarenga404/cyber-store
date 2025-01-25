import { useEffect, useState } from "react";
import { Button } from "./button";
import { FaCartPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/sliceCart";
import { ModalAddCart } from "./modal-add-cart";
import { Link } from "react-router-dom";

export interface ProductDetailsProps {
  id: string;
  title: string;
  price: number;
  pictures: { url: string }[];
}

export function ProductCard() {
  const [products, setProducts] = useState<ProductDetailsProps[]>([]);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    // Função assíncrona para carregar os produtos
    const fetchProducts = async () => {
      try {
        // Fetch dos produtos da busca
        const response = await fetch(
          `https://api.mercadolibre.com/sites/MLB/search?q=iphone`
        );
        const data = await response.json();

        // Seleciona os produtos limitados
        const limitedProducts = data.results.slice(8, 16);

        // Busca os detalhes de cada produto usando Promise.all
        const detailedProducts = await Promise.all(
          limitedProducts.map(async (product: { id: string }) => {
            const detailResponse = await fetch(
              `https://api.mercadolibre.com/items/${product.id}`
            );
            return detailResponse.json();
          })
        );

        setProducts(detailedProducts);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="max-w-7xl mx-auto mt-10">
      <div className="grid grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id}>
            <div className="p-4 shadow-md rounded-xl text-center h-full flex flex-col justify-center items-center">
              <img
                src={product.pictures[0]?.url}
                alt={product.title}
                className="w-40 mx-auto"
              />
              <div className="flex flex-col gap-2 justify-center items-center flex-grow">
                <h2 className="text-center">{product.title}</h2>
                <p>
                  {product.price.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </p>
              </div>
              <div className="flex justify-between items-center w-full mt-4">
                <Link to={`/details/${product.id}`}>
                  <Button
                    theme="light"
                    className="w-40 py-3 text-white hover:border-black"
                  >
                    Show Details
                  </Button>
                </Link>
                <div className="flex">
                  <button
                    onClick={() => {
                      dispatch(addToCart(product));
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
          </div>
        ))}
      </div>
      {showModal && <ModalAddCart />}
    </div>
  );
}
