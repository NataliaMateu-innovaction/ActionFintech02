export default {
  async fetch(request, env) {
    const requestUrl = new URL(request.url);
    const socialRoutes = {
      "/soluciones/creditos-digitales": "/soluciones/creditos-digitales/index.html",
      "/soluciones/creditos-digitales/": "/soluciones/creditos-digitales/index.html",
    };

    if (["GET", "HEAD"].includes(request.method) && socialRoutes[requestUrl.pathname]) {
      const socialUrl = new URL(request.url);
      socialUrl.pathname = socialRoutes[requestUrl.pathname];
      socialUrl.search = "";
      const socialResponse = await env.ASSETS.fetch(new Request(socialUrl, request));
      if (socialResponse.status !== 404) return socialResponse;
    }

    const response = await env.ASSETS.fetch(request);
    const acceptsHtml = request.headers.get("accept")?.includes("text/html");

    if (response.status !== 404 || !acceptsHtml || !["GET", "HEAD"].includes(request.method)) {
      return response;
    }

    const indexUrl = new URL(request.url);
    indexUrl.pathname = "/index.html";
    indexUrl.search = "";
    return env.ASSETS.fetch(new Request(indexUrl, request));
  },
};
