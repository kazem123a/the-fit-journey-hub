
import { useLocation, useNavigate } from "react-router-dom";
import { Home, Flame, Book, ShoppingCart, User } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const navItems = [
  {
    label: "الرئيسية",
    to: "/",
    icon: Home,
  },
  {
    label: "خطة التمرين",
    to: "/programs",
    icon: Flame,
  },
  {
    label: "المقالات",
    to: "/blog",
    icon: Book,
  },
  {
    label: "المتجر",
    to: "/products",
    icon: ShoppingCart,
  },
  {
    label: "حسابي",
    to: "/about",
    icon: User,
  },
];

export default function BottomNav() {
  const isMobile = useIsMobile();
  const location = useLocation();
  const navigate = useNavigate();

  if (!isMobile) return null;

  return (
    <nav
      className="fixed bottom-0 inset-x-0 z-30 bg-white/90 backdrop-blur-lg border-t border-gray-200 shadow-[0_-2px_10px_0_rgba(0,0,0,0.04)] md:hidden"
      dir="rtl"
    >
      <ul className="flex justify-around items-center gap-1 py-1">
        {navItems.map((item) => {
          const active = location.pathname === item.to ||
            (item.to === "/" && location.pathname === "/");
          const Icon = item.icon;
          return (
            <li key={item.to} className="flex-1">
              <button
                onClick={() => navigate(item.to)}
                className={`
                  flex flex-col items-center w-full py-1 group transition
                  ${active ? "text-fitness-purple" : "text-gray-500"}
                `}
                aria-label={item.label}
              >
                <Icon
                  size={26}
                  className={`mb-0.5 transition ${
                    active ? "text-fitness-purple" : "group-hover:text-fitness-purple/80"
                  }`}
                  strokeWidth={active ? 2.5 : 2}
                />
                <span className="text-xs font-medium">{item.label}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
