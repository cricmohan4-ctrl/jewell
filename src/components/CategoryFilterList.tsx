import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { type Category } from "@/data/categories";

export interface CategoryWithChildren extends Category {
  children: CategoryWithChildren[];
}

type CategoryFilterListProps = {
  categories: CategoryWithChildren[];
};

export const CategoryFilterList = ({ categories }: CategoryFilterListProps) => {
  return (
    <div className="space-y-2">
      {categories.map(category => (
        <div key={category.id}>
          <div className="flex items-center space-x-2">
            <Checkbox id={`cat-${category.id}`} />
            <Label htmlFor={`cat-${category.id}`}>{category.name}</Label>
          </div>
          {category.children.length > 0 && (
            <div className="pl-6 mt-2">
              <CategoryFilterList categories={category.children} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};