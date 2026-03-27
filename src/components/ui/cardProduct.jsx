export default function CardProduct({ product }) {
    return (
        <div className="bg-white rounded-[2rem] shadow-lg overflow-hidden flex flex-col border border-gray-50 h-full">
            <div className="relative bg-[#0d1321] p-6 h-60 flex items-center justify-center">
                <img
                    src={product.image}
                    alt={product.title}
                    className="h-full object-contain hover:scale-105 transition-transform duration-300"
                />
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                    <div className="max-w-[70%]">
                        <p className="text-blue-500 text-[10px] font-bold uppercase tracking-tighter">
                            {product.category}
                        </p>
                        <h2 className="text-[#0d1321] text-lg font-bold leading-tight truncate">
                            {product.title} {/* Changed from product.price */}
                        </h2>
                    </div>
                    <span className="text-[#0d1321] text-xl font-black">
                        ${product.price} {/* Changed from product.description */}
                    </span>
                </div>

                <p className="text-gray-400 text-xs line-clamp-2 mb-6">
                    {product.description}
                </p>

                <button className="mt-auto w-full bg-[#0d1321] text-white py-3 rounded-full font-bold text-sm flex items-center justify-center gap-2">
                    View Product <span>↗</span>
                </button>
            </div>
        </div>
    );
}