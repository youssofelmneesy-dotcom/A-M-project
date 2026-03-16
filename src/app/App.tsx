import React from "react";
import { RouterProvider } from "react-router";
import { router } from "./routes";
import { Toaster } from "./components/ui/sonner";

// استيراد LanguageProvider
import { LanguageProvider } from "./translation/LanguageContex";

import { auth, googleProvider } from "./firebase";

function App() {
  return (
    // LanguageProvider يلف كل التطبيق
    <LanguageProvider>
      <RouterProvider router={router} />
      <Toaster />
    </LanguageProvider>
  );
}

export default App;