import { useEffect, useState } from "react";

export function BlogLanding() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);

  const fetchBlogs = async (pageId, append = false) => {
    try {
      if (append) setLoadingMore(true);
      else setLoading(true);
      
      const response = await fetch(`https://0k6b557ppg.execute-api.us-west-2.amazonaws.com/DEV/api/news?pageId=${pageId}&tableName=fintech_content&itemsQuantity=12`);
      if (response.ok) {
        const data = await response.json();
        if (data && data.length > 0 && data[0].contentArray) {
          const newBlogs = data[0].contentArray;
          if (append) {
            setBlogs(prev => [...prev, ...newBlogs]);
          } else {
            setBlogs(newBlogs);
          }
          if (newBlogs.length < 12) setHasMore(false);
        } else {
          setHasMore(false);
        }
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };

  useEffect(() => {
    document.title = "Blog | Action Fintech";
    fetchBlogs(0);
  }, []);

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchBlogs(nextPage, true);
  };

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
          <>
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
            
            {hasMore && (
              <div className="blog-load-more" style={{ textAlign: "center", marginTop: "60px" }}>
                <button 
                  onClick={handleLoadMore} 
                  className="button"
                  disabled={loadingMore}
                >
                  {loadingMore ? "Cargando..." : "Cargar más noticias"}
                </button>
              </div>
            )}
          </>
        )}
      </section>
    </main>
  );
}
