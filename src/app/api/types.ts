export interface AuthUser {
  id: string;
  fullName: string;
  email: string;
  role: "customer" | "barber" | "admin";
}

export interface AuthResponse {
  message: string;
  token: string;
  user: AuthUser;
}

export interface Barber {
  _id: string;
  name: string;
  experienceYears: number;
  rating: number;
}

export interface Service {
  _id: string;
  name: string;
  description: string;
  price: number;
  durationMinutes: number;
  category: string;
}
