import { categories } from "@/app/data/categories";
import { notFound } from "next/navigation";
import CategoryDetail from "@/app/components/CategoryDetail";

export default function CategoryPage({ params }: { params: { id: string } }) {
  const categoryId = parseInt(params.id);
  const category = categories.find(cat => cat.id === categoryId);
  
  if (!category || !category.active) {
    return notFound();
  }
  
  return <CategoryDetail category={category} />;
}

// Generate static pages at build time for better performance
export async function generateStaticParams() {
  return categories
    .filter(category => category.active)
    .map(category => ({
      id: category.id.toString(),
    }));
}