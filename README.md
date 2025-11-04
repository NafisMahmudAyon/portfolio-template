# 🧑‍💻 Portfolio Template – Next.js + TypeScript + Framer Motion + Tailwind CSS

A modern, responsive developer portfolio built with **Next.js**, **TypeScript**, and **Tailwind CSS**.  
This portfolio template is designed to be **easy to customize**, **data-driven**, and **developer-friendly**.

---

## 🚀 Features

- 💼 Personal information and resume data loaded dynamically from a single JSON file  
- 🧱 Modular structure — all sections are separated into reusable React components  
- 🧩 Dynamic project and experience rendering  
- ⚙️ Framer Motion animations for smooth UI  
- 🖼️ Skill icons with animated progress indicators  
- 🌗 Dark mode ready (optional)  
- 📱 Fully responsive and SEO optimized  

---

## 🗂️ Folder Structure

```
portfolio/
├── components/
│   ├── Skills/
│   │   ├── IconSection.tsx
│   ├── Projects/
│   ├── Experience/
│   └── ...
├── data/
│   ├── portfolio-data.json        ← All editable personal & portfolio data
│   ├── projects-data.json         ← List of all your projects
│
├── public/
│   ├── profilePic.jpg
│   ├── resume.pdf
│   └── placeholder-logo.svg
│
└── README.md
```

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/NafisMahmudAyon/portfolio-template
cd portfolio-template
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Run the development server

```bash
npm run dev
```

Now open [http://localhost:3000](http://localhost:3000) in your browser 👇  
You should see your portfolio running locally!

---

## 🧠 Customization Guide

### 🧾 1. Personal & Portfolio Data

All personal data (name, contact, bio, resume, social links, call to action, etc.)  
can be edited inside the file:

```
data/portfolio-data.json
```

Example:

```json
{
  "personal": {
    "fullName": "Your Name",
    "title": "Frontend Web Developer",
    "headline": "A passionate Frontend Web Developer...",
    "bio": [
      "Write about your background, skills, and passion.",
      "You can use multiple paragraphs here."
    ],
    "email": "yourname@gmail.com",
    "phone": "+880 1234 567890",
    "location": "Bangladesh",
    "profileImage": "/profilePic.jpg",
    "resume": "/resume.pdf",
    "socialLinks": {
      "github": "https://github.com/yourusername",
      "linkedin": "https://linkedin.com/in/yourusername"
    }
  }
}
```

**👉 Update anything you want**, and it will automatically appear across the website.

---

### 💼 2. Updating Experience Section

The `experience` array in `portfolio-data.json` controls the **Experience Timeline**.

Example entry:

```json
{
  "id": 1,
  "title": "React Developer",
  "company": "PickPlugins",
  "period": "2024 - Present",
  "location": "Rangpur, Bangladesh",
  "website": "pickplugins.com",
  "description": "Develop and maintain scalable React applications.",
  "technologies": ["React", "Next.js", "TypeScript"]
}
```

✅ To **add** a new experience — just copy one object and change the details.  
✅ To **remove** one — delete that object.  

The UI will automatically update when the app runs.

---

### 💡 3. Updating Projects Data

All project information is stored in:

```
data/projects-data.json
```

Each project object includes details like title, description, features, tech used, and images.

Example project entry:

```json
{
  "id": 1,
  "title": "TaskFlow Manager",
  "slug": "taskflow-manager",
  "short_description": "A task management app for teams.",
  "project_type": ["Web Application"],
  "project_status": "Completed",
  "date_started": "2024-03-12",
  "date_complete": "2024-05-01",
  "tech_use": ["Next.js", "React", "Tailwind", "Supabase"],
  "project_url": "https://taskflow-manager.vercel.app/",
  "role": "Lead Developer",
  "client_name": "FlowTech Solutions",
  "key_features": [
    { "title": "Real-time Collaboration", "desc": "Edit tasks simultaneously." },
    { "title": "Progress Analytics", "desc": "Dashboard for tracking progress." }
  ],
  "github_repo": "https://github.com/example/taskflow-manager",
  "tags": ["nextjs", "supabase", "dashboard"]
}
```

✅ **To add a new project:**  
Copy an existing object and replace the content.  
✅ **To remove a project:**  
Delete that object.  
✅ **To reorder:**  
Simply change their order in the JSON array.

> 💡 Make sure each project has a **unique `id`** and `slug`.

---

### 🧠 4. Updating the Skills Section (IconSection)

Skill icons and progress animations are handled inside:  
```
components/Skills/IconSection.tsx
```

Each section (Frontend, Backend, Others) has an array of icon objects like this:

```tsx
{
  icon: <ReactIcon className='aspect-square w-10' />,
  text: 'React',
  progress: 90
}
```

To **add** a new skill:
1. Import your icon from `components/Icons` (or add a new SVG there).
2. Add a new object to the appropriate section array:
   ```tsx
   {
     icon: <YourNewIcon className='aspect-square w-10' />,
     text: 'NewSkill',
     progress: 85
   }
   ```
3. Save — and the new skill icon will appear automatically with animation.

> 💡 You can group your skills into **Front End**, **Back End**, and **Others** as already structured.

---

### 🪄 5. Metadata and SEO

You can update the portfolio’s SEO information in `portfolio-data.json` under:

```json
"metadata": {
  "title": "Your Name | Portfolio",
  "description": "Frontend Developer specializing in React and Next.js",
  "keywords": ["Frontend Developer", "React", "Next.js", "Portfolio"],
  "author": "Your Name",
  "url": "https://yourportfolio.com"
}
```

This ensures your site displays correctly on Google and social media.

---

## 🧰 Tech Stack

- **Next.js** – Framework for React  
- **TypeScript** – Type-safe development  
- **Tailwind CSS** – Modern utility-first styling  
- **Framer Motion** – Animations and transitions  
- **Vercel** – Recommended deployment platform  

---

## 🌍 Deployment

To deploy your portfolio to [Vercel](https://vercel.com):

```bash
npm run build
npm run start
```

Or directly push your project to a GitHub repo and connect it to Vercel — it will auto-deploy your site on every commit.

---

## 🪪 License

This project is open for **personal and portfolio use**.  
You can modify and adapt it to showcase your own work.  
Attribution is appreciated but not required.

---

## 💬 Support

If you face issues setting up or customizing this template:  
- Open an issue on GitHub  
- Or contact the original author (if provided)

---

Made with ❤️ by [Your Name](https://yourwebsite.com)
