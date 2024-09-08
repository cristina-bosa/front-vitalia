"use client";

import { fetchProfile } from "@/actions/patients/profile";
import { Profile } from "@/types";
import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext<unknown>(undefined);

interface UseProviderProps {
  children: React.ReactNode;
}

export const UserProvider = ({ children }: UseProviderProps) => {
  const [profile, setProfile] = useState<Profile>();
  const [medicalHistory, setMedicalHistory] = useState<any>(null);
  useEffect(() => {
    const loadProfile = async () => {
      const response = await fetchProfile();
      setProfile(response.user);
    };
    const loadMedicalHistory = async () => {
      const response = await fetchProfile();
      setMedicalHistory(response.medical_history);
    };
    loadProfile();
    loadMedicalHistory();
  }, []);

  return (
    <UserContext.Provider value={{ profile, medicalHistory }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
