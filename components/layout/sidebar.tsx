import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { BookmarkIcon, Hash, Users } from "lucide-react";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  return (
    <div className={cn("space-y-4", className)}>
      <div className="overflow-hidden rounded-lg border bg-background">
        <div className="relative h-24 bg-gradient-to-r from-blue-600 to-blue-400">
          <Avatar className="absolute -bottom-6 left-4 h-16 w-16 border-4 border-background">
            <AvatarImage src="/placeholder-user.jpg" alt="User" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>
        <div className="p-4 pt-8">
          <h2 className="font-semibold">John Doe</h2>
          <p className="text-sm text-muted-foreground">
            Software Engineer at Company
          </p>
        </div>
        <Separator />
        <div className="p-4">
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Profile views</span>
              <span className="font-medium">142</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Post impressions</span>
              <span className="font-medium">1,234</span>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-lg border bg-background">
        <div className="p-4">
          <h3 className="font-semibold mb-2">My Items</h3>
          <div className="space-y-2">
            <Button variant="ghost" className="w-full justify-start">
              <BookmarkIcon className="mr-2 h-4 w-4" />
              Saved posts
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Hash className="mr-2 h-4 w-4" />
              Hashtags
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Users className="mr-2 h-4 w-4" />
              Groups
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}