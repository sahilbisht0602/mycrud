"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Profile from "../../components/profile";

const UserProfile = () => {
  const searchParams = useSearchParams();
  const userid = searchParams.get("userid");
  const { data: session } = useSession();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const res = await fetch(`/api/users/${userid}/posts`);
      const data = await res.json();
      setPosts(data);
      console.log(data);
    };

    if (session?.user?.id) {
      fetchPost();
    }
  }, [session]);
  return (
    <Profile
      name={`${posts[0]?.creator.username || ""}`}
      desc={`Welcome to ${posts[0]?.creator.username} personalized profile page`}
      data={posts}
      handleEdit={() => {}}
      handleDelete={() => {}}
    />
  );
};

export default UserProfile;
