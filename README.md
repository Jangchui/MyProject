# Civil Engineering Portfolio Website

A modern, responsive, and data-driven portfolio website designed for a Civil Engineering undergraduate student. Built with **Next.js**, **Tailwind CSS**, and **Framer Motion**.

## 🚀 Getting Started

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Run Development Server:**
   ```bash
   npm run dev
   ```

3. **Open the site:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

- `src/app/`: Page routes and layouts.
- `src/sections/`: Core website sections (Hero, About, Skills, Projects, AI, Contact).
- `src/components/`: Reusable UI components.
- `src/data/`: **Update these files to change website content.**
- `public/`: Place your images, PDFs, and assets here.

## ✍️ How to Update Content

The website is designed to be easily updated by editing the files in `src/data/`.

### 1. Update Software/Skills
Edit `src/data/software.ts`. Add a new object to the `softwareData` array:
```typescript
{
  id: 'new-software',
  name: 'Software Name',
  description: 'What you do with it...',
  category: 'Category'
}
```

### 2. Update Projects
Edit `src/data/projects.ts`. Add a new object to the `projectsData` array:
```typescript
{
  id: 'new-project',
  title: 'Project Title',
  description: 'Brief description...',
  tools: ['Tool 1', 'Tool 2'],
  type: 'Project Type',
  category: 'civil-design', // Must match one of the categories
  image: '/assets/projects/your-image.jpg',
  fileLink: '#'
}
```

### 3. Update AI Training
Edit `src/data/ai.ts`. Add a new model:
```typescript
{
  id: 'model-x',
  name: 'Model Name',
  purpose: 'Why did you build it?',
  dataset: 'What data did you use?',
  results: 'Accuracy, RMSE, or notes...',
  demoLink: '#'
}
```

### 4. Update Hobbies
Edit `src/data/hobbies.ts` to change the hobbies shown in the About section.

## 🎨 Customization

- **Colors:** Update the `primary` and `steel` palettes in `tailwind.config.ts`.
- **Animations:** Most sections use Framer Motion. You can adjust durations and variants in the section files.
- **Images:** Replace placeholder icons and paths in the data files with your actual assets stored in the `public/` folder.

## 🛠 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Animations:** Framer Motion
- **Language:** TypeScript
