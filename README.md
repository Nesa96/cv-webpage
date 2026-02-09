# My Personal CV Webpage

This is a modern, responsive personal portfolio built with **Next.js**, **Tailwind CSS**, and **TypeScript**. It features a robust CI/CD pipeline and a custom data-injection system to keep personal information private.

## 🛠️ Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Testing:** Vitest + React Testing Library
- **Deployment:** Vercel
- **CI/CD:** GitHub Actions

---

## 🔒 Privacy & Custom Configuration

To protect my sensitive data (like phone numbers or private emails) while keeping this repository public, I’ve implemented a **Build-Time Data Injection** system.

### 1. The Data File (`cv-data.json`)
The source of truth for the CV content is `app/data/cv-data.json`. This file is **ignored by Git** to maintain privacy.
- **Local setup:** Copy `app/data/cv-data.example.json` and rename it to `cv-data.json`.
- **Cloud setup:** The `CV_JSON_DATA` environment variable is used to recreate this file during the build process on Vercel and GitHub Actions.

### 2. Required Environment Variables
To get the contact links and build process working, you must set up a `.env.local` file (or Vercel Environment Variables) (copy example in .env.example.local):

### 3. Images & Assets Customization
The images in the `/public` folder are currently placeholders or my own personal project screenshots. You should replace them to customize the site:

* **Profile Logo:** Replace `/public/logo.jpg` with your own photo.
* **Project Screenshots:** Place your project images in `/public/project_images/`.
* **Paths:** Ensure the `image` paths in your `cv-data.json` match the filenames in the `/public` folder (e.g., `/project_images/my-app.png`).

---

## 🧪 Automated Testing
I use **Vitest** to ensure the UI remains stable even when the data changes.
- **Structural Testing:** The tests don't look for hardcoded strings (like "Software Engineer"). Instead, they check for the existence of `EducationCard` components and structural elements using `data-testid`.
- **CI Integration:** GitHub Actions runs these tests on every push. If a test fails, the deployment to Vercel is automatically blocked to prevent a broken site from going live.

Run tests locally:
```bash
npm test
