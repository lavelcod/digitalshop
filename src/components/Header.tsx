import { MonitorSmartphone, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

function Header() {
  return (
    <div className="flex items-center justify-between gap-4 w-full">
      <div className="flex items-center gap-2 text-2xl text-bold text-black-800 cursor-pointer">
        <MonitorSmartphone />
        <Link href="/">Digital Shop</Link>
      </div>
      <div className="cursor-pointer">
        <ShoppingCart />
      </div>
    </div>
  );
}

export default Header;
