import { useState } from "react";
import { useAuthStore } from "../../stores/auth-store";
import { useRouter } from "next/navigation";

export default function useAuth() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuthStore();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!username || !password) {
      setError("กรุณากรอก Username และ Password");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const result = await login(username, password);
      if (result.success) {
        router.push("/admin");
      } else {
        setError(
          result.message || "Username หรือ password ไม่ถูกต้อง กรุณาระบุใหม่",
        );
      }
    } catch {
      setError("เกิดข้อผิดพลาดในการเข้าสู่ระบบ");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    username,
    setUsername,
    password,
    setPassword,
    error,
    isLoading,
    showPassword,
    setShowPassword,
    login,
    router,
    handleSubmit,
  };
}
