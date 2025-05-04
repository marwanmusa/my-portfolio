# Marwan Musa - Personal Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, TailwindCSS, and Framer Motion.

## Features

- 🌓 Light/Dark mode support
- 📱 Fully responsive design
- 🎨 Modern UI with smooth animations
- 📊 Interactive skills visualization with Chart.js
- 🏗️ Built with Next.js 15 and TypeScript
- 🎭 Animated UI elements with Framer Motion
- 🌊 Styled with TailwindCSS

## Tech Stack

- **Framework**: Next.js 15 (React)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Charts**: Chart.js with react-chartjs-2
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 16.8.0 or newer
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/marwanmusa/my-portfolio.git
cd my-portfolio
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and visit `http://localhost:3000`

## Project Structure

```
├── public/            # Static assets
├── src/
│   ├── app/           # Next.js App Router
│   │   ├── layout.tsx # Root layout
│   │   └── page.tsx   # Home page
│   ├── components/    # React components
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Experience.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Projects.tsx
│   │   └── Skills.tsx
│   └── ...
├── tailwind.config.js # TailwindCSS configuration
├── package.json       # Dependencies and scripts
└── tsconfig.json      # TypeScript configuration
```

## Customization

### Personal Information

Edit the components in `src/components/` to update your personal information, skills, projects, and experience.

### Styling

The project uses TailwindCSS for styling. You can customize the colors, fonts, and other design elements by editing the `tailwind.config.js` file.

### Adding Projects

To add new projects, edit the `projects` array in `src/components/Projects.tsx`.

### Adding Skills

To update your skills, edit the arrays in `src/components/Skills.tsx`.

## Deployment

This portfolio is optimized for deployment on Vercel. To deploy your own version:

1. Push your code to a GitHub repository
2. Import the project in Vercel
3. Deploy!

## License

This project is open source and available under the [MIT License](LICENSE)

---

Built with ❤️ by Marwan Musa
