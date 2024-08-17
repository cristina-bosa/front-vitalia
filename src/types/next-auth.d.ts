import "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface User {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    birth_date: string;
    genre: string;
    phone: string;
    identification_number: string;
    groups: any;
    access_token: string;
    medical_history: {
      id: number;
      allergies: string[];
      current_medication: string[];
      medical_intervention: string[];
      relevant_diseases: string[];
    };
  }
}
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      first_name: string;
      last_name: string;
      email: string;
      birth_date: string;
      genre: string;
      phone: string;
      identification_number: string;
      groups: any;
      access_token: string;
    };
    medical_history: {
      id: number;
      allergies: string[];
      current_medication: string[];
      medical_intervention: string[];
      relevant_diseases: string[];
    };
    access_token: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    user: {
      id: string;
      first_name: string;
      last_name: string;
      email: string;
      birth_date: string;
      genre: string;
      phone: string;
      identification_number: string;
      groups: any;
      access_token: string;
    };
    medical_history: {
      id: number;
      allergies: string[];
      current_medication: string[];
      medical_intervention: string[];
      relevant_diseases: string[];
    };
    access_token: string;
  }
}
