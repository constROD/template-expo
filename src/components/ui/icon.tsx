import {
  Home,
  Settings,
  User,
  BarChart2,
  Info,
  Calendar,
  CircleUserRound,
  Clock,
  HandCoins,
  LogOut,
  ScrollText,
  Shield,
  Sword,
  Swords,
  Users,
  Wallet,
  Eye,
  EyeOff,
  AlignJustify,
  Edit,
  Search,
  Trash,
} from 'lucide-react-native';

const ICON_MAP = {
  Home,
  Settings,
  User,
  BarChart2,
  Wallet,
  HandCoins,
  CircleUserRound,
  Swords,
  Shield,
  Sword,
  LogOut,
  Calendar,
  Clock,
  ScrollText,
  Users,
  Eye,
  EyeOff,
  Info,
  AlignJustify,
  Edit,
  Search,
  Trash,
} as const;

export function Icon({
  name,
  color,
  size,
}: {
  name: keyof typeof ICON_MAP;
  color: string;
  size?: number;
}) {
  const LucideIcon = ICON_MAP[name];
  return LucideIcon ? <LucideIcon color={color} size={size} /> : null;
}
