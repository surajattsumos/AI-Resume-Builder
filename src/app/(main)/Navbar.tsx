"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { UserButton } from "@clerk/nextjs";
import { CreditCardIcon } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";



export default function Navbar() {

  const {theme} = useTheme();
  return (
    <header className="shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center gap-3">
        <div className="flex items-center gap-2">
          <Link href="/resumes" className="flex items-center gap-2">
            <Image src={logo} alt="AI Resume Builder" width={35} height={35} className="rounded-full"/>
          </Link>
          <span className="text-xl font-bold tracking-tight">AI Resume Builder</span>
        </div>
        
        <div className="ml-auto flex items-center gap-3">
          <ThemeToggle />
          <UserButton 
            appearance={{ baseTheme: theme === "dark" ? dark : undefined, elements: {avatarBox: "w-35 h-35"}}}
          >
            <UserButton.MenuItems>
              <UserButton.Link label="Billing" href="/billing" labelIcon={<CreditCardIcon className="w-4 h-4" />} />
            </UserButton.MenuItems>
          </UserButton> 
        </div>
      </div>
    </header>
  );
}