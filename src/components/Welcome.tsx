import { MonitorSmartphone } from 'lucide-react';
import React from 'react';
import { Button } from './ui';
import Link from 'next/link';

function Welcome() {
  return (
    <div className="flex flex-col items-center gap-4 justify-center mt-6">
      <span>Welcome to</span>
      <div className="flex items-center gap-2">
        <MonitorSmartphone />
        <h1 className="text-2xl text-bold text-green-800">Digital Shop</h1>
      </div>
      <Button asChild className="mt-6">
        <Link href="/products">Go to Products</Link>
      </Button>
    </div>
  );
}

export default Welcome;
