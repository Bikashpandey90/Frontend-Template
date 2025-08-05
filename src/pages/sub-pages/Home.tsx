
// import { useToast } from "@/components/ui/use-toast";
import Loader from "@/components/Loader/loader";
import UserCard from "@/components/UserCard/usercard";
import PostCard from "@/components/PostCard/postcard";

// import { useGetRecentPosts, useGetUsers } from "@/lib/react-query/queries";

const Home = () => {
  // const { toast } = useToast();

  const posts = {
    documents: [
      { $id: "101", title: "First Post", content: "Hello World!", author: "" },
      { $id: "102", title: "Second Post", content: "React is awesome!", author: "Bob" },
      { $id: "103", title: "Third Post", content: "TypeScript FTW!", author: "Charlie" },
    ],
  };
  const isPostLoading = false;
  const isErrorPosts = false;
  const creators = {
    documents: [
      { $id: "1", name: "Alice", avatar: "https://i.pravatar.cc/150?img=1" },
      { $id: "2", name: "Bob", avatar: "https://i.pravatar.cc/150?img=2" },
      { $id: "3", name: "Charlie", avatar: "https://i.pravatar.cc/150?img=3" },
      { $id: "1", name: "Alice", avatar: "https://i.pravatar.cc/150?img=1" },
      { $id: "2", name: "Bob", avatar: "https://i.pravatar.cc/150?img=2" },
      { $id: "3", name: "Charlie", avatar: "https://i.pravatar.cc/150?img=3" },
    ],
  };
  const isUserLoading = false;
  const isErrorCreators = false;

  if (isErrorPosts || isErrorCreators) {
    return (
      <div className="flex flex-1">
        <div className="home-container">
          <p className="body-medium text-light-1">Something bad happened</p>
        </div>
        <div className="home-creators">
          <p className="body-medium text-light-1">Something bad happened</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-1">
      <div className="home-container">
        <div className="home-posts">
          <h2 className="h3-bold md:h2-bold text-left w-full">Home Feed</h2>
          {isPostLoading && !posts ? (
            <Loader />
          ) : (
            <ul className="flex flex-col flex-1 gap-9 w-full ">
              {posts?.documents.map((post: any) => (
                <li key={post.$id} className="flex justify-center w-full">
                  <PostCard post={post} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="home-creators">
        <h3 className="h3-bold text-light-1">Top Creators</h3>
        {isUserLoading && !creators ? (
          <Loader />
        ) : (
          <ul className="grid 2xl:grid-cols-2 gap-6">
            {creators?.documents.map((creator: any) => (
              <li key={creator?.$id}>
                <UserCard user={creator} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Home;
