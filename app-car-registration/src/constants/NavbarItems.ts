import {
  Car,
  AlertTriangle,
  FileText,
  Users,
  Settings,
  Home,
  Database,
  ShieldAlert,
} from "lucide-react";

export type NavigationItem = {
  icon: React.ElementType;
  label: string;
  toggleNumber: string;
  badge?: string;
};

export const navigationItems: NavigationItem[] = [
  { icon: Home, label: "แดชบอร์ด", toggleNumber: "1" },
  { icon: Database, label: "ข้อมูลรถยนต์", toggleNumber: "2" },
  { icon: ShieldAlert, label: "การฝ่าฝืนกฎระเบียบ", toggleNumber: "3" },
];

export const fileItems: NavigationItem[] = [
  { icon: FileText, label: "จัดการไฟล์ PDF", toggleNumber: "6" },
];

export const quickActionItems: NavigationItem[] = [
  { icon: Car, label: "เพิ่มรถใหม่", toggleNumber: "4" },
  { icon: AlertTriangle, label: "เพิ่มการฝ่าฝืน", toggleNumber: "5" },
];

export const adminItems: NavigationItem[] = [
  { icon: Users, label: "จัดการผู้ใช้งาน", toggleNumber: "7" },
  {
    icon: Settings,
    label: "เปลี่ยนรหัสผ่าน",
    toggleNumber: "8",
  },
];
