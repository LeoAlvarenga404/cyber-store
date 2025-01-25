import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductAttributes from "../components/product-attributes";
import { Button } from "../components/button";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/sliceCart";

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

  const dispatch = useDispatch();

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
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500" />
    </div>
  );
  }

  function handleImageFocus(i: number) {
    setImageFocus(i);
  }

  return (
    <div className="w-full max-w-7xl m-auto mt-20 px-4">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-2/3 flex justify-center items-start gap-5">
          <div className="flex flex-col items-center gap-4">
            {productDetails.pictures.slice(0, 4).map((pic, i) => (
              <button
                key={i}
                className={`transition-opacity duration-200 hover:opacity-100 
                  ${imageFocus === i ? "opacity-100 border-2 border-blue-500" : "opacity-40"}`}
                onClick={() => handleImageFocus(i)}
              >
                <img src={pic.url} alt={`Product view ${i + 1}`} className="h-20 w-20 object-contain" />
              </button>
            ))}
          </div>
          <div className="flex-1 flex justify-center">
            <img
              src={productDetails.pictures[imageFocus].url}
              alt={productDetails.title}
              className="w-full max-w-[25rem] h-[30rem] object-contain"
            />
          </div>
        </div>

        <div className="w-full md:w-1/3 space-y-6">
          <div className="border-b pb-6">
            <h1 className="text-2xl font-semibold mb-4">{productDetails.title}</h1>
            <p className="text-3xl font-bold text-blue-600">
              {productDetails.price.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Product Specifications</h2>
            <ProductAttributes attributes={productDetails.attributes} />
          </div>

          <Button className="w-full border border-zinc-900 py-3" theme="dark" onClick={() => dispatch(addToCart(productDetails))}>
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  )
}
