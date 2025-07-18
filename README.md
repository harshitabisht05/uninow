# 🧠 Project 1 Name: UniNow
- Tech Stack: Next.js + Tailwind CSS
- Goal: We are Building a Mock Frontend for UniNow similary to [StuKonnect](https://www.stukonnect.com/)

# 📘 UniNow
UniNow is a platform designed to bridge the gap between students and mentors by providing reliable guidance, insightful blogs, and a responsive contact system. Built using Next.js (App Router) and Tailwind CSS, UniNow ensures fast performance and a modern user experience.

## 🚀 Features
- 🎓 Mentor Directory – Browse through expert mentors and connect for guidance.
- 📰 Blog Section – Educational and motivational articles for students.
- 🧾 Contact Form – Reach out to the team with queries or suggestions.
- 📩 Newsletter Signup – Stay updated with the latest content.
- 📱 Responsive Design – Works beautifully on mobile, tablet, and desktop.

## 📦 Installation
```bash
# Clone the repository
git clone https://github.com/harshitabisht05/uninow.git

# Go into the project directory
cd uninow

# Install dependencies
npm install
npm install next-themes

# Run the development server
npm run dev
```
Visit http://localhost:3000 to see your app

## Task Distribution

| **Member**   | **Pages Assigned**                                                                                                                | **What the Page Contains**                                                                                                                    | **Components Assigned**                                                                        |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| **Harshita** | - **Home Page** (`app/page.jsx`) <br> - **Student Reviews Section** <br> - **Newsletter Signup**                                  | - Intro about the platform<br>- CTA “Find your Mentor”<br>- Mentor highlights<br>- Student reviews/testimonials<br>- Newsletter subscription  | - `HeroSection.jsx` <br> - `ReviewCarousel.jsx` <br> - `NewsletterForm.jsx`<br>- `Navbar.jsx`                    |
| **Paridhi**  | - **Mentors Page** (`app/mentors/page.jsx`) <br> - **Legal Page** (`app/legal/page.jsx`) | - Mentor profiles with images and tags<br>- Legal documents: Privacy Policy, Terms<br>- Frequently Asked Questions in Q\&A format             | - `MentorCard.jsx` <br> - `PolicyContent.jsx` <br> - `FAQAccordion.jsx`                        |
| **Ojaswee**  | - **Contact Page** (`app/contact/page.jsx`) <br> - **Blog/Resources Page** (`app/blog/page.jsx`) <br> - **Footer + Dark Mode**    | - Contact form with name/email/message<br>- Blog/resource articles<br>- Footer with social links<br>- Toggle button to enable dark/light mode | - `ContactForm.jsx` <br> - `BlogCard.jsx` <br> - `Footer.jsx` <br> - `DarkModeToggle.jsx` |

Use logo.png if required from `public/logo.png`


## Folder Structure
```bash
├── app
│   ├── blog
│   │   └── page.jsx                  # Blog page
│   ├── contact
│   │   └── page.jsx                 # Contact page
│   ├── legal
│   │   └── page.jsx                 # Legal content (T&C, Privacy)
│   ├── mentors
│   │   └── page.jsx                # Mentor listings
│   ├── page.jsx                    # Homepage
│   ├── layout.jsx                  # Layout wrapper for all pages (Navbar, Footer)
|   └──components
│       ├── BlogCard.jsx                # Card design for blog entries
│       ├── ContactForm.jsx            # Contact form section
│       ├── DarkModeToggle.jsx         # Dark mode switch (optional)
│       ├── FAQAccordion.jsx           # FAQ list accordion (used in homepage)
│       ├── Footer.jsx                 # Footer component (includes links, newsletter, etc.)
│       ├── HeroSection.jsx            # Hero/landing section of homepage
│       ├── MentorCard.jsx             # Card component for mentors
│       ├── Navbar.jsx                 # Top navigation bar
│       ├── NewsletterForm.jsx         # Newsletter signup form (can be used inside Footer)
│       ├── PolicyContent.jsx          # Terms & Privacy JSX
│       └── ReviewCarousel.jsx         # Testimonial slider component
│
├── public
│   └── logo.png                   # Site logo image
│
├── styles
│   └── globals.css                # Global Tailwind styles (currently under root)
│
├── .gitignore
├── jsconfig.json
├── favicon.ico
└── tailwind.config.js
```

## ✅ Guidelines
- Write clean, reusable, and accessible code.
- Use the same fonts as mentioned.
- Color Theme will be Black/white and Shades of Purple. 
## Fonts:
- For heading use `font-heading`
```bash
<h1 className="font-heading text-4xl">Welcome to UniNow</h1>
````
- For text or body use `font-body font-base`
```bash
<p className="font-body text-base">Everything you need in one student dashboard.</p>
```

## 🙌 Contribution
Each intern will be assigned a specific folder. Submit your progress via Pull Requests to the main branch.

## 📄 License
All rights reserved by Sentienta QualityAI.
This project is part of an internal research initiative. Do not redistribute without permission.

## Next Project
- GlobalEye AI
- GlobalEye Drones
  (Need to complete all 3 projects by 27/07)
