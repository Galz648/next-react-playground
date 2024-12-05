'use client';

import Image from "next/image";
import Script from "next/script";
import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <div className="flex flex-row h-screen">
      <div className="pane w-1/2" id="left-pane">
        <div id="container" className="p-4">
          <p>left pane</p>
          <textarea
            value={text}
            onChange={handleTextChange}
            className="w-full h-64 p-2 border rounded"
            placeholder="Type something..."
          />
        </div>
      </div>
      <div className="pane w-1/2" id="right-pane">
        <div id="content" className="p-4">
          <p>right pane</p>
          <textarea
            value={text}
            onChange={handleTextChange}
            className="w-full h-64 p-2 border rounded"
            placeholder="Type something..."
          />
        </div>
      </div>

      <Script
        src="//unpkg.com/mathlive"
        strategy="afterInteractive"
      />
      {/* <Script
        strategy="afterInteractive"
        type="module"
        dangerouslySetInnerHTML={{
          __html: `
            import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";
            document.getElementById('content').innerHTML =
              marked.parse('# Marked in browser\\n\\nRendered by **marked**.');
          `
        }}
      /> */}
      {/* <Script src="src/monaco/monaco.ts" type="module" />
      <Script src="src/editor_share.ts" type="module" />
      <Script src="src/state_bridge.ts" type="module" />
      <Script src="src/encoder.ts" type="module" />
      <link rel="stylesheet" href="public/style.css" /> */}
    </div>
  );
}
