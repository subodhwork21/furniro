import { Button2 } from "../components/buttons";
import Container from "../components/container";
import Image from "next/image";
import ProductItem from "../components/product_item";

const Products = ({
  productData,
  categoryItems,
}: {
  productData: any;
  categoryItems: any;
}) => {
  return (
    <Container pl="pl-[0px]" pt="pt-[56px]" pb="pb-[69px]" pr="pr-[0px]">
      <Container pl="pl-[131px]" pt="pt-[0px]" pb="pb-[0px]" pr="pr-[126px]">
        <div className="flex justify-center items-center flex-col mb-[62.29px]">
          <h4 className="font-poppinsbold text-fontprimary">
            Browse The Range
          </h4>
          <p className="text-[20px] text-fontsecondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="flex justify-start items-center gap-8 text-fontprimary">
          {categoryItems.docs.map((category: any) => {
            return (
              <div
                key={category.id}
                className="flex justify-center items-center flex-col"
              >
                <img
                  className="mb-[30px]"
                  src={category["category image"].url}
                  width={category["category image"].width}
                  height={category["category image"].height}
                  alt={category["category image"].alt}
                />
                <p className="font-poppinssemibold text-[24px]">
                  {category["category name"]}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
      <div className="mt-[56px] mx-[102px] ">
        <h3 className="w-full text-center font-poppinsbold mb-[32px]">
          Our Products
        </h3>
        <div className="grid grid-cols-4 relative gap-[32px]">
          {productData.docs.map((product: any, id: number) => (
            <ProductItem
              key={id}
              id={product.id}
              image={product["product image"]}
              name={product.product_name}
              description={product["product description"]}
              price={product["product price"]}
              prevprice={product["product price before discount"]}
              type={product["product type"]}
              slug={product.product_slug}
            />
          ))}
        </div>
        <div className="mt-[32px] flex justify-center items-center">
          <button
            className={` w-[245px] bg-white text-primary border-[1px] border-primary h-[48px] hover:bg-primary hover:transition-all hover:duration-500 hover:text-white font-poppinssemibold`}
          >
            Show More
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Products;
