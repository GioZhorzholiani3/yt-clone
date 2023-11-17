import Button from "./Button";
import { ChevronLeft } from "lucide-react";

type CategoryPillsProps = {
  categories: string[];
  selectedCategory: string;
  onSelect: (category: string) => void;
};

const CategoryPills = ({
  categories,
  selectedCategory,
  onSelect,
}: CategoryPillsProps) => {
  return (
    <div className="overflow-x-hidden relative">
      <div className="flex whitespace-nowrap gap-3 transition-transform w-[max-content]">
        {categories.map((category) => (
          <Button
            key={category}
            onClick={() => onSelect(category)}
            variant={selectedCategory === category ? "dark" : "default"}
            className="py-1 px-3 rounded-lg whitespace-nowrap"
          >
            {category}
          </Button>
        ))}
      </div>
      <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-white from-50% to-transparent w-24 h-full">
        <Button
          variant="ghost"
          size="icon"
          className="h-full aspect-square w-auto p-1.5"
        >
          <ChevronLeft />
        </Button>
      </div>
    </div>
  );
};

export default CategoryPills;
