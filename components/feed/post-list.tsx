"use client";

import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ThumbsUp, MessageSquare, Share2, Send } from "lucide-react";

const posts = [
  {
    id: 1,
    author: {
      name: "Sarah Johnson",
      role: "Investment Analyst at Hubprise",
      avatar: "/avatars/sarah.jpg",
    },
    content: `Exciting news! Our latest real estate investment opportunity in downtown Miami has just gone live. 🏢

    Key highlights:
    • Expected ROI: 12-15%
    • Minimum investment: $5,000
    • Term: 36 months
    
    #RealEstateInvesting #PassiveIncome #Investment`,
    timestamp: "2h ago",
    likes: 234,
    comments: 45,
  },
  {
    id: 2,
    author: {
      name: "David Chen",
      role: "Startup Founder",
      avatar: "/avatars/david.jpg",
    },
    content: `Thrilled to announce that our AI-powered fintech startup is now open for investment on Hubprise! 🚀

    We're revolutionizing the way people manage their investments using artificial intelligence and machine learning.

    Join us in shaping the future of finance!

    #StartupInvestment #FinTech #AI`,
    timestamp: "5h ago",
    likes: 567,
    comments: 89,
  },
];

export function PostList() {
  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <Card key={post.id} className="p-4">
          <div className="flex items-start gap-4">
            <Avatar>
              <AvatarImage src={post.author.avatar} alt={post.author.name} />
              <AvatarFallback>{post.author.name[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="space-y-1">
                <h4 className="font-semibold">{post.author.name}</h4>
                <p className="text-sm text-muted-foreground">
                  {post.author.role}
                </p>
                <p className="text-xs text-muted-foreground">{post.timestamp}</p>
              </div>
              <div className="mt-3 space-y-3">
                <p className="whitespace-pre-line">{post.content}</p>
              </div>
              <div className="mt-4 flex items-center justify-between border-t pt-4">
                <Button variant="ghost" size="sm">
                  <ThumbsUp className="mr-2 h-4 w-4" />
                  {post.likes}
                </Button>
                <Button variant="ghost" size="sm">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  {post.comments}
                </Button>
                <Button variant="ghost" size="sm">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
                <Button variant="ghost" size="sm">
                  <Send className="mr-2 h-4 w-4" />
                  Send
                </Button>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}