export const nextjsData = [
  {
    id: 1,
    question: "What is Next.js and why use it over plain React?",
    answer: (
      <div className="space-y-4 text-gray-700">
        <p>
          <b>Next.js</b> is a <b>React framework</b> created by{" "}
          <span className="text-blue-600 font-semibold">Vercel</span> that
          extends React with features like <b>server-side rendering (SSR)</b>,{" "}
          <b>static site generation (SSG)</b>, <b>API routes</b>, <b>routing</b>
          , and <b>performance optimizations</b>.
        </p>
        <h3 className="font-semibold text-lg">🔹 Why use Next.js?</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <b>File-based Routing</b> → No need for react-router, routing is
            automatic based on the folder structure.
          </li>
          <li>
            <b>Pre-rendering</b> → Pages can be server-rendered (SSR) or
            statically generated (SSG).
          </li>
          <li>
            <b>API Routes</b> → Build backend endpoints inside your app.
          </li>
          <li>
            <b>Optimized Performance</b> → Automatic code splitting, image
            optimization, and caching.
          </li>
          <li>
            <b>SEO Friendly</b> → SSR and SSG make apps indexable by search
            engines.
          </li>
        </ul>
        <h3 className="font-semibold text-lg">🔹 Example</h3>
        <pre className="bg-gray-100 p-2 rounded-md mt-1">{`export default function Home() {\n  return <h1>Hello Next.js!</h1>;\n}`}</pre>
        <p>
          Unlike plain React, this is auto-routed as <code>/</code>.
        </p>
        <p className="bg-blue-50 p-3 rounded-md border-l-4 border-blue-500">
          <b>✅ In short:</b> Next.js is chosen over plain React because it
          provides{" "}
          <b>SSR, SSG, routing, API routes, and performance optimizations</b>,
          making it production-ready out of the box.
        </p>
      </div>
    ),
  },
  {
    id: 2,
    question: "Difference between App Router and Pages Router?",
    answer: (
      <div className="space-y-4 text-gray-700">
        <p>
          Next.js provides two routing systems: <b>Pages Router</b> (old, in{" "}
          <code>pages/</code>) and <b>App Router</b> (new, in <code>app/</code>{" "}
          introduced in v13+).
        </p>
        <h3 className="font-semibold text-lg">🔹 Pages Router</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            Located in <code>pages/</code> directory.
          </li>
          <li>
            Client-Side navigation with <code>next/link</code>.
          </li>
          <li>Supports SSR, SSG, ISR.</li>
          <li>
            API routes live in <code>pages/api</code>.
          </li>
        </ul>
        <h3 className="font-semibold text-lg">🔹 App Router</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            Located in <code>app/</code> directory.
          </li>
          <li>
            Supports <b>React Server Components (RSC)</b>.
          </li>
          <li>Layouts and nested layouts built-in.</li>
          <li>
            New Route Handlers <code>app/api/...</code>.
          </li>
          <li>Supports streaming, Suspense, and Partial Prerendering.</li>
        </ul>
        <h3 className="font-semibold text-lg">🔹 Example</h3>
        <pre className="bg-gray-100 p-2 rounded-md mt-1">{`// App Router\napp/page.tsx → Home page\napp/dashboard/page.tsx → /dashboard`}</pre>
        <p className="bg-blue-50 p-3 rounded-md border-l-4 border-blue-500">
          <b>✅ In short:</b> Pages Router = legacy, App Router = modern with{" "}
          <b>RSC, layouts, streaming, and better data fetching</b>. App Router
          is the future.
        </p>
      </div>
    ),
  },
  {
    id: 3,
    question:
      "Explain Server Components vs Client Components. How do you decide which one to use?",
    answer: (
      <div className="space-y-4 text-gray-700">
        <p>
          <b>Server Components</b> run on the server and return serialized HTML
          to the client. They can&lsquo;t use browser-only APIs (like{" "}
          <code>window</code>), and they are great for data-fetching and
          reducing client bundle size. <b>Client Components</b> run in the
          browser and can use state, effects, event handlers, and browser APIs.
        </p>
        <h3 className="font-semibold text-lg">
          🔹 When to use Server Components
        </h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Data-heavy parts — fetch from DB or upstream APIs.</li>
          <li>Static content or parts that don&lsquo;t require interaction.</li>
          <li>
            To reduce JS sent to client (faster TTFB & lower bundle size).
          </li>
        </ul>
        <h3 className="font-semibold text-lg">
          🔹 When to use Client Components
        </h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Interactive UI — forms, animations, event handlers.</li>
          <li>
            Use of browser APIs, <code>useState</code>, <code>useEffect</code>.
          </li>
        </ul>
        <h3 className="font-semibold text-lg">🔹 Example</h3>
        <pre className="bg-gray-100 p-2 rounded-md">{`// Server component (default)
export default async function UserList() {
  const res = await fetch('https://api.example.com/users');
  const users = await res.json();
  return (<ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>);
}

// Client component
'use client'
import { useState } from 'react'
export default function Counter(){
  const [c,setC] = useState(0)
  return <button onClick={()=>setC(c+1)}>Count: {c}</button>
}`}</pre>
        <p className="bg-blue-50 p-3 rounded-md border-l-4 border-blue-500">
          <b>✅ In short:</b> Prefer Server Components for render-and-forget
          content and Client Components for interactivity. Mixing both yields
          optimal performance.
        </p>
      </div>
    ),
  },
  {
    id: 4,
    question: "What is the role of `use client` directive?",
    answer: (
      <div className="space-y-4 text-gray-700">
        <p>
          The <code>&lsquo;use client&lsquo;</code> directive marks a file as a{" "}
          <b>Client Component</b> in the App Router. It must appear at the top
          of the file and enables React hooks, browser APIs, and event handlers
          in that component.
        </p>
        <h3 className="font-semibold text-lg">🔹 Key points</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            Enables <code>useState</code>, <code>useEffect</code>, context, and
            event handlers.
          </li>
          <li>Increases client bundle size — only use where necessary.</li>
          <li>
            Server Components can import Client Components, but not vice versa.
          </li>
        </ul>
        <h3 className="font-semibold text-lg">🔹 Example</h3>
        <pre className="bg-gray-100 p-2 rounded-md">{`// client component
'use client'
import { useState } from 'react'
export default function Toggle(){
  const [on,setOn]=useState(false)
  return <button onClick={()=>setOn(!on)}>{on? 'ON':'OFF'}</button>
}`}</pre>
        <p className="bg-blue-50 p-3 rounded-md border-l-4 border-blue-500">
          <b>✅ In short:</b> Use <code>&lsquo;use client&lsquo;</code> to opt a
          component into client-side behavior; keep server-first design to
          minimize JS payload.
        </p>
      </div>
    ),
  },
  {
    id: 5,
    question:
      "What are Layouts in the App Router and how do they improve performance?",
    answer: (
      <div className="space-y-4 text-gray-700">
        <p>
          Layouts in the App Router are special components (placed in{" "}
          <code>app/layout.js</code> or nested{" "}
          <code>app/route/segment/layout.js</code>) that persist across
          navigation and avoid remounting. They enable shared UI (navbars,
          footers) and partial rendering.
        </p>
        <h3 className="font-semibold text-lg">🔹 Benefits</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Persist state across route changes (no re-mount).</li>
          <li>Faster navigation because only changing segments re-render.</li>
          <li>
            Integrates with streaming and Suspense for progressive loading.
          </li>
        </ul>
        <h3 className="font-semibold text-lg">🔹 Example</h3>
        <pre className="bg-gray-100 p-2 rounded-md">{`// app/layout.js
export default function RootLayout({children}){
  return (<html><body><Nav/> {children} <Footer/></body></html>)
}`}</pre>
        <p className="bg-blue-50 p-3 rounded-md border-l-4 border-blue-500">
          <b>✅ In short:</b> Layouts keep shared UI mounted and improve UX by
          reducing re-renders and enabling streaming content.
        </p>
      </div>
    ),
  },
  {
    id: 6,
    question: "What is the difference between SSR, SSG, ISR, and CSR?",
    answer: (
      <div className="space-y-4 text-gray-700">
        <p>These are rendering strategies:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <b>SSR (Server-Side Rendering):</b> Render on request on the server;
            good for dynamic data and SEO.
          </li>
          <li>
            <b>SSG (Static Site Generation):</b> Pre-render at build time; ideal
            for stable content and fastest delivery via CDN.
          </li>
          <li>
            <b>ISR (Incremental Static Regeneration):</b> Re-generate static
            pages after a TTL; combines SSG speed with freshness.
          </li>
          <li>
            <b>CSR (Client-Side Rendering):</b> Render in browser after JS
            loads; good for highly interactive apps but poorer SEO/TTFB.
          </li>
        </ul>
        <h3 className="font-semibold text-lg">🔹 Example</h3>
        <pre className="bg-gray-100 p-2 rounded-md">{`// SSG with revalidate (ISR-like)
export async function getStaticProps(){
  return { props: { ... }, revalidate: 60 }
}`}</pre>
        <p className="bg-blue-50 p-3 rounded-md border-l-4 border-blue-500">
          <b>✅ In short:</b> Choose SSR for per-request dynamic needs, SSG for
          stable content, ISR for balance, CSR for client-heavy interactions.
        </p>
      </div>
    ),
  },
  {
    id: 7,
    question:
      "What is React Server Components (RSC)? How is Next.js using it internally?",
    answer: (
      <div className="space-y-4 text-gray-700">
        <p>
          <b>React Server Components (RSC)</b> let you render components on the
          server and stream them to the client as serialized UI. They reduce
          client JS by keeping data-fetch and UI logic server-side where
          possible.
        </p>
        <h3 className="font-semibold text-lg">🔹 How Next.js uses RSC</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            App Router defaults to server-first components, rendering pages on
            server.
          </li>
          <li>
            Supports mixing server and client components for optimal bundles.
          </li>
          <li>
            Enables streaming HTML to client improving time-to-first-byte.
          </li>
        </ul>
        <h3 className="font-semibold text-lg">🔹 Example</h3>
        <pre className="bg-gray-100 p-2 rounded-md">{`// Server component (app/page.jsx)
export default async function Page(){
  const posts = await fetch('https://api.example.com/posts').then(r=>r.json())
  return (<div>{posts.map(p=> <article key={p.id}>{p.title}</article>)}</div>)
}`}</pre>
        <p className="bg-blue-50 p-3 rounded-md border-l-4 border-blue-500">
          <b>✅ In short:</b> RSCs let Next.js move logic to the server and ship
          less JS to the client, improving performance.
        </p>
      </div>
    ),
  },
  {
    id: 8,
    question:
      "What is the difference between pages/api routes and Route Handlers (app/api/.../route.ts)?",
    answer: (
      <div className="space-y-4 text-gray-700">
        <p>
          <b>pages/api</b> API routes are the legacy API endpoints that run as
          serverless functions. <b>Route Handlers</b> in the App Router (
          <code>app/api/.../route.ts</code>) are the new format with improved
          streaming, edge support, and request/response Web API parity.
        </p>
        <h3 className="font-semibold text-lg">🔹 Differences</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Route Handlers follow native Web Request/Response APIs.</li>
          <li>Better first-class support for Edge Runtime and streaming.</li>
          <li>
            pages/api are simpler for small apps but App Router route handlers
            are future-facing.
          </li>
        </ul>
        <h3 className="font-semibold text-lg">🔹 Example</h3>
        <pre className="bg-gray-100 p-2 rounded-md">{`// app/api/hello/route.ts
import { NextResponse } from 'next/server'
export async function GET(request){
  return NextResponse.json({hello:'world'})
}`}</pre>
        <p className="bg-blue-50 p-3 rounded-md border-l-4 border-blue-500">
          <b>✅ In short:</b> Prefer Route Handlers in new projects (App Router)
          for better runtime flexibility and edge support.
        </p>
      </div>
    ),
  },
  {
    id: 9,
    question:
      "Explain the new Data Fetching model in Next.js 14 (using fetch, revalidate, cache options).",
    answer: (
      <div className="space-y-4 text-gray-700">
        <p>
          Next.js 14 continues the App Router&lsquo;s approach where{" "}
          <b>native fetch</b> is used for server-side data fetching with options
          like <code>cache</code> and <code>revalidate</code> to control caching
          behavior.
        </p>
        <h3 className="font-semibold text-lg">🔹 Options</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <code>cache: &lsquo;force-cache&lsquo;</code> — Use cached response
            (SSG behavior).
          </li>
          <li>
            <code>cache: &lsquo;no-store&lsquo;</code> — Always fetch fresh data
            (SSR behavior).
          </li>
          <li>
            <code>revalidate: seconds</code> — Stale-while-revalidate style
            regeneration.
          </li>
        </ul>
        <h3 className="font-semibold text-lg">🔹 Example</h3>
        <pre className="bg-gray-100 p-2 rounded-md">{`const res = await fetch('https://api.example.com/data', { next: { revalidate: 60 } })
const data = await res.json()`}</pre>
        <p className="bg-blue-50 p-3 rounded-md border-l-4 border-blue-500">
          <b>✅ In short:</b> Use fetch with <code>next</code> options to
          declaratively control caching and revalidation on server components.
        </p>
      </div>
    ),
  },
  {
    id: 10,
    question:
      "Difference between fetch with cache: 'force-cache', cache: 'no-store', and revalidate: <time>?",
    answer: (
      <div className="space-y-4 text-gray-700">
        <p>These control how Next.js treats fetched data regarding caching:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <b>
              <code>cache: &lsquo;force-cache&lsquo;</code>
            </b>
            : Always serve cached result if available — ideal for SSG-like
            behavior.
          </li>
          <li>
            <b>
              <code>cache: &lsquo;no-store&lsquo;</code>
            </b>
            : Never cache — always fresh data; equivalent to SSR.
          </li>
          <li>
            <b>
              <code>revalidate: </code>
            </b>
            : Serve cached data but revalidate after seconds (ISR-like).
          </li>
        </ul>
        <h3 className="font-semibold text-lg">🔹 Example</h3>
        <pre className="bg-gray-100 p-2 rounded-md">{`await fetch(url, { next: { revalidate: 120 } }) // revalidate every 2 minutes
await fetch(url, { cache: 'no-store' }) // always fresh`}</pre>
        <p className="bg-blue-50 p-3 rounded-md border-l-4 border-blue-500">
          <b>✅ In short:</b> <code>&lsquo;force-cache&lsquo;</code> = fastest
          (static), <code>&lsquo;no-store&lsquo;</code> = freshest (dynamic),{" "}
          <code>revalidate</code> = balanced.
        </p>
      </div>
    ),
  },
  {
    id: 11,
    question:
      "How does Next.js handle caching at the framework level (static + dynamic rendering)?",
    answer: (
      <div className="space-y-4 text-gray-700">
        <p>
          Next.js uses declarative cache controls via fetch options and server
          functions: static pages are cached at the CDN edge, ISR enables
          background regeneration, and SSR pages can be cached selectively.
          Additionally, Next.js integrates with Vercel&lsquo;s edge CDN for
          global caching.
        </p>
        <h3 className="font-semibold text-lg">🔹 Layers of caching</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Build-time assets (SSG) → long-lived CDN cache.</li>
          <li>ISR → cached + background regeneration.</li>
          <li>Edge caching + stale-while-revalidate strategies.</li>
        </ul>
        <h3 className="font-semibold text-lg">🔹 Example</h3>
        <pre className="bg-gray-100 p-2 rounded-md">{`// server fetch with edge-friendly revalidate
await fetch(url, { next: { revalidate: 60 } })`}</pre>
        <p className="bg-blue-50 p-3 rounded-md border-l-4 border-blue-500">
          <b>✅ In short:</b> Next.js provides CDN-level caching primitives plus
          ISR and fetch cache controls to balance speed and freshness.
        </p>
      </div>
    ),
  },
  {
    id: 12,
    question:
      "What is Streaming and Suspense in Next.js? How does it improve TTFB?",
    answer: (
      <div className="space-y-4 text-gray-700">
        <p>
          <b>Streaming</b> sends parts of the HTML to the client as they become
          ready. <b>Suspense</b> lets you declaratively show fallback UI while
          async components load. Together they enable progressive rendering and
          reduce Time To First Byte by sending usable HTML early.
        </p>
        <h3 className="font-semibold text-lg">🔹 Benefits</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Faster perceived load by streaming critical UI first.</li>
          <li>Better UX with targeted fallbacks for slow sections.</li>
        </ul>
        <h3 className="font-semibold text-lg">🔹 Example</h3>
        <pre className="bg-gray-100 p-2 rounded-md">{`// Server component
export default function Page(){
  return (<div>
    <Suspense fallback={<div>Loading posts...</div>}><Posts/></Suspense>
  </div>)
}`}</pre>
        <p className="bg-blue-50 p-3 rounded-md border-l-4 border-blue-500">
          <b>✅ In short:</b> Streaming + Suspense let Next.js deliver useful
          HTML fast and progressively hydrate interactive parts, improving
          perceived performance.
        </p>
      </div>
    ),
  },
  {
    id: 13,
    question:
      "Explain Partial Prerendering (PPR) introduced in Next.js 14. How is it different from ISR?",
    answer: (
      <div className="space-y-4 text-gray-700">
        <p>
          <b>Partial Prerendering (PPR)</b> allows you to prerender parts of a
          page while leaving other parts dynamic or streamed. It&lsquo;s
          complementary to ISR: ISR regenerates full pages after TTL, while PPR
          enables mixing static and dynamic segments within a page.
        </p>
        <h3 className="font-semibold text-lg">🔹 When to use</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Large pages where only a small section changes frequently.</li>
          <li>
            Improve performance by pre-rendering stable parts and streaming
            dynamic ones.
          </li>
        </ul>
        <h3 className="font-semibold text-lg">🔹 Example</h3>
        <pre className="bg-gray-100 p-2 rounded-md">{`// app/page.jsx
export default function Page(){
  return (<div>
    <Header/>
    <DynamicPosts fetchPolicy={{cache:'no-store'}}/>
    <Footer/>
  </div>)
}`}</pre>
        <p className="bg-blue-50 p-3 rounded-md border-l-4 border-blue-500">
          <b>✅ In short:</b> PPR mixes static and dynamic rendering within the
          same page for fine-grained performance control; ISR is page-level
          regeneration.
        </p>
      </div>
    ),
  },
  {
    id: 14,
    question:
      "How routing works in App Router (nested routes, layouts, parallel routes, intercepting routes)?",
    answer: (
      <div className="space-y-4 text-gray-700">
        <p>
          App Router uses filesystem-based routing under <code>app/</code>. Each
          folder is a segment; <code>page.js</code> defines the UI,{" "}
          <code>layout.js</code> defines persistent UI. Nested folders create
          nested routes and layouts.
        </p>
        <h3 className="font-semibold text-lg">🔹 Parallel routes</h3>
        <p>
          Allow rendering multiple routes into named outlets concurrently
          (useful for sidebars or modals).
        </p>
        <h3 className="font-semibold text-lg">🔹 Intercepting routes</h3>
        <p>
          Allow navigation to be intercepted and render alternate UI (like
          modals) without leaving the parent layout.
        </p>
        <h3 className="font-semibold text-lg">🔹 Example</h3>
        <pre className="bg-gray-100 p-2 rounded-md">{`// Folder structure
app/
  layout.js
  page.js  -> /
  dashboard/
    layout.js -> /dashboard layout
    page.js`}</pre>
        <p className="bg-blue-50 p-3 rounded-md border-l-4 border-blue-500">
          <b>✅ In short:</b> App Router&lsquo;s nested folders map to nested
          routes & layouts; parallel and intercepting routes enable advanced UI
          patterns like persistent sidebars and modals.
        </p>
      </div>
    ),
  },
  {
    id: 15,
    question: "What are Parallel Routes and when would you use them?",
    answer: (
      <div className="space-y-4 text-gray-700">
        <p>
          Parallel Routes let you render multiple route segments into different
          slots simultaneously. They’re useful for apps with persistent UI
          regions like sidebars, tool panels, or flyouts that should update
          independently.
        </p>
        <h3 className="font-semibold text-lg">🔹 Use cases</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            Two-column editor where left column navigates documents and right
            column shows content.
          </li>
          <li>Dashboard with independent panels.</li>
        </ul>
        <h3 className="font-semibold text-lg">🔹 Example</h3>
        <pre className="bg-gray-100 p-2 rounded-md">{`// app/layout.js -> define slots
<main>
  <section>{children}</section>
  <aside>{children for @sidebar}</aside>
</main>`}</pre>
        <p className="bg-blue-50 p-3 rounded-md border-l-4 border-blue-500">
          <b>✅ In short:</b> Use Parallel Routes to compose independent UI
          regions that can navigate separately without full page transitions.
        </p>
      </div>
    ),
  },
  {
    id: 16,
    question:
      "What are Intercepting Routes (.), (..) and real-world use cases?",
    answer: (
      <div className="space-y-4 text-gray-700">
        <p>
          Intercepting Routes allow you to override navigation so that a URL can
          render a different UI context (e.g., open a modal over the current
          page) while preserving the parent route&lsquo;s layout.
        </p>
        <h3 className="font-semibold text-lg">🔹 Use cases</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Open image or form in a modal without leaving the list page.</li>
          <li>
            Deep links that should open overlays but still keep original route
            state.
          </li>
        </ul>
        <h3 className="font-semibold text-lg">🔹 Example</h3>
        <pre className="bg-gray-100 p-2 rounded-md">{`// Use (.) to intercept and render as modal over parent layout`}</pre>
        <p className="bg-blue-50 p-3 rounded-md border-l-4 border-blue-500">
          <b>✅ In short:</b> Intercepting routes provide UX patterns like
          modals and drawers that feel native to the route structure.
        </p>
      </div>
    ),
  },
  {
    id: 17,
    question:
      "How does Next.js handle dynamic routes with App Router ([id], [...slug])?",
    answer: (
      <div className="space-y-4 text-gray-700">
        <p>
          Dynamic segments are created using bracket syntax. <code>[id]</code>{" "}
          matches a single segment; <code>[...slug]</code> is a catch-all for
          multiple segments.
        </p>
        <h3 className="font-semibold text-lg">🔹 Example</h3>
        <pre className="bg-gray-100 p-2 rounded-md">{`app/posts/[id]/page.js -> matches /posts/123
app/docs/[...slug]/page.js -> matches /docs/a/b/c`}</pre>
        <p className="bg-blue-50 p-3 rounded-md border-l-4 border-blue-500">
          <b>✅ In short:</b> Use bracket syntax for dynamic routing; pair with
          generateStaticParams for SSG of dynamic routes.
        </p>
      </div>
    ),
  },
  {
    id: 18,
    question:
      "What styling solutions are commonly used in Next.js? (Tailwind, CSS Modules, Styled Components, etc.)",
    answer: (
      <div className="space-y-4 text-gray-700">
        <p>
          Next.js supports multiple styling approaches: <b>Tailwind CSS</b>,{" "}
          <b>CSS Modules</b>, <b>Styled Components</b>, <b>Emotion</b>, and
          global CSS. Choice depends on team preference and project needs.
        </p>
        <h3 className="font-semibold text-lg">🔹 Recommendations</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <b>Tailwind</b> — utility-first, fast to build UI.
          </li>
          <li>
            <b>CSS Modules</b> — scoped styles without runtime cost.
          </li>
          <li>
            <b>Styled Components / Emotion</b> — CSS-in-JS with dynamic props.
          </li>
        </ul>
        <h3 className="font-semibold text-lg">🔹 Example</h3>
        <pre className="bg-gray-100 p-2 rounded-md">{`// CSS Module
// styles.module.css
.title { font-size: 20px }
// component.jsx
import styles from './styles.module.css'
export default ()=> <h1 className={styles.title}>Hello</h1>`}</pre>
        <p className="bg-blue-50 p-3 rounded-md border-l-4 border-blue-500">
          <b>✅ In short:</b> Use the styling approach that fits the
          team&lsquo;s workflow; Tailwind + CSS Modules are widely adopted in
          Next.js apps.
        </p>
      </div>
    ),
  },
  {
    id: 19,
    question: "Difference between global CSS and CSS modules in Next.js?",
    answer: (
      <div className="space-y-4 text-gray-700">
        <p>
          <b>Global CSS</b> affects the entire app and must be imported once
          (usually in <code>app/layout.js</code> or <code>pages/_app.js</code>).{" "}
          <b>CSS Modules</b> are scoped locally to the component that imports
          them, preventing style collisions.
        </p>
        <h3 className="font-semibold text-lg">🔹 Example</h3>
        <pre className="bg-gray-100 p-2 rounded-md">{`// styles/globals.css -> global styles
// component.module.css -> scoped styles
import './styles/globals.css'
import styles from './component.module.css'`}</pre>
        <p className="bg-blue-50 p-3 rounded-md border-l-4 border-blue-500">
          <b>✅ In short:</b> Use global CSS for base styles and CSS Modules for
          component-level scoping to avoid conflicts.
        </p>
      </div>
    ),
  },
  {
    id: 20,
    question:
      "How do you optimize images using Next.js Image component (next/image)?",
    answer: (
      <div className="space-y-4 text-gray-700">
        <p>
          <code>next/image</code> optimizes images by resizing, serving WebP
          when supported, lazy-loading, and using responsive sizes. It reduces
          bandwidth and improves LCP.
        </p>
        <h3 className="font-semibold text-lg">🔹 Example</h3>
        <pre className="bg-gray-100 p-2 rounded-md">{`import Image from 'next/image'
export default function Hero(){
  return <Image src='/hero.jpg' width={1200} height={600} alt='hero' />
}`}</pre>
        <p className="bg-blue-50 p-3 rounded-md border-l-4 border-blue-500">
          <b>✅ In short:</b> Use <code>next/image</code> for automatic
          optimization, responsive images, and lazy loading to improve
          performance and Core Web Vitals.
        </p>
      </div>
    ),
  },
  {
    id: 21,
    question:
      "How does Next.js optimize performance compared to plain React (pre-rendering, bundling, code splitting)?",
    answer: (
      <div className="space-y-4 text-gray-700">
        <p>
          Next.js adds performance features like pre-rendering (SSG/SSR),
          automatic code splitting per route, image optimization, and smart
          caching, which plain React lacks out-of-the-box.
        </p>
        <h3 className="font-semibold text-lg">🔹 Techniques</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Per-route code-splitting reduces initial bundle.</li>
          <li>Pre-rendered HTML reduces TTFB and improves SEO.</li>
          <li>Edge CDN caching and ISR for fast global delivery.</li>
        </ul>
        <p className="bg-blue-50 p-3 rounded-md border-l-4 border-blue-500">
          <b>✅ In short:</b> Next.js provides many production optimizations
          that make React apps faster and more SEO-friendly without manual
          setup.
        </p>
      </div>
    ),
  },
  {
    id: 22,
    question: "What are Edge Functions in Next.js? When should you use them?",
    answer: (
      <div className="space-y-4 text-gray-700">
        <p>
          Edge Functions run at CDN edge locations with low latency and use the
          Edge Runtime (V8). They&lsquo;re ideal for personalization, auth, A/B
          tests, and rapid API responses near the user.
        </p>
        <h3 className="font-semibold text-lg">🔹 Use cases</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Localization and geographic personalization.</li>
          <li>Auth token validation and redirects at edge.</li>
          <li>Fast API endpoints requiring low latency.</li>
        </ul>
        <h3 className="font-semibold text-lg">🔹 Example</h3>
        <pre className="bg-gray-100 p-2 rounded-md">{`// app/api/edge/route.ts
export const runtime = 'edge'
export async function GET(){
  return new Response('edge')
}`}</pre>
        <p className="bg-blue-50 p-3 rounded-md border-l-4 border-blue-500">
          <b>✅ In short:</b> Use Edge Functions for latency-sensitive logic and
          personalization at the CDN edge.
        </p>
      </div>
    ),
  },
  {
    id: 23,
    question: "What is Middleware in Next.js? Give practical use cases.",
    answer: (
      <div className="space-y-4 text-gray-700">
        <p>
          Middleware runs before a request is completed and can rewrite,
          redirect, or modify requests based on headers, cookies, or IP.
          It&lsquo;s executed at the edge and useful for auth, redirects, A/B
          testing, and localization.
        </p>
        <h3 className="font-semibold text-lg">🔹 Use cases</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Redirect unauthenticated users to login.</li>
          <li>
            Serve localized content based on <code>Accept-Language</code>.
          </li>
          <li>Feature flags and A/B routing.</li>
        </ul>
        <h3 className="font-semibold text-lg">🔹 Example</h3>
        <pre className="bg-gray-100 p-2 rounded-md">{`// middleware.ts
import { NextResponse } from 'next/server'
export function middleware(req){
  const country = req.geo?.country || 'US'
  // rewrite or redirect logic
  return NextResponse.next()
}`}</pre>
        <p className="bg-blue-50 p-3 rounded-md border-l-4 border-blue-500">
          <b>✅ In short:</b> Middleware is your edge-level gatekeeper for
          routing, redirects, and request-based logic before it hits pages or
          APIs.
        </p>
      </div>
    ),
  },
  {
    id: 24,
    question:
      "How do you deploy a Next.js 14 app on Vercel vs other platforms (AWS, Netlify)?",
    answer: (
      <div className="space-y-4 text-gray-700">
        <p>
          Vercel is the native platform for Next.js with first-class support for
          App Router, Edge Functions, and automatic optimizations. Other
          platforms like AWS (via Amplify, Lambda@Edge, or CloudFront), Netlify,
          or Render can host Next.js but may require manual config for edge
          features.
        </p>
        <h3 className="font-semibold text-lg">🔹 Steps (Vercel)</h3>
        <ol className="list-decimal list-inside space-y-1">
          <li>Connect Git repo to Vercel.</li>
          <li>Vercel auto-detects Next.js and deploys.</li>
          <li>Configure environment variables and domains.</li>
        </ol>
        <h3 className="font-semibold text-lg">🔹 Other platforms</h3>
        <p>
          May need adapters or Docker-based deployments; Edge features vary by
          provider.
        </p>
        <p className="bg-blue-50 p-3 rounded-md border-l-4 border-blue-500">
          <b>✅ In short:</b> Use Vercel for easiest integration; use other
          providers if you need vendor-specific infrastructure but be ready for
          extra setup.
        </p>
      </div>
    ),
  },
  {
    id: 25,
    question: "How to handle environment variables securely in Next.js?",
    answer: (
      <div className="space-y-4 text-gray-700">
        <p>
          Use environment variables to store secrets and config. Next.js
          supports <code>.env.local</code>, <code>.env.production</code>, and
          you should avoid committing secrets to git. On deployment platforms,
          set environment variables via the dashboard or secret manager.
        </p>
        <h3 className="font-semibold text-lg">🔹 Best practices</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            Never expose server-only secrets to the client. Prefix
            client-exposed ones with <code>NEXT_PUBLIC_</code>.
          </li>
          <li>
            Use platform secret management (Vercel env vars, AWS Secret
            Manager).
          </li>
          <li>Rotate keys regularly and use least privilege.</li>
        </ul>
        <h3 className="font-semibold text-lg">🔹 Example</h3>
        <pre className="bg-gray-100 p-2 rounded-md">{`// server-side usage
const apiKey = process.env.MY_SECRET_KEY
// client-side only if NEXT_PUBLIC_ prefix used
const publicKey = process.env.NEXT_PUBLIC_ANALYTICS_KEY`}</pre>
        <p className="bg-blue-50 p-3 rounded-md border-l-4 border-blue-500">
          <b>✅ In short:</b> Keep secrets server-only, use env files for local
          dev and platform env settings for production, and avoid committing
          sensitive data.
        </p>
      </div>
    ),
  },
  {
    id: 26,
    question: "How do you debug hydration errors in Next.js App Router?",
    answer: (
      <div className="space-y-4 text-gray-700">
        <p>
          Hydration errors occur when server-rendered HTML doesn&lsquo;t match
          client-rendered HTML. Debugging involves finding nondeterministic
          outputs, Date/time rendering, random IDs, or mismatched conditional
          rendering between server and client.
        </p>
        <h3 className="font-semibold text-lg">🔹 Steps to debug</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Check console for mismatch warnings.</li>
          <li>
            Ensure server-only code doesn&lsquo;t run on client and vice-versa.
          </li>
          <li>
            Wrap client-only UI with <code>&lsquo;use client&lsquo;</code> and
            Suspense where appropriate.
          </li>
          <li>
            Avoid rendering non-deterministic values on server (random,
            Date.now()).
          </li>
        </ul>
        <h3 className="font-semibold text-lg">🔹 Example fix</h3>
        <pre className="bg-gray-100 p-2 rounded-md">{`// BAD (server+client mismatch)
<div>{new Date().toLocaleString()}</div>
// GOOD
'use client'
import {useEffect,useState} from 'react'
export default function Clock(){
  const [t, setT] = useState('')
  useEffect(()=> setT(new Date().toLocaleString()),[])
  return <div>{t}</div>
}`}</pre>
        <p className="bg-blue-50 p-3 rounded-md border-l-4 border-blue-500">
          <b>✅ In short:</b> Make server and client outputs deterministic and
          move browser-specific logic to client components.
        </p>
      </div>
    ),
  },
  {
    id: 27,
    question:
      "Why do you sometimes get 'Text content does not match server-rendered HTML'?",
    answer: (
      <div className="space-y-4 text-gray-700">
        <p>
          This message is a hydration mismatch error indicating the
          server-rendered HTML differs from what the client rendered. Causes
          include time-dependent rendering, random values, or
          environment-specific code executed during render.
        </p>
        <h3 className="font-semibold text-lg">🔹 Common causes</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            Using <code>Math.random()</code> or <code>Date</code> during render.
          </li>
          <li>Conditional rendering using browser-only flags.</li>
          <li>Data fetching differences between server and client.</li>
        </ul>
        <h3 className="font-semibold text-lg">🔹 Fixes</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Move non-deterministic UI into client components.</li>
          <li>Ensure consistent data during SSR and client hydration.</li>
        </ul>
        <p className="bg-blue-50 p-3 rounded-md border-l-4 border-blue-500">
          <b>✅ In short:</b> Make server and client render produce identical
          HTML for the same route, and push browser-only logic to client
          components.
        </p>
      </div>
    ),
  },
  {
    id: 28,
    question:
      "How do you optimize a Next.js app for SEO (metadata API, sitemap, robots.txt)?",
    answer: (
      <div className="space-y-4 text-gray-700">
        <p>
          Next.js provides a <code>metadata</code> API (in App Router) to set{" "}
          <code>title</code>, <code>description</code>, open graph and
          structured data. Additionally, generate sitemaps and robots.txt for
          search engines.
        </p>
        <h3 className="font-semibold text-lg">🔹 Steps</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Use server-side rendering for indexable content.</li>
          <li>
            Set per-page metadata with <code>export const metadata</code>.
          </li>
          <li>
            Generate sitemap.xml and robots.txt at build time or via API routes.
          </li>
        </ul>
        <h3 className="font-semibold text-lg">🔹 Example</h3>
        <pre className="bg-gray-100 p-2 rounded-md">{`export const metadata = { title: 'Docs', description: 'Documentation' }`}</pre>
        <p className="bg-blue-50 p-3 rounded-md border-l-4 border-blue-500">
          <b>✅ In short:</b> Use Next.js metadata API, server-rendered content,
          and sitemaps to ensure good SEO and crawability.
        </p>
      </div>
    ),
  },
  {
    id: 29,
    question:
      "What is the difference between next dev, next build, and next start?",
    answer: (
      <div className="space-y-4 text-gray-700">
        <p>These are the Next.js CLI commands for different environments:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <b>
              <code>next dev</code>
            </b>
            : Starts development server with HMR and fast refresh.
          </li>
          <li>
            <b>
              <code>next build</code>
            </b>
            : Produces optimized production build (compiles pages, generates
            static assets).
          </li>
          <li>
            <b>
              <code>next start</code>
            </b>
            : Starts the production server using the built assets.
          </li>
        </ul>
        <p className="bg-blue-50 p-3 rounded-md border-l-4 border-blue-500">
          <b>✅ In short:</b> Use <code>next dev</code> for development,{" "}
          <code>next build</code> to create production assets, and{" "}
          <code>next start</code> to run the app in production.
        </p>
      </div>
    ),
  },
  {
    id: 30,
    question:
      "If a page loads slow, how do you debug and improve its performance in Next.js?",
    answer: (
      <div className="space-y-4 text-gray-700">
        <p>
          Performance debugging involves measuring and identifying bottlenecks
          (network, rendering, JS execution). Use Lighthouse, Chrome DevTools,
          and Next.js telemetry to gather metrics.
        </p>
        <h3 className="font-semibold text-lg">🔹 Steps to improve</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Analyze LCP, TTFB, CLS and reduce large blocking JS.</li>
          <li>
            Use <code>next/image</code>, optimize fonts, and reduce
            render-blocking CSS.
          </li>
          <li>
            Move heavy logic to server (Server Components) or Edge Functions.
          </li>
          <li>Use caching and ISR for frequently requested pages.</li>
          <li>
            Profile client-side React rendering and memoize components when
            needed.
          </li>
        </ul>
        <h3 className="font-semibold text-lg">🔹 Example tools</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Chrome Lighthouse</li>
          <li>Web Vitals</li>
          <li>Next.js built-in performance profiler</li>
        </ul>
        <p className="bg-blue-50 p-3 rounded-md border-l-4 border-blue-500">
          <b>✅ In short:</b> Measure first, then optimize network, rendering,
          and JS. Use Next.js features (image optimization, Server Components,
          caching) to improve real-world performance.
        </p>
      </div>
    ),
  },
];
