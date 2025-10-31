import React from "react";
import Link from "next/link";
import Image from "next/image";
import { APP_NAME } from "@/lib/constants";
import Menu from "./menu";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SearchIcon } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full border-b bg-background shadow-sm sticky top-0 z-50">
      <div className="wrapper flex-between flex-wrap gap-4 py-3">
        {/* LEFT: Logo */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2 ml-2">
            <Image
              src="/images/logo.svg"
              alt={`${APP_NAME} logo`}
              height={40}
              width={40}
              priority={true}
            />
            <span className="hidden sm:block font-bold text-xl tracking-tight">
              {APP_NAME}
            </span>
          </Link>
        </div>

        {/* CENTER: Search Bar */}
        <div className="flex-1 max-w-2xl w-full mx-auto">
          <form
            action="/search"
            method="GET"
            className="flex flex-col sm:flex-row items-center gap-2 w-full"
          >
            <div className="relative flex-1 w-full">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Search for products, categories, brands..."
                name="q"
                className="pl-10 pr-4 py-3 sm:py-5 text-base w-full"
              />
            </div>
            <Button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 sm:py-5 text-base flex justify-center items-center gap-2"
            >
              <SearchIcon className="w-5 h-5" />
              <span className="hidden sm:inline">Search</span>
            </Button>
          </form>
        </div>

        {/* RIGHT: Menu */}
        <div className="flex items-center">
          <Menu />
        </div>
      </div>
    </header>
  );
};

export default Header;
