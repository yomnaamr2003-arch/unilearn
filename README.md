# UniLearn — Course Catalog

A multi-page React application for browsing university courses, built with React Router and a live REST API.

## Live Demo
https://unilearn-iota.vercel.app/?utm_source=chatgpt.com

## Features
- Home, About, Contact, and Courses pages
- Dynamic course detail pages via `/courses/:id`
- Live course data fetched from a REST API (MockAPI)
- Search and department filtering
- Contact form with validation and submission states
- Loading and error states throughout
- Fully responsive design

## Technologies Used
- React 19
- React Router v7
- Vite
- CSS Modules
- MockAPI (REST backend)

## Running Locally

```bash
git clone https://github.com/yomnaamr2003-arch/unilearn.git
cd unilearn
npm install
npm run dev
```

Then open `http://localhost:5173`.

## Project Structure

```
src/
├── components/   Reusable UI (Header, Footer, CourseCard, Loader, ErrorMessage)
├── pages/        Route-level pages
├── hooks/        Custom data-fetching hooks (useCourses, useCourse)
├── services/     API layer
└── styles/       Design tokens and global styles
```
