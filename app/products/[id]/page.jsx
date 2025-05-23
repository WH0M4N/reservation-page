import { getProductsById } from "@/app/fetch_products/fetchProducts";
import Image from "next/image";
import "react-datepicker/dist/react-datepicker.css";
import BookingForm from "@/app/components/BookingForm";
import ExpandableText from "@/app/components/ExpandableText";

export default async function ProductDetail({ params }) {
  const product = await getProductsById(params.id);

  return (
    <main className="min-h-screen flex items-center justify-center bg-transparent p-4">
      <div className="max-w-3xl w-full bg-gray-200 p-8 rounded-xl shadow-md">
        <div className="md:grid md:grid-cols-2 gap-8 items-start">
          <Image
            src={product.image}
            alt={product.title}
            width={400}
            height={400}
            className="object-contain w-full h-80 bg-white rounded-xl p-4"
          />

          <div className="space-y-4">
            <h1 className="text-black text-3xl font-bold">{product.title}</h1>

            <ExpandableText desc={product.description} />

            <p className="text-blue-600 font-semibold text-xl">
              ${product.price}
            </p>

            <BookingForm />
          </div>
        </div>
      </div>
    </main>
  );
}
