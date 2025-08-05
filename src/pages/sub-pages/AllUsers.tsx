// import { useToast } from "@/components/ui/use-toast";
import Loader from "@/components/Loader/loader";
import UserCard from "@/components/UserCard/usercard";

import { useState } from "react";
// import { useGetUsers } from "@/lib/react-query/queries";

const AllUsers = () => {
  // const { toast } = useToast();

  // const { data: creators, isLoading, isError: isErrorCreators } = useGetUsers();

  // if (isErrorCreators) {
  //   toast({ title: "Something went wrong." });

  //   return;
  // }
  const [isLoading, setIsLoading] = useState(false)

  return (
    <div className="common-container">
      <div className="user-container">
        <h2 className="h3-bold md:h2-bold text-left w-full">All Users</h2>
        {isLoading ? (
          <Loader />
        ) : (
          <ul className="user-grid">
            {[
              { $id: "1", name: "Alice", email: "alice@example.com" },
              { $id: "2", name: "Bob", email: "bob@example.com" },
              { $id: "3", name: "Charlie", email: "charlie@example.com" },
              { $id: "1", name: "Alice", email: "alice@example.com" },
              { $id: "2", name: "Bob", email: "bob@example.com" },
              { $id: "3", name: "Charlie", email: "charlie@example.com" }
            ].map((creator) => (
              <li key={creator.$id} className="flex-1 min-w-[200px] w-full">
                <UserCard user={creator} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AllUsers;
