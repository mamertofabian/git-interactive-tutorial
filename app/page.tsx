import { Button } from '@/components/ui/button';
import { Terminal } from '@/components/terminal';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container py-10">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold">Introduction to Git</h1>
        <p className="text-xl text-muted-foreground">
          Learn the fundamentals of version control and why Git is essential for modern development.
        </p>

        <div className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Git Repository Timeline</h2>
            <div className="border rounded-lg p-6 bg-muted/10">
              {/* Timeline visualization will go here */}
            </div>
          </div>

          <Terminal className="my-8">
            <span className="text-green-400">$</span> git init<br />
            <span className="text-blue-400">Initialized empty Git repository in /project/.git/</span>
          </Terminal>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold flex items-center gap-2">
              Practice Challenge
              <span className="text-yellow-500">🏆</span>
            </h2>
            <p className="text-muted-foreground">
              Create your first Git repository and make an initial commit.
            </p>
            <Button asChild>
              <Link href="/challenges/first-repo">Start Challenge</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}