import * as React from 'react';

import {
  Card,
  CardContent,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui';

import IMG1 from './image/1.webp';
import IMG2 from './image/2.png';
import IMG3 from './image/3.jpg';
import IMG4 from './image/4.webp';
import Image from 'next/image';

function Banner() {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {[IMG1, IMG2, IMG3, IMG4].map((image, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="relative flex items-center justify-center aspect-square h-[400px] w-full p-0">
                  <Image
                    src={image}
                    alt="banner"
                    fill
                    className="object-cover"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default Banner;
