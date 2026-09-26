/* ==========================================================================
   Ministry Books Terminology — JSX loader (framework-free)
   Fetches each listed file, transpiles it with Babel Standalone's JS API
   (explicit "classic" runtime — plain React.createElement calls using the
   global `React` from the CDN script, no import resolution needed), and
   evaluates it at global scope in order, so later files can reference
   components/functions defined by earlier ones — same mental model as a
   classic sequence of <script> tags.
   ========================================================================== */

async function loadBabelScripts(urls) {
  for (const url of urls) {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Failed to load ${url}: ${res.status}`);
    const source = await res.text();
    const { code } = Babel.transform(source, {
      presets: [["react", { runtime: "classic" }]],
      filename: url,
    });
    // (0, eval) runs in global scope, so top-level function/const
    // declarations become visible to files loaded after this one.
    (0, eval)(code);
  }
}
