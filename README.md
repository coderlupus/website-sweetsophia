# 🍰 Sweet Sophia

A modern, elegant landing page and e-commerce MVP designed for a boutique brownie and sweets shop. This application focuses on providing a premium visual experience while offering essential shopping functionalities through a responsive interface.

## ✨ Features

* **Visual-First Design**: A captivating Hero section and layout designed to highlight the artisanal quality of the products.
* **Product Showcase**: specialized catalog for brownies and sweets with detailed cards.
* **Shopping Cart System**: Integrated cart functionality allowing users to add items and manage quantities seamlessly.
* **Responsive UI**: Fully optimized for mobile and desktop devices using **Tailwind CSS**.
* **Modern Components**: Built with **Shadcn UI** primitives for accessible and robust interactive elements (Sheet, Dialogs, etc.).

## 🛠 Tech Stack

* **Core**: React 18, TypeScript, Vite
* **Styling**: Tailwind CSS, Shadcn UI, Lucide React (Icons)
* **State Management**: React Context API
* **Build Tool**: Bun / Vite

## 🚀 Getting Started

### Prerequisites

* Node.js (v18+) or Bun

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/website-sweetsophia.git](https://github.com/your-username/website-sweetsophia.git)
    cd website-sweetsophia
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    bun install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    # or
    bun dev
    ```

## 📂 Project Structure

* `src/components`:
  * `ui/`: Reusable accessible components (Shadcn).
  * `Hero.tsx`, `Products.tsx`, `About.tsx`: Main landing page sections.
  * `Cart.tsx`: Shopping cart logic and UI.
* `src/contexts`: Global state (CartContext).
* `src/assets`: Static images and resources.

---

## 🛠 Technical Improvements & Future Vision

This project was developed as a high-fidelity MVP to validate the brand's online presence. To prepare this application for a production launch and ensure long-term scalability, the following steps are planned:

### 🎨 Content & Assets Strategy
* **Placeholder Imagery**: The images currently used in the application are high-quality placeholders for demonstration purposes. The production roadmap includes replacing these with **professional photography of the actual products** to ensure brand authenticity and accurate user expectations.
* **Brand Identity**: Refinement of the color palette and typography to strictly match the client's final branding guidelines.

### 🏗 Architecture & Data
* **Headless CMS Integration**: Move product data from hardcoded files to a CMS (like **Sanity** or **Strapi**). This will allow the business owner to update flavors, prices, and photos without touching the code.
* **Checkout Flow**: Currently, the cart serves as a selection tool. The next phase involves implementing a checkout redirection (via WhatsApp API) or a full payment gateway integration (Stripe/Mercado Pago).

### 🚀 Performance & SEO
* **Image Optimization**: Implementation of `next/image` (if migrating to Next.js) or modern formats (AVIF/WebP) to ensure fast loading times, which is critical for image-heavy food websites.
* **SEO Metadata**: Adding proper Open Graph tags and structured data (JSON-LD) for "Local Business" and "Product" to improve visibility on Google Maps and search results.

---

## 📄 License

This project is licensed under the MIT License.
