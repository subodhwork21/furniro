# Furniro - Payload CMS E-commerce Application

Furniro is a fully functional e-commerce platform designed for desktop users to offer a seamless shopping experience for furniture enthusiasts. The project includes key features like product browsing, search, cart functionality, and a smooth checkout process.


## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Project Structure](#project-structure)

## Features

- Product Browsing: Explore a wide variety of furniture products.
- Search Functionality: Quickly find products via a search bar.
- Shopping Cart: Add products to the cart and review them before purchasing.
- Checkout Process: A fully functional checkout system with smooth transaction handling.
- Admin Dashboard: Manage products, orders, and customer information.
- Desktop Design: The platform is optimized for desktop use.


## Tech Stack

- [Next.js 14](https://nextjs.org/) - React framework for production-grade web applications
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [Vercel](https://vercel.com/) - Platform for frontend frameworks and static sites
-  [Payload CMS](https://payloadcms.com) - A headless CMS for managing the backend logic and content.
-  [MongoDB](https://www.mongodb.com) - For managing product, order, and customer data.

## Installation

To run the project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/subodhwork21/furniro.git
   ```

2. **Navigate into the directory**:
   ```bash
   cd furniro
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

> **Note**: `.env` file is required for this project.

## Usage

This project demonstrates the use of **Next.js 14 with the app router** and **Tailwind CSS** for styling. The code is organized into a clear folder structure that follows Next.js best practices.

### Key Directories:

- **`src/app/`**: Contains all pages, layouts, and route logic using Next.js' app router.
- **`src/components/`**: Houses reusable UI components that are shared across different pages.
- **`src/lib/`**: Contains utility functions and shared logic that can be used in various parts of the project.
- **`public/`**: Stores static assets such as images, icons, and other public resources.

### Running the Project:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   ```

2. **Navigate into the project directory**:
   ```bash
   cd your-repo-name
   ```

3. **Install the dependencies**:
   ```bash
   npm install
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to see the app running.

The project uses **Next.js' app router** to handle routing and server-side rendering, ensuring optimal performance and SEO. Tailwind CSS is used for building responsive and customizable UI components.

## Deployment

This project is deployed on Vercel and can be accessed at:  
[https://furniro-wine.vercel.app](https://furniro-wine.vercel.app/)

To deploy your own version:

1. **Push to GitHub or any Git provider**.
2. **Connect your repository to Vercel** (or use the Vercel CLI):
   ```bash
   vercel
   ```
3. Vercel will automatically build and deploy your project.

## Project Structure

```bash
.
├── public/               # Public assets (images, fonts, etc.)
├── src/                  # Source files
│   ├── app/              # Next.js app folder
│   │   ├── (app)/        # Next.js app-specific logic (layouts, pages)
│   │   ├── (payload)/    # Payload CMS setup (collections, hooks)
│   │   └── (my-route)/   # Custom route logic
├── config/               # Configuration files for Payload CMS setup
├── styles/               # Global styles and Tailwind CSS configuration
├── package.json          # Project dependencies and scripts
└── README.md             # Project documentation

```

- **public/**: Contains all static assets such as images and fonts.
- **src/**: Main application folder, containing
  - **app/**: Next.js specific logic, such as pages, layouts, and components for server-side and static rendering.
  - **payload/**: Payload CMS setup with models, collections, and hooks for managing content.
  - **my-route/**: Custom route logic for additional routing functionality beyond Payload's defaults.
- **config//**: Payload CMS and project configuration files.