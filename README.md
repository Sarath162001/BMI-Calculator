# 🎯 QR Code Generator  

A **React.js** application that allows users to generate and download QR codes instantly. The app leverages an external API to create QR codes dynamically and offers a seamless user experience.  

---

## 🚀 Features & Functionality  

✅ **QR Code Generation**  
- Users can input any text or URL, and the app generates a QR code instantly.  
- Utilizes the `https://api.qrserver.com/v1/create-qr-code/` API for QR code creation.  

✅ **Custom QR Code Size**  
- Users can specify the **size** (e.g., `150x150`, `200x200`) for better customization.  

✅ **QR Code Download Option**  
- Users can **download** the generated QR code as a **PNG file** with a single click.  

✅ **State Management with React Hooks**  
- **`useState`** manages:  
  - `img` (QR Code URL).  
  - `qrdata` (User input for QR code).  
  - `qrsize` (QR image size).  
  - `loading` (Indicates if QR generation is in progress).  

✅ **Responsive & User-Friendly UI**  
- 📱 **Fully Responsive** – optimized for mobile & desktop.  
- 🎨 **Minimalist Design** – modern typography and soft color palette.  
- 🏗 **Interactive Buttons** – `Generate` and `Download` buttons with hover effects.  

---

## 🛠 Tech Stack  

- **React.js** (Functional Components, Hooks)  
- **CSS** (Custom Styling)  
- **QR Code API** (Data Fetching)  

---

