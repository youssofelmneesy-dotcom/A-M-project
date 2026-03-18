import { createBrowserRouter, Navigate } from "react-router";
import { ReactElement } from "react";
import { SplashScreen } from "./pages/SplashScreen";
import { LanguageSelection } from "./pages/LanguageSelection";
import { EntryScreen } from "./pages/EntryScreen";
import { SignUpPage } from "./pages/SignUpPage";
import { LoginPage } from "./pages/LoginPage";
import { HomePage } from "./pages/HomePage";
import { BookingPage } from "./pages/BookingPage";
import { ServicesPage } from "./pages/ServicesPage";
import { GalleryPage } from "./pages/GalleryPage";
import { MembershipPage } from "./pages/MembershipPage";
import { OffersPage } from "./pages/OffersPage";
import { ProfilePage } from "./pages/ProfilePage";
import { AdminDashboard } from "./pages/AdminDashboard";
import { useAuth } from "./auth";

function AuthLoadingScreen() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#1a1410] to-[#2a2520] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 rounded-full border-2 border-primary/30 border-t-primary animate-spin" />
        <p className="text-sm text-muted-foreground">Checking session...</p>
      </div>
    </div>
  );
}

function RequireAuth({ children }: { children: ReactElement }) {
  const { user, loading } = useAuth();

  if (loading) {
    return <AuthLoadingScreen />;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

function RequireAdmin({ children }: { children: ReactElement }) {
  const { user, isAdmin, loading } = useAuth();

  if (loading) {
    return <AuthLoadingScreen />;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (!isAdmin) {
    return <Navigate to="/home" replace />;
  }

  return children;
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: SplashScreen,
  },
  {
    path: "/language",
    Component: LanguageSelection,
  },
  {
    path: "/entry",
    Component: EntryScreen,
  },
  {
    path: "/signup",
    Component: SignUpPage,
  },
  {
    path: "/login",
    Component: LoginPage,
  },
  {
    path: "/home",
    Component: HomePage,
  },
  {
    path: "/booking",
    Component: BookingPage,
  },
  {
    path: "/services",
    Component: ServicesPage,
  },
  {
    path: "/gallery",
    Component: GalleryPage,
  },
  {
    path: "/membership",
    Component: MembershipPage,
  },
  {
    path: "/offers",
    Component: OffersPage,
  },
  {
    path: "/profile",
    Component: () => (
      <RequireAuth>
        <ProfilePage />
      </RequireAuth>
    ),
  },
  {
    path: "/admin",
    Component: () => (
      <RequireAdmin>
        <AdminDashboard />
      </RequireAdmin>
    ),
  },
]);
