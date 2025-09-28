export const reactData = [
  {
    id: 1,
    question: "What is React and why is it used?",
    answer: (
      <div className="space-y-4 text-gray-700">
        <p>
          <b>React</b> (also called <b>React.js</b> or <b>ReactJS</b>) is an{" "}
          <b>open-source JavaScript library</b> developed by{" "}
          <span className="text-blue-600 font-semibold">Meta (Facebook)</span>{" "}
          in 2013. It is mainly used for building{" "}
          <b>fast, interactive, and scalable user interfaces (UI)</b>,
          especially for <b>Single Page Applications (SPAs)</b>.
        </p>

        <h3 className="font-semibold text-lg">🔹 Key Features of React</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <b>Component-Based Architecture</b> → Breaks UI into small,
            reusable, and isolated pieces called components.
          </li>
          <li>
            <b>Virtual DOM</b> → Efficiently updates only the parts of the UI
            that change, improving performance.
          </li>
          <li>
            <b>Declarative UI</b> → With JSX, developers describe how the UI
            should look, and React handles updating the DOM.
          </li>
          <li>
            <b>Cross-Platform</b> → Supports both web apps and{" "}
            <span className="text-blue-600 font-semibold">React Native</span>{" "}
            for mobile.
          </li>
          <li>
            <b>Strong Ecosystem</b> → Backed by a huge community, libraries, and
            third-party integrations.
          </li>
        </ul>

        <h3 className="font-semibold text-lg">🔹 Example of JSX in React</h3>
        <pre className="bg-gray-100 p-2 rounded-md mt-1">{`function Welcome() {\n  return <h1>Hello, World!</h1>;\n}`}</pre>
        <p>
          - Here, <code>{"<h1>"}</code> is written inside JavaScript code. - JSX
          allows us to write <b>HTML-like syntax</b> inside JavaScript.
        </p>

        <h3 className="font-semibold text-lg">🔹 Why Companies Use React?</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <b>Speed & Performance</b> → Virtual DOM makes updates fast.
          </li>
          <li>
            <b>Scalability</b> → Component-based structure supports large apps.
          </li>
          <li>
            <b>Developer Productivity</b> → Reusable components save time and
            effort.
          </li>
          <li>
            <b>Community Support</b> → Strong ecosystem ensures long-term
            growth.
          </li>
        </ul>

        <p className="bg-blue-50 p-3 rounded-md border-l-4 border-blue-500">
          <b>✅ In short (for interviews):</b>
          <br />
          React is a <b>JavaScript library</b> for building{" "}
          <b>fast, reusable, and interactive UI components</b>. It’s used
          because it{" "}
          <b>improves performance, scalability, and developer efficiency</b>,
          making it the most popular choice for modern web applications.
        </p>
      </div>
    ),
  },
  {
    id: 2,
    question: "Difference between React and other frameworks like Angular/Vue.",
    answer: (
      <div className="space-y-4 text-gray-700">
        <p>
          When comparing <b>React</b> with other popular frameworks like{" "}
          <b>Angular</b> and <b>Vue</b>, each has its own strengths and
          trade-offs depending on project needs.
        </p>

        <h3 className="font-semibold text-lg">🔹 Core Philosophy</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <b>React</b> → A <b>UI library</b> focusing only on the view layer.
            Relies on third-party libraries for routing, state management, etc.
          </li>
          <li>
            <b>Angular</b> → A <b>full-fledged framework</b> with everything
            built in (routing, forms, HTTP, state management).
          </li>
          <li>
            <b>Vue</b> → A <b>progressive framework</b> that’s easy to learn,
            with features sitting between React’s flexibility and Angular’s
            structure.
          </li>
        </ul>

        <h3 className="font-semibold text-lg">🔹 Learning Curve</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <b>React</b> → Moderate. JSX and hooks require some time, but very
            flexible once learned.
          </li>
          <li>
            <b>Angular</b> → Steeper. Uses TypeScript, dependency injection, and
            has a lot of built-in concepts.
          </li>
          <li>
            <b>Vue</b> → Easiest to start with. Template syntax feels natural to
            beginners.
          </li>
        </ul>

        <h3 className="font-semibold text-lg">🔹 Performance</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <b>React</b> → Uses <b>Virtual DOM</b> for efficient updates. Great
            for dynamic, interactive UIs.
          </li>
          <li>
            <b>Angular</b> → Uses <b>Real DOM + Change Detection</b>. Powerful
            but heavier for large-scale apps.
          </li>
          <li>
            <b>Vue</b> → Uses <b>Virtual DOM</b> like React, optimized for
            simplicity and speed.
          </li>
        </ul>

        <h3 className="font-semibold text-lg">🔹 Ecosystem & Usage</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <b>React</b> → Backed by <b>Meta</b>, huge ecosystem, widely used in
            startups and big companies.
          </li>
          <li>
            <b>Angular</b> → Backed by <b>Google</b>, widely used in enterprise
            apps with complex requirements.
          </li>
          <li>
            <b>Vue</b> → Community-driven, very popular in Asia, strong adoption
            in small-to-medium projects.
          </li>
        </ul>

        <h3 className="font-semibold text-lg">🔹 Code Example</h3>
        <pre className="bg-gray-100 p-2 rounded-md mt-1">{`// React Component
function Hello() {
  return <h1>Hello World</h1>;
}

// Angular Component
@Component({
  selector: 'app-hello',
  template: '<h1>Hello World</h1>'
})
export class HelloComponent {}

// Vue Component
<template>
  <h1>Hello World</h1>
</template>
<script>
export default { name: "Hello" }
</script>`}</pre>

        <p className="bg-blue-50 p-3 rounded-md border-l-4 border-blue-500">
          <b>✅ In short (for interviews):</b>
          <br />- <b>React</b> = Flexible library (UI only, huge ecosystem). -{" "}
          <b>Angular</b> = Complete framework (enterprise-level, heavy). -{" "}
          <b>Vue</b> = Progressive, beginner-friendly, and lightweight.
        </p>
      </div>
    ),
  },
  {
    id: 3,
    question: "Components in React: functional vs. class components.",
    important: true,
    answer: (
      <div className="space-y-4 text-gray-700">
        <p>
          In <b>React</b>, a <b>component</b> is a{" "}
          <b>reusable building block</b> of the UI. Each component represents a
          part of the interface (like a button, form, or header) and can manage
          its own logic and state.
        </p>

        <h3 className="font-semibold text-lg">
          🔹 Types of Components in React
        </h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <b>Functional Components</b> → Written as JavaScript functions. They
            return JSX and use <b>React Hooks</b> for state & lifecycle methods.
          </li>
          <li>
            <b>Class Components</b> → ES6 classes that extend{" "}
            <code>React.Component</code>. They use <code>this.state</code> and
            lifecycle methods.
          </li>
        </ul>

        <h3 className="font-semibold text-lg">
          🔹 Example of Functional Component
        </h3>
        <pre className="bg-gray-100 p-2 rounded-md mt-1">{`function Greeting(props) {\n  return <h1>Hello, {props.name}!</h1>;\n}`}</pre>
        <p>
          ✅ Simple, concise, uses hooks (<code>useState</code>,{" "}
          <code>useEffect</code>, etc.) for state and lifecycle.
        </p>

        <h3 className="font-semibold text-lg">🔹 Example of Class Component</h3>
        <pre className="bg-gray-100 p-2 rounded-md mt-1">{`class Greeting extends React.Component {\n  render() {\n    return <h1>Hello, {this.props.name}!</h1>;\n  }\n}`}</pre>
        <p>
          ✅ Older style. Uses <code>this.props</code>, <code>this.state</code>,
          and lifecycle methods (<code>componentDidMount</code>, etc.).
        </p>

        <h3 className="font-semibold text-lg">
          🔹 Functional vs Class Components
        </h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <b>Syntax:</b> Functional = function, Class = ES6 class.
          </li>
          <li>
            <b>State Management:</b> Functional uses <code>useState</code>,
            Class uses <code>this.state</code>.
          </li>
          <li>
            <b>Lifecycle:</b> Functional uses hooks (<code>useEffect</code>),
            Class uses lifecycle methods (<code>componentDidMount</code>,{" "}
            <code>componentWillUnmount</code>).
          </li>
          <li>
            <b>Performance:</b> Functional components are generally lighter and
            preferred in modern React.
          </li>
          <li>
            <b>Readability:</b> Functional are shorter and easier to maintain.
          </li>
        </ul>

        <p className="bg-blue-50 p-3 rounded-md border-l-4 border-blue-500">
          <b>✅ In short (for interviews):</b>
          <br />A <b>component</b> is a reusable UI block. -{" "}
          <b>Functional Components</b> → Simple, use hooks, modern React
          standard. - <b>Class Components</b> → Older, use{" "}
          <code>this.state</code> and lifecycle methods.
        </p>
      </div>
    ),
  },
  {
    id: 4,
    question: "What is JSX and why is it used?",
    important: true,
    answer: (
      <div className="space-y-4 text-gray-700">
        <p>
          <b>JSX</b> (JavaScript XML) is a{" "}
          <b>syntax extension for JavaScript</b>
          used in React to describe what the UI should look like. It allows you
          to write HTML-like code directly inside JavaScript. Under the hood,
          JSX is not HTML – it’s syntactic sugar for{" "}
          <code>React.createElement(component, props, ...children)</code> calls.
        </p>

        <h3 className="font-semibold text-lg">🔹 How Babel Converts JSX</h3>
        <p>
          Babel transforms JSX like{" "}
          <code>{"<h1 className='title'>Hello</h1>"}</code>
          into{" "}
          <code>{`React.createElement("h1", { className: 'title' }, "Hello")`}</code>
          This allows the browser to understand it because JSX alone is not
          valid JavaScript.
        </p>

        <h3 className="font-semibold text-lg">
          🔹 React.createElement → React Element
        </h3>
        <p>
          <code>React.createElement</code> doesn’t create a real DOM node. It
          creates a <b>plain JavaScript object</b> called a React Element:
        </p>
        <pre className="bg-gray-100 p-2 rounded-md mt-1">{`{
  type: "h1",
  props: {
    className: "title",
    children: "Hello"
  }
}`}</pre>
        <p>This object is essentially a blueprint of the UI.</p>

        <h3 className="font-semibold text-lg">
          🔹 React Element → Virtual DOM
        </h3>
        <p>
          React builds a <b>Virtual DOM tree</b> in memory from React Elements.
          This tree is a lightweight representation of the UI:
        </p>
        <pre className="bg-gray-100 p-2 rounded-md mt-1">{`{
  type: "div",
  props: {
    children: [
      { type: "h1", props: { children: "Hello" } },
      { type: "p", props: { children: "World" } }
    ]
  }
}`}</pre>

        <h3 className="font-semibold text-lg">
          🔹 Diffing Algorithm (Reconciliation)
        </h3>
        <p>
          When state or props change, React doesn’t re-render the whole DOM. It:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Generates a new Virtual DOM tree.</li>
          <li>Compares it with the old Virtual DOM tree (diffing).</li>
          <li>Updates only the changed nodes in the real DOM.</li>
        </ul>
        <p>Key heuristics:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>If element type is the same, update attributes.</li>
          <li>If type differs, replace the node entirely.</li>
          <li>
            For lists, React uses <b>keys</b> to track changes efficiently.
          </li>
        </ul>

        <h3 className="font-semibold text-lg">🔹 Performance Benefits</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Minimizes expensive DOM manipulations.</li>
          <li>Batches updates efficiently.</li>
          <li>Makes UIs fast and predictable even when complex.</li>
        </ul>

        <h3 className="font-semibold text-lg">🔹 Flow Visualization</h3>
        <p>
          JSX → Babel → React.createElement → React Element → Virtual DOM →
          Diffing → Real DOM
        </p>

        <p className="bg-blue-50 p-3 rounded-md border-l-4 border-blue-500">
          <b>✅ In short:</b> JSX is syntactic sugar that makes UI code
          declarative. Babel compiles it to React Elements, which form the
          Virtual DOM. When data changes, React compares old and new Virtual DOM
          trees and updates only the necessary parts of the real DOM, ensuring
          high performance.
        </p>
      </div>
    ),
  },
  {
    id: 5,
    question: "Explain props vs. state; why copy state when updating?",
    important: true,
    answer: (
      <div className="space-y-4 text-gray-700">
        <p>
          In React, <b>props</b> and <b>state</b> are both used to manage data,
          but they serve different purposes.
        </p>

        <h3 className="font-semibold text-lg">🔹 Props</h3>
        <p>
          Props (short for properties) are <b>read-only inputs</b> passed from a
          parent component to a child component. They allow{" "}
          <b>data flow from parent → child</b> and cannot be changed by the
          child.
        </p>
        <pre className="bg-gray-100 p-2 rounded-md mt-1">{`<Profile username="Raza" />\n\nfunction Profile(props) {\n  return <h1>Hello, {props.username}</h1>;\n}`}</pre>

        <h3 className="font-semibold text-lg">🔹 State</h3>
        <p>
          State is a <b>mutable, local data store</b> inside a component.
          Updating state triggers a re-render of the component, making it useful
          for dynamic UIs.
        </p>
        <pre className="bg-gray-100 p-2 rounded-md mt-1">{`const [count, setCount] = useState(0);\n\n<button onClick={() => setCount(count + 1)}>Increment</button>`}</pre>

        <h3 className="font-semibold text-lg">
          🔹 Why Copy State When Updating?
        </h3>
        <p>
          React relies on <b>immutability</b> to detect changes. Modifying state
          directly may not trigger a re-render. Always create a new copy with
          updates.
        </p>
        <pre className="bg-gray-100 p-2 rounded-md mt-1">{`// ❌ Wrong\nstate.items.push(newItem);\nsetItems(state.items);\n\n// ✅ Correct\nsetItems([...items, newItem]);\n\n// ✅ Correct for objects\nsetUser({ ...user, name: "Raza" });`}</pre>

        <h3 className="font-semibold text-lg">🔹 Key Differences</h3>
        <table className="table-auto border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-2 py-1">Feature</th>
              <th className="border px-2 py-1">Props</th>
              <th className="border px-2 py-1">State</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-2 py-1">Ownership</td>
              <td className="border px-2 py-1">Parent component</td>
              <td className="border px-2 py-1">Own component</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">Mutability</td>
              <td className="border px-2 py-1">Read-only</td>
              <td className="border px-2 py-1">Mutable</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">Update Mechanism</td>
              <td className="border px-2 py-1">Cannot change directly</td>
              <td className="border px-2 py-1">useState / setState</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">Re-render</td>
              <td className="border px-2 py-1">
                Child re-renders if props change
              </td>
              <td className="border px-2 py-1">
                Component re-renders when state changes
              </td>
            </tr>
          </tbody>
        </table>

        <p className="bg-blue-50 p-3 rounded-md border-l-4 border-blue-500">
          <b>✅ In short:</b> Props are immutable inputs from parent components.
          State is mutable, local data. Always copy state when updating to
          ensure React detects changes and updates the UI efficiently.
        </p>
      </div>
    ),
  },
  {
    id: 6,
    question: "Virtual DOM: what is it, its working, benefits & downsides?",
    important: true,
    answer: (
      <div className="space-y-4 text-gray-700">
        <p>
          In React, the <b>Virtual DOM (VDOM)</b> is a{" "}
          <b>lightweight, in-memory representation of the real DOM</b>. It is a
          JavaScript object tree that mirrors the structure of the actual DOM,
          allowing React to update the UI efficiently.
        </p>

        <h3 className="font-semibold text-lg">🔹 How Virtual DOM Works</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <b>Initial Render:</b> React creates a Virtual DOM tree from React
            elements and stores it in memory.
          </li>
          <li>
            <b>State or Props Update:</b> When data changes, React creates a new
            Virtual DOM tree representing the updated UI.
          </li>
          <li>
            <b>Diffing Algorithm (Reconciliation):</b> React compares the new
            and previous Virtual DOM to find differences.
          </li>
          <li>
            <b>Minimal DOM Updates:</b> Only the changed real DOM nodes are
            updated, avoiding a full re-render.
          </li>
        </ul>

        <h3 className="font-semibold text-lg">🔹 Benefits of Virtual DOM</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>✅ Improves performance by updating only changed nodes.</li>
          <li>
            ✅ Makes UI predictable and consistent with state/props changes.
          </li>
          <li>✅ Enables cross-platform rendering (e.g., React Native).</li>
          <li>
            ✅ Simplifies development by letting React handle DOM updates.
          </li>
        </ul>

        <h3 className="font-semibold text-lg">🔹 Downsides of Virtual DOM</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>⚠️ Memory overhead from storing the Virtual DOM tree.</li>
          <li>
            ⚠️ Diffing adds computational cost for very large and frequent
            updates.
          </li>
          <li>
            ⚠️ Abstracts direct DOM control, which may be less efficient for
            simple static pages.
          </li>
        </ul>

        <h3 className="font-semibold text-lg">🔹 Example Flow</h3>
        <pre className="bg-gray-100 p-2 rounded-md mt-1">{`// Virtual DOM Flow
JSX → Babel → React.createElement → React Element → Virtual DOM → Diffing → Real DOM`}</pre>

        <p className="bg-blue-50 p-3 rounded-md border-l-4 border-blue-500">
          <b>✅ In short:</b> The Virtual DOM is a JavaScript representation of
          the real DOM. React uses it to efficiently detect changes and update
          only what is necessary, improving performance and ensuring a
          predictable UI.
        </p>
      </div>
    ),
  },
  {
    id: 7,
    question: "What are keys in React lists?",
    answer: (
      <div className="space-y-4 text-gray-700">
        <p>
          In React, <b>keys</b> are <b>unique identifiers</b> assigned to
          elements when rendering lists. They help React identify which items
          have changed, been added, or removed during updates.
        </p>

        <h3 className="font-semibold text-lg">🔹 Example of Keys</h3>
        <pre className="bg-gray-100 p-2 rounded-md mt-1">{`const items = ["Apple", "Banana", "Orange"];

<ul>
  {items.map((item, index) => (
    <li key={index}>{item}</li>
  ))}
</ul>`}</pre>
        <p>
          ✅ Here, <code>key=index</code> is used, but using array index is
          usually not recommended for dynamic lists.
        </p>

        <h3 className="font-semibold text-lg">🔹 How Keys Work</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            React compares <b>keys</b> during the reconciliation process to
            determine which items have changed.
          </li>
          <li>
            Elements with the same key are updated, while others remain
            unchanged.
          </li>
          <li>
            Without keys, React falls back to index-based reconciliation, which
            may cause unnecessary re-renders.
          </li>
        </ul>

        <h3 className="font-semibold text-lg">🔹 Performance Optimization</h3>
        <pre className="bg-gray-100 p-2 rounded-md mt-1">{`const todos = [
  { id: 1, task: "Learn React" },
  { id: 2, task: "Build Project" },
];

<ul>
  {todos.map(todo => (
    <li key={todo.id}>{todo.task}</li>
  ))}
</ul>`}</pre>
        <p>
          ✅ Using stable, unique IDs ensures React only updates what changed
          and preserves component state.
        </p>

        <h3 className="font-semibold text-lg">
          🔹 What Happens If You Don’t Add Keys
        </h3>
        <ul className="list-disc list-inside space-y-1">
          <li>React shows a warning in the console.</li>
          <li>Unnecessary re-renders of list items may occur.</li>
          <li>Child component state (like input values) may be lost.</li>
          <li>
            UI glitches can happen if items are reordered, added, or removed.
          </li>
        </ul>

        <h3 className="font-semibold text-lg">🔹 Best Practices</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Use stable, unique keys (like database IDs).</li>
          <li>Avoid using array index as key unless the list is static.</li>
          <li>
            Keys help minimize DOM operations and maintain component state.
          </li>
        </ul>

        <p className="bg-blue-50 p-3 rounded-md border-l-4 border-blue-500">
          <b>✅ In short:</b> Keys are unique identifiers for list elements in
          React. They allow efficient reconciliation, preserve state, and
          improve performance. Always use stable IDs and avoid indices for
          dynamic lists.
        </p>
      </div>
    ),
  },
  {
    id: 8,
    question: "Controlled vs uncontrolled components (forms).",
    important: true,
    answer: (
      <div className="space-y-4 text-gray-700">
        <p>
          In React, form inputs can be either <b>controlled</b> or{" "}
          <b>uncontrolled</b>, depending on whether React manages their state.
        </p>

        <h3 className="font-semibold text-lg">🔹 Controlled Components</h3>
        <p>
          Controlled components have their <b>value managed by React state</b>.
          Any change in the input triggers an <code>onChange</code> handler that
          updates the state. This allows React to always know the input value.
        </p>
        <pre className="bg-gray-100 p-2 rounded-md mt-1">{`function ControlledInput() {
  const [name, setName] = React.useState("");

  return (
    <input
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="Enter your name"
    />
  );
}`}</pre>

        <h3 className="font-semibold text-lg">🔹 Uncontrolled Components</h3>
        <p>
          Uncontrolled components let the <b>DOM manage the value</b>. React
          does not control the input; the value is accessed only when needed,
          typically using <code>ref</code>.
        </p>
        <pre className="bg-gray-100 p-2 rounded-md mt-1">{`function UncontrolledInput() {
  const inputRef = React.useRef();

  const handleSubmit = () => {
    alert("Input value: " + inputRef.current.value);
  };

  return (
    <div>
      <input type="text" ref={inputRef} placeholder="Enter your name" />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}`}</pre>

        <h3 className="font-semibold text-lg">🔹 Key Differences</h3>
        <table className="table-auto border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-2 py-1">Feature</th>
              <th className="border px-2 py-1">Controlled</th>
              <th className="border px-2 py-1">Uncontrolled</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-2 py-1">State</td>
              <td className="border px-2 py-1">Managed by React state</td>
              <td className="border px-2 py-1">Managed by DOM</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">Update</td>
              <td className="border px-2 py-1">onChange updates state</td>
              <td className="border px-2 py-1">Value accessed via ref</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">Predictability</td>
              <td className="border px-2 py-1">Fully predictable</td>
              <td className="border px-2 py-1">Less predictable</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">Complexity</td>
              <td className="border px-2 py-1">More code, more control</td>
              <td className="border px-2 py-1">Simpler, less control</td>
            </tr>
          </tbody>
        </table>

        <p className="bg-blue-50 p-3 rounded-md border-l-4 border-blue-500">
          <b>✅ In short:</b> Controlled components are managed by React state
          and are ideal for complex forms and validation. Uncontrolled
          components rely on the DOM and are suitable for simpler forms.
          Controlled = React in control, Uncontrolled = DOM in control.
        </p>
      </div>
    ),
  },
  {
    id: 9,
    question: "What is lifting state up?",
    answer: (
      <div className="space-y-4 text-gray-700">
        <p>
          In <b>React</b>, <b>Lifting State Up</b> means moving the{" "}
          <b>state from a child component to a common parent</b> so that
          multiple children can <b>share and synchronize</b> the same data. This
          prevents duplication and ensures that the UI stays consistent across
          components.
        </p>

        <h3 className="font-semibold text-lg">🔹 Why Lift State Up?</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <b>Single Source of Truth</b> → Data is stored in one place (the
            parent), making it easier to manage.
          </li>
          <li>
            <b>Synchronized Updates</b> → All child components update together
            when the state changes.
          </li>
          <li>
            Avoids <b>inconsistent or duplicate state</b> across components.
          </li>
        </ul>

        <h3 className="font-semibold text-lg">🔹 How It Works</h3>
        <ol className="list-decimal list-inside space-y-1">
          <li>Identify the data that needs to be shared.</li>
          <li>
            Move the state up to the <b>closest common parent</b>.
          </li>
          <li>
            Pass the state and an <b>updater function</b> down to children via
            props.
          </li>
        </ol>

        <h3 className="font-semibold text-lg">
          🔹 Example: Temperature Converter
        </h3>
        <pre className="bg-gray-100 p-2 rounded-md mt-1">{`function TemperatureCalculator() {
  const [temperature, setTemperature] = React.useState("");

  return (
    <div>
      <CelsiusInput 
        temperature={temperature} 
        onTemperatureChange={setTemperature} 
      />
      <FahrenheitInput 
        temperature={temperature} 
        onTemperatureChange={setTemperature} 
      />
    </div>
  );
}

function CelsiusInput({ temperature, onTemperatureChange }) {
  return (
    <input
      value={temperature}
      onChange={(e) => onTemperatureChange(e.target.value)}
      placeholder="Celsius"
    />
  );
}

function FahrenheitInput({ temperature, onTemperatureChange }) {
  const fahrenheit = (temperature * 9) / 5 + 32;
  return (
    <input
      value={fahrenheit}
      onChange={(e) => 
        onTemperatureChange(((e.target.value - 32) * 5) / 9)
      }
      placeholder="Fahrenheit"
    />
  );
}`}</pre>
        <p>
          ✅ Here, <code>temperature</code> is stored in the parent (
          <code>TemperatureCalculator</code>) and shared with both child inputs.
          This keeps them synchronized.
        </p>

        <h3 className="font-semibold text-lg">🔹 Benefits</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <b>Single source of truth</b> → fewer bugs, predictable behavior.
          </li>
          <li>
            <b>Easier validation</b> → complex logic handled in one place.
          </li>
          <li>
            <b>Consistent UI</b> → children always reflect the same state.
          </li>
        </ul>

        <p className="bg-blue-50 p-3 rounded-md border-l-4 border-blue-500">
          <b>✅ In short (for interviews):</b>
          <br />
          Lifting State Up means moving state to a common parent so multiple
          children can share it. It ensures a <b>single source of truth</b>,
          prevents duplicate state, and keeps the UI consistent.
        </p>
      </div>
    ),
  },
  {
    id: 10,
    question: "What is useState? What are the Purpose and usage of useState.",
    important: true,
    answer: (
      <div className="space-y-4 text-gray-700">
        <p>
          In <b>React</b>, <code>useState</code> is a <b>Hook</b> that allows{" "}
          <b>functional components</b> to manage state. Before hooks, only{" "}
          <b>class components</b> could hold state. With <code>useState</code>,
          functional components can store, update, and re-render when data
          changes.
        </p>

        <h3 className="font-semibold text-lg">🔹 Purpose of useState</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <b>State Management</b> → Makes functional components stateful.
          </li>
          <li>
            <b>Reactivity</b> → Automatically re-renders UI when state changes.
          </li>
          <li>
            <b>Preserves State</b> → Keeps values between renders (unlike local
            variables).
          </li>
        </ul>

        <h3 className="font-semibold text-lg">🔹 Syntax</h3>
        <pre className="bg-gray-100 p-2 rounded-md mt-1">{`const [state, setState] = useState(initialValue);`}</pre>
        <p>
          - <code>state</code>: current value of the variable.
          <br />- <code>setState</code>: function to update state.
          <br />- <code>initialValue</code>: default state value.
        </p>

        <h3 className="font-semibold text-lg">🔹 Example: Counter</h3>
        <pre className="bg-gray-100 p-2 rounded-md mt-1">{`function Counter() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}`}</pre>
        <p>
          ✅ Here, <code>count</code> is the state variable and{" "}
          <code>setCount</code> updates it. Each update re-renders the component
          and reflects changes in the UI.
        </p>

        <h3 className="font-semibold text-lg">🔹 Key Points</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            State updates are <b>asynchronous</b> and batched for performance.
          </li>
          <li>
            <b>Never mutate state directly</b> → always use the setter function.
          </li>
          <li>
            Supports <b>lazy initialization</b> for expensive computations:
            <pre className="bg-gray-100 p-2 rounded-md mt-1">{`const [items, setItems] = useState(() => expensiveComputation());`}</pre>
          </li>
        </ul>

        <p className="bg-blue-50 p-3 rounded-md border-l-4 border-blue-500">
          <b>✅ In short (for interviews):</b>
          <br />
          <code>useState</code> is a hook that provides a <b>state variable</b>{" "}
          and a <b>setter function</b>. It lets functional components manage
          data that changes over time and triggers re-renders automatically.
        </p>
      </div>
    ),
  },
  {
    id: 11,
    question:
      "What is useEffect hook and its cleanup; difference from useLayoutEffect.",
    important: true,
    answer: (
      <div className="space-y-4 text-gray-700">
        <p>
          In <b>React</b>, <code>useEffect</code> is a <b>Hook</b> that allows
          functional components to handle <b>side effects</b>. Side effects are
          tasks that happen outside React’s rendering, such as:
        </p>

        <ul className="list-disc list-inside space-y-1">
          <li>Fetching data from an API</li>
          <li>Subscribing/unsubscribing (WebSockets, event listeners)</li>
          <li>Updating the DOM manually</li>
          <li>Timers, logging, analytics, etc.</li>
        </ul>

        <p>
          Before hooks, side effects were managed in class lifecycle methods
          like <code>componentDidMount</code>, <code>componentDidUpdate</code>,
          and <code>componentWillUnmount</code>.
        </p>

        <h3 className="font-semibold text-lg">🔹 Syntax</h3>
        <pre className="bg-gray-100 p-2 rounded-md mt-1">{`useEffect(() => {
  // side effect logic

  return () => {
    // cleanup logic (optional)
  };
}, [dependencies]);`}</pre>

        <h3 className="font-semibold text-lg">
          🔹 How it Works Behind the Scenes
        </h3>
        <ol className="list-decimal list-inside space-y-1">
          <li>
            On <b>initial render</b>: React renders UI → then runs the effect.
          </li>
          <li>
            On <b>re-render</b>: If dependencies change, React runs cleanup (if
            any) → then re-runs the effect.
          </li>
          <li>
            On <b>unmount</b>: React calls the cleanup function one final time.
          </li>
        </ol>

        <h3 className="font-semibold text-lg">🔹 Cleanup Example</h3>
        <pre className="bg-gray-100 p-2 rounded-md mt-1">{`useEffect(() => {
  function handleResize() {
    console.log("Window resized");
  }

  window.addEventListener("resize", handleResize);

  // Cleanup to avoid memory leaks
  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);`}</pre>
        <p>
          ✅ Without cleanup, multiple listeners would accumulate and cause
          performance issues or bugs.
        </p>

        <h3 className="font-semibold text-lg">🔹 Dependency Array Behavior</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <code>useEffect(() =&gt; {"{...}"}, [])</code> → Runs{" "}
            <b>only once</b> (like <code>componentDidMount</code>).
          </li>
          <li>
            <code>useEffect(() =&gt; {"{...}"})</code> (no deps) → Runs after{" "}
            <b>every render</b>.
          </li>
          <li>
            <code>useEffect(() =&gt; {"{...}"}, [value])</code> → Runs when{" "}
            <code>value</code> changes.
          </li>
        </ul>

        <h3 className="font-semibold text-lg">
          🔹 useEffect vs useLayoutEffect
        </h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <b>useEffect</b>: Runs <b>after painting</b> to the screen
            (asynchronous).
          </li>
          <li>
            <b>useLayoutEffect</b>: Runs <b>before painting</b> (synchronous),
            useful for measuring DOM before render.
          </li>
        </ul>

        <p className="bg-blue-50 p-3 rounded-md border-l-4 border-blue-500">
          <b>✅ In short (for interviews):</b>
          <br />
          <code>useEffect</code> is a hook to handle <b>side effects</b>. It
          runs after render, re-runs on dependency changes, and supports{" "}
          <b>cleanup functions</b> to prevent memory leaks. It replaces
          lifecycle methods in class components and is essential for tasks like
          data fetching, subscriptions, and timers.
        </p>
      </div>
    ),
  },
  {
    id: 12,
    question: "How to do Handling forms in React.",
    answer: (
      <div className="space-y-4 text-gray-700">
        <p>
          In React, forms can be handled in two main ways:{" "}
          <b>Controlled Components</b> and <b>Uncontrolled Components</b>.
          Controlled components are most commonly used because React manages the
          input values via state, making the data flow predictable and easy to
          validate.
        </p>

        <h3 className="font-semibold text-lg">🔹 Controlled Components</h3>
        <p>
          A controlled component is a form element whose{" "}
          <b>value is controlled by React state</b>. Every keystroke updates the
          React state, and React re-renders the component to reflect the latest
          value.
        </p>
        <pre className="bg-gray-100 p-2 rounded-md mt-1">{`function ControlledForm() {
  const [name, setName] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(\`Hello, \${name}\`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}`}</pre>
        <ul className="list-disc list-inside space-y-1">
          <li>✅ Easy validation and predictable state.</li>
          <li>⚠️ Might cause more re-renders if many inputs exist.</li>
        </ul>

        <h3 className="font-semibold text-lg">🔹 Uncontrolled Components</h3>
        <p>
          In uncontrolled components, the form data is handled by the{" "}
          <b>DOM itself</b>, not React. You use a <code>ref</code> to directly
          access the value when needed (like on form submission).
        </p>
        <pre className="bg-gray-100 p-2 rounded-md mt-1">{`function UncontrolledForm() {
  const inputRef = React.useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(\`Hello, \${inputRef.current.value}\`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} />
      <button type="submit">Submit</button>
    </form>
  );
}`}</pre>
        <ul className="list-disc list-inside space-y-1">
          <li>✅ Simpler for small forms.</li>
          <li>⚠️ Harder to validate and manage dynamically.</li>
        </ul>

        <h3 className="font-semibold text-lg">🔹 Handling Multiple Fields</h3>
        <p>
          Instead of multiple states, store all form values in a{" "}
          <b>single state object</b> and update them dynamically.
        </p>
        <pre className="bg-gray-100 p-2 rounded-md mt-1">{`function MultiFieldForm() {
  const [formData, setFormData] = React.useState({ name: "", email: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form>
      <input name="name" value={formData.name} onChange={handleChange} />
      <input name="email" value={formData.email} onChange={handleChange} />
    </form>
  );
}`}</pre>

        <h3 className="font-semibold text-lg">🔹 Validation in Forms</h3>
        <p>
          Validation can be handled inside <code>onChange</code>,{" "}
          <code>onBlur</code>, or <code>onSubmit</code>. For large applications,
          libraries like <b>Formik</b> or <b>React Hook Form</b> are preferred.
        </p>

        <p className="bg-blue-50 p-3 rounded-md border-l-4 border-blue-500">
          <b>✅ Interview Tip:</b>
          <br />
          Controlled components are the standard way to handle forms in React as
          they make the state predictable and easy to validate. Uncontrolled
          components can be used for simple or performance-sensitive cases. For
          complex scenarios, use libraries like Formik or React Hook Form.
        </p>
      </div>
    ),
  },
  {
    id: 13,
    question:
      "What is reconciliation in React? How it is working behiend the scene?",
    important: true,
    answer: (
      <div className="space-y-4 text-gray-700">
        <p>
          In <b>React</b>, <b>reconciliation</b> is the process of{" "}
          <b>updating the DOM efficiently</b> when a component’s state or props
          change. Instead of re-rendering the entire UI, React figures out the{" "}
          <b>minimum number of updates</b> needed to sync the real DOM with the
          latest Virtual DOM.
        </p>

        <h3 className="font-semibold text-lg">🔹 Why Do We Need It?</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Direct DOM manipulation is slow and expensive.</li>
          <li>
            React uses <b>Virtual DOM + diffing algorithm</b> to minimize
            updates.
          </li>
          <li>Helps keep apps fast and interactive.</li>
        </ul>

        <h3 className="font-semibold text-lg">
          🔹 How It Works (Step by Step)
        </h3>
        <ol className="list-decimal list-inside space-y-1">
          <li>
            <b>Initial Render:</b> JSX → Babel →{" "}
            <code>React.createElement</code> → React elements (JS objects) →{" "}
            Virtual DOM → Real DOM.
          </li>
          <li>
            <b>On Update:</b> New Virtual DOM tree is generated.
          </li>
          <li>
            <b>Diffing:</b> React compares old vs new tree:
            <ul className="list-disc list-inside ml-6 space-y-1">
              <li>
                Different element type → destroy old node & create new one.
              </li>
              <li>
                Same type → reuse node, update only changed attributes/props.
              </li>
              <li>
                Lists → React uses <b>keys</b> to match and reorder items
                efficiently.
              </li>
            </ul>
          </li>
          <li>
            <b>Commit Phase:</b> Minimal updates are applied to the real DOM.
          </li>
        </ol>

        <h3 className="font-semibold text-lg">🔹 Example</h3>
        <pre className="bg-gray-100 p-2 rounded-md mt-1">{`<div>\n  <h1>Hello</h1>\n  <p>World</p>\n</div>`}</pre>
        <p className="text-sm">➡️ Updates to:</p>
        <pre className="bg-gray-100 p-2 rounded-md mt-1">{`<div>\n  <h1>Hello</h1>\n  <p>React</p>\n</div>`}</pre>
        <p>
          ✅ React reuses <code>&lt;div&gt;</code> and <code>&lt;h1&gt;</code>,
          only updates <code>&lt;p&gt;</code> text from <i>World</i> →{" "}
          <i>React</i>.
        </p>

        <h3 className="font-semibold text-lg">🔹 Benefits</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>⚡ Faster performance, minimal DOM operations.</li>
          <li>🔄 Declarative UI — React figures out the “how”.</li>
          <li>🧠 Predictable updates with Virtual DOM.</li>
        </ul>

        <h3 className="font-semibold text-lg">🔹 Downsides</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            Heuristics-based — assumes replacing different types is correct.
          </li>
          <li>
            <b>Keys</b> are critical in lists, or unnecessary re-renders may
            happen.
          </li>
          <li>Memory overhead (old + new Virtual DOM in memory).</li>
        </ul>

        <h3 className="font-semibold text-lg">
          🔹 Fiber & Modern Reconciliation
        </h3>
        <p>
          With React 16+, <b>Fiber</b> introduced asynchronous reconciliation:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Work is split into small units (interruptible rendering).</li>
          <li>
            React can <b>pause and resume</b> work for higher priority tasks
            (like user input).
          </li>
          <li>Enabled Concurrent Mode & React 18 features like Suspense.</li>
        </ul>

        <p className="bg-blue-50 p-3 rounded-md border-l-4 border-blue-500">
          <b>✅ In short (for interviews):</b>
          <br />
          Reconciliation is React’s process of{" "}
          <b>efficiently updating the real DOM</b> by comparing old vs new
          Virtual DOM trees. It applies only the minimal changes. With Fiber,
          this process is asynchronous, non-blocking, and powers Concurrent
          React.
        </p>
      </div>
    ),
  },
  {
    id: 14,
    question:
      "What is Redux? How it is working? Why use a state management library?",
    important: true,
    answer: (
      <div className="space-y-4 text-gray-700">
        <p>
          <b>Redux</b> is a <b>predictable state management library</b> for
          JavaScript applications, often used with React. It centralizes the{" "}
          <b>global state </b>
          in a single store, making it accessible and consistent across
          components.
        </p>

        <h3 className="font-semibold text-lg">🔹 Why Use Redux?</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Prop drilling becomes difficult in large apps.</li>
          <li>Multiple components managing duplicate or inconsistent state.</li>
          <li>
            Harder to debug or trace state changes without a centralized store.
          </li>
          <li>
            Redux provides a predictable, testable, and scalable solution.
          </li>
        </ul>

        <h3 className="font-semibold text-lg">🔹 Core Components of Redux</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <b>Store:</b> Holds the entire application state. Methods:{" "}
            <code>getState()</code>, <code>dispatch(action)</code>,{" "}
            <code>subscribe(listener)</code>.
          </li>
          <li>
            <b>Action:</b> Plain object describing <i>what happened</i>. Must
            have <code>type</code> and optional <code>payload</code>.
            <pre className="bg-gray-100 p-2 rounded-md mt-1">{`{ type: "INCREMENT", payload: 1 }`}</pre>
          </li>
          <li>
            <b>Reducer:</b> Pure function{" "}
            <code>(state, action) =&gt; newState</code>. Example:
            <pre className="bg-gray-100 p-2 rounded-md mt-1">{`function counterReducer(state = 0, action) {
  switch(action.type) {
    case "INCREMENT": return state + 1;
    default: return state;
  }
}`}</pre>
          </li>
          <li>
            <b>Dispatch:</b> Method to send actions to the store, triggering
            state updates.
          </li>
          <li>
            <b>Selectors:</b> Functions to read specific parts of state from the
            store.
          </li>
          <li>
            <b>Middleware (optional):</b> Intercepts actions before reducers
            (e.g., <code>redux-thunk</code>, <code>redux-saga</code>).
          </li>
        </ul>

        <h3 className="font-semibold text-lg">
          🔹 How Redux Works Behind the Scenes
        </h3>
        <ol className="list-decimal list-inside space-y-1">
          <li>
            <b>Store Initialization:</b> Reducers are combined → store is
            created.
          </li>
          <li>
            <b>Dispatching an Action:</b> Component calls{" "}
            <code>dispatch(action)</code> → action passes through middleware →
            reducer calculates new state.
          </li>
          <li>
            <b>State Update:</b> Store updates state immutably and notifies
            subscribed components.
          </li>
          <li>
            <b>Component Re-render:</b> Connected components receive updated
            state and re-render.
          </li>
        </ol>

        <h3 className="font-semibold text-lg">🔹 Redux Flow Diagram</h3>
        <pre className="bg-gray-100 p-2 rounded-md mt-1">{`Component -> dispatch(action) -> Middleware? -> Reducer -> Store updates -> Components re-render`}</pre>

        <h3 className="font-semibold text-lg">🔹 Benefits</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Single source of truth → predictable state.</li>
          <li>Easier debugging with Redux DevTools.</li>
          <li>Scales well for large applications.</li>
          <li>State changes are traceable and testable.</li>
        </ul>

        <p className="bg-blue-50 p-3 rounded-md border-l-4 border-blue-500">
          <b>✅ In short (for interviews):</b>
          <br />
          Redux is a <b>centralized state management library</b> with store,
          actions, reducers, and optional middleware. Components dispatch
          actions → reducers update the store → connected components re-render.
          It solves problems like prop drilling, inconsistent state, and
          improves scalability and debugging.
        </p>
      </div>
    ),
  },
  {
    id: 15,
    question: "What is redux architecture, explain every thing in details",
    important: true,
    answer: (
      <div className="space-y-4 text-gray-700">
        <p>
          <b>Redux architecture</b> is the design pattern used for managing
          global state in applications. It ensures all state is centralized,
          predictable, and updated in a controlled manner using{" "}
          <b>store, actions, reducers</b>, and optional middleware.
        </p>

        <h3 className="font-semibold text-lg">🔹 Why Use Redux?</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Solves prop drilling by centralizing state.</li>
          <li>Keeps state consistent across components.</li>
          <li>Makes debugging and testing easier.</li>
          <li>Scales well for large applications.</li>
        </ul>

        <h3 className="font-semibold text-lg">🔹 Core Components of Redux</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <b>Store:</b> Holds the entire app state. Methods include{" "}
            <code>getState()</code>, <code>dispatch(action)</code>, and{" "}
            <code>subscribe(listener)</code>.
          </li>
          <li>
            <b>Action:</b> Plain JS object describing <i>what happened</i>. Must
            have <code>type</code> and optional <code>payload</code>.
            <pre className="bg-gray-100 p-2 rounded-md mt-1">{`{ type: "ADD_TODO", payload: { id: 1, text: "Learn Redux" } }`}</pre>
          </li>
          <li>
            <b>Reducer:</b> Pure function that takes current state and action →
            returns new state.
            <pre className="bg-gray-100 p-2 rounded-md mt-1">{`function todoReducer(state = [], action) {
  switch(action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    default:
      return state;
  }
}`}</pre>
          </li>
          <li>
            <b>Dispatch:</b> Method to send actions to the store.
          </li>
          <li>
            <b>Selectors:</b> Functions to access specific parts of state.
          </li>
          <li>
            <b>Middleware (Optional):</b> Intercepts actions before reducers
            (e.g., <code>redux-thunk</code> for async operations).
          </li>
        </ul>

        <h3 className="font-semibold text-lg">🔹 Redux Data Flow</h3>
        <ol className="list-decimal list-inside space-y-1">
          <li>Component dispatches an action.</li>
          <li>Action passes through middleware (if any).</li>
          <li>Reducer calculates the new state.</li>
          <li>Store updates state immutably.</li>
          <li>Subscribed components re-render with updated state.</li>
        </ol>

        <h3 className="font-semibold text-lg">🔹 Flow Diagram</h3>
        <pre className="bg-gray-100 p-2 rounded-md mt-1">{`Component -> dispatch(action) -> Middleware? -> Reducer -> Store updates -> Component re-render`}</pre>

        <h3 className="font-semibold text-lg">🔹 Advantages</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Single source of truth → predictable state.</li>
          <li>Easier debugging using Redux DevTools.</li>
          <li>Pure reducers → testable and maintainable state updates.</li>
          <li>Scalable architecture for large apps.</li>
        </ul>

        <h3 className="font-semibold text-lg">🔹 Redux vs Local React State</h3>
        <table className="table-auto border border-gray-300 w-full text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-2 py-1">Feature</th>
              <th className="border px-2 py-1">Redux</th>
              <th className="border px-2 py-1">Local React State</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-2 py-1">Scope</td>
              <td className="border px-2 py-1">Global</td>
              <td className="border px-2 py-1">Component-specific</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">Updates</td>
              <td className="border px-2 py-1">via dispatch & reducers</td>
              <td className="border px-2 py-1">via useState/useReducer</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">Debugging</td>
              <td className="border px-2 py-1">Redux DevTools</td>
              <td className="border px-2 py-1">Limited to console/logging</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">Async Logic</td>
              <td className="border px-2 py-1">Middleware (Thunk/Saga)</td>
              <td className="border px-2 py-1">useEffect or custom hooks</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">Scalability</td>
              <td className="border px-2 py-1">Excellent for large apps</td>
              <td className="border px-2 py-1">Good for small apps</td>
            </tr>
          </tbody>
        </table>

        <p className="bg-blue-50 p-3 rounded-md border-l-4 border-blue-500">
          <b>✅ In short (for interviews):</b>
          <br />
          Redux architecture centralizes state in a <b>store</b>, manages
          updates via
          <b>actions</b> and <b>reducers</b>, optionally uses middleware, and
          enables predictable, scalable, and testable applications.
        </p>
      </div>
    ),
  },
  {
    id: 16,
    question: "Explain hooks in React (overview, examples).",
    answer: (
      <div className="space-y-4 text-gray-700">
        <p>
          <b>React Hooks</b> are special functions that let you{" "}
          <b>use React features</b>
          like state, lifecycle methods, and context inside{" "}
          <b>functional components</b>. Introduced in React 16.8, they allow
          writing <b>stateful logic</b> without class components.
        </p>

        <h3 className="font-semibold text-lg">🔹 Why Hooks?</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>No need for class components to manage state or lifecycle.</li>
          <li>
            Easier to share logic between components (avoiding HOCs/render
            props).
          </li>
          <li>Cleaner, modular, and reusable code.</li>
        </ul>

        <h3 className="font-semibold text-lg">🔹 Types of Hooks</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <b>Basic Hooks:</b> <code>useState</code>, <code>useEffect</code>,{" "}
            <code>useContext</code>
          </li>
          <li>
            <b>Additional Hooks:</b> <code>useReducer</code>,{" "}
            <code>useRef</code>, <code>useMemo</code>, <code>useCallback</code>,{" "}
            <code>useLayoutEffect</code>
          </li>
          <li>
            <b>Custom Hooks:</b> User-defined hooks to reuse stateful logic
            across components (function names start with <code>use</code>).
          </li>
        </ul>

        <h3 className="font-semibold text-lg">🔹 Examples</h3>
        <h4 className="font-semibold text-md">useState Example</h4>
        <pre className="bg-gray-100 p-2 rounded-md mt-1">{`import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}`}</pre>

        <h4 className="font-semibold text-md">useEffect Example</h4>
        <pre className="bg-gray-100 p-2 rounded-md mt-1">{`import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval); // Cleanup
  }, []);

  return <div>Seconds: {seconds}</div>;
}`}</pre>

        <h4 className="font-semibold text-md">Custom Hook Example</h4>
        <pre className="bg-gray-100 p-2 rounded-md mt-1">{`import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(setData);
  }, [url]);

  return data;
}`}</pre>

        <h3 className="font-semibold text-lg">🔹 Key Points</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Hooks cannot be used inside class components.</li>
          <li>
            Hooks must be called at the top level of components or other hooks.
          </li>
          <li>
            They allow managing state, side effects, refs, and context in
            functional components.
          </li>
          <li>
            Custom hooks enable reusable stateful logic across multiple
            components.
          </li>
        </ul>

        <p className="bg-blue-50 p-3 rounded-md border-l-4 border-blue-500">
          <b>✅ In short (for interviews):</b>
          <br />
          Hooks are functions that allow functional components to manage{" "}
          <b>state, lifecycle, context, and side effects</b>. Important hooks
          include <code>useState</code>, <code>useEffect</code>,{" "}
          <code>useReducer</code>,<code>useRef</code>, <code>useMemo</code>, and{" "}
          <code>useCallback</code>. Custom hooks help in reusing logic across
          components.
        </p>
      </div>
    ),
  },
  {
    id: 17,
    question: "What is useRef hook? How it is working? Explain in details",
    answer: (
      <div className="space-y-4 text-gray-700">
        <p>
          <b>useRef</b> is a React hook that allows you to create a{" "}
          <b>mutable reference object</b> whose
          <code>.current</code> property persists across component re-renders.
          Unlike <code>useState</code>, updating <code>.current</code>{" "}
          <b>does not trigger a re-render</b>.
        </p>

        <h3 className="font-semibold text-lg">🔹 How useRef Works</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            Calling <code>useRef(initialValue)</code> returns a{" "}
            <b>ref object</b>:
            <code>{`const myRef = useRef(initialValue)`}</code>
          </li>
          <li>
            <code>myRef.current</code> is initialized to{" "}
            <code>initialValue</code>.
          </li>
          <li>
            The object is <b>persistent across renders</b> and React does not
            replace it.
          </li>
          <li>
            Updating <code>myRef.current</code> <b>does not cause re-render</b>.
          </li>
        </ul>

        <h3 className="font-semibold text-lg">🔹 Common Use Cases</h3>

        <h4 className="font-semibold text-md">1. Accessing DOM Elements</h4>
        <pre className="bg-gray-100 p-2 rounded-md mt-1">{`import React, { useRef } from 'react';

function InputFocus() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Type here" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}`}</pre>

        <h4 className="font-semibold text-md">
          2. Storing Mutable Values (Timers / Intervals)
        </h4>
        <pre className="bg-gray-100 p-2 rounded-md mt-1">{`import React, { useState, useRef, useEffect } from 'react';

function Timer() {
  const [count, setCount] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, []);

  return <div>Count: {count}</div>;
}`}</pre>

        <h4 className="font-semibold text-md">3. Keeping Previous Values</h4>
        <pre className="bg-gray-100 p-2 rounded-md mt-1">{`import React, { useState, useRef, useEffect } from 'react';

function PreviousValue() {
  const [count, setCount] = useState(0);
  const prevCount = useRef();

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  return (
    <div>
      Current: {count}, Previous: {prevCount.current}
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}`}</pre>

        <h3 className="font-semibold text-lg">🔹 Key Points</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            Does not trigger re-render when <code>.current</code> changes.
          </li>
          <li>
            Used for DOM manipulation, timers, or storing persistent mutable
            values.
          </li>
          <li>
            More performant than <code>useState</code> for values that don’t
            affect UI rendering.
          </li>
        </ul>

        <p className="bg-blue-50 p-3 rounded-md border-l-4 border-blue-500">
          <b>✅ In short (for interviews):</b>
          <br />
          <code>useRef</code> returns a persistent mutable object. Its{" "}
          <code>.current</code> property can store DOM references, timers, or
          previous values without triggering re-renders, making it efficient and
          versatile for functional components.
        </p>
      </div>
    ),
  },
  {
    id: 18,
    question: "What is useReducer hook? How it is working? Explain in details.",
    answer: (
      <div className="space-y-4 text-gray-700">
        <p>
          <b>useReducer</b> is a React hook used for <b>state management</b> in
          functional components. It is an alternative to <code>useState</code>,
          especially useful for
          <b>complex state logic</b>, state that depends on the previous value,
          or when you want to centralize state updates using a reducer function.
        </p>

        <h3 className="font-semibold text-lg">🔹 How useReducer Works</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            Define a <b>reducer function</b> that takes <code>state</code> and{" "}
            <code>action</code>
            and returns the new state.
          </li>
          <li>
            Initialize state using{" "}
            <code>useReducer(reducer, initialState)</code>.
          </li>
          <li>
            Destructure the result: <code>[state, dispatch]</code>, where
            <code>state</code> is current state and <code>dispatch</code> sends
            actions.
          </li>
          <li>
            Dispatching an action calls the reducer to calculate and return the
            new state.
          </li>
        </ul>

        <h3 className="font-semibold text-lg">🔹 Example: Counter</h3>
        <pre className="bg-gray-100 p-2 rounded-md mt-1">{`import React, { useReducer } from 'react';

const reducer = (state, action) => {
  switch(action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
};

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
}`}</pre>

        <h3 className="font-semibold text-lg">🔹 Benefits of useReducer</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            Handles <b>complex state logic</b> better than multiple useState
            calls.
          </li>
          <li>
            Centralizes state updates in a <b>pure reducer function</b>.
          </li>
          <li>
            Makes state updates <b>predictable and testable</b>.
          </li>
          <li>
            Works well with dispatching actions from multiple components or
            contexts.
          </li>
        </ul>

        <h3 className="font-semibold text-lg">🔹 Key Points</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            Returns <code>[state, dispatch]</code>.
          </li>
          <li>
            Reducer determines how state changes based on{" "}
            <code>action.type</code>.
          </li>
          <li>
            Actions are plain objects with a <code>type</code> and optional
            payload.
          </li>
          <li>
            Preferred over useState for complex state with multiple sub-values.
          </li>
        </ul>

        <p className="bg-blue-50 p-3 rounded-md border-l-4 border-blue-500">
          <b>✅ In short (for interviews):</b>
          <br />
          <code>useReducer</code> manages complex state in functional
          components. It uses a <b>reducer function</b> and <b>dispatch</b> to
          update state predictably, similar to Redux but scoped locally.
        </p>
      </div>
    ),
  },
  {
    id: 19,
    question: "What is useContext hook? How it is working? Explain in details.",
    answer: (
      <div className="space-y-4 text-gray-700">
        <p>
          <b>useContext</b> is a React hook that allows functional components to
          <b>consume context values</b> directly. Context is a way to share data
          globally across components without passing props manually at every
          level, avoiding prop drilling.
        </p>

        <h3 className="font-semibold text-lg">🔹 How useContext Works</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            Create a context using <code>React.createContext()</code>.
          </li>
          <li>
            Provide a value at a higher level using <code>Provider</code>.
          </li>
          <li>
            Consume the context in functional components using{" "}
            <code>useContext(Context)</code>.
          </li>
          <li>
            React finds the closest <code>Provider</code> and returns its value.
          </li>
          <li>
            When the context value changes, consuming components automatically
            re-render.
          </li>
        </ul>

        <h3 className="font-semibold text-lg">🔹 Example: Theme Context</h3>
        <pre className="bg-gray-100 p-2 rounded-md mt-1">{`import React, { createContext, useContext } from 'react';

// 1. Create Context
const ThemeContext = createContext("light");

function Child() {
  // 3. Consume Context
  const theme = useContext(ThemeContext);
  return <p>Current theme: {theme}</p>;
}

function App() {
  // 2. Provide Context
  return (
    <ThemeContext.Provider value="dark">
      <Child />
    </ThemeContext.Provider>
  );
}`}</pre>

        <h3 className="font-semibold text-lg">🔹 Why use useContext?</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            Avoids <b>prop drilling</b> across multiple component layers.
          </li>
          <li>
            Works seamlessly with <b>functional components</b>.
          </li>
          <li>
            Makes <b>global data</b> like theme, auth, or language easily
            accessible.
          </li>
          <li>
            Automatically re-renders consumers when the context value changes.
          </li>
        </ul>

        <h3 className="font-semibold text-lg">🔹 Key Points</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Must be used inside a functional component.</li>
          <li>
            Only re-renders components that consume the context when value
            changes.
          </li>
          <li>
            Can be combined with <code>useReducer</code> or{" "}
            <code>useState</code> in the provider for global state management.
          </li>
        </ul>

        <p className="bg-blue-50 p-3 rounded-md border-l-4 border-blue-500">
          <b>✅ In short (for interviews):</b>
          <br />
          <code>useContext</code> is a hook that allows functional components to
          access
          <b>global context values</b> without prop drilling. It simplifies
          sharing data like theme or auth and automatically updates consuming
          components when the context changes.
        </p>
      </div>
    ),
  },
  {
    id: 20,
    question: "What is memoization in react? Explain in details.",
    important: true,
    answer: (
      <div className="space-y-4 text-gray-700">
        <p>
          <b>Memoization</b> is a programming technique used to{" "}
          <b>optimize performance</b> by caching the results of expensive
          function calls and returning the cached result when the same inputs
          occur again. In React, memoization helps prevent{" "}
          <b>unnecessary re-renders</b> or recalculations of expensive values.
        </p>

        <h3 className="font-semibold text-lg">
          🔹 Why Memoization is Important
        </h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            React re-renders components when <b>props or state change</b>.
          </li>
          <li>
            If a component or calculation is <b>heavy</b>, unnecessary
            re-renders can slow down the app.
          </li>
          <li>
            Memoization ensures components or calculations are updated{" "}
            <b>only when needed</b>, improving performance.
          </li>
        </ul>

        <h3 className="font-semibold text-lg">
          🔹 React.memo (Component Memoization)
        </h3>
        <pre className="bg-gray-100 p-2 rounded-md mt-1">{`import React from 'react';

const Child = React.memo(({ count }) => {
  console.log("Child rendered");
  return <p>Count: {count}</p>;
});

function Parent() {
  const [count, setCount] = React.useState(0);
  const [name, setName] = React.useState("Raza");

  return (
    <div>
      <Child count={count} />
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <input value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  );
}`}</pre>
        <p>
          ✅ The <b>Child</b> component does not re-render when{" "}
          <code>name</code> changes because its <code>count</code> prop didn’t
          change.
        </p>

        <h3 className="font-semibold text-lg">
          🔹 useMemo (Memoize Expensive Calculations)
        </h3>
        <pre className="bg-gray-100 p-2 rounded-md mt-1">{`import React, { useState, useMemo } from 'react';

function ExpensiveCalculation({ num }) {
  const factorial = useMemo(() => {
    console.log("Calculating factorial...");
    let result = 1;
    for (let i = 1; i <= num; i++) result *= i;
    return result;
  }, [num]);

  return <p>Factorial: {factorial}</p>;
}`}</pre>
        <p>
          ✅ The factorial calculation runs <b>only when num changes</b>, not on
          every render.
        </p>

        <h3 className="font-semibold text-lg">
          🔹 useCallback (Memoize Functions)
        </h3>
        <pre className="bg-gray-100 p-2 rounded-md mt-1">{`import React, { useState, useCallback } from 'react';

function Button({ onClick }) {
  console.log("Button rendered");
  return <button onClick={onClick}>Click Me</button>;
}

function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []);

  return <Button onClick={handleClick} />;
}`}</pre>
        <p>
          ✅ The <code>handleClick</code> function is memoized, so its reference
          does not change on re-renders, preventing unnecessary re-renders of
          child components.
        </p>

        <h3 className="font-semibold text-lg">🔹 Key Points</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            Memoization improves performance by avoiding unnecessary renders or
            calculations.
          </li>
          <li>
            Common tools in React: <code>React.memo</code>, <code>useMemo</code>
            , <code>useCallback</code>.
          </li>
          <li>
            Overusing memoization can increase memory usage; use it only where
            performance matters.
          </li>
        </ul>

        <p className="bg-blue-50 p-3 rounded-md border-l-4 border-blue-500">
          <b>✅ In short (for interviews):</b>
          <br />
          Memoization in React caches components, functions, or computations to
          prevent unnecessary re-renders and recalculations, improving
          performance. Key tools are <code>React.memo</code>,
          <code>useMemo</code>, and <code>useCallback</code>.
        </p>
      </div>
    ),
  },
  {
    id: 21,
    question:
      "What is memo, useMemo and useCallback hook? How it is working? Explain in details",
    important: true,
    answer: (
      <div className="space-y-4 text-gray-700">
        <p>
          <b>Memoization</b> in React improves performance by caching
          components, values, or functions to prevent unnecessary re-renders or
          recalculations. Three common tools are <code>React.memo</code>,
          <code>useMemo</code>, and <code>useCallback</code>.
        </p>

        <h3 className="font-semibold text-lg">🔹 1. React.memo</h3>
        <p>
          <code>React.memo</code> is a higher-order component (HOC) that
          memoizes a functional component. It prevents re-rendering if props
          haven’t changed.
        </p>
        <pre className="bg-gray-100 p-2 rounded-md mt-1">{`import React from 'react';

const Child = React.memo(({ count }) => {
  console.log("Child rendered");
  return <p>Count: {count}</p>;
});

function Parent() {
  const [count, setCount] = React.useState(0);
  const [name, setName] = React.useState("Raza");

  return (
    <div>
      <Child count={count} />
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <input value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  );
}`}</pre>
        <p>
          ✅ Child will not re-render when <code>name</code> changes because its{" "}
          <code>count</code> prop didn’t change.
        </p>

        <h3 className="font-semibold text-lg">🔹 2. useMemo</h3>
        <p>
          <code>useMemo</code> memoizes the result of an expensive calculation
          and recalculates only when its dependencies change.
        </p>
        <pre className="bg-gray-100 p-2 rounded-md mt-1">{`import React, { useState, useMemo } from 'react';

function ExpensiveCalculation({ num }) {
  const factorial = useMemo(() => {
    console.log("Calculating factorial...");
    let result = 1;
    for (let i = 1; i <= num; i++) result *= i;
    return result;
  }, [num]);

  return <p>Factorial: {factorial}</p>;
}`}</pre>
        <p>
          ✅ The factorial calculation runs only when <code>num</code> changes,
          not on every render.
        </p>

        <h3 className="font-semibold text-lg">🔹 3. useCallback</h3>
        <p>
          <code>useCallback</code> memoizes a function reference, ensuring it
          doesn’t change unless dependencies change. Useful when passing
          callbacks to memoized components.
        </p>
        <pre className="bg-gray-100 p-2 rounded-md mt-1">{`import React, { useState, useCallback } from 'react';

function Button({ onClick }) {
  console.log("Button rendered");
  return <button onClick={onClick}>Click Me</button>;
}

function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []);

  return <Button onClick={handleClick} />;
}`}</pre>
        <p>
          ✅ The <code>handleClick</code> function reference remains the same
          across renders, preventing unnecessary re-renders of{" "}
          <code>Button</code>.
        </p>

        <h3 className="font-semibold text-lg">🔹 Key Differences</h3>
        <table className="table-auto border-collapse border border-gray-300 w-full text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2">Feature</th>
              <th className="border border-gray-300 p-2">React.memo</th>
              <th className="border border-gray-300 p-2">useMemo</th>
              <th className="border border-gray-300 p-2">useCallback</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2">Type</td>
              <td className="border border-gray-300 p-2">HOC for components</td>
              <td className="border border-gray-300 p-2">
                Hook for memoizing values
              </td>
              <td className="border border-gray-300 p-2">
                Hook for memoizing functions
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">Purpose</td>
              <td className="border border-gray-300 p-2">
                Prevent unnecessary re-renders
              </td>
              <td className="border border-gray-300 p-2">
                Avoid expensive recalculations
              </td>
              <td className="border border-gray-300 p-2">
                Avoid function recreation
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">Usage</td>
              <td className="border border-gray-300 p-2">
                Wrap functional component
              </td>
              <td className="border border-gray-300 p-2">
                Wrap computation: <code>useMemo(() =&gt; ..., [deps])</code>
              </td>
              <td className="border border-gray-300 p-2">
                Wrap function: <code>useCallback(() =&gt; ..., [deps])</code>
              </td>
            </tr>
          </tbody>
        </table>

        <p className="bg-blue-50 p-3 rounded-md border-l-4 border-blue-500">
          <b>✅ In short (for interviews):</b>
          <br />
          <code>React.memo</code> → memoizes components, <code>useMemo</code> →
          memoizes computed values,
          <code>useCallback</code> → memoizes functions. They all help improve
          React performance by avoiding unnecessary re-renders or
          recalculations.
        </p>
      </div>
    ),
  },
  {
    id: 22,
    question: "What is useQuery? How it is working?",
    answer: (
      <div className="space-y-4 text-gray-700">
        <p>
          <b>useQuery</b> is a hook from <b>React Query (TanStack Query)</b>{" "}
          used to <b>fetch, cache, and manage server data</b>
          in React applications. It simplifies data fetching and state
          management by handling
          <b>loading, errors, caching, and background updates</b> automatically.
        </p>

        <h3 className="font-semibold text-lg">🔹 How useQuery Works</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            Import <code>useQuery</code> from React Query:{" "}
            <code>import `useQuery` from `@tanstack/react-query`</code>
          </li>
          <li>
            Call <code>useQuery</code> with a unique key and a fetch function
            returning a Promise.
          </li>
          <li>
            React Query automatically handles fetching, caching, background
            updates, and re-renders.
          </li>
          <li>
            The hook returns an object containing: <code>data</code>,{" "}
            <code>isLoading</code>, <code>error</code>, etc.
          </li>
        </ul>

        <h3 className="font-semibold text-lg">🔹 Example: Fetching Todos</h3>
        <pre className="bg-gray-100 p-2 rounded-md mt-1">{`import React from 'react';
import { useQuery } from '@tanstack/react-query';

async function fetchTodos() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  if (!res.ok) throw new Error('Network error');
  return res.json();
}

function Todos() {
  const { data, isLoading, error } = useQuery(['todos'], fetchTodos);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data.slice(0, 5).map(todo => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}`}</pre>
        <p>
          ✅ React Query handles <b>loading, error, and caching</b>{" "}
          automatically. It also supports background refetching and retries.
        </p>

        <h3 className="font-semibold text-lg">🔹 Key Features</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Automatic caching to avoid unnecessary requests.</li>
          <li>Background refetching keeps data fresh.</li>
          <li>Automatic retries for failed requests.</li>
          <li>Supports pagination and infinite queries easily.</li>
          <li>
            Integrates with DevTools for monitoring queries and cache state.
          </li>
        </ul>

        <h3 className="font-semibold text-lg">🔹 Key Points</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            Reactive: Re-renders component when data or loading state changes.
          </li>
          <li>Always provide a unique key for each query.</li>
          <li>
            Combine with <code>useMutation</code> for POST, PUT, DELETE
            operations.
          </li>
          <li>
            Reduces boilerplate compared to manual <code>useEffect</code> +
            fetch + loading + error handling.
          </li>
        </ul>

        <p className="bg-blue-50 p-3 rounded-md border-l-4 border-blue-500">
          <b>✅ In short (for interviews):</b>
          <br />
          <code>useQuery</code> is a React Query hook for declarative data
          fetching. It automatically manages{" "}
          <b>loading, caching, errors, and background updates</b>, simplifying
          server data management in React apps.
        </p>
      </div>
    ),
  },
  {
    id: 23,
    question: "Differences: useMemo vs React.memo; useRef vs useState.",
    important: true,
    answer: (
      <div className="space-y-6 text-gray-700">
        {/* useMemo vs React.memo */}
        <div>
          <h3 className="font-semibold text-lg">🔹 useMemo vs React.memo</h3>
          <p>
            Both <b>useMemo</b> and <b>React.memo</b> are used for{" "}
            <b>performance optimization</b>, but they solve different problems.
          </p>

          <table className="table-auto border-collapse border border-gray-300 mt-2 w-full text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-3 py-2">Feature</th>
                <th className="border border-gray-300 px-3 py-2">useMemo</th>
                <th className="border border-gray-300 px-3 py-2">React.memo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-3 py-2">Type</td>
                <td className="border px-3 py-2">Hook</td>
                <td className="border px-3 py-2">
                  Higher-Order Component (HOC)
                </td>
              </tr>
              <tr>
                <td className="border px-3 py-2">Purpose</td>
                <td className="border px-3 py-2">
                  Memoizes the <b>result of a calculation</b>
                </td>
                <td className="border px-3 py-2">
                  Memoizes the <b>rendering of a component</b>
                </td>
              </tr>
              <tr>
                <td className="border px-3 py-2">Usage</td>
                <td className="border px-3 py-2">
                  Prevents <b>expensive recalculations</b>
                </td>
                <td className="border px-3 py-2">
                  Prevents <b>unnecessary re-renders</b>
                </td>
              </tr>
              <tr>
                <td className="border px-3 py-2">Return Value</td>
                <td className="border px-3 py-2">
                  A memoized <b>value</b>
                </td>
                <td className="border px-3 py-2">
                  A memoized <b>component</b>
                </td>
              </tr>
            </tbody>
          </table>

          <h4 className="font-semibold mt-3">Example:</h4>
          <pre className="bg-gray-100 p-2 rounded-md mt-1">{`// useMemo
const squared = useMemo(() => heavyCalculation(num), [num]);

// React.memo
const Child = React.memo(({ count }) => <p>{count}</p>);`}</pre>

          <p className="bg-blue-50 p-3 rounded-md border-l-4 border-blue-500 mt-2">
            <b>✅ In short:</b> <br />- <b>useMemo</b> → memoizes <b>values</b>{" "}
            <br />- <b>React.memo</b> → memoizes <b>components</b>
          </p>
        </div>

        {/* useRef vs useState */}
        <div>
          <h3 className="font-semibold text-lg">🔹 useRef vs useState</h3>
          <p>
            Both <b>useRef</b> and <b>useState</b> store values across renders,
            but they behave very differently.
          </p>

          <table className="table-auto border-collapse border border-gray-300 mt-2 w-full text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-3 py-2">Feature</th>
                <th className="border border-gray-300 px-3 py-2">useRef</th>
                <th className="border border-gray-300 px-3 py-2">useState</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-3 py-2">Purpose</td>
                <td className="border px-3 py-2">
                  Stores <b>mutable reference</b> without re-render
                </td>
                <td className="border px-3 py-2">
                  Stores <b>state data</b> and triggers re-render
                </td>
              </tr>
              <tr>
                <td className="border px-3 py-2">Re-renders</td>
                <td className="border px-3 py-2">Does not trigger</td>
                <td className="border px-3 py-2">Always triggers</td>
              </tr>
              <tr>
                <td className="border px-3 py-2">Use Cases</td>
                <td className="border px-3 py-2">
                  - Accessing DOM nodes <br />- Storing values like timer IDs
                </td>
                <td className="border px-3 py-2">
                  - UI state (form input, counters) <br />- Data that affects
                  rendering
                </td>
              </tr>
              <tr>
                <td className="border px-3 py-2">Value Access</td>
                <td className="border px-3 py-2">
                  <code>ref.current</code>
                </td>
                <td className="border px-3 py-2">
                  <code>[value, setValue]</code>
                </td>
              </tr>
            </tbody>
          </table>

          <h4 className="font-semibold mt-3">Example:</h4>
          <pre className="bg-gray-100 p-2 rounded-md mt-1">{`// useRef Example
const inputRef = useRef();
<input ref={inputRef} />

// useState Example
const [count, setCount] = useState(0);
<button onClick={() => setCount(count + 1)}>+</button>`}</pre>

          <p className="bg-blue-50 p-3 rounded-md border-l-4 border-blue-500 mt-2">
            <b>✅ In short:</b> <br />- <b>useRef</b> → Stores values/DOM refs
            without re-render <br />- <b>useState</b> → Stores values and{" "}
            <b>causes re-render</b> on update
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 24,
    question: "What is Context API? how and when to use it vs Redux.",
    important: true,
    answer: (
      <div className="space-y-4 text-gray-700">
        <h2 className="text-2xl font-bold">⚛️ Context API vs Redux</h2>

        <p>
          The <b>Context API</b> in React is a built-in state management
          solution that allows you to share data globally across components
          without <b>prop drilling</b>. It’s best suited for smaller to medium
          applications or scenarios like <b>theme</b>, <b>language</b>, or{" "}
          <b>authentication</b>.
        </p>

        <h3 className="font-semibold text-lg">🔹 How Context API Works</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <b>Create a Context</b> → <code>React.createContext()</code>
          </li>
          <li>
            <b>Provide the Context</b> → wrap components in{" "}
            <code>&lt;Context.Provider&gt;</code>
          </li>
          <li>
            <b>Consume the Context</b> → with <code>useContext()</code> or{" "}
            <code>&lt;Context.Consumer&gt;</code>
          </li>
        </ul>

        <h3 className="font-semibold text-lg">🔹 Example</h3>
        <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto">{`const ThemeContext = createContext();

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Child />
    </ThemeContext.Provider>
  );
}

function Child() {
  const theme = useContext(ThemeContext);
  return <p>Current theme: {theme}</p>;
}`}</pre>

        <h3 className="font-semibold text-lg">🔹 When to Use Context API</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            To avoid <b>prop drilling</b>
          </li>
          <li>
            For <b>simple, global state</b> like theme, language, or auth
          </li>
          <li>
            When app size is <b>small to medium</b>
          </li>
        </ul>

        <h3 className="font-semibold text-lg">🔹 Context API vs Redux</h3>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 text-sm">
            <thead className="bg-gray-200">
              <tr>
                <th className="border border-gray-300 px-3 py-2 text-left">
                  Feature
                </th>
                <th className="border border-gray-300 px-3 py-2 text-left">
                  Context API 🟢
                </th>
                <th className="border border-gray-300 px-3 py-2 text-left">
                  Redux 🔴
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-3 py-2">Complexity</td>
                <td className="border px-3 py-2">Simple, built-in</td>
                <td className="border px-3 py-2">
                  More complex, requires setup
                </td>
              </tr>
              <tr>
                <td className="border px-3 py-2">When to Use</td>
                <td className="border px-3 py-2">
                  Small/medium apps, light state
                </td>
                <td className="border px-3 py-2">Large apps, complex state</td>
              </tr>
              <tr>
                <td className="border px-3 py-2">Performance</td>
                <td className="border px-3 py-2">
                  Re-renders all consumers on update
                </td>
                <td className="border px-3 py-2">
                  Optimized updates via reducers & selectors
                </td>
              </tr>
              <tr>
                <td className="border px-3 py-2">Ecosystem</td>
                <td className="border px-3 py-2">Basic React APIs only</td>
                <td className="border px-3 py-2">
                  Middleware, DevTools, persistence, etc.
                </td>
              </tr>
              <tr>
                <td className="border px-3 py-2">Best For</td>
                <td className="border px-3 py-2">
                  Theme, language, auth, simple global state
                </td>
                <td className="border px-3 py-2">
                  Enterprise-level state, async handling
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="bg-blue-50 p-3 rounded-md border-l-4 border-blue-500">
          <b>✅ Interview Tip:</b> Use <b>Context API</b> for lightweight global
          state and avoiding prop drilling. Use <b>Redux</b> when the
          application grows large, needs complex state management, async API
          handling, and developer tooling like Redux DevTools.
        </p>
      </div>
    ),
  },
  {
    id: 25,
    question: "What is Prop drilling and how to avoiding it.",
    answer: (
      <div className="space-y-4 text-gray-700">
        <h2 className="text-2xl font-bold">🔄 Prop Drilling in React</h2>

        <p>
          <b>Prop Drilling</b> happens when you need to pass data from a{" "}
          <b>parent component</b> to a deeply nested <b>child component</b>, and
          the data has to go through intermediate components that do not use it.
        </p>

        <h3 className="font-semibold text-lg">🔹 Example of Prop Drilling</h3>
        <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto">{`function App() {
  const user = { name: "Raza", role: "Developer" };
  return <Parent user={user} />;
}

function Parent({ user }) {
  return <Child user={user} />;
}

function Child({ user }) {
  return <GrandChild user={user} />;
}

function GrandChild({ user }) {
  return <p>User: {user.name}, Role: {user.role}</p>;
}`}</pre>

        <p className="bg-red-50 p-3 rounded-md border-l-4 border-red-500">
          ⚠️ Here, <code>user</code> is passed from{" "}
          <b>App → Parent → Child → GrandChild</b>. Only <b>GrandChild</b> needs
          it, but all other components must forward it.
        </p>

        <h3 className="font-semibold text-lg">
          🔹 Problems with Prop Drilling
        </h3>
        <ul className="list-disc list-inside space-y-1">
          <li>❌ Intermediate components get bloated with unused props.</li>
          <li>❌ Hard to maintain when props structure changes.</li>
          <li>❌ Not scalable for large, nested component trees.</li>
        </ul>

        <h3 className="font-semibold text-lg">🔹 How to Avoid Prop Drilling</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <b>Context API</b> → Create a global context, provide it at a higher
            level, consume it anywhere with <code>useContext()</code>.
          </li>
          <li>
            <b>State Management Libraries</b> (Redux, Zustand, Recoil, Jotai) →
            Central store for large/complex apps.
          </li>
          <li>
            <b>Component Composition</b> → Use children, render props, or HOCs
            to avoid passing unnecessary props.
          </li>
        </ul>

        <h3 className="font-semibold text-lg">
          🔹 Example with Context API (Better Way)
        </h3>
        <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto">{`const UserContext = createContext();

function App() {
  const user = { name: "Raza", role: "Developer" };

  return (
    <UserContext.Provider value={user}>
      <GrandChild />
    </UserContext.Provider>
  );
}

function GrandChild() {
  const user = useContext(UserContext);
  return <p>User: {user.name}, Role: {user.role}</p>;
}`}</pre>

        <p className="bg-green-50 p-3 rounded-md border-l-4 border-green-500">
          ✅ Using <b>Context API</b>, we directly consume <code>user</code> in{" "}
          <b>GrandChild</b> without passing it through <b>Parent</b> and{" "}
          <b>Child</b>.
        </p>

        <p className="bg-blue-50 p-3 rounded-md border-l-4 border-blue-500">
          <b>Interview Tip:</b> Prop drilling = passing data unnecessarily
          through intermediate components. <br />
          Avoid with <b>Context API</b> (small apps) or{" "}
          <b>Redux/other state libraries</b> (large apps).
        </p>
      </div>
    ),
  },
  {
    id: 26,
    question:
      "What is Higher-order components (HOCs) and render props patterns.",
    important: true,
    important: true,
    answer: (
      <div className="space-y-6 text-gray-700">
        <h2 className="text-2xl font-bold">
          ⚛️ Higher-Order Components (HOCs) & Render Props
        </h2>

        {/* HOC Section */}
        <div className="space-y-3">
          <h3 className="font-semibold text-lg">
            🔹 Higher-Order Components (HOCs)
          </h3>
          <p>
            A <b>Higher-Order Component</b> (HOC) is a <b>function</b> that
            takes a component as input and returns a new component with{" "}
            <b>extra functionality</b>. It’s commonly used for <b>code reuse</b>{" "}
            across components.
          </p>

          <h4 className="font-medium">✅ Why use HOCs?</h4>
          <ul className="list-disc list-inside space-y-1">
            <li>Share reusable logic between multiple components</li>
            <li>
              Great for cross-cutting concerns like authentication, logging, or
              API fetching
            </li>
          </ul>

          <h4 className="font-medium">🔹 Example</h4>
          <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto">{`function withLogger(WrappedComponent) {
  return function EnhancedComponent(props) {
    console.log("Props received:", props);
    return <WrappedComponent {...props} />;
  };
}

function Hello({ name }) {
  return <h1>Hello, {name}</h1>;
}

const HelloWithLogger = withLogger(Hello);

// Usage
<HelloWithLogger name="Raza" />;`}</pre>

          <p className="bg-red-50 p-3 rounded-md border-l-4 border-red-500">
            ⚠️ Issue: Multiple HOCs may cause <b>wrapper hell</b> and debugging
            complexity.
          </p>
        </div>

        {/* Render Props Section */}
        <div className="space-y-3">
          <h3 className="font-semibold text-lg">🔹 Render Props Pattern</h3>
          <p>
            A <b>Render Prop</b> is a function passed as a <b>prop</b> to a
            component, allowing the parent to decide <b>what UI</b> should be
            rendered. It’s another way to <b>share logic</b> without HOCs.
          </p>

          <h4 className="font-medium">✅ Why use Render Props?</h4>
          <ul className="list-disc list-inside space-y-1">
            <li>Provides flexibility in rendering logic</li>
            <li>Avoids tight coupling of UI and logic</li>
          </ul>

          <h4 className="font-medium">🔹 Example</h4>
          <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto">{`function MouseTracker({ render }) {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div style={{ height: "100vh" }} onMouseMove={handleMouseMove}>
      {render(position)}
    </div>
  );
}

// Usage
<MouseTracker
  render={({ x, y }) => (
    <h1>Mouse is at ({x}, {y})</h1>
  )}
/>;`}</pre>
        </div>

        {/* Comparison Table */}
        <div className="space-y-3">
          <h3 className="font-semibold text-lg">🔹 HOCs vs Render Props</h3>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-sm">
              <thead className="bg-gray-200">
                <tr>
                  <th className="border border-gray-300 px-3 py-2 text-left">
                    Aspect
                  </th>
                  <th className="border border-gray-300 px-3 py-2 text-left">
                    HOCs
                  </th>
                  <th className="border border-gray-300 px-3 py-2 text-left">
                    Render Props
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-3 py-2">Definition</td>
                  <td className="border px-3 py-2">
                    Function that wraps and enhances a component
                  </td>
                  <td className="border px-3 py-2">
                    Component that takes a function prop to decide rendering
                  </td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">Use Case</td>
                  <td className="border px-3 py-2">
                    Reuse logic across multiple components
                  </td>
                  <td className="border px-3 py-2">
                    Reuse logic + flexible rendering
                  </td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">Drawback</td>
                  <td className="border px-3 py-2">
                    Wrapper hell, debugging complexity
                  </td>
                  <td className="border px-3 py-2">
                    Can create deeply nested JSX
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Summary */}
        <p className="bg-blue-50 p-3 rounded-md border-l-4 border-blue-500">
          <b>✅ In short (for interviews):</b>- <b>HOCs</b>: Functions that wrap
          a component to provide extra logic. - <b>Render Props</b>: Functions
          passed as props to control rendering. - <b>Modern React</b>: Hooks
          have largely replaced both for cleaner, reusable logic.
        </p>
      </div>
    ),
  },
  {
    id: 27,
    question: "What are custom hooks; how to create them?",
    important: true,
    answer: (
      <div className="space-y-4 text-gray-700">
        <p>
          A <b>Custom Hook</b> in React is a reusable function that encapsulates
          logic using built-in hooks like <code>useState</code>,{" "}
          <code>useEffect</code>, <code>useReducer</code>, etc. It allows
          developers to extract and reuse common stateful logic across multiple
          components, avoiding duplication and keeping components clean.
        </p>

        <h3 className="font-semibold text-lg">🔹 Why Custom Hooks?</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <b>Code Reusability</b> → Extract common logic (API calls, forms,
            etc.).
          </li>
          <li>
            <b>Separation of Concerns</b> → Keep UI components focused on
            rendering.
          </li>
          <li>
            <b>Consistency</b> → Share the same logic in different parts of the
            app.
          </li>
          <li>
            <b>Testability</b> → Hooks can be tested independently.
          </li>
        </ul>

        <h3 className="font-semibold text-lg">🔹 Example 1: useFetch Hook</h3>
        <pre className="bg-gray-100 p-2 rounded-md mt-1 overflow-x-auto">{`function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("Failed to fetch");
        const result = await res.json();
        if (isMounted) setData(result);
      } catch (err) {
        if (isMounted) setError(err.message);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    fetchData();
    return () => (isMounted = false);
  }, [url]);

  return { data, loading, error };
}`}</pre>

        <h3 className="font-semibold text-lg">🔹 Example 2: useForm Hook</h3>
        <pre className="bg-gray-100 p-2 rounded-md mt-1 overflow-x-auto">{`function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const reset = () => setValues(initialValues);

  return { values, handleChange, reset };
}`}</pre>

        <h3 className="font-semibold text-lg">🔹 Rules for Custom Hooks</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            Must start with <code>use</code> (e.g., useAuth, useFetch).
          </li>
          <li>Can call other hooks but must follow hook rules.</li>
          <li>
            Should contain <b>logic only</b>, no UI rendering.
          </li>
        </ul>

        <p className="bg-blue-50 p-3 rounded-md border-l-4 border-blue-500">
          <b>✅ Interview-Ready Summary:</b>
          <br />
          Custom Hooks are functions that allow reusing stateful logic across
          components. They keep components clean, avoid prop drilling, and
          improve code maintainability. Common examples include{" "}
          <code>useFetch</code>, <code>useForm</code>, and <code>useAuth</code>.
        </p>
      </div>
    ),
  },
  {
    id: 28,
    question: "What is pure functions/components? Explain in details",
    answer: (
      <div className="space-y-4 text-gray-700">
        <p>
          A <b>Pure Function</b> is a function that:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <b>Always returns the same output</b> for the same input.
          </li>
          <li>
            <b>Does not cause side effects</b> (no modifying global vars, DOM,
            or APIs).
          </li>
        </ul>

        <h3 className="font-semibold text-lg">🔹 Example of Pure Function</h3>
        <pre className="bg-gray-100 p-2 rounded-md mt-1 overflow-x-auto">{`function add(a, b) {
  return a + b; // Pure → same input, same output
}`}</pre>

        <h3 className="font-semibold text-lg">❌ Example of Impure Function</h3>
        <pre className="bg-gray-100 p-2 rounded-md mt-1 overflow-x-auto">{`let counter = 0;
function increment() {
  return ++counter; // Impure → depends on external state
}`}</pre>

        <p>
          ✅ Pure functions make programs more <b>predictable</b>,{" "}
          <b>testable</b>, and <b>maintainable</b>.
        </p>

        <h3 className="font-semibold text-lg">
          🔹 What is a Pure Component in React?
        </h3>
        <p>
          A <b>Pure Component</b> is a React component that renders the same
          output if its <b>props</b> and <b>state</b> have not changed. It
          extends <code>React.PureComponent</code> and uses{" "}
          <b>shallow comparison</b> to decide whether to re-render.
        </p>

        <pre className="bg-gray-100 p-2 rounded-md mt-1 overflow-x-auto">{`import React, { PureComponent } from "react";

class Greeting extends PureComponent {
  render() {
    console.log("Rendered!");
    return <h1>Hello, {this.props.name}</h1>;
  }
}

// ✅ Re-renders only if props.name changes`}</pre>

        <h3 className="font-semibold text-lg">🔹 Component vs PureComponent</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <b>Component</b> → Always re-renders when parent re-renders.
          </li>
          <li>
            <b>PureComponent</b> → Skips re-render if shallow comparison shows
            no changes.
          </li>
        </ul>

        <h3 className="font-semibold text-lg">
          🔹 Benefits of Pure Components
        </h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <b>Performance optimization</b> → fewer re-renders.
          </li>
          <li>
            <b>Cleaner and predictable UI</b>.
          </li>
          <li>
            Works well with <b>immutable data</b>.
          </li>
        </ul>

        <h3 className="font-semibold text-lg">🔹 Downsides</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Shallow comparison doesn’t detect deep object changes.</li>
          <li>Not suitable for mutable data structures.</li>
          <li>May complicate debugging if overused.</li>
        </ul>

        <h3 className="font-semibold text-lg">
          🔹 Modern Alternative: React.memo
        </h3>
        <pre className="bg-gray-100 p-2 rounded-md mt-1 overflow-x-auto">{`const Greeting = React.memo(function Greeting({ name }) {
  console.log("Rendered!");
  return <h1>Hello, {name}</h1>;
});`}</pre>

        <p className="bg-blue-50 p-3 rounded-md border-l-4 border-blue-500">
          <b>✅ Interview-Ready Summary:</b>
          <br />- <b>Pure Function</b>: Same input → Same output, no side
          effects. <br />- <b>Pure Component</b>: Optimized React component that
          skips re-renders if props/state don’t change. <br />- Modern React
          uses <b>React.memo</b> for functional components to achieve the same
          effect.
        </p>
      </div>
    ),
  },
  {
    id: 29,
    question: "How to prevent needless re-renders (memo, callbacks, etc.).",
    important: true,
    important: true,
    answer: (
      <div className="space-y-4 text-gray-700">
        <p>
          In React, <b>needless re-renders</b> happen when a component
          re-renders even though its <b>props</b> or <b>state</b> haven’t
          changed. This can hurt performance in large apps.
        </p>

        <h3 className="font-semibold text-lg">🔹 Why it Happens</h3>
        <p>
          React re-renders a component whenever its parent re-renders. If props
          or state remain unchanged, these re-renders are unnecessary and waste
          CPU cycles.
        </p>

        <h3 className="font-semibold text-lg">
          🔹 Techniques to Prevent Needless Re-renders
        </h3>

        <h4 className="font-medium">1. React.memo</h4>
        <p>
          Wrap a functional component with <code>React.memo</code> to skip
          re-rendering when props haven’t changed (shallow comparison).
        </p>
        <pre className="bg-gray-100 p-2 rounded-md mt-1 overflow-x-auto">{`const Child = React.memo(function Child({ name }) {
  console.log("Rendered Child");
  return <h2>Hello, {name}</h2>;
});`}</pre>

        <h4 className="font-medium">2. useCallback Hook</h4>
        <p>
          Memoizes function references to avoid triggering child re-renders when
          passing callbacks as props.
        </p>
        <pre className="bg-gray-100 p-2 rounded-md mt-1 overflow-x-auto">{`const handleClick = useCallback(() => {
  console.log("Button clicked");
}, []);`}</pre>

        <h4 className="font-medium">3. useMemo Hook</h4>
        <p>
          Caches expensive calculations or objects until dependencies change,
          preventing recomputation on every render.
        </p>
        <pre className="bg-gray-100 p-2 rounded-md mt-1 overflow-x-auto">{`const result = useMemo(() => expensiveCalculation(num), [num]);`}</pre>

        <h4 className="font-medium">4. Avoid Inline Functions & Objects</h4>
        <p>
          Inline objects or functions create new references on every render. Use{" "}
          <code>useMemo</code>
          to memoize them.
        </p>
        <pre className="bg-gray-100 p-2 rounded-md mt-1 overflow-x-auto">{`const style = useMemo(() => ({ color: "red" }), []);
<Child style={style} />`}</pre>

        <h4 className="font-medium">5. Split Components</h4>
        <p>
          Break large components into smaller ones to limit re-renders to only
          affected parts.
        </p>

        <h4 className="font-medium">6. Key Prop in Lists</h4>
        <p>
          Use stable, unique <code>key</code> values to help React reuse
          components instead of destroying and recreating them.
        </p>

        <h4 className="font-medium">7. Immutable State Updates</h4>
        <p>
          Always return a new reference when updating state to ensure React
          detects changes.
        </p>
        <pre className="bg-gray-100 p-2 rounded-md mt-1 overflow-x-auto">{`setItems([...items, newItem]); // ✅ correct
items.push(newItem); setItems(items); // ❌ mutation → may not re-render`}</pre>

        <p className="bg-blue-50 p-3 rounded-md border-l-4 border-blue-500">
          <b>✅ Interview-Ready Summary:</b>
          Use <b>React.memo</b> to skip re-renders, <b>useCallback</b> to
          memoize functions,
          <b>useMemo</b> to cache expensive computations, avoid inline
          objects/functions, use immutable state updates, and split components
          for optimal rendering.
        </p>
      </div>
    ),
  },
  {
    id: 30,
    question:
      "What is lazy loading (React.lazy and Suspense), React Suspense. Explain in details",
    important: true,
    answer: (
      <div className="space-y-4 text-gray-700">
        <p>
          In React, <b>lazy loading</b> means loading components only when they
          are needed, instead of loading everything at the initial render. This
          improves performance by reducing the initial bundle size.
        </p>

        <h3 className="font-semibold text-lg">🔹 React.lazy</h3>
        <p>
          <code>React.lazy</code> allows you to dynamically import a component.
          The component is loaded only when it is rendered.
        </p>
        <pre className="bg-gray-100 p-2 rounded-md mt-1 overflow-x-auto">{`import React, { Suspense } from "react";

// Lazy load the component
const Profile = React.lazy(() => import("./Profile"));

function App() {
  return (
    <div>
      <h1>Welcome!</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Profile />
      </Suspense>
    </div>
  );
}`}</pre>
        <p>
          ✅ Must be wrapped inside <code>&lt;Suspense&gt;</code>, which
          provides a <code>fallback</code>
          UI while loading.
        </p>

        <h3 className="font-semibold text-lg">🔹 React Suspense</h3>
        <p>
          <code>Suspense</code> is a wrapper component for handling asynchronous
          rendering. It displays a fallback UI until the lazy-loaded component
          or data is ready.
        </p>
        <pre className="bg-gray-100 p-2 rounded-md mt-1 overflow-x-auto">{`<Suspense fallback={<div>Loading Dashboard...</div>}>
  <Dashboard />
</Suspense>`}</pre>

        <h3 className="font-semibold text-lg">
          🔹 Data Fetching with Suspense (Concurrent Mode)
        </h3>
        <p>
          React's upcoming features allow using <code>Suspense</code> for data
          fetching. The component “suspends” rendering until data is ready.
        </p>
        <pre className="bg-gray-100 p-2 rounded-md mt-1 overflow-x-auto">{`const resource = fetchProfile(); // returns a resource with .read() method

function Profile() {
  const profile = resource.read(); // Suspense shows fallback if data isn't ready
  return <div>{profile.name}</div>;
}

<Suspense fallback={<div>Loading profile...</div>}>
  <Profile />
</Suspense>`}</pre>

        <h3 className="font-semibold text-lg">
          🔹 Benefits of Lazy Loading & Suspense
        </h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <b>Performance:</b> reduces initial bundle size and improves load
            time.
          </li>
          <li>
            <b>User Experience:</b> shows fallback UI instead of blank screens.
          </li>
          <li>
            <b>Scalability:</b> easier to manage large applications.
          </li>
          <li>
            <b>Concurrent Mode Ready:</b> works smoothly with async rendering in
            future React.
          </li>
        </ul>

        <h3 className="font-semibold text-lg">🔹 Key Points</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <b>React.lazy:</b> dynamic import of components.
          </li>
          <li>
            <b>Suspense:</b> shows fallback UI while loading lazy components or
            data.
          </li>
          <li>
            Always wrap lazy-loaded components in <code>&lt;Suspense&gt;</code>.
          </li>
          <li>Helps reduce bundle size and improve performance.</li>
        </ul>

        <p className="bg-blue-50 p-3 rounded-md border-l-4 border-blue-500">
          <b>✅ Interview-Ready Summary:</b>
          <br />
          Lazy loading in React allows components to load only when needed.{" "}
          <code>React.lazy</code>
          is used for dynamic imports and must be wrapped with{" "}
          <code>Suspense</code> to show a fallback UI while loading. This
          improves performance, UX, and makes apps scalable and future-ready for
          concurrent rendering.
        </p>
      </div>
    ),
  },
  {
    id: 31,
    question: "Lifecycle emulation in functional components (hooks).",
    important: true,
    answer: (
      <div className="space-y-4 text-gray-700">
        <p>
          In React, <b>class components</b> have lifecycle methods like
          <code>componentDidMount</code>, <code>componentDidUpdate</code>, and{" "}
          <code>componentWillUnmount</code>. Functional components dont have
          these methods, but we can emulate them using <b>React Hooks</b>.
        </p>

        <h3 className="font-semibold text-lg">🔹 Emulating Mounting</h3>
        <p>
          Use <code>useEffect</code> with an empty dependency array to run code
          after the component mounts.
        </p>
        <pre className="bg-gray-100 p-2 rounded-md mt-1 overflow-x-auto">{`useEffect(() => {
  console.log("Component mounted");
}, []); // runs once after mount`}</pre>

        <h3 className="font-semibold text-lg">🔹 Emulating Updating</h3>
        <p>
          Add dependencies to <code>useEffect</code> to run code whenever a
          state or prop changes.
        </p>
        <pre className="bg-gray-100 p-2 rounded-md mt-1 overflow-x-auto">{`const [count, setCount] = useState(0);

useEffect(() => {
  console.log("Component updated: count =", count);
}, [count]); // runs whenever 'count' changes`}</pre>

        <h3 className="font-semibold text-lg">🔹 Emulating Unmounting</h3>
        <p>
          Return a cleanup function from <code>useEffect</code> to run logic
          before the component unmounts.
        </p>
        <pre className="bg-gray-100 p-2 rounded-md mt-1 overflow-x-auto">{`useEffect(() => {
  return () => {
    console.log("Component will unmount");
  };
}, []); // cleanup runs on unmount`}</pre>

        <h3 className="font-semibold text-lg">
          🔹 Combining All Lifecycle Phases
        </h3>
        <pre className="bg-gray-100 p-2 rounded-md mt-1 overflow-x-auto">{`useEffect(() => {
  console.log("Mounted");
  return () => {
    console.log("Cleanup on unmount");
  };
}, []); // Mount + Unmount

useEffect(() => {
  console.log("Updated");
}); // runs after every render`}</pre>

        <h3 className="font-semibold text-lg">🔹 Key Points</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <b>Mounting:</b> <code>useEffect(() =&gt; {}, [])</code>
          </li>
          <li>
            <b>Updating:</b> <code>useEffect(() =&gt; {}, [dependencies])</code>
          </li>
          <li>
            <b>Unmounting:</b> return a cleanup function inside{" "}
            <code>useEffect</code>
          </li>
          <li>
            <b>useEffect:</b> runs after render, for side-effects
          </li>
          <li>
            <b>useLayoutEffect:</b> runs before painting the DOM, useful for
            measurements
          </li>
        </ul>

        <h3 className="font-semibold text-lg">🔹 Benefits</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Keeps functional components clean and declarative</li>
          <li>Replaces the need for class components to manage lifecycle</li>
          <li>Multiple effects can be combined for different logic</li>
          <li>Hooks make logic reusable and shareable</li>
        </ul>

        <p className="bg-blue-50 p-3 rounded-md border-l-4 border-blue-500">
          <b>✅ Interview-Ready Summary:</b>
          <br />
          Functional components use <code>useEffect</code> and{" "}
          <code>useLayoutEffect</code>
          to emulate lifecycle methods: empty dependency array → Mount,
          dependencies → Update, return cleanup → Unmount. Hooks provide a
          clean, reusable way to manage side-effects and lifecycle behavior.
        </p>
      </div>
    ),
  },
  {
    id: 32,
    question: "How to pass data from child to parent.",
    important: true,
    answer: (
      <div className="space-y-4 text-gray-700">
        <p>
          In React, data flows <b>unidirectionally</b>: from parent to child via
          props. To pass data from <b>child to parent</b>, the parent provides a
          callback function as a prop. The child calls this function with data,
          allowing the parent to receive and handle it.
        </p>

        <h3 className="font-semibold text-lg">🔹 Parent Component</h3>
        <p>
          Define a function in the parent to handle data from the child, and
          pass it as a prop.
        </p>
        <pre className="bg-gray-100 p-2 rounded-md mt-1 overflow-x-auto">{`function Parent() {
  const handleData = (childData) => {
    console.log("Data from child:", childData);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <Child onSendData={handleData} />
    </div>
  );
}`}</pre>

        <h3 className="font-semibold text-lg">🔹 Child Component</h3>
        <p>
          Call the parent function with data when an event occurs (like a button
          click).
        </p>
        <pre className="bg-gray-100 p-2 rounded-md mt-1 overflow-x-auto">{`function Child({ onSendData }) {
  const sendData = () => {
    const data = "Hello from Child!";
    onSendData(data); // send data to parent
  };

  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={sendData}>Send Data to Parent</button>
    </div>
  );
}`}</pre>

        <h3 className="font-semibold text-lg">🔹 Key Points</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            Parent passes a <b>function as a prop</b> to the child.
          </li>
          <li>Child calls the function with data as an argument.</li>
          <li>
            Parent receives the data and can update state or perform actions.
          </li>
          <li>
            This preserves <b>one-way data flow</b> in React.
          </li>
        </ul>

        <h3 className="font-semibold text-lg">🔹 Common Patterns</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Form inputs → child passes input values to parent.</li>
          <li>
            Component communication → child triggers events, parent handles
            logic.
          </li>
          <li>Dynamic updates → parent updates based on child actions.</li>
        </ul>

        <p className="bg-blue-50 p-3 rounded-md border-l-4 border-blue-500">
          <b>✅ Interview-Ready Summary:</b>
          <br />
          React enforces unidirectional data flow. To send data from child to
          parent, pass a callback function from the parent to the child as a
          prop. The child calls this function with data, enabling the parent to
          receive and handle it. This is essential for <b>state lifting</b> and
          centralized data management.
        </p>
      </div>
    ),
  },
  {
    id: 33,
    question: "Basic unit testing of components.",
    answer:
      "Use Jest and React Testing Library. Test rendering, user events, and props handling.",
  },
  {
    id: 34,
    question: "What are error boundaries?",
    important: true,
    answer: (
      <div className="space-y-4 text-gray-700">
        <p>
          In React,{" "}
          <b>functional components cannot directly act as error boundaries</b>
          because the React API for error boundaries (
          <code>getDerivedStateFromError</code>
          and <code>componentDidCatch</code>) is only available in class
          components.
        </p>

        <h3 className="font-semibold text-lg">
          🔹 Wrapping Functional Components with Class-Based Error Boundary
        </h3>
        <p>
          You can protect functional components by wrapping them with a
          class-based error boundary.
        </p>
        <pre className="bg-gray-100 p-2 rounded-md mt-1 overflow-x-auto">{`<ErrorBoundary>
  <MyFunctionalComponent />
</ErrorBoundary>`}</pre>
        <p>
          ✅ Any error in <code>MyFunctionalComponent</code> will trigger the
          fallback UI.
        </p>

        <h3 className="font-semibold text-lg">
          🔹 Using try-catch in Event Handlers
        </h3>
        <p>
          Errors in functional components can be handled manually within event
          handlers.
        </p>
        <pre className="bg-gray-100 p-2 rounded-md mt-1 overflow-x-auto">{`function MyComponent() {
  const handleClick = () => {
    try {
      // code that might throw
    } catch (error) {
      console.log("Error caught in handler:", error);
    }
  };

  return <button onClick={handleClick}>Click Me</button>;
}`}</pre>

        <h3 className="font-semibold text-lg">
          🔹 Using Third-Party Libraries (react-error-boundary)
        </h3>
        <p>
          Libraries like <code>react-error-boundary</code> allow functional
          components to emulate error boundaries with hooks.
        </p>
        <pre className="bg-gray-100 p-2 rounded-md mt-1 overflow-x-auto">{`import { ErrorBoundary } from 'react-error-boundary';

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div>
      <p>Something went wrong: {error.message}</p>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

<ErrorBoundary FallbackComponent={ErrorFallback}>
  <MyFunctionalComponent />
</ErrorBoundary>`}</pre>

        <h3 className="font-semibold text-lg">🔹 Key Points</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            Functional components <b>cannot directly be error boundaries</b>.
          </li>
          <li>
            Wrap functional components in class-based error boundaries for
            protection.
          </li>
          <li>
            Use <code>try-catch</code> in event handlers for local error
            handling.
          </li>
          <li>
            Libraries like <code>react-error-boundary</code> enable hooks-style
            error handling.
          </li>
          <li>
            Fallback UI improves user experience and prevents app crashes.
          </li>
        </ul>

        <p className="bg-blue-50 p-3 rounded-md border-l-4 border-blue-500">
          <b>✅ Interview-Ready Summary:</b>
          <br />
          Functional components cannot natively be error boundaries. Use a
          class-based error boundary to wrap them, handle errors in event
          handlers with try-catch, or use third-party libraries like{" "}
          <code>react-error-boundary</code> to emulate error boundaries with
          hooks. Always provide fallback UI for better UX.
        </p>
      </div>
    ),
  },
  {
    id: 35,
    question: "useImperativeHandle, forwardRef.",
    answer:
      "forwardRef passes refs to child components. useImperativeHandle customizes the ref’s exposed methods.",
  },
  {
    id: 36,
    question: "What is Tree-shaking and bundler features (Webpack, Parcel).",
    important: true,
    answer: (
      <div className="space-y-4 text-gray-700">
        <p>
          <b>Tree-shaking</b> is a JavaScript optimization technique used by
          modern bundlers to <b>remove unused code</b> from the final bundle. It
          reduces bundle size, improves performance, and removes dead code. The
          name comes from “shaking the tree” – unused branches (code) are
          removed.
        </p>

        <h3 className="font-semibold text-lg">🔹 How Tree-Shaking Works</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            Bundler analyzes ES6 <code>import/export</code> statements.
          </li>
          <li>Identifies code that is never used in the project.</li>
          <li>Excludes unused code from the final bundle.</li>
        </ul>
        <pre className="bg-gray-100 p-2 rounded-md mt-1 overflow-x-auto">{`// utils.js
export function used() { return "I am used"; }
export function unused() { return "I am not used"; }

// main.js
import { used } from "./utils";
console.log(used()); // unused() will be removed in final bundle`}</pre>

        <h3 className="font-semibold text-lg">🔹 Bundlers</h3>

        <h4 className="font-semibold text-md">1. Webpack</h4>
        <p>Highly configurable module bundler with features like:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <b>Code Splitting:</b> Split code into smaller chunks for lazy
            loading.
          </li>
          <li>
            <b>Tree-Shaking:</b> Removes unused ES6 code from bundle.
          </li>
          <li>
            <b>Loaders:</b> Transform files (JSX, TypeScript, CSS, etc.).
          </li>
          <li>
            <b>Plugins:</b> Optimize, minify, inject environment variables.
          </li>
        </ul>

        <h4 className="font-semibold text-md">2. Parcel</h4>
        <p>Zero-config bundler with built-in support for modern features:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Automatic code splitting.</li>
          <li>Tree-shaking out of the box.</li>
          <li>Hot Module Replacement (HMR) for faster development.</li>
          <li>Minimal configuration compared to Webpack.</li>
        </ul>

        <h3 className="font-semibold text-lg">
          🔹 Benefits of Tree-Shaking & Bundlers
        </h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Smaller bundle size → faster load times.</li>
          <li>Better performance → less JavaScript to parse.</li>
          <li>Cleaner code → unused modules removed automatically.</li>
          <li>Improved scalability → easier to manage large codebases.</li>
        </ul>

        <p className="bg-blue-50 p-3 rounded-md border-l-4 border-blue-500">
          <b>✅ Interview-Ready Summary:</b>
          <br />
          Tree-shaking removes unused code from the final bundle. Webpack is a
          highly configurable bundler with loaders, plugins, tree-shaking, and
          code splitting. Parcel is a zero-config bundler with automatic
          tree-shaking, code splitting, and HMR. Using these ensures smaller,
          faster, and maintainable React apps.
        </p>
      </div>
    ),
  },
  {
    id: 37,
    question: "Explain CORS, CSP, and XSS.",
    answer: (
      <div className="space-y-4 text-gray-700">
        <p>
          Understanding <b>CORS</b>, <b>CSP</b>, and <b>XSS</b> is essential for
          securing React applications and web APIs.
        </p>

        <h3 className="font-semibold text-lg">
          🔹 1. CORS (Cross-Origin Resource Sharing)
        </h3>
        <p>
          CORS is a browser security feature that controls how a web page can
          make requests to a <b>different domain (origin)</b>. It prevents
          malicious websites from accessing sensitive data.
        </p>
        <pre className="bg-gray-100 p-2 rounded-md mt-1 overflow-x-auto">{`GET /data HTTP/1.1
Origin: https://example.com

HTTP/1.1 200 OK
Access-Control-Allow-Origin: https://example.com`}</pre>
        <p>
          ✅ Only requests from allowed origins succeed; others are blocked by
          the browser.
        </p>

        <h3 className="font-semibold text-lg">
          🔹 2. CSP (Content Security Policy)
        </h3>
        <p>
          CSP is a security mechanism that prevents XSS and other injection
          attacks by specifying which content sources are allowed.
        </p>
        <pre className="bg-gray-100 p-2 rounded-md mt-1 overflow-x-auto">{`Content-Security-Policy: default-src 'self'; img-src https://images.com; script-src 'self' https://apis.com`}</pre>
        <p>
          ✅ Only scripts, styles, and images from allowed sources can run or
          load.
        </p>

        <h3 className="font-semibold text-lg">
          🔹 3. XSS (Cross-Site Scripting)
        </h3>
        <p>
          XSS is a security vulnerability where an attacker injects{" "}
          <b>malicious scripts</b>
          into web pages viewed by other users.
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <b>Stored XSS:</b> Script saved on server (e.g., database)
          </li>
          <li>
            <b>Reflected XSS:</b> Script reflected from server in response
          </li>
          <li>
            <b>DOM-based XSS:</b> Script executed via DOM manipulation
          </li>
        </ul>
        <p>
          ✅ Prevention: use CSP, sanitize and escape user input, avoid
          <code>dangerouslySetInnerHTML</code> unless necessary.
        </p>

        <h3 className="font-semibold text-lg">🔹 Key Points</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <b>CORS:</b> Controls cross-origin requests; enforced by browser.
          </li>
          <li>
            <b>CSP:</b> Restricts allowed content sources; prevents malicious
            scripts.
          </li>
          <li>
            <b>XSS:</b> Malicious script injection; prevent with CSP and input
            sanitization.
          </li>
        </ul>

        <p className="bg-blue-50 p-3 rounded-md border-l-4 border-blue-500">
          <b>✅ Interview-Ready Summary:</b>
          <br />- <b>CORS</b>: Browser enforces which domains can access server
          resources.
          <br />- <b>CSP</b>: Restricts sources of content to prevent XSS
          attacks.
          <br />- <b>XSS</b>: Malicious scripts injected into web pages; prevent
          using CSP, input sanitization, and escaping.
          <br />
          These security mechanisms together help build safe and reliable React
          applications.
        </p>
      </div>
    ),
  },
  {
    id: 38,
    question: "What is Accessibility (A11y)? common issues and solutions.",
    answer: (
      <div className="space-y-4 text-gray-700">
        <p>
          <b>Accessibility (A11y)</b> ensures that web applications can be used
          by everyone, including people with visual, auditory, motor, or
          cognitive disabilities. In React, it means making components, forms,
          buttons, and navigation usable for screen readers, keyboard users, and
          other assistive technologies. (A11y = A + 11 letters + y)
        </p>

        <h3 className="font-semibold text-lg">
          🔹 Common Accessibility Issues
        </h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <b>Missing alt text on images:</b> Screen readers cannot describe
            images.
          </li>
          <li>
            <b>Insufficient color contrast:</b> Text is hard to read for
            visually impaired users.
          </li>
          <li>
            <b>Non-semantic HTML:</b> Using <code>&lt;div&gt;</code> instead of{" "}
            <code>&lt;button&gt;</code> or <code>&lt;header&gt;</code>.
          </li>
          <li>
            <b>Keyboard navigation issues:</b> Interactive elements not
            accessible via Tab/Enter/Space.
          </li>
          <li>
            <b>Missing ARIA attributes:</b> Screen readers may not understand
            dynamic content.
          </li>
          <li>
            <b>Poor focus management:</b> Focus not set correctly after modals
            or content updates.
          </li>
        </ul>

        <h3 className="font-semibold text-lg">🔹 Solutions & Best Practices</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <b>Use semantic HTML:</b> &lt;button&gt;, &lt;header&gt;,
            &lt;main&gt;, etc.
          </li>
          <li>
            <b>Provide alt text for images:</b>
            <pre className="bg-gray-100 p-2 rounded-md mt-1 overflow-x-auto">{`<img src="logo.png" alt="Company Logo" />`}</pre>
          </li>
          <li>
            <b>Ensure sufficient color contrast:</b> Use tools like Lighthouse
            or contrast checkers.
          </li>
          <li>
            <b>Keyboard accessibility:</b> All interactive elements reachable
            via Tab and activatable with Enter/Space.
          </li>
          <li>
            <b>Use ARIA roles and attributes:</b>
            <pre className="bg-gray-100 p-2 rounded-md mt-1 overflow-x-auto">{`<button aria-label="Close modal">X</button>
<div role="alert">Error occurred!</div>`}</pre>
          </li>
          <li>
            <b>Focus management:</b> Move focus to modals and return focus to
            previously focused element after closing.
          </li>
          <li>
            <b>Testing:</b> Use Lighthouse, axe, React Axe, or screen readers.
          </li>
        </ul>

        <p className="bg-blue-50 p-3 rounded-md border-l-4 border-blue-500">
          <b>✅ Interview-Ready Summary:</b>
          <br />
          Accessibility (A11y) ensures web apps are usable by all users. Common
          issues include missing alt text, poor color contrast, non-semantic
          HTML, keyboard navigation issues, missing ARIA attributes, and poor
          focus management. Solutions include semantic HTML, alt text, proper
          color contrast, keyboard support, ARIA attributes, focus management,
          and testing with accessibility tools.
        </p>
      </div>
    ),
  },
  {
    id: 39,
    question: "What are the Performance optimization techniques in React?",
    important: true,
    important: true,
    answer: (
      <div className="space-y-4 text-gray-700">
        <p>
          Optimizing performance in React is essential for fast, responsive, and
          scalable applications. Here are the main techniques to improve React
          performance.
        </p>

        <h3 className="font-semibold text-lg">🔹 1. React.memo</h3>
        <p>
          Wrap functional components with <code>React.memo</code> to prevent
          unnecessary re-renders when props havent changed.
        </p>
        <pre className="bg-gray-100 p-2 rounded-md mt-1 overflow-x-auto">{`const MyComponent = React.memo(({ data }) => {
  return <div>{data}</div>;
});`}</pre>

        <h3 className="font-semibold text-lg">🔹 2. useMemo Hook</h3>
        <p>
          Memoizes expensive calculations to avoid recalculating on every
          render.
        </p>
        <pre className="bg-gray-100 p-2 rounded-md mt-1 overflow-x-auto">{`const computedValue = useMemo(() => expensiveCalculation(data), [data]);`}</pre>

        <h3 className="font-semibold text-lg">🔹 3. useCallback Hook</h3>
        <p>
          Memoizes callback functions to prevent creating new instances on each
          render.
        </p>
        <pre className="bg-gray-100 p-2 rounded-md mt-1 overflow-x-auto">{`const handleClick = useCallback(() => {
  console.log("Clicked!");
}, []);`}</pre>

        <h3 className="font-semibold text-lg">
          🔹 4. Code Splitting / Lazy Loading
        </h3>
        <p>
          Split large bundles into smaller chunks and load only what’s needed.
        </p>
        <pre className="bg-gray-100 p-2 rounded-md mt-1 overflow-x-auto">{`const LazyComponent = React.lazy(() => import('./LazyComponent'));
<Suspense fallback={<div>Loading...</div>}><LazyComponent /></Suspense>`}</pre>

        <h3 className="font-semibold text-lg">🔹 5. Virtualization</h3>
        <p>
          Render only visible items in long lists using libraries like{" "}
          <code>react-window</code> or
          <code>react-virtualized</code> to reduce DOM nodes.
        </p>

        <h3 className="font-semibold text-lg">
          🔹 6. Avoid Anonymous Functions in JSX
        </h3>
        <p>
          Define functions outside JSX or use <code>useCallback</code> to avoid
          new references on each render.
        </p>

        <h3 className="font-semibold text-lg">🔹 7. Optimizing Re-Renders</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Lift state only when necessary.</li>
          <li>
            Use proper <code>key</code> props in lists.
          </li>
          <li>Avoid unnecessary context updates.</li>
        </ul>

        <h3 className="font-semibold text-lg">🔹 8. Immutable State Updates</h3>
        <p>Use immutability so React can efficiently detect changes.</p>
        <pre className="bg-gray-100 p-2 rounded-md mt-1 overflow-x-auto">{`const newState = [...state]; // instead of mutating the array`}</pre>

        <h3 className="font-semibold text-lg">🔹 9. Use Production Build</h3>
        <p>
          Run <code>npm run build</code> to create optimized, minified bundles
          for better runtime performance.
        </p>

        <h3 className="font-semibold text-lg">🔹 10. Avoid Memory Leaks</h3>
        <p>
          Clean up side effects in <code>useEffect</code> to prevent memory
          leaks.
        </p>
        <pre className="bg-gray-100 p-2 rounded-md mt-1 overflow-x-auto">{`useEffect(() => {
  const handleScroll = () => console.log('scrolling');
  window.addEventListener('scroll', handleScroll);

  return () => window.removeEventListener('scroll', handleScroll);
}, []);`}</pre>

        <p className="bg-blue-50 p-3 rounded-md border-l-4 border-blue-500">
          <b>✅ Interview-Ready Summary:</b>
          <br />
          React performance optimization includes using <code>
            React.memo
          </code>, <code>useMemo</code>, and <code>useCallback</code> to prevent
          unnecessary re-renders, code splitting and lazy loading to reduce
          bundle size, virtualization for long lists, immutable state updates,
          proper key usage, cleaning up side effects, and using production
          builds. These techniques ensure fast, scalable, and maintainable React
          applications.
        </p>
      </div>
    ),
  },
  {
    id: 40,
    question:
      "What are SSR vs CSR? How to choose? What parameters to consider?",
    important: true,
    answer: (
      <div className="space-y-4 text-gray-700">
        <p>
          Understanding <b>CSR (Client-Side Rendering)</b> vs{" "}
          <b>SSR (Server-Side Rendering)</b>
          is crucial for building React applications with optimized performance
          and SEO.
        </p>

        <h3 className="font-semibold text-lg">
          🔹 1. CSR (Client-Side Rendering)
        </h3>
        <p>
          In CSR, the browser downloads a minimal HTML page and renders the UI
          using JavaScript on the client side.
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <b>How it works:</b> Browser downloads <code>index.html</code> → JS
            bundle executed → React renders components dynamically.
          </li>
          <li>
            <b>Pros:</b> Rich interactivity, faster subsequent navigation, less
            server load.
          </li>
          <li>
            <b>Cons:</b> Slower initial load, SEO may be limited without
            pre-rendering.
          </li>
        </ul>

        <h3 className="font-semibold text-lg">
          🔹 2. SSR (Server-Side Rendering)
        </h3>
        <p>
          In SSR, the server renders React components into HTML before sending
          them to the browser.
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <b>How it works:</b> Client requests page → Server executes React
            components → Sends fully rendered HTML → Browser hydrates React for
            interactivity.
          </li>
          <li>
            <b>Pros:</b> Faster initial load, SEO-friendly.
          </li>
          <li>
            <b>Cons:</b> Higher server load, more complex setup (hydration,
            caching).
          </li>
        </ul>

        <h3 className="font-semibold text-lg">🔹 3. How to Choose?</h3>
        <table className="table-auto border-collapse border border-gray-300 w-full text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-2 py-1">Parameter</th>
              <th className="border border-gray-300 px-2 py-1">CSR</th>
              <th className="border border-gray-300 px-2 py-1">SSR</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-2 py-1">
                Initial Load Speed
              </td>
              <td className="border border-gray-300 px-2 py-1">Slower</td>
              <td className="border border-gray-300 px-2 py-1">Faster</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-2 py-1">SEO</td>
              <td className="border border-gray-300 px-2 py-1">Poor</td>
              <td className="border border-gray-300 px-2 py-1">Excellent</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-2 py-1">Server Load</td>
              <td className="border border-gray-300 px-2 py-1">Low</td>
              <td className="border border-gray-300 px-2 py-1">High</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-2 py-1">
                Interactivity
              </td>
              <td className="border border-gray-300 px-2 py-1">Rich</td>
              <td className="border border-gray-300 px-2 py-1">
                Rich (after hydration)
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-2 py-1">Complexity</td>
              <td className="border border-gray-300 px-2 py-1">Low</td>
              <td className="border border-gray-300 px-2 py-1">Higher</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-2 py-1">Use Case</td>
              <td className="border border-gray-300 px-2 py-1">
                SPAs like dashboards, apps where SEO isn’t critical
              </td>
              <td className="border border-gray-300 px-2 py-1">
                Blogs, e-commerce, landing pages needing SEO
              </td>
            </tr>
          </tbody>
        </table>

        <p className="bg-blue-50 p-3 rounded-md border-l-4 border-blue-500">
          <b>✅ Interview-Ready Summary:</b>
          <br />
          CSR renders UI on the client using JavaScript, has slower initial
          load, and is suitable for SPAs. SSR renders UI on the server, delivers
          faster initial load, and is SEO-friendly. Choose between them based on
          initial load speed, SEO needs, server resources, and application
          complexity.
        </p>
      </div>
    ),
  },
  {
    id: 41,
    question: "What is hydration? ISR vs SSG (Next.js).",
    important: true,
    answer: (
      <div className="space-y-4 text-gray-700">
        <p>
          In <b>Next.js</b>, understanding <b>Hydration</b>, <b>SSG</b> (Static
          Site Generation), and <b>ISR</b> (Incremental Static Regeneration) is
          essential for building fast, SEO-friendly React applications.
        </p>

        <h3 className="font-semibold text-lg">🔹 1. Hydration</h3>
        <p>
          Hydration is the process where React attaches event listeners and
          interactivity to the HTML that was pre-rendered on the server.
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Server renders HTML using SSR or SSG.</li>
          <li>Browser loads HTML and displays content immediately.</li>
          <li>
            React’s JavaScript bundle runs and hydrates the static HTML,
            enabling interactivity.
          </li>
        </ul>
        <p className="text-sm text-gray-600">
          ✅ Provides fast initial load and allows React to manage the DOM.
        </p>

        <h3 className="font-semibold text-lg">
          🔹 2. SSG (Static Site Generation)
        </h3>
        <p>Next.js generates static HTML pages at build time.</p>
        <ul className="list-disc list-inside space-y-1">
          <li>
            Pages are pre-rendered during <code>next build</code>.
          </li>
          <li>Served directly from CDN → very fast initial load.</li>
          <li>SEO-friendly and ideal for mostly static content.</li>
        </ul>
        <p className="text-sm text-gray-600">
          ❌ Not suitable for highly dynamic content; site rebuild needed for
          updates.
        </p>

        <h3 className="font-semibold text-lg">
          🔹 3. ISR (Incremental Static Regeneration)
        </h3>
        <p>
          ISR allows static pages to be updated after build time without
          rebuilding the entire site.
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>
            Specify <code>revalidate</code> time in seconds for a page.
          </li>
          <li>
            Next.js regenerates the page in the background after the interval.
          </li>
          <li>
            Users get cached content immediately while updated page is
            generated.
          </li>
        </ul>
        <p className="text-sm text-gray-600">
          ✅ Combines benefits of SSG (speed) and SSR (fresh content).
        </p>

        <h3 className="font-semibold text-lg">🔹 4. When to Use</h3>
        <table className="table-auto border-collapse border border-gray-300 w-full text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-2 py-1">Feature</th>
              <th className="border border-gray-300 px-2 py-1">Use Case</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-2 py-1">SSG</td>
              <td className="border border-gray-300 px-2 py-1">
                Static content like blogs, landing pages, documentation
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-2 py-1">ISR</td>
              <td className="border border-gray-300 px-2 py-1">
                Content that changes occasionally, like e-commerce products or
                marketing pages
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-2 py-1">SSR</td>
              <td className="border border-gray-300 px-2 py-1">
                Highly dynamic content, user-specific pages, dashboards
              </td>
            </tr>
          </tbody>
        </table>

        <p className="bg-blue-50 p-3 rounded-md border-l-4 border-blue-500">
          <b>✅ Interview-Ready Summary:</b>
          <br />
          Hydration attaches React interactivity to server-rendered HTML. SSG
          generates static pages at build time → fast and SEO-friendly. ISR
          regenerates pages in the background after a set interval → combines
          speed and updated content. Choose based on content dynamics, SEO
          needs, and performance requirements.
        </p>
      </div>
    ),
  },
  {
    id: 42,
    question:
      "In SSR javascript file sent to browser or only html, please explain?",
    important: true,
    answer: (
      <div className="space-y-4 text-gray-700">
        <p>
          In <b>SSR (Server-Side Rendering)</b>, understanding what is sent to
          the browser is crucial. Both <b>HTML</b> and <b>JavaScript</b> are
          involved, serving different purposes.
        </p>

        <h3 className="font-semibold text-lg">🔹 1. HTML Sent to Browser</h3>
        <p>
          - The server pre-renders React components into{" "}
          <b>fully-rendered HTML</b>. - This HTML is sent first to the browser,
          so users can see the content immediately.
        </p>
        <pre className="bg-gray-100 p-2 rounded-md mt-1 overflow-x-auto">{`<div id="root">
  <h1>Hello World</h1>
</div>`}</pre>
        <p className="text-sm text-gray-600">
          ✅ Fast initial load and SEO-friendly because the content is visible
          without JS.
        </p>

        <h3 className="font-semibold text-lg">
          🔹 2. JavaScript Bundle Sent to Browser
        </h3>
        <p>
          - The browser also downloads the React <b>JavaScript bundle</b>. - JS
          is used for <b>hydration</b> — attaching event listeners and making
          the page interactive. - Without JS, the page content appears, but
          dynamic features (like clicks, forms, routing) won’t work.
        </p>
        <pre className="bg-gray-100 p-2 rounded-md mt-1 overflow-x-auto">{`// JS bundle hydrates the pre-rendered HTML
ReactDOM.hydrate(
  <App />,
  document.getElementById('root')
);`}</pre>

        <h3 className="font-semibold text-lg">
          🔹 3. How SSR Works Step-by-Step
        </h3>
        <ol className="list-decimal list-inside space-y-1">
          <li>Client requests a page.</li>
          <li>
            Server renders React components to HTML and sends it to the browser.
          </li>
          <li>Browser displays the HTML immediately (fast initial render).</li>
          <li>Browser downloads the JavaScript bundle.</li>
          <li>
            React hydrates the HTML → attaches event listeners, enables
            client-side interactivity.
          </li>
        </ol>

        <h3 className="font-semibold text-lg">🔹 4. Key Points</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            SSR <b>does not skip JavaScript</b>; it pre-renders HTML for fast
            rendering.
          </li>
          <li>HTML → visible immediately, good for SEO and user experience.</li>
          <li>
            JS → hydrates HTML, enabling React interactivity and dynamic
            updates.
          </li>
        </ul>

        <p className="bg-blue-50 p-3 rounded-md border-l-4 border-blue-500">
          <b>✅ Interview-Ready Summary:</b>
          <br />
          SSR sends both pre-rendered <b>HTML</b> and <b>JS bundle</b> to the
          browser. HTML provides a fast initial render, while JS hydrates the
          content to enable React’s interactivity, such as event handling,
          forms, and client-side routing.
        </p>
      </div>
    ),
  },
  {
    id: 43,
    question:
      "What is React Fiber architecture, concurrent vs synchronous rendering.",
    important: true,
    important: true,
    answer: (
      <div className="space-y-4 text-gray-700">
        <p>
          Understanding <b>React Fiber architecture</b> and{" "}
          <b>concurrent vs synchronous rendering</b> is crucial for building
          performant React applications.
        </p>

        <h3 className="font-semibold text-lg">
          🔹 1. React Fiber Architecture
        </h3>
        <p>
          React Fiber is the reimplementation of React’s core reconciliation
          algorithm introduced in React 16 to make rendering more responsive and
          efficient.
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <b>Problem with old stack:</b> Synchronous rendering blocked the
            main thread for large component trees.
          </li>
          <li>
            <b>Fiber solution:</b> Uses a linked-list tree of Fiber nodes
            representing each component, enabling incremental, interruptible
            rendering.
          </li>
        </ul>

        <h3 className="font-semibold text-lg">🔹 Key Concepts in Fiber</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <b>Fiber Node:</b> Each component has a Fiber node containing type,
            props, state, and links to parent/child/sibling.
          </li>
          <li>
            <b>Unit of Work:</b> Each Fiber node is a unit of work; React can
            pause, abort, or continue work based on priority.
          </li>
          <li>
            <b>Priority Levels:</b> High priority → user interactions &
            animations; Low priority → off-screen content.
          </li>
          <li>
            <b>Double Pass Rendering:</b> Render Phase → calculates changes;
            Commit Phase → applies changes to the DOM.
          </li>
        </ul>

        <h3 className="font-semibold text-lg">
          🔹 2. Synchronous Rendering (Old Stack)
        </h3>
        <p>
          - React renders the whole component tree in one go, blocking the
          browser until done.
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Pros: Simple and predictable.</li>
          <li>
            Cons: Large trees cause UI freezes; updates cannot be interrupted.
          </li>
        </ul>

        <h3 className="font-semibold text-lg">
          🔹 3. Concurrent Rendering (Fiber)
        </h3>
        <p>
          - React can pause, prioritize, and resume rendering tasks, enabling
          smoother UI.
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Smooth UI even during heavy updates.</li>
          <li>Time-slicing: Splits rendering into multiple frames.</li>
          <li>
            Supports modern features like <b>Suspense</b> and lazy loading
            components.
          </li>
          <li>
            User interactions and animations remain responsive while rendering
            large lists.
          </li>
        </ul>

        <h3 className="font-semibold text-lg">
          🔹 4. Key Differences: Synchronous vs Concurrent
        </h3>
        <table className="table-auto border-collapse border border-gray-300 w-full text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-2 py-1">Feature</th>
              <th className="border border-gray-300 px-2 py-1">Synchronous</th>
              <th className="border border-gray-300 px-2 py-1">
                Concurrent (Fiber)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-2 py-1">Rendering</td>
              <td className="border border-gray-300 px-2 py-1">
                Blocking, one pass
              </td>
              <td className="border border-gray-300 px-2 py-1">
                Interruptible, incremental
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-2 py-1">
                Responsiveness
              </td>
              <td className="border border-gray-300 px-2 py-1">
                Can freeze UI
              </td>
              <td className="border border-gray-300 px-2 py-1">
                Smooth, responsive
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-2 py-1">Priority</td>
              <td className="border border-gray-300 px-2 py-1">
                No prioritization
              </td>
              <td className="border border-gray-300 px-2 py-1">
                High-priority updates first
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-2 py-1">Complexity</td>
              <td className="border border-gray-300 px-2 py-1">Simple</td>
              <td className="border border-gray-300 px-2 py-1">
                More complex internal algorithm
              </td>
            </tr>
          </tbody>
        </table>

        <p className="bg-blue-50 p-3 rounded-md border-l-4 border-blue-500">
          <b>✅ Interview-Ready Summary:</b>
          <br />
          React Fiber is a linked-list based reconciliation engine enabling
          incremental and prioritized rendering. Synchronous rendering blocks
          the main thread, whereas concurrent rendering allows smooth UI,
          time-slicing, and prioritization. This improves performance and
          responsiveness in modern React applications.
        </p>
      </div>
    ),
  },
  {
    id: 44,
    question:
      "What is Virtual DOM? How it is working behiend the scene? How compare between two Virtual DOM? Explain every thing in deep.",
    important: true,
    important: true,
    answer: (
      <div className="space-y-4 text-gray-700">
        <p>
          In <b>React</b>, the <b>Virtual DOM (VDOM)</b> is a lightweight
          JavaScript representation of the actual DOM. It allows React to
          efficiently update the UI without manipulating the real DOM on every
          change.
        </p>

        <h3 className="font-semibold text-lg">🔹 1. What is Virtual DOM?</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>VDOM is a JavaScript object tree representing the UI.</li>
          <li>It helps React avoid slow direct DOM operations.</li>
          <li>
            Think of VDOM as a blueprint of the UI; changes are applied to the
            blueprint first, then to the actual DOM.
          </li>
        </ul>

        <h3 className="font-semibold text-lg">🔹 2. How Virtual DOM Works</h3>
        <ol className="list-decimal list-inside space-y-1">
          <li>Initial render: JSX → React elements → Virtual DOM tree.</li>
          <li>
            State/props update: React creates a new Virtual DOM reflecting
            changes.
          </li>
          <li>
            Diffing (Reconciliation): React compares old VDOM and new VDOM to
            detect changes.
          </li>
          <li>Patch minimal changes to the real DOM only.</li>
        </ol>

        <h3 className="font-semibold text-lg">
          🔹 3. Comparing Two Virtual DOMs
        </h3>
        <p>
          React performs <b>reconciliation</b> using the diffing algorithm:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>If node type differs → replace the DOM node.</li>
          <li>If node type is same → update only changed props or text.</li>
          <li>
            For lists, use <b>keys</b> to efficiently match and update nodes.
          </li>
        </ul>
        <pre className="bg-gray-100 p-2 rounded-md mt-1 overflow-x-auto">{`Old VDOM: <ul><li key="1">A</li><li key="2">B</li></ul>
New VDOM: <ul><li key="1">A</li><li key="2">C</li></ul>`}</pre>
        <p className="text-sm text-gray-600">
          ✅ Only the second &lt;li&gt; node is updated in the real DOM.
        </p>

        <h3 className="font-semibold text-lg">🔹 4. Updating the Actual DOM</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>React applies patches calculated from VDOM diff.</li>
          <li>Only modified nodes or attributes are updated.</li>
          <li>This minimizes reflows and repaints, improving performance.</li>
          <li>Direct DOM manipulation outside React may break VDOM sync.</li>
        </ul>

        <h3 className="font-semibold text-lg">
          🔹 5. Advantages of Virtual DOM
        </h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Faster updates by reducing unnecessary DOM operations.</li>
          <li>Predictable UI; always consistent with React state.</li>
          <li>Efficient diffing using reconciliation algorithm.</li>
          <li>
            Enables advanced features like time-slicing and concurrent
            rendering.
          </li>
        </ul>

        <p className="bg-blue-50 p-3 rounded-md border-l-4 border-blue-500">
          <b>✅ Interview-Ready Summary:</b>
          <br />
          The <b>Virtual DOM</b> is a JS representation of the real DOM. React
          updates state/props → creates new VDOM → diffs it with previous VDOM →
          applies only minimal patches to the real DOM. This approach makes UI
          updates faster, predictable, and efficient, especially in complex
          React applications.
        </p>
      </div>
    ),
  },
  {
    id: 45,
    question: "What is React 18’s concurrent mode improvements.",
    important: true,
    answer: (
      <div className="space-y-4 text-gray-700">
        <p>
          <b>React 18</b> introduces <b>Concurrent Mode</b>, which allows React
          to prepare multiple UI updates simultaneously without blocking the
          main thread, improving responsiveness and user experience.
        </p>

        <h3 className="font-semibold text-lg">
          🔹 1. What is Concurrent Mode?
        </h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Allows interruptible and prioritized rendering of components.</li>
          <li>
            Ensures urgent updates (like typing) happen first, while non-urgent
            updates (like list rendering) can wait.
          </li>
          <li>Improves overall app responsiveness and smoothness.</li>
        </ul>

        <h3 className="font-semibold text-lg">🔹 2. Why It’s Needed</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            Traditional React rendering is synchronous → large component trees
            can block the UI.
          </li>
          <li>
            Concurrent Mode introduces time-slicing → splitting rendering into
            chunks for smoother updates.
          </li>
        </ul>

        <h3 className="font-semibold text-lg">
          🔹 3. Key Features in React 18
        </h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <b>Automatic Batching:</b> Batches state updates from any source
            (events, promises, timeouts), reducing unnecessary renders.
          </li>
          <li>
            <b>Transitions:</b> Separate urgent vs non-urgent updates.
            Non-urgent updates can be interrupted by high-priority tasks.{" "}
            <code>startTransition()</code>
          </li>
          <li>
            <b>Concurrent Rendering:</b> React can pause, resume, or abandon
            low-priority updates for a smoother UI.
          </li>
          <li>
            <b>Suspense Improvements:</b> Better support for async data fetching
            with fallback UI.
          </li>
          <li>
            <b>React Server Components (RSC):</b> Sends pre-rendered UI in small
            chunks from the server, reducing JS bundle size.
          </li>
        </ul>

        <h3 className="font-semibold text-lg">
          🔹 4. How it Works Behind the Scenes
        </h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            Built on top of <b>React Fiber</b> architecture.
          </li>
          <li>
            Fiber nodes are processed with priority, allowing high-priority
            updates to preempt low-priority ones.
          </li>
          <li>
            Enables <b>time-slicing</b> → UI remains responsive while rendering
            large trees.
          </li>
        </ul>

        <h3 className="font-semibold text-lg">🔹 5. Benefits</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Smoother animations and scrolling.</li>
          <li>Improved input responsiveness during heavy renders.</li>
          <li>Reduced wasted renders thanks to automatic batching.</li>
          <li>Better control over urgent vs non-urgent UI updates.</li>
        </ul>

        <p className="bg-blue-50 p-3 rounded-md border-l-4 border-blue-500">
          <b>✅ Interview-Ready Summary:</b>
          <br />
          React 18’s <b>Concurrent Mode</b> enables interruptible, prioritized,
          and non-blocking rendering. Key improvements include{" "}
          <b>automatic batching</b>, <b>transitions</b>, enhanced{" "}
          <b>Suspense</b>, <b>time-slicing</b>, and better server rendering
          (RSC). It ensures faster, smoother, and more responsive React
          applications, especially for large and complex UI.
        </p>
      </div>
    ),
  },
  {
    id: 46,
    question: "What is Reconciliation algorithm and diffing under Fiber?",
    important: true,
    answer: (
      <div className="space-y-4 text-gray-700">
        <p>
          In <b>React</b>, <b>Reconciliation</b> is the process of efficiently
          updating the UI by comparing the previous Virtual DOM (VDOM) with the
          new VDOM and applying only necessary changes to the real DOM.
        </p>

        <h3 className="font-semibold text-lg">🔹 1. What is Reconciliation?</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            React calculates differences between old and new VDOM to update UI
            efficiently.
          </li>
          <li>Minimizes expensive DOM operations.</li>
          <li>Ensures predictable and performant UI updates.</li>
        </ul>

        <h3 className="font-semibold text-lg">
          🔹 2. How Reconciliation Works
        </h3>
        <ol className="list-decimal list-inside space-y-1">
          <li>
            When state or props change, React creates a new Virtual DOM tree.
          </li>
          <li>
            React compares the new VDOM with the old VDOM using the diffing
            algorithm.
          </li>
          <li>
            Each component is represented as a <b>Fiber node</b> (unit of work)
            with links to parent, child, and sibling nodes.
          </li>
          <li>
            Reconciliation occurs in two phases:
            <ul className="list-disc list-inside space-y-1 ml-5">
              <li>
                <b>Render Phase:</b> Build new Fiber tree and compute changes
                (interruptible in concurrent mode).
              </li>
              <li>
                <b>Commit Phase:</b> Apply changes to the actual DOM in a single
                batch.
              </li>
            </ul>
          </li>
        </ol>

        <h3 className="font-semibold text-lg">🔹 3. Diffing Under Fiber</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <b>Same Type:</b> Update props and state without replacing the node.
          </li>
          <li>
            <b>Different Type:</b> Replace the old DOM node with a new one.
          </li>
          <li>
            <b>Lists & Keys:</b> Use keys to match elements and reuse DOM nodes
            efficiently.
          </li>
        </ul>

        <h3 className="font-semibold text-lg">🔹 4. Fiber Optimizations</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <b>Time-Slicing:</b> Break rendering into chunks so the main thread
            remains free.
          </li>
          <li>
            <b>Priority Levels:</b> High-priority updates (user input,
            animations) take precedence over low-priority updates (off-screen
            components, large lists).
          </li>
          <li>
            Ensures critical updates can interrupt non-critical ones, keeping UI
            responsive.
          </li>
        </ul>

        <h3 className="font-semibold text-lg">🔹 5. Updating the Real DOM</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            React generates a <b>minimal set of patches</b> from the diff.
          </li>
          <li>
            Only modified nodes or attributes are applied to the real DOM.
          </li>
          <li>Reduces reflows, repaints, and improves performance.</li>
        </ul>

        <p className="bg-blue-50 p-3 rounded-md border-l-4 border-blue-500">
          <b>✅ Interview-Ready Summary:</b>
          <br />
          Reconciliation is React’s process of updating the DOM efficiently by
          diffing the old and new Virtual DOMs. Fiber nodes represent units of
          work, enabling interruptible rendering, time-slicing, prioritized
          updates, and minimal DOM changes. This ensures fast, responsive, and
          predictable UI updates in modern React applications.
        </p>
      </div>
    ),
  },
  {
    id: 47,
    question: "What is React Server Components (RSC)? Explain in details.",
    important: true,
    answer: (
      <div className="space-y-4 text-gray-700">
        <p>
          <b>React Server Components (RSC)</b> are components that render on the
          server instead of the client. They allow sending{" "}
          <b>ready-to-use HTML and serialized component data</b> to the browser,
          reducing JavaScript bundle size and improving performance.
        </p>

        <h3 className="font-semibold text-lg">🔹 1. How RSC Works</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <b>Server Rendering:</b> RSCs are rendered on the server and can
            fetch data directly from APIs or databases.
          </li>
          <li>
            <b>Streaming to Client:</b> The browser receives a stream of
            rendered components and displays them without downloading heavy JS
            bundles.
          </li>
          <li>
            <b>Mixing Server & Client Components:</b> Server Components can
            include Client Components for interactivity, but Client Components
            cannot include Server Components.
          </li>
        </ul>

        <h3 className="font-semibold text-lg">🔹 2. Key Features</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            No client-side JS required for server components → smaller bundles.
          </li>
          <li>
            Direct data fetching from the server without exposing credentials.
          </li>
          <li>
            Seamless integration with Client Components for interactivity.
          </li>
          <li>
            Streaming of components improves time-to-first-byte and reduces
            loading states.
          </li>
        </ul>

        <h3 className="font-semibold text-lg">🔹 3. Benefits</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Faster page loads due to smaller JS bundles.</li>
          <li>Reduced client-side computation and memory usage.</li>
          <li>
            Better SEO because server-rendered HTML is immediately available.
          </li>
          <li>Supports incremental loading for large pages.</li>
        </ul>

        <h3 className="font-semibold text-lg">🔹 4. RSC vs CSR, SSR, SSG</h3>
        <table className="table-auto border border-gray-300 w-full text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-2 py-1">Feature</th>
              <th className="border px-2 py-1">CSR</th>
              <th className="border px-2 py-1">SSR</th>
              <th className="border px-2 py-1">SSG</th>
              <th className="border px-2 py-1">RSC</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-2 py-1">Where Rendering Happens</td>
              <td className="border px-2 py-1">Browser</td>
              <td className="border px-2 py-1">Server</td>
              <td className="border px-2 py-1">Server at build time</td>
              <td className="border px-2 py-1">Server at request time</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">JS Bundle Size</td>
              <td className="border px-2 py-1">Full</td>
              <td className="border px-2 py-1">Moderate</td>
              <td className="border px-2 py-1">Moderate</td>
              <td className="border px-2 py-1">
                Minimal for server components
              </td>
            </tr>
            <tr>
              <td className="border px-2 py-1">Interactivity</td>
              <td className="border px-2 py-1">Full</td>
              <td className="border px-2 py-1">Hydration required</td>
              <td className="border px-2 py-1">Hydration required</td>
              <td className="border px-2 py-1">
                Server components: static, Client components: interactive
              </td>
            </tr>
            <tr>
              <td className="border px-2 py-1">Data Fetching</td>
              <td className="border px-2 py-1">Client</td>
              <td className="border px-2 py-1">Server</td>
              <td className="border px-2 py-1">Build-time</td>
              <td className="border px-2 py-1">
                Server directly, streamed to client
              </td>
            </tr>
          </tbody>
        </table>

        <p className="bg-blue-50 p-3 rounded-md border-l-4 border-blue-500">
          <b>✅ Interview-Ready Summary:</b>
          <br />
          React Server Components (RSC) render on the server and stream HTML +
          component data to the client. They reduce JS bundle size, allow direct
          server-side data fetching, and improve performance. RSCs can be
          combined with Client Components for interactivity and are ideal for
          large applications with fast load time requirements.
        </p>
      </div>
    ),
  },
  {
    id: 48,
    question:
      "What is SSR, SSG and ISR? Difference between SSR vs SSG vs ISR comparison.",
    important: true,
    answer: (
      <div className="space-y-4 text-gray-700">
        <p>
          In <b>Next.js</b>, pages can be rendered in multiple ways depending on
          performance and data freshness requirements: <b>SSR</b>, <b>SSG</b>,
          and <b>ISR</b>.
        </p>

        <h3 className="font-semibold text-lg">
          🔹 1. Server-Side Rendering (SSR)
        </h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <b>Definition:</b> Pages are generated on the server{" "}
            <b>at request time</b>.
          </li>
          <li>
            <b>How it works:</b>
            <ol className="list-decimal list-inside ml-5 space-y-1">
              <li>Browser requests a page.</li>
              <li>Server runs Next.js components and fetches data.</li>
              <li>
                HTML is sent to the client along with minimal JS for hydration.
              </li>
            </ol>
          </li>
          <li>
            <b>Pros:</b> Fast first-page load, SEO-friendly, always up-to-date
            data.
          </li>
          <li>
            <b>Cons:</b> Higher server load, slightly slower TTFB for large
            pages.
          </li>
        </ul>

        <h3 className="font-semibold text-lg">
          🔹 2. Static Site Generation (SSG)
        </h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <b>Definition:</b> Pages are pre-rendered <b>at build time</b> into
            static HTML files.
          </li>
          <li>
            <b>How it works:</b>
            <ol className="list-decimal list-inside ml-5 space-y-1">
              <li>During build, Next.js generates HTML for all pages.</li>
              <li>
                Pages are stored as static files and served instantly from CDN.
              </li>
            </ol>
          </li>
          <li>
            <b>Pros:</b> Extremely fast, SEO-friendly, very low server load.
          </li>
          <li>
            <b>Cons:</b> Data can become stale; requires rebuilds to update
            content.
          </li>
        </ul>

        <h3 className="font-semibold text-lg">
          🔹 3. Incremental Static Regeneration (ISR)
        </h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <b>Definition:</b> Combines SSG speed with the ability to{" "}
            <b>update pages after build time</b>.
          </li>
          <li>
            <b>How it works:</b>
            <ol className="list-decimal list-inside ml-5 space-y-1">
              <li>Pages are pre-rendered at build time.</li>
              <li>
                After a configured <code>revalidate</code> period, Next.js
                regenerates the page in the background.
              </li>
              <li>
                Updated page is served to the next visitor after regeneration.
              </li>
            </ol>
          </li>
          <li>
            <b>Pros:</b> Fast like SSG, updated content without full rebuilds,
            SEO-friendly.
          </li>
          <li>
            <b>Cons:</b> Slight delay before new data appears until regeneration
            occurs.
          </li>
        </ul>

        <h3 className="font-semibold text-lg">🔹 4. Comparison Table</h3>
        <table className="table-auto border border-gray-300 w-full text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-2 py-1">Feature</th>
              <th className="border px-2 py-1">SSR</th>
              <th className="border px-2 py-1">SSG</th>
              <th className="border px-2 py-1">ISR</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-2 py-1">When Page is Generated</td>
              <td className="border px-2 py-1">On every request</td>
              <td className="border px-2 py-1">At build time</td>
              <td className="border px-2 py-1">
                At build + revalidate on-demand
              </td>
            </tr>
            <tr>
              <td className="border px-2 py-1">Performance</td>
              <td className="border px-2 py-1">Moderate (depends on server)</td>
              <td className="border px-2 py-1">Very fast (CDN)</td>
              <td className="border px-2 py-1">Very fast (CDN)</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">Data Freshness</td>
              <td className="border px-2 py-1">Always up-to-date</td>
              <td className="border px-2 py-1">Can be stale</td>
              <td className="border px-2 py-1">Updated after revalidation</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">SEO</td>
              <td className="border px-2 py-1">Excellent</td>
              <td className="border px-2 py-1">Excellent</td>
              <td className="border px-2 py-1">Excellent</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">Server Load</td>
              <td className="border px-2 py-1">High</td>
              <td className="border px-2 py-1">Low</td>
              <td className="border px-2 py-1">Low to moderate</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">Use Case</td>
              <td className="border px-2 py-1">
                Dynamic pages, real-time data
              </td>
              <td className="border px-2 py-1">Static content, blogs, docs</td>
              <td className="border px-2 py-1">
                Frequently updated content, e-commerce
              </td>
            </tr>
          </tbody>
        </table>

        <p className="bg-blue-50 p-3 rounded-md border-l-4 border-blue-500">
          <b>✅ Interview-Ready Summary:</b>
          <br />
          In Next.js:
          <b>SSR</b> renders pages on each request → fresh but higher server
          load.
          <b>SSG</b> pre-renders pages at build time → extremely fast but
          static.
          <b>ISR</b> is hybrid → pre-rendered + updated incrementally → fast and
          fresh. Choice depends on whether your pages need static content,
          real-time updates, or occasional regeneration.
        </p>
      </div>
    ),
  },
  {
    id: 49,
    question: "How to Design a scalable React app for 1M+ users?",
    answer: (
      <div className="space-y-4 text-gray-700">
        <p>
          Designing a <b>scalable React app</b> for <b>1M+ users</b> requires
          careful planning of architecture, performance optimization, state
          management, and deployment strategies.
        </p>

        <h3 className="font-semibold text-lg">🔹 1. Architecture Planning</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <b>Component Structure:</b> Break UI into small, reusable, isolated
            components. Use container vs presentational component pattern.
          </li>
          <li>
            <b>Folder Structure:</b> Organize by feature/domain for
            maintainability.
            <pre className="bg-gray-100 p-2 rounded-md mt-1">{`src/
  features/
    auth/
    dashboard/
    profile/
  components/
  hooks/
  services/
  utils/`}</pre>
          </li>
          <li>
            <b>State Management:</b> Use Redux, Zustand, or Context API for
            global state; keep local state inside components to reduce
            re-renders.
          </li>
        </ul>

        <h3 className="font-semibold text-lg">
          🔹 2. Performance Optimization
        </h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <b>Code Splitting & Lazy Loading:</b> Use <code>React.lazy</code>{" "}
            and <code>Suspense</code> for on-demand loading.
          </li>
          <li>
            <b>Memoization:</b> Use <code>React.memo</code>,{" "}
            <code>useMemo</code>, <code>useCallback</code> to prevent
            unnecessary re-renders.
          </li>
          <li>
            <b>Virtualization:</b> For large lists, use libraries like{" "}
            <code>react-window</code> or <code>react-virtualized</code>.
          </li>
          <li>
            <b>Avoid Heavy Computation in Render:</b> Move heavy calculations to
            web workers or <code>useMemo</code>.
          </li>
          <li>
            <b>SSR/SSG:</b> Use Next.js for fast initial loads.
          </li>
        </ul>

        <h3 className="font-semibold text-lg">🔹 3. API & Data Handling</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <b>Backend Efficiency:</b> Use GraphQL or REST with pagination,
            filtering, and batching.
          </li>
          <li>
            <b>Caching:</b> Client-side caching with React Query/SWR and CDN
            caching for static assets.
          </li>
          <li>
            <b>Real-time Updates:</b> Use WebSockets, Pusher, or Firebase
            efficiently.
          </li>
        </ul>

        <h3 className="font-semibold text-lg">
          🔹 4. Error Handling & Monitoring
        </h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <b>Error Boundaries:</b> Catch component errors and prevent full UI
            crashes.
          </li>
          <li>
            <b>Monitoring & Logging:</b> Integrate Sentry, LogRocket, or
            Datadog.
          </li>
          <li>
            <b>Fallbacks & Graceful Degradation:</b> Provide fallback UI for
            slow or failed components.
          </li>
        </ul>

        <h3 className="font-semibold text-lg">🔹 5. Testing & Quality</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <b>Unit Testing:</b> Use Jest and React Testing Library.
          </li>
          <li>
            <b>Integration Testing:</b> Test component interactions and API
            calls.
          </li>
          <li>
            <b>End-to-End Testing:</b> Use Cypress or Playwright for simulating
            user flows.
          </li>
        </ul>

        <h3 className="font-semibold text-lg">🔹 6. Deployment & Scaling</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <b>CDN:</b> Serve static assets globally for faster load.
          </li>
          <li>
            <b>Serverless / Microservices:</b> Deploy APIs for horizontal
            scaling.
          </li>
          <li>
            <b>Load Balancing:</b> Distribute traffic efficiently across
            servers.
          </li>
          <li>
            <b>Performance Monitoring:</b> Continuously measure TTFB, render
            time, and bundle size.
          </li>
        </ul>

        <p className="bg-blue-50 p-3 rounded-md border-l-4 border-blue-500">
          <b>✅ Interview-Ready Summary:</b>
          <br />
          For 1M+ users, design React apps with <b>reusable components</b>,{" "}
          <b>efficient state management</b>, and{" "}
          <b>performance optimizations</b> like lazy loading, memoization,
          virtualization, and SSR/SSG. Use{" "}
          <b>efficient APIs, caching, and real-time updates</b>. Ensure{" "}
          <b>error handling, monitoring, testing</b> and deploy on{" "}
          <b>CDN/serverless/microservices</b> with load balancing for
          scalability.
        </p>
      </div>
    ),
  },
  {
    id: 50,
    question: "Micro-frontend vs monolith React architecture.",
    answer: (
      <div className="space-y-4 text-gray-700">
        <p>
          When building large-scale React applications, the architecture plays a
          crucial role. Two common approaches are <b>Monolith</b> and{" "}
          <b>Micro-frontend</b> architectures.
        </p>

        <h3 className="font-semibold text-lg">
          🔹 1. Monolith React Architecture
        </h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <b>Definition:</b> Entire application is built as a single React
            project with one codebase and deployment pipeline.
          </li>
          <li>
            <b>Pros:</b>
            <ul className="list-disc list-inside ml-5 space-y-1">
              <li>Simple to develop and deploy.</li>
              <li>Easier to share state and components across app.</li>
            </ul>
          </li>
          <li>
            <b>Cons:</b>
            <ul className="list-disc list-inside ml-5 space-y-1">
              <li>Hard to scale development teams.</li>
              <li>Slower build and deployment as project grows.</li>
              <li>Single point of failure; updates affect entire app.</li>
            </ul>
          </li>
        </ul>

        <h3 className="font-semibold text-lg">
          🔹 2. Micro-frontend React Architecture
        </h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <b>Definition:</b> Application is split into multiple smaller,
            independently deployable React apps (micro-frontends), each owned by
            different teams.
          </li>
          <li>
            <b>Pros:</b>
            <ul className="list-disc list-inside ml-5 space-y-1">
              <li>Teams can develop, deploy, and scale independently.</li>
              <li>Faster build times and isolated failures.</li>
              <li>Better suited for large apps with 1M+ users.</li>
            </ul>
          </li>
          <li>
            <b>Cons:</b>
            <ul className="list-disc list-inside ml-5 space-y-1">
              <li>
                More complex setup (routing, shared state, communication).
              </li>
              <li>
                Requires careful coordination of shared libraries and
                dependencies.
              </li>
            </ul>
          </li>
        </ul>

        <h3 className="font-semibold text-lg">
          🔹 3. How to Design for Large-Scale Apps
        </h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <b>Modular Design:</b> Split UI into reusable, isolated components
            and feature modules.
          </li>
          <li>
            <b>State Management:</b> Use Redux, Zustand, or Context API, keeping
            local state isolated.
          </li>
          <li>
            <b>Code Splitting:</b> Lazy load routes, pages, and components to
            reduce initial bundle size.
          </li>
          <li>
            <b>Micro-frontend Approach:</b> Break large apps into smaller
            independently deployable modules if multiple teams are involved.
          </li>
          <li>
            <b>Shared Libraries:</b> Use common UI libraries to maintain
            consistency across micro-frontends.
          </li>
          <li>
            <b>CI/CD Pipelines:</b> Independent pipelines for each module to
            enable fast deployments.
          </li>
          <li>
            <b>Monitoring & Logging:</b> Implement centralized monitoring to
            track app health across micro-frontends.
          </li>
        </ul>

        <h3 className="font-semibold text-lg">🔹 4. Comparison Table</h3>
        <table className="table-auto border border-gray-300 w-full text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-2 py-1">Feature</th>
              <th className="border px-2 py-1">Monolith</th>
              <th className="border px-2 py-1">Micro-frontend</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-2 py-1">Team Collaboration</td>
              <td className="border px-2 py-1">Single team</td>
              <td className="border px-2 py-1">Multiple teams independently</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">Build & Deployment</td>
              <td className="border px-2 py-1">
                Single pipeline, slower for large apps
              </td>
              <td className="border px-2 py-1">
                Independent pipelines, faster deployment
              </td>
            </tr>
            <tr>
              <td className="border px-2 py-1">Scaling</td>
              <td className="border px-2 py-1">
                Harder to scale for large teams and users
              </td>
              <td className="border px-2 py-1">
                Easier to scale teams and modules independently
              </td>
            </tr>
            <tr>
              <td className="border px-2 py-1">Failure Impact</td>
              <td className="border px-2 py-1">Single point of failure</td>
              <td className="border px-2 py-1">Failure isolated to module</td>
            </tr>
          </tbody>
        </table>

        <p className="bg-blue-50 p-3 rounded-md border-l-4 border-blue-500">
          <b>✅ Interview-Ready Summary:</b>
          <br />
          <b>Monolith</b> is simple but harder to scale for large teams and
          traffic. <b>Micro-frontend</b> allows independent modules, faster
          deployment, and team scalability. For apps with 1M+ users, using
          micro-frontends, modular design, efficient state management, and lazy
          loading is essential.
        </p>
      </div>
    ),
  },
  {
    id: 51,
    question: "SEO optimization for React apps.",
    answer: (
      <div className="space-y-4 text-gray-700">
        <p>
          SEO (Search Engine Optimization) is critical for React apps,
          especially Single Page Applications (SPAs), because search engines
          need to crawl and index content effectively.
        </p>

        <h3 className="font-semibold text-lg">🔹 1. Challenges in React SEO</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            SPAs load content dynamically using JavaScript → search engines may
            struggle to index content.
          </li>
          <li>
            CSR (Client-Side Rendering) alone can hurt SEO and slow first-page
            load.
          </li>
        </ul>

        <h3 className="font-semibold text-lg">
          🔹 2. Strategies for SEO Optimization
        </h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <b>Server-Side Rendering (SSR):</b> Use Next.js SSR to send
            pre-rendered HTML to the browser → improves indexing and first-page
            load.
          </li>
          <li>
            <b>Static Site Generation (SSG):</b> Pre-render static pages for
            blogs, documentation, and product pages → fast and SEO-friendly.
          </li>
          <li>
            <b>Incremental Static Regeneration (ISR):</b> Update static pages
            on-demand while keeping SEO benefits.
          </li>
          <li>
            <b>Meta Tags & Open Graph:</b> Use <code>next/head</code> to set{" "}
            <code>&lt;title&gt;</code>, <code>&lt;meta description&gt;</code>,
            OG tags, and canonical URLs.
          </li>
          <li>
            <b>Sitemap & Robots.txt:</b> Generate dynamic sitemaps for large
            apps; use <code>robots.txt</code> to guide crawlers.
          </li>
          <li>
            <b>Structured Data:</b> Add JSON-LD for rich snippets and better
            SERP visibility.
          </li>
          <li>
            <b>Lazy Loading & Image Optimization:</b> Optimize images (
            <code>next/image</code>) and lazy load non-critical components to
            improve page speed.
          </li>
          <li>
            <b>Accessible & Semantic HTML:</b> Proper headings, ARIA labels, and
            semantic elements improve SEO and accessibility.
          </li>
        </ul>

        <h3 className="font-semibold text-lg">
          🔹 3. Performance Considerations for SEO
        </h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Fast TTFB (Time to First Byte) with SSR/SSG.</li>
          <li>
            Minimize JavaScript bundle size using code splitting and
            tree-shaking.
          </li>
          <li>Use CDN for static assets to reduce latency.</li>
          <li>Monitor Core Web Vitals: LCP, FID, CLS.</li>
        </ul>

        <p className="bg-blue-50 p-3 rounded-md border-l-4 border-blue-500">
          <b>✅ Interview-Ready Summary:</b>
          <br />
          For React apps, optimize SEO by using <b>SSR, SSG, or ISR</b> for
          pre-rendering, setting proper <b>meta tags and structured data</b>,
          generating sitemaps, optimizing performance, and ensuring semantic,
          accessible HTML. This ensures content is indexed, fast-loading, and
          search-engine friendly.
        </p>
      </div>
    ),
  },
  {
    id: 52,
    question: "Handling large forms (Formik / React Hook Form).",
    answer: (
      <div className="space-y-4 text-gray-700">
        <p>
          Handling large forms in React can be challenging due to state
          management, validation, and performance. Libraries like <b>Formik</b>{" "}
          and <b>React Hook Form</b> simplify this process.
        </p>

        <h3 className="font-semibold text-lg">
          🔹 1. Challenges with Large Forms
        </h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            Managing state for many fields can cause unnecessary re-renders.
          </li>
          <li>Complex validation logic may slow down the app.</li>
          <li>
            Handling conditional fields and nested inputs adds complexity.
          </li>
        </ul>

        <h3 className="font-semibold text-lg">🔹 2. Using Formik</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <b>State Management:</b> Formik keeps form values, touched fields,
            and errors in a centralized state.
          </li>
          <li>
            <b>Validation:</b> Supports synchronous and asynchronous validation
            using Yup.
          </li>
          <li>
            <b>Example:</b>
          </li>
        </ul>
        <pre className="bg-gray-100 p-2 rounded-md mt-1">{`import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignupForm = () => (
  <Formik
    initialValues={{ name: '', email: '' }}
    validationSchema={Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email').required('Required'),
    })}
    onSubmit={(values) => console.log(values)}
  >
    <Form>
      <Field name="name" />
      <ErrorMessage name="name" />
      <Field name="email" />
      <ErrorMessage name="email" />
      <button type="submit">Submit</button>
    </Form>
  </Formik>
);`}</pre>

        <h3 className="font-semibold text-lg">🔹 3. Using React Hook Form</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <b>State Management:</b> Uses uncontrolled components internally →
            fewer re-renders.
          </li>
          <li>
            <b>Validation:</b> Built-in validation or integrates with Yup.
          </li>
          <li>
            <b>Example:</b>
          </li>
        </ul>
        <pre className="bg-gray-100 p-2 rounded-md mt-1">{`import { useForm } from 'react-hook-form';

function SignupForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name', { required: 'Name is required' })} />
      {errors.name && <p>{errors.name.message}</p>}
      <input {...register('email', { required: 'Email is required' })} />
      {errors.email && <p>{errors.email.message}</p>}
      <button type="submit">Submit</button>
    </form>
  );
}`}</pre>

        <h3 className="font-semibold text-lg">🔹 4. Key Considerations</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            Use <b>React Hook Form</b> for better performance on large forms
            (less re-renders).
          </li>
          <li>
            Use <b>Formik</b> for simpler forms with rich validation and easier
            state handling.
          </li>
          <li>
            Use schema validation libraries like <b>Yup</b> for maintainable
            validation logic.
          </li>
          <li>
            Split very large forms into multiple steps/pages to improve UX.
          </li>
        </ul>

        <p className="bg-blue-50 p-3 rounded-md border-l-4 border-blue-500">
          <b>✅ Interview-Ready Summary:</b>
          <br />
          For large forms in React, use <b>React Hook Form</b> for performance
          and minimal re-renders, or <b>Formik</b> for centralized state and
          rich validation. Combine with <b>Yup</b> for schema validation and
          consider multi-step forms for better user experience.
        </p>
      </div>
    ),
  },
  {
    id: 53,
    question:
      "Redux architecture: reducers, actions, middleware; difference between redux-thunk and redux-saga.",
    important: true,
    answer: (
      <div className="space-y-4 text-gray-700">
        <p>
          <b>Redux</b> is a predictable state management library for JavaScript
          apps. It helps manage application state in a centralized store and
          makes state updates predictable and traceable.
        </p>

        <h3 className="font-semibold text-lg">🔹 1. Redux Architecture</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <b>Store:</b> Centralized state of the application.
          </li>
          <li>
            <b>Action:</b> Plain JavaScript object describing{" "}
            <b>what happened</b> (type + payload).
          </li>
          <li>
            <b>Reducer:</b> Pure function that takes current state + action →
            returns new state.
          </li>
          <li>
            <b>Dispatch:</b> Function used to send actions to the store.
          </li>
          <li>
            <b>Selectors:</b> Functions to read state from the store.
          </li>
          <li>
            <b>Middleware:</b> Intercepts actions before they reach the reducer,
            often for async operations.
          </li>
        </ul>

        <h3 className="font-semibold text-lg">
          🔹 2. How Redux Works Behind the Scenes
        </h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            Components <b>dispatch actions</b> when user interacts with UI.
          </li>
          <li>
            Actions go through <b>middleware</b> (e.g., logging, async calls).
          </li>
          <li>
            Reducers receive actions and <b>update the store immutably</b>.
          </li>
          <li>Store notifies subscribed components about state changes.</li>
          <li>Components re-render based on updated state.</li>
        </ul>

        <h3 className="font-semibold text-lg">
          🔹 3. Example: Action & Reducer
        </h3>
        <pre className="bg-gray-100 p-2 rounded-md mt-1">{`// Action
const increment = () => ({ type: 'INCREMENT' });

// Reducer
const counterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
};`}</pre>

        <h3 className="font-semibold text-lg">🔹 4. Middleware Examples</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <b>redux-thunk:</b> Allows dispatching functions for async logic.
            <pre className="bg-gray-100 p-2 rounded-md mt-1">{`const fetchData = () => async (dispatch) => {
  const data = await fetch('/api').then(res => res.json());
  dispatch({ type: 'SET_DATA', payload: data });
};`}</pre>
          </li>
          <li>
            <b>redux-saga:</b> Uses generator functions to handle side effects
            and async actions in a more structured way.
            <pre className="bg-gray-100 p-2 rounded-md mt-1">{`function* fetchDataSaga() {
  const data = yield call(fetch, '/api');
  yield put({ type: 'SET_DATA', payload: data });
}`}</pre>
          </li>
        </ul>

        <h3 className="font-semibold text-lg">
          🔹 5. Differences: redux-thunk vs redux-saga
        </h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <b>redux-thunk:</b> Simple, dispatch functions, easy for small apps.
          </li>
          <li>
            <b>redux-saga:</b> Uses generators, better for complex async flows
            and side effects.
          </li>
          <li>
            <b>Maintainability:</b> Thunk is easier initially; Saga is more
            structured for large-scale apps.
          </li>
        </ul>

        <p className="bg-blue-50 p-3 rounded-md border-l-4 border-blue-500">
          <b>✅ Interview-Ready Summary:</b>
          <br />
          Redux centralizes state in a <b>store</b>. Components{" "}
          <b>dispatch actions</b> that reach <b>reducers</b> to update state.
          Middleware like <b>redux-thunk</b> or <b>redux-saga</b> handles async
          operations. For small apps, thunk is simpler; for large apps with
          complex async flows, saga is more scalable.
        </p>
      </div>
    ),
  },
  {
    id: 54,
    question: "Middleware in React (and Redux): what is it, where used?",
    important: true,
    answer: (
      <div className="space-y-4 text-gray-700">
        <p>
          <b>Middleware</b> in React/Redux is a function that sits between{" "}
          <b>dispatching an action</b> and the <b>reducer</b>. It allows you to
          intercept actions, modify them, perform side effects, or trigger
          additional actions.
        </p>

        <h3 className="font-semibold text-lg">🔹 1. Purpose of Middleware</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            Handle <b>asynchronous operations</b> like API calls.
          </li>
          <li>Perform logging for actions and state changes.</li>
          <li>Modify actions before they reach the reducer.</li>
          <li>Enable analytics, error reporting, or other side effects.</li>
        </ul>

        <h3 className="font-semibold text-lg">🔹 2. How Middleware Works</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            Action is <b>dispatched</b> from a component.
          </li>
          <li>
            Middleware intercepts the action and can:
            <ul className="list-disc list-inside ml-5 space-y-1">
              <li>Do something before it reaches the reducer.</li>
              <li>Dispatch additional actions.</li>
              <li>Perform async operations.</li>
            </ul>
          </li>
          <li>
            Finally, the action passes to the reducer to update the store.
          </li>
        </ul>

        <h3 className="font-semibold text-lg">
          🔹 3. Common Middleware Examples
        </h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <b>redux-thunk:</b> Allows dispatching functions instead of plain
            objects for async logic.
          </li>
          <li>
            <b>redux-saga:</b> Uses generator functions for more structured
            async side effects.
          </li>
          <li>
            <b>Custom Logging Middleware:</b> Logs every action and resulting
            state.
          </li>
        </ul>

        <h3 className="font-semibold text-lg">
          🔹 4. Example: Custom Logging Middleware
        </h3>
        <pre className="bg-gray-100 p-2 rounded-md mt-1">{`const loggerMiddleware = store => next => action => {
  console.log('Dispatching:', action);
  const result = next(action);
  console.log('Next State:', store.getState());
  return result;
};`}</pre>

        <h3 className="font-semibold text-lg">
          🔹 5. Where Middleware is Used
        </h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            Redux store setup (<code>applyMiddleware</code>).
          </li>
          <li>
            Intercepting actions for API calls, logging, authentication checks,
            or analytics.
          </li>
          <li>Enhancing functionality without modifying existing reducers.</li>
        </ul>

        <p className="bg-blue-50 p-3 rounded-md border-l-4 border-blue-500">
          <b>✅ Interview-Ready Summary:</b>
          <br />
          Middleware is a bridge between <b>dispatch</b> and <b>reducers</b>. It
          allows handling async operations, logging, and side effects. Common
          examples include <b>redux-thunk</b> for async actions,{" "}
          <b>redux-saga</b> for complex side effects, and custom middleware for
          logging or analytics. It improves maintainability by separating
          concerns from reducers.
        </p>
      </div>
    ),
  },
  {
    id: 56,
    question: "Challenges with React.js in large systems.",
    answer:
      "Challenges include complex state management, performance optimization, SEO, and consistency across teams.",
  },
  {
    id: 57,
    question: "Reconciliation, Virtual DOM, diffing algorithm (internals).",
    important: true,
    answer:
      "React’s reconciliation algorithm diffs old/new trees using keys and updates only necessary nodes, powered by Fiber for async scheduling.",
  },
  {
    id: 58,
    question: "DOM vs Virtual DOM in React.",
    important: true,
    answer: (
      <div className="space-y-4 text-gray-700">
        <p>
          In React, understanding the difference between <b>DOM</b> and{" "}
          <b>Virtual DOM (VDOM)</b> is crucial for performance optimization.
        </p>

        <h3 className="font-semibold text-lg">
          🔹 1. DOM (Document Object Model)
        </h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            The DOM is a <b>tree-like representation of HTML elements</b> in the
            browser.
          </li>
          <li>
            Every HTML element becomes a <b>node</b> in the DOM tree.
          </li>
          <li>Browsers render the DOM visually on the screen.</li>
          <li>
            <b>Updating the DOM is expensive:</b> recalculating styles, layout,
            repaint/reflow.
          </li>
          <li>
            Frequent DOM updates can <b>slow down performance</b>, especially in
            large apps.
          </li>
        </ul>

        <h3 className="font-semibold text-lg">🔹 2. Virtual DOM (VDOM)</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            The Virtual DOM is a{" "}
            <b>lightweight, in-memory copy of the real DOM</b>.
          </li>
          <li>React keeps a virtual representation of the UI in memory.</li>
          <li>
            When state or props change, React updates the <b>VDOM first</b>, not
            the real DOM.
          </li>
          <li>
            React compares the new VDOM with the previous one using a{" "}
            <b>diffing algorithm</b> (Reconciliation).
          </li>
          <li>
            Only the <b>differences (diffs)</b> are updated in the real DOM,
            making updates faster and efficient.
          </li>
        </ul>

        <h3 className="font-semibold text-lg">
          🔹 3. How Virtual DOM Works Behind the Scenes
        </h3>
        <ol className="list-decimal list-inside space-y-1">
          <li>Initial render: React creates a Virtual DOM tree.</li>
          <li>State/props change → a new Virtual DOM tree is generated.</li>
          <li>
            React <b>diffs</b> the new VDOM with the previous VDOM to detect
            changes.
          </li>
          <li>
            React creates a <b>patch</b>: minimal changes to apply to the real
            DOM.
          </li>
          <li>The browser updates the real DOM efficiently.</li>
        </ol>

        <h3 className="font-semibold text-lg">🔹 4. Benefits of Virtual DOM</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Faster UI updates by reducing expensive DOM manipulations.</li>
          <li>Predictable rendering and efficient state management.</li>
          <li>
            Declarative programming: describe <b>what UI should look like</b>,
            React handles <b>how to update it</b>.
          </li>
          <li>Helps in building large-scale dynamic applications.</li>
        </ul>

        <h3 className="font-semibold text-lg">
          🔹 5. Downsides of Virtual DOM
        </h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Slight memory overhead because VDOM is stored in memory.</li>
          <li>
            Diffing adds computation (though still faster than direct DOM
            updates for large apps).
          </li>
          <li>
            May not provide significant benefit for very small or static apps.
          </li>
        </ul>

        <h3 className="font-semibold text-lg">
          🔹 6. DOM vs Virtual DOM Summary
        </h3>
        <table className="table-auto border border-gray-300 w-full text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-2 py-1">Feature</th>
              <th className="border px-2 py-1">DOM</th>
              <th className="border px-2 py-1">Virtual DOM</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-2 py-1">Representation</td>
              <td className="border px-2 py-1">
                Browser-native tree of HTML elements
              </td>
              <td className="border px-2 py-1">
                In-memory JS object representation of UI
              </td>
            </tr>
            <tr>
              <td className="border px-2 py-1">Performance</td>
              <td className="border px-2 py-1">Slower for frequent updates</td>
              <td className="border px-2 py-1">
                Faster via diffing and selective updates
              </td>
            </tr>
            <tr>
              <td className="border px-2 py-1">Updates</td>
              <td className="border px-2 py-1">Direct manipulation</td>
              <td className="border px-2 py-1">
                Batched and optimized updates
              </td>
            </tr>
            <tr>
              <td className="border px-2 py-1">Usage</td>
              <td className="border px-2 py-1">Standard HTML/CSS/JS</td>
              <td className="border px-2 py-1">
                React framework for efficient UI rendering
              </td>
            </tr>
          </tbody>
        </table>

        <p className="bg-blue-50 p-3 rounded-md border-l-4 border-blue-500">
          <b>✅ Interview-Ready Summary:</b>
          <br />
          The <b>DOM</b> is the actual browser representation of the UI, while
          the <b>Virtual DOM</b> is React’s lightweight in-memory copy that
          enables <b>fast, efficient updates</b> via diffing. React selectively
          updates only what changed in the real DOM, improving performance in
          large-scale dynamic apps.
        </p>
      </div>
    ),
  },
  {
    id: 59,
    question: "Why is React performant? (efficient DOM manipulation).",
    important: true,
    answer: {
      id: 28,
      question: "Why is React performant? (efficient DOM manipulation).",
      answer: (
        <div className="space-y-4 text-gray-700">
          <p>
            <b>React</b> is considered <b>performant</b> because it minimizes
            expensive direct DOM operations by using techniques like{" "}
            <b>Virtual DOM</b>, <b>diffing</b>, <b>batching</b>, and{" "}
            <b>Fiber architecture</b> to efficiently update the UI.
          </p>

          <h3 className="font-semibold text-lg">
            🔹 Key Reasons for Performance
          </h3>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <b>Virtual DOM (VDOM)</b> → Updates happen first in memory, then
              only minimal changes are applied to the real DOM.
            </li>
            <li>
              <b>Reconciliation & Diffing Algorithm</b> → Compares new and old
              VDOM, updates only changed nodes.
            </li>
            <li>
              <b>Batching of Updates</b> → Multiple state changes in one event
              loop are combined into a single DOM update.
            </li>
            <li>
              <b>Fiber Architecture</b> → Breaks rendering into units of work,
              prioritizes and pauses tasks for smooth UI.
            </li>
            <li>
              <b>Synthetic Events</b> → Efficient event delegation at the root,
              consistent across browsers.
            </li>
            <li>
              <b>Hooks & Memoization</b> → <code>useMemo</code>,{" "}
              <code>useCallback</code>, and <code>React.memo</code> prevent
              needless re-renders.
            </li>
          </ul>

          <h3 className="font-semibold text-lg">
            🔹 Real DOM vs React DOM Updates
          </h3>
          <p>
            - <b>Traditional DOM:</b> Any small update causes style
            recalculations, layout, and reflow → <b>slow</b>.
            <br />- <b>React DOM:</b> Only minimal changes are applied after
            diffing →<b>fast</b>.
          </p>

          <h3 className="font-semibold text-lg">🔹 Example</h3>
          <pre className="bg-gray-100 p-2 rounded-md mt-1">{`// Traditional DOM\n document.getElementById("count").innerHTML = count;\n\n// React DOM\n setCount(count + 1); // triggers VDOM diffing & selective update`}</pre>

          <p className="bg-blue-50 p-3 rounded-md border-l-4 border-blue-500">
            <b>✅ In short (for interviews):</b>
            <br />
            React is performant because it uses a <b>Virtual DOM</b>,{" "}
            <b>diffing</b>, and <b>batching</b> to minimize costly DOM
            operations. With <b>Fiber architecture</b>, it breaks rendering into
            chunks, prioritizes tasks, and ensures smooth UI rendering, even for{" "}
            <b>large-scale apps</b>.
          </p>
        </div>
      ),
    },
  },
];
