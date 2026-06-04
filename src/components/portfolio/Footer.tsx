import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 mt-20">
      <div className="mx-auto max-w-6xl px-4 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div>© {new Date().getFullYear()} Sakshi Shetty. All rights reserved.</div>
        <div className="flex items-center gap-1.5">
          Designed and Developed by <span className="text-gradient font-medium">Sakshi Shetty</span>
          <Heart size={12} className="text-accent ml-1" />
        </div>
      </div>
    </footer>
  );
}
