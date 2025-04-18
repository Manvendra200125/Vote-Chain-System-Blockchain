
import React from "react";
import { Link } from "react-router-dom";
import { 
  BarChart3, 
  Home, 
  HelpCircle,
  Menu,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import ConnectWallet from "./ConnectWallet";

interface NavItem {
  label: string;
  icon: React.ElementType;
  href: string;
}

const navItems: NavItem[] = [
  {
    label: "Home",
    icon: Home,
    href: "/"
  },
  {
    label: "Elections",
    icon: BarChart3,
    href: "/elections"
  },
  {
    label: "Help",
    icon: HelpCircle,
    href: "/help"
  }
];

const Navbar: React.FC = () => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="flex justify-between items-center py-4 px-6 border-b">
      <div className="flex items-center">
        <Link to="/" className="flex items-center">
          <div className="h-8 w-8 rounded-md bg-vote-gradient flex items-center justify-center mr-2">
            <span className="text-white font-bold">VC</span>
          </div>
          <span className="font-bold text-xl hidden md:block text-vote-gradient">VoteChain</span>
        </Link>
      </div>

      {!isMobile ? (
        <div className="flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="flex items-center text-gray-600 hover:text-vote-blue transition-colors"
            >
              <item.icon className="h-4 w-4 mr-2" />
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      ) : (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="flex items-center text-gray-600 hover:text-vote-blue transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="h-5 w-5 mr-3" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      )}

      <ConnectWallet />
    </nav>
  );
};

export default Navbar;
