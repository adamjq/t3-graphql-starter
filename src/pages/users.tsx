import { NextPage } from "next";
import { dehydrate, useQuery } from "react-query";

import { queryClient, GetUsers } from "../server/api";

export const getServerSideProps = async () => {
  await queryClient.prefetchQuery("users", () => GetUsers());
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    }
  }
}

const UserPage: NextPage = () => {
    const { data } = useQuery("users", () => GetUsers());

    return (
        <div>
            <h1>Users</h1>
            <div className="text-2xl">
                { data && data.users.map((user: any) => <div key={user.email}>{user.name} | {user.email}</div>) }
            </div>
        </div>
    );
};

export default UserPage;
