import './globals.css'

export const metadata = {
  title: 'TechWorm Vending',
  description: 'AI-powered smart vending machines',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
```

---

## **After Creating These Files:**

1. **Commit all changes:**
```
   git add .
   git commit -m "Add Tailwind CSS configuration"
   git push
