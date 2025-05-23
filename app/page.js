import Image from "next/image";
import Link from "next/link";
import { getAllProducts } from "./fetch_products/fetchProducts";

export default async function HomePage() {
  const products = await getAllProducts();

  return (
    <main className="p-8 bg-gray-200 min-h-screen">
      <h1 className="text-center text-4xl font-bold mb-10 text-gray-800">
        Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link
            href={`/products/${product.id}`}
            key={product.id}
            className="text-black"
          >
            <div className="shadow-lg hover:shadow-xl transition-all p-4 border hover:border-blue-500 rounded-2xl">
              <div className="w-full h-56 flex items-center justify-center overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={250}
                  height={250}
                  objectFit="cover"
                  className="object-contain max-h-full"
                />
              </div>
              <h2 className="text-lg mt-4 line-clamp-1 font-bold">
                {product.title}
              </h2>
              <p className="text-gray-500 mt-1 line-clamp-2 text-sm">
                {product.description}
              </p>
              <p className="mt-3 text-blue-600 font-bold">${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
