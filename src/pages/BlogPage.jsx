import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const BlogPage = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    let url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);
  return (
    <div>
      {post.map((post) => (
        <Link key={post.id} to={`/posts/${post.id}`}>
          {post.title}
        </Link>
      ))}
    </div>
  );
};

export default BlogPage;
