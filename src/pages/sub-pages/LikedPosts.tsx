import Loader from "@/components/Loader/loader";
import GridPostList from "@/components/GridPostList/gridpost";
// import { useGetCurrentUser } from "@/lib/react-query/queries";

const LikedPosts = () => {
  // Sample data for now
  const currentUser = {
    liked: [
      {
        id: "1",
        title: "Sample Post 1",
        image: "https://via.placeholder.com/150",
        stats: { likes: 10, comments: 2 }
      },
      {
        id: "2",
        title: "Sample Post 2",
        image: "https://via.placeholder.com/150",
        stats: { likes: 5, comments: 1 }
      }
    ]
  };

  if (!currentUser)
    return (
      <div className="flex-center w-full h-full">
        <Loader />
      </div>
    );

  return (
    <>
      {currentUser.liked.length === 0 && (
        <p className="text-light-4">No liked posts</p>
      )}

      <GridPostList posts={currentUser.liked} showStats={false} />
    </>
  );
};

export default LikedPosts;
