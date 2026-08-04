// GitHub Pages serves 404.html for any unknown path. Copying index.html to
// 404.html lets the SPA (React Router) handle deep links and refreshes
// instead of showing GitHub's default 404.
import { copyFileSync } from "node:fs";

copyFileSync("dist/index.html", "dist/404.html");
console.log("Created dist/404.html (SPA fallback)");
