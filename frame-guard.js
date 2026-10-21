// Anti-framing: GitHub Pages can't send X-Frame-Options or CSP frame-ancestors. If this page is framed, hide it
// first (so nothing can be clickjacked even where a browser blocks the break-out silently), then try to break out.
if (window.top !== window.self) { document.documentElement.hidden = true; try { window.top.location.replace(window.location.href); } catch (e) {} }
