import config from "@payload-config";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import Image from "next/image";
const Page = async () => {
  const payload = await getPayloadHMR({ config });

  const productItems = await payload.find({
    collection: "products",
  });
  console.log(productItems);
  return (
    <>
      {productItems.docs.map((product: any) => {
        return (
          <div
            key={product.id}
            className="w-full flex justify-center items-center"
          >
            <Image
              src={product["product image"].url}
              width={500}
              height={500}
              alt="Product Image"
            />
          </div>
        );
      })}
    </>
  );
};

export default Page;
