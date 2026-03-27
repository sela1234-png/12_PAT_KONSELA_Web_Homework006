import CardProduct from "@/components/ui/cardProduct"; // Ensure file name matches

export default async function ProductsPage() {
    const res = await fetch('https://fakestoreapi.com/products');
    const products = await res.json(); // fakestoreapi returns the array directly

    return (
        <div className="min-h-screen bg-gray-100 p-6 md:p-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
                {products.map((item) => (
                    <CardProduct key={item.id} product={item} />
                ))}
            </div>
        </div>
    );
}