import { useEffect, useState } from "react";
import { marked } from "marked";

export function BlogPost({ blogId }) {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await fetch(`https://0k6b557ppg.execute-api.us-west-2.amazonaws.com/DEV/api/news/item?blogId=${blogId}&tableName=fintech_content`);
        if (response.ok) {
          const data = await response.json();
          const postData = Array.isArray(data) ? data[0] : data;
          setPost(postData);
          if (postData && postData.title) {
            document.title = `${postData.title} | Action Fintech`;
          }
        }
      } catch (error) {
        console.error("Error fetching post:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchPost();
  }, [blogId]);

  if (loading) {
    return <main className="blog-post-page"><div className="blog-loading">Cargando artículo...</div></main>;
  }

  if (!post) {
    return <main className="blog-post-page"><div className="blog-loading">Artículo no encontrado.</div></main>;
  }

  const date = post.created_at ? new Date(post.created_at).toLocaleDateString("es-AR", { year: 'numeric', month: 'long', day: 'numeric' }) : '';
  const parsedBody = post.body ? marked.parse(post.body) : '';

  return (
    <main className="blog-post-page">
      <section className="blog-post-hero">
        <div className="blog-post-header">
          <a className="product-back" href="/blog">← Volver al blog</a>
          <p className="blog-meta">{date} <span>|</span> Action Fintech</p>
          <h1>{post.title}</h1>
        </div>
      </section>
      <section className="blog-post-content">
        {post.image_url && (
          <div className="blog-post-image">
            <img src={post.image_url} alt={post.title} />
          </div>
        )}
        <div className="blog-post-body" dangerouslySetInnerHTML={{ __html: parsedBody }} />
      </section>
    </main>
  );
}
