// src/pages/SignUpPage.js
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { User, Lock, Chrome } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Card } from "../components/ui/card";
import { useLanguage } from "../translation/LanguageContex";
import { useAuth } from "../auth";

export function SignUpPage() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const { register } = useAuth();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    hairColor: "",
    curlLevel: "",
    thickness: "",
    preferredStyle: "",
  });

  const [error, setError] = useState("");

  // Sign up with Email/Password
  const handleSignUp = async () => {
    try {
      await register({
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
      });
      navigate("/home");
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    }
  };



  // Sign in with Google
  const handleGoogleSignIn = async () => {
    setError(t("auth.googleUnavailable"));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#1a1410] to-[#2a2520] p-4 overflow-y-auto">
      <div className="max-w-md mx-auto py-8">
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
          {/* Header */}
          <div className="text-center mb-8">
            <motion.h1 className="text-3xl font-bold mb-2" initial={{ scale: 0.9 }} animate={{ scale: 1 }}>
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                {t("auth.createAccount")}
              </span>
            </motion.h1>
            <p className="text-muted-foreground">{t("auth.joinCommunity")}</p>
          </div>




          {/* Social Sign Up */}
          <div className="space-y-3 mb-6">
            <Button className="w-full bg-white text-black" onClick={handleGoogleSignIn}>
              <Chrome className="w-5 h-5 mr-2" />
              {t("auth.continueWithGoogle")}
            </Button>
          </div>



          {/* Divider */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-primary/20" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">{t("auth.signUpWithEmail")}</span>
            </div>
          </div>



          {/* Form */}
          <Card className="p-6 bg-card/50 border-primary/20 backdrop-blur-sm">
            {error && <p style={{ color: "red" }}>{error}</p>}
            <form className="space-y-4">
              {/* Full Name */}
              <div>
                <Label htmlFor="fullName">{t("auth.fullName")} *</Label>
                <div className="relative mt-1.5">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/50" />
                  <Input
                    id="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  />
                </div>
              </div>



              {/* Email */}
              <div>
                <Label htmlFor="email">{t("auth.email")} *</Label>
                <div className="relative mt-1.5">
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>



              {/* Password */}
              <div>
                <Label htmlFor="password">{t("auth.password")} *</Label>
                <div className="relative mt-1.5">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/50" />
                  <Input
                    id="password"
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  />
                </div>
              </div>



              <Button type="button" onClick={handleSignUp} className="w-full mt-6">
                {t("auth.createAccount")}
              </Button>
            </form>
          </Card>




          {/* Footer */}
          <div className="text-center mt-6">
            <p>
              {t("auth.alreadyHaveAccount")}{" "}
              <button onClick={() => navigate("/login")} className="text-primary hover:underline">
                {t("auth.logIn")}
              </button>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}