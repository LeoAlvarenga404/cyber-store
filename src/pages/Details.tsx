import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductAttributes from "../components/product-attributes";

interface ProductDetailsProps {
  id: string;
  title: string;
  price: number;
  pictures: { url: string }[];
  attributes?: {
    id: string;
    name: string;
    value_id: string;
    value_name: string;
  }[];
}

export function Details() {
  const [productDetails, setProductDetails] = useState<ProductDetailsProps>({
    id: "",
    title: "",
    price: 0,
    pictures: [],
  });
  const [imageFocus, setImageFocus] = useState<number>(0);

  const { id } = useParams<string>();

  useEffect(() => {
    fetch(`https://api.mercadolibre.com/items/${id}`)
      .then((response) => response.json())
      .then((details) => {
        setProductDetails(details);
      });
  }, [id]);

  if (
    !productDetails ||
    !productDetails.pictures.length ||
    !productDetails.attributes
  ) {
    return <div>Loading...</div>;
  }

  function handleImageFocus(i: number) {
    setImageFocus(i);
  }

  return (
    <div className="w-full max-w-7xl m-auto mt-20">
      <div className="flex ">
        <div className="w-full flex justify-center items-center gap-5">
          <div className="flex flex-col items-center gap-4 ">
            {productDetails.pictures.slice(0, 4).map((pic, i) => (
              <button
                key={i}
                className={`${imageFocus === i ? "opacity-100" : "opacity-40"}`}
                onClick={() => handleImageFocus(i)}
              >
                <img src={pic.url} alt={`Imagem ${i}`} className="h-20" />
              </button>
            ))}
          </div>
          <img
            src={productDetails.pictures[imageFocus].url}
            alt=""
            className="w-full max-w-[25rem] h-[30rem] object-contain"
          />
        </div>
        <div className="w-full">
          <h1>{productDetails.title}</h1>
          <p>
            {productDetails.price.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </p>
        </div>
        <ProductAttributes attributes={productDetails.attributes} />

      </div>
    </div>
  );
}
