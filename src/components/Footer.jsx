import { ZapIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const Footer = () => {
  return (
    <footer className="border-t bg-background/80 backdrop-blur-sm">
      {/* Top border glow*/}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="p-1 bg-primary/10 rounded">
                <ZapIcon className="w-4 h-4 text-primary" />
              </div>
              <span className="text-xl font-bold font-mono">
                Gym
                <span className="text-primary">Assistant</span>.AI
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Made by Pioter. All rights
              reserved.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-22 md:gap-x-12 gap-y-2 text-sm">
            <Link
              href="/about"
              className="text-muted-foreground hover:text-primary transition-colors"
            >About</Link>
            <Link
              href="/terms"
              className="text-muted-foreground hover:text-primary transition-colors"
            >Terms</Link>
            <Link
              href="/privacy"
              className="text-muted-foreground hover:text-primary transition-colors"
            >Privacy</Link>
            <Link
              href="/contact"
              className="text-muted-foreground hover:text-primary transition-colors"
            >Contact</Link>
            <Link
              href="/blog"
              className="text-muted-foreground hover:text-primary transition-colors"
            >Blog</Link>
            <Link
              href="/help"
              className="text-muted-foreground hover:text-primary transition-colors"
            >Help</Link>
          </div>
          {/* Status */}
          <div className='flex items-center gap-2 px-3 py-2 border-border rounded-md bg-background/50'>
            <div className='w-2 h-2 rounded-full bg-green-500'/>
            <span className='text-sm font-mono'>System Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer