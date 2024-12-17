"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Image, FileText, Video, Calendar } from "lucide-react";

export function CreatePost() {
  return (
    <Card className="p-4">
      <div className="flex gap-4">
        <Avatar>
          <AvatarImage src="/placeholder-user.jpg" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
        <Button
          variant="outline"
          className="w-full justify-start text-muted-foreground"
        >
          Start a post
        </Button>
      </div>
      <div className="mt-4 flex justify-between">
        <Button variant="ghost" size="sm" className="flex-1">
          <Image className="mr-2 h-4 w-4" />
          Photo
        </Button>
        <Button variant="ghost" size="sm" className="flex-1">
          <Video className="mr-2 h-4 w-4" />
          Video
        </Button>
        <Button variant="ghost" size="sm" className="flex-1">
          <Calendar className="mr-2 h-4 w-4" />
          Event
        </Button>
        <Button variant="ghost" size="sm" className="flex-1">
          <FileText className="mr-2 h-4 w-4" />
          Article
        </Button>
      </div>
    </Card>
  );
}