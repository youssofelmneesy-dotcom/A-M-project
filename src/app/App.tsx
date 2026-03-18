import React from "react";
import { RouterProvider } from "react-router";
import { router } from "./routes";
import { Toaster } from "./components/ui/sonner";

// استيراد LanguageProvider
import { LanguageProvider } from "./translation/LanguageContex";
import { AuthProvider } from "./auth";

function App() {
  return (
    // LanguageProvider يلف كل التطبيق
    <AuthProvider>
      <LanguageProvider>
        <RouterProvider router={router} />
        <Toaster />
      </LanguageProvider>
    </AuthProvider>
  );
}

export default App;