"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import Cookies from "js-cookie";
import { User } from "../types/authStore";

type AuthState = {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (
    username: string,
    password: string,
  ) => Promise<{ success: boolean; message?: string }>;
  logout: () => void;
  setUser: (user: User) => void;
  setToken: (token: string) => void;
  checkAuth: () => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set, _get) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      isLoading: false,

      login: async (username: string, password: string) => {
        set({ isLoading: true });

        try {
          // TODO: Replace with actual API call
          const response = await fetch("/api/auth/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
          });

          if (response.ok) {
            const data = await response.json();

            // Set token in cookies for middleware
            Cookies.set("auth-token", data.token, { expires: 7 }); // expires in 7 days

            set({
              user: data.user,
              token: data.token,
              isAuthenticated: true,
              isLoading: false,
            });

            return { success: true };
          } else {
            const error = await response.json();
            set({ isLoading: false });
            return {
              success: false,
              message: error.message || "เกิดข้อผิดพลาดในการเข้าสู่ระบบ",
            };
          }
        } catch {
          // Fallback for development - simulate successful login
          if (username === "admin" && password === "password") {
            const mockUser = {
              id: "1",
              username: "admin",
              email: "admin@example.com",
              role: "admin",
            };

            // Set token in cookies for middleware
            Cookies.set("auth-token", "mock-jwt-token", { expires: 7 }); // expires in 7 days

            set({
              user: mockUser,
              token: "mock-jwt-token",
              isAuthenticated: true,
              isLoading: false,
            });

            return { success: true };
          }

          set({ isLoading: false });
          return {
            success: false,
            message: "Username หรือ password ไม่ถูกต้อง กรุณาระบุใหม่คะ",
          };
        }
      },

      logout: () => {
        // Remove token from cookies
        Cookies.remove("auth-token");

        set({
          user: null,
          token: null,
          isAuthenticated: false,
          isLoading: false,
        });
      },

      setUser: (user: User) => set({ user }),
      setToken: (token: string) => set({ token }),

      checkAuth: () => {
        const token = Cookies.get("auth-token");
        if (token) {
          // If we have a token in cookies but not in state, restore it
          const currentState = _get();
          if (!currentState.isAuthenticated && token === "mock-jwt-token") {
            // Restore mock user for development
            const mockUser = {
              id: "1",
              username: "admin",
              email: "admin@example.com",
              role: "admin",
            };

            set({
              user: mockUser,
              token: token,
              isAuthenticated: true,
              isLoading: false,
            });
          }
        } else {
          // No token in cookies, clear state
          set({
            user: null,
            token: null,
            isAuthenticated: false,
            isLoading: false,
          });
        }
      },
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({
        user: state.user,
        token: state.token,
        isAuthenticated: state.isAuthenticated,
      }),
    },
  ),
);
