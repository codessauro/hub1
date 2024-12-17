import { CreatePost } from "./create-post";
import { PostList } from "./post-list";

export function Feed() {
  return (
    <div className="space-y-4 flex-1">
      <CreatePost />
      <PostList />
    </div>
  );
}