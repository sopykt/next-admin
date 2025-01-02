# Next.js + TailwindCSS + ESLint + Prettier Template

This template is a fully configured Next.js setup with TailwindCSS for styling, ESLint for linting, and Prettier for formatting. It is designed to streamline the process of starting a new project with best practices and coding standards already in place.

---

## **Features**
- **Next.js**: React framework for production-ready applications.
- **TailwindCSS**: Utility-first CSS framework.
- **ESLint**: Linter to catch errors and enforce coding standards.
- **Prettier**: Code formatter to maintain consistent styling.

---

## **Getting Started**

### **1. Create a New Project**

Use this repository as a template to create a new project. Clone or use GitHub's "Use this template" button.

```bash
npx degit git@github.com:sopykt/nextjs-tailwind-eslint-prettier-template.git my-nextjs-project
cd my-nextjs-project
```

### **2. Install Dependencies**

```bash
yarn install
```

### **3. Start the Development Server**

```bash
yarn dev
```

Visit `http://localhost:3000` in your browser to view the project.

---

## **Folder Structure**

```plaintext
my-nextjs-project/
├── eslint.config.mjs
├── next.config.ts
├── next-env.d.ts
├── package.json
├── postcss.config.mjs
├── public
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── README.md
├── src
│   ├── app
│   └── styles
├── tailwind.config.ts
├── tsconfig.json
└── yarn.lock
```

---

## **Configuration Details**

### **1. TailwindCSS**
- `globals.css` is located at `src/styles/`.
- Ensure to add your customizations in `tailwind.config.mjs`.

### **2. ESLint**
- The ESLint configuration is in `eslint.config.mjs`.
- Key Plugins:
  - `@typescript-eslint` for TypeScript linting.
  - `eslint-plugin-react` for React-specific linting.
  - `eslint-config-prettier` to disable conflicting Prettier rules.

### **3. Prettier**
- Prettier configuration is in `.prettierrc`.
- Ensure your IDE/Editor supports Prettier and ESLint integrations for best results.

### **4. Scripts**

#### Development
```bash
yarn dev
```

#### Linting
```bash
yarn lint
```

---

## **Customizing the Template**
To adjust this template for future use:
1. Clone the repository and make custom changes.
2. Initialize it as your own template by running:
```bash
git init
git remote add origin <your-template-repo-url>
git push -u origin main
```

---

## **Contributing**
Feel free to fork this repository and make adjustments. Contributions are always welcome!

---

## **License**
This template is open-source under the [MIT License](LICENSE).

