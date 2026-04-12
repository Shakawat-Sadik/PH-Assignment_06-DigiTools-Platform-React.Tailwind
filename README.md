# DigiTools Platform

A modern, responsive e-commerce platform built with React, Vite, and Tailwind CSS. DigiTools offers premium AI tools, design assets, templates, and productivity software. 

## Features

- **Dynamic Product Rendering**: Loads product plans (subscription tiers) from an external JSON API.
- **Tabbed Interface**: Seamlessly switch between viewing available products and your active cart.
- **Interactive Shopping Cart**: 
  - Add items to your cart directly from the product listings.
  - View total item count and calculate subtotals in real-time.
  - Remove individual items from your cart view.
- **Cart Modal & Navigation Integration**: A fixed navigation bar containing a cart badge with the current item count, and a modal layout to quickly access checkout.
- **Micro-Animations & Polish**: Uses custom `styled-components` to create interactive "Bonus Buy" buttons, complete with hover tooltips and sliding icon animations.
- **Toast Notifications**: Built-in alerts (via `react-toastify`) covering cart additions, duplicate item detection, item removal, and successful checkout flows.

## Tech Stack

- **Framework**: [React 19](https://react.dev/) via [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) & [DaisyUI](https://daisyui.com/)
- **Components & Icons**: 
  - Buttons and Button ideas sourced from [uiverse](https://uiverse.io/).
  - `styled-components` for complex CSS animations
  - `@fortawesome/react-fontawesome` for scalable SVG icon rendering
- **Notifications**: `react-toastify`