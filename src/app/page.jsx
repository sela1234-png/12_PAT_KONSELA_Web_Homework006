import CustomerHomepageCardComponent from "@/components/CustomerHomepageCardComponent";
import ProductHomepageCardComponent from "@/components/ProductHomepageCardComponent";





export default function Home() {
  return (
    <div className="flex flex-1 w-full  p-8">

      <div className="w-full flex items-center justify-center gap-6">
        <ProductHomepageCardComponent />
        <CustomerHomepageCardComponent />

      </div>

    </div>
  );
}
