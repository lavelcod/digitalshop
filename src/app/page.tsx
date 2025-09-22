import Banner from '@/components/banner';
import Welcome from '@/components/Welcome';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Banner />
      <Welcome />
    </div>
  );
}
