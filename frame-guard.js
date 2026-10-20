// Anti-framing: GitHub Pages can't send X-Frame-Options or CSP frame-ancestors, so break out of any frame.
if (window.top !== window.self) { try { window.top.location.replace(window.location.href); } catch (e) { document.documentElement.hidden = true; } }
