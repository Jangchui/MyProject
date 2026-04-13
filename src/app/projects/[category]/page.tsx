import { projectsData } from '@/data/projects';
import CategoryPageClient from '@/components/CategoryPageClient';

export function generateStaticParams() {
  return [
    { category: 'ai-projects' },
    { category: 'revit-bim' },
    { category: 'civil-design' },
    { category: 'structural-analysis' },
    { category: 'cad-drafting' },
  ];
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const { category } = params;
  
  const filteredProjects = projectsData.filter(p => p.category === category);
  const categoryName = category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <CategoryPageClient 
      category={category} 
      categoryName={categoryName} 
      filteredProjects={filteredProjects} 
    />
  );
}
