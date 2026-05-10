"use client";
import { Product } from "@/types/product";
import { use, useState } from "react";

const Product_Per_Page = 6;

export default function ProductGrid({ products }: { products: Product[] }) {
  //page 1 -> [0-6)
  //page 2 -> [6-12)
  //...
  //page last -> [last-6 -last)

  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * Product_Per_Page;
  const totalPages = Math.ceil(products.length / Product_Per_Page);

  const paginatedProducts = products.slice(
    startIndex,
    startIndex + Product_Per_Page,
  );

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" }); // scroll to top
  };

  return (
    <>
      {/* products in selected page */}
      
        <div className="flex flex-wrap justify-center gap-6">
        {paginatedProducts.map((product) => (
          <div
            key={product.id}
            className="text-amber-50 text-center  bg-blue-950 p-5 outline-0 border-2 border-blue-950 rounded-3xl shadow-2xl  "
          >
            <h1>{product.title}</h1>
            <h2>{product.price}</h2>
            <h3>⭐{product.rating.rate}</h3>
          </div>
        ))}
      </div>

      
      

      {/* buttons */}
      <div className="text-center">
        {/* prev button */}

        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 border rounded disabled:opacity-30"
        >
          Prev
        </button>

        {/* page numbers */}

        {Array.from({ length: totalPages }, (_, i) => i + 1).map(
          (pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => {
                goToPage(pageNumber);
              }}
              className={`w-10 h-10 rounded ${
                pageNumber === currentPage
                  ? "bg-red-500 text-white"
                  : "border hover:bg-gray-100"
              }`}
            >
              {pageNumber}
            </button>
          ),
        )}

        {/* next button */}

        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 border rounded disabled:opacity-30"
        >
          Next
        </button>
      </div>
    </>
  );
}
