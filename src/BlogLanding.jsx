import { useEffect, useState } from "react";

export function BlogLanding() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Blog | Action Fintech";
    async function fetchBlogs() {
      try {
        const response = await fetch("https://0k6b557ppg.execute-api.us-west-2.amazonaws.com/DEV/api/news?pageId=0&tableName=fintech_content&itemsQuantity=12");
        if (response.ok) {
          const data = await response.json();
          if (data && data.length > 0 && data[0].contentArray) {
            setBlogs(data[0].contentArray);
          }
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchBlogs();
  }, []);

  return (
    <main className="blog-page">
      <section className="section blog-hero">
        <div className="section-heading reveal">
          <p className="eyebrow">Novedades y recursos</p>
          <h2>El blog de<br/><span>Action Fintech.</span></h2>
          <p className="product-description">Insights, noticias y recursos sobre infraestructura financiera y tecnología para escalar su operación.</p>
        </div>
      </section>
      <section className="section blog-grid-section">
        {loading ? (
          <div className="blog-loading">Cargando artículos...</div>
        ) : (
          <div className="blog-grid reveal is-visible">
            {blogs.map(blog => {
              const date = new Date(blog.created_at).toLocaleDateString("es-AR", { year: 'numeric', month: 'long', day: 'numeric' });
              return (
                <article key={blog.id} className="blog-card">
                  <a href={`/blog/${blog.id}`} className="blog-card-image">
                    {blog.image_url ? (
                      <img src={blog.image_url} alt={blog.title} loading="lazy" />
                    ) : (
                      <div className="blog-placeholder-image"></div>
                    )}
                  </a>
                  <div className="blog-card-content">
                    <p className="blog-meta"><time dateTime={blog.created_at}>{date}</time> <span>|</span> Action Fintech</p>
                    <h3><a href={`/blog/${blog.id}`}>{blog.title}</a></h3>
                    <p className="blog-headline">{blog.headline}</p>
                    <a href={`/blog/${blog.id}`} className="blog-read-more">Leer Más <span aria-hidden="true">→</span></a>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}
