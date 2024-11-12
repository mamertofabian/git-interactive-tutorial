'use client';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Progress } from '@/components/ui/progress';
import { GitBranchIcon, BookIcon, CommandIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const modules = [
  {
    title: 'Module 1: Basics',
    icon: BookIcon,
    lessons: [
      { title: 'Introduction to Git', href: '/module-1/introduction' },
      { title: 'Setting Up Git', href: '/module-1/setup' },
    ],
  },
  {
    title: 'Module 2: Commands',
    icon: CommandIcon,
    lessons: [
      { title: 'Basic Commands', href: '/module-2/basic-commands' },
      { title: 'Advanced Usage', href: '/module-2/advanced-usage' },
    ],
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const progress = 25;

  return (
    <div className="hidden border-r bg-muted/40 md:block md:w-64 lg:w-72">
      <div className="flex h-14 items-center border-b px-4">
        <Link href="/" className="flex items-center space-x-2">
          <GitBranchIcon className="h-6 w-6" />
          <span className="font-bold">Git Tutorial</span>
        </Link>
      </div>
      <ScrollArea className="h-[calc(100vh-3.5rem-2.5rem)]">
        <div className="space-y-4 py-4">
          {modules.map((module, i) => (
            <div key={i} className="px-3 py-2">
              <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                {module.title}
              </h2>
              <div className="space-y-1">
                {module.lessons.map((lesson, j) => (
                  <Button
                    key={j}
                    variant={pathname === lesson.href ? 'secondary' : 'ghost'}
                    className={cn(
                      'w-full justify-start',
                      pathname === lesson.href && 'bg-muted'
                    )}
                    asChild
                  >
                    <Link href={lesson.href}>{lesson.title}</Link>
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
      <div className="sticky bottom-0 border-t bg-muted/40 p-4">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm font-medium">Progress</span>
          <span className="text-sm text-muted-foreground">{progress}%</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>
    </div>
  );
}