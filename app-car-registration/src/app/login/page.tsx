"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Car, Shield, Users, FileText, Eye, EyeOff } from "lucide-react";
import useAuth from "../../hooks/auth/useAuth";

export default function LoginPage() {
  const {
    username,
    setUsername,
    password,
    setPassword,
    error,
    isLoading,
    showPassword,
    setShowPassword,
    login,
    handleSubmit,
  } = useAuth();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-sky-50/50"></div> */}

      <div className="relative z-10 w-full max-w-md">
        <Card className="border border-gray-200 bg-white shadow-lg">
          <CardHeader className="space-y-4 pb-8 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-500">
              <Car className="h-8 w-8 text-white" />
            </div>
            <div>
              <CardTitle className="mb-2 text-3xl font-bold text-gray-900">
                เข้าสู่ระบบ
              </CardTitle>
              <p className="text-sm text-gray-600">ระบบลงทะเบียนรถยนต์</p>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <Alert
                  variant="destructive"
                  className="border-red-200 bg-red-50 text-red-700"
                >
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  ชื่อผู้ใช้
                </label>
                <div className="relative">
                  <Users className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
                  <Input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full border-gray-300 bg-white pl-10 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/20"
                    placeholder="กรอกชื่อผู้ใช้"
                    disabled={isLoading}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  รหัสผ่าน
                </label>
                <div className="relative">
                  <Shield className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
                  <Input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border-gray-300 bg-white pr-10 pl-10 text-gray-900 placeholder-gray-400 focus:border-red-500 focus:ring-red-500/20"
                    placeholder="กรอกรหัสผ่าน"
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute top-1/2 right-3 -translate-y-1/2 transform text-gray-400 transition-colors hover:text-gray-600"
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full transform rounded-lg bg-gradient-to-tr from-red-500 to-yellow-500 px-4 py-3 font-semibold text-white shadow-sm transition-all duration-200 hover:scale-[1.02] hover:from-red-600 hover:to-yellow-600 hover:shadow-md active:scale-[0.98]"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="mr-2 h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                    กำลังเข้าสู่ระบบ...
                  </div>
                ) : (
                  "เข้าสู่ระบบ"
                )}
              </Button>
            </form>

            {/* Features Preview */}
            {/* <div className="mt-8 border-t border-gray-200 pt-6">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="flex flex-col items-center space-y-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
                    <Car className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="text-xs text-gray-600">จัดการรถยนต์</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-100">
                    <FileText className="h-5 w-5 text-sky-600" />
                  </div>
                  <span className="text-xs text-gray-600">รายงานต่างๆ</span>
                </div>
              </div>
            </div> */}

            {/* Demo Info */}
            <div className="text-center">
              <p className="mb-2 text-xs text-gray-500">สำหรับการทดสอบ:</p>
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-3 text-xs text-gray-600">
                <div>
                  Username:{" "}
                  <span className="font-mono text-red-600">admin</span>
                </div>
                <div>
                  Password:{" "}
                  <span className="font-mono text-red-600">password</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
