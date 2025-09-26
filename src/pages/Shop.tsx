import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Slider } from "@/components/ui/slider";

const Shop = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900">Our Collection</h1>
        <p className="mt-4 text-lg text-gray-500">Browse our exquisite selection of fine jewelry.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
        {/* Filters Sidebar */}
        <aside className="lg:col-span-1 sticky top-24">
          <h2 className="text-xl font-semibold mb-4">Filters</h2>
          <Accordion type="multiple" defaultValue={['category', 'metal', 'price']} className="w-full">
            <AccordionItem value="category">
              <AccordionTrigger>Category</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2"><Checkbox id="rings" /><Label htmlFor="rings">Rings</Label></div>
                  <div className="flex items-center space-x-2"><Checkbox id="necklaces" /><Label htmlFor="necklaces">Necklaces</Label></div>
                  <div className="flex items-center space-x-2"><Checkbox id="earrings" /><Label htmlFor="earrings">Earrings</Label></div>
                  <div className="flex items-center space-x-2"><Checkbox id="bracelets" /><Label htmlFor="bracelets">Bracelets</Label></div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="metal">
              <AccordionTrigger>Metal</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2"><Checkbox id="gold" /><Label htmlFor="gold">Gold</Label></div>
                  <div className="flex items-center space-x-2"><Checkbox id="platinum" /><Label htmlFor="platinum">Platinum</Label></div>
                  <div className="flex items-center space-x-2"><Checkbox id="diamond" /><Label htmlFor="diamond">Diamond</Label></div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="price">
              <AccordionTrigger>Price Range</AccordionTrigger>
              <AccordionContent>
                <Slider defaultValue={[50000]} max={100000} step={1000} />
                <div className="flex justify-between text-sm text-gray-500 mt-2">
                  <span>₹0</span>
                  <span>₹1,00,000+</span>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </aside>

        {/* Products Grid */}
        <main className="lg:col-span-3">
          <div className="flex justify-between items-center mb-6">
            <p className="text-sm text-gray-600">Showing {products.length} products</p>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-asc">Price: Low to High</SelectItem>
                <SelectItem value="price-desc">Price: High to Low</SelectItem>
                <SelectItem value="newest">Newest Arrivals</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Shop;