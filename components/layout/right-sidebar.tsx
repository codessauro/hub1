import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface RightSidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function RightSidebar({ className }: RightSidebarProps) {
  return (
    <div className={cn("space-y-4", className)}>
      <div className="rounded-lg border bg-background">
        <div className="p-4">
          <h3 className="font-semibold mb-4">Add to your feed</h3>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-start gap-3">
                <Avatar>
                  <AvatarImage src={`/placeholder-user-${i}.jpg`} />
                  <AvatarFallback>U{i}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="font-medium">User Name {i}</p>
                  <p className="text-sm text-muted-foreground">
                    Software Engineer at Company {i}
                  </p>
                  <Button variant="outline" size="sm" className="mt-2">
                    + Follow
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-lg border bg-background">
        <div className="p-4">
          <h3 className="font-semibold mb-4">Latest News</h3>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="space-y-1">
                <h4 className="font-medium">Tech News Headline {i}</h4>
                <p className="text-sm text-muted-foreground">
                  {i}h ago • {i}00+ readers
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}