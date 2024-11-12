'use client';

import { cn } from '@/lib/utils';

interface TerminalProps {
  children: React.ReactNode;
  className?: string;
}

export function Terminal({ children, className }: TerminalProps) {
  return (
    <div className={cn('rounded-lg overflow-hidden', className)}>
      <div className="bg-zinc-800 px-4 py-2 flex gap-1.5">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
      </div>
      <div className="bg-zinc-900 p-4 text-zinc-100 font-mono text-sm">
        {children}
      </div>
    </div>
  );
}