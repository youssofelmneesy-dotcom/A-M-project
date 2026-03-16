import { createBrowserRouter } from "react-router";
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
    Component: ProfilePage,
  },
  {
    path: "/admin",
    Component: AdminDashboard,
  },
]);
