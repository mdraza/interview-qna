export const data = [
  {
    id: 1,
    title: "1. What are the different data types present in JavaScript?",
    content: (
      <div className="space-y-4 text-gray-700">
        <p>
          In JavaScript, data types are broadly categorized into{" "}
          <b>two groups</b>: <b>Primitive Types</b> and{" "}
          <b>Non-Primitive (Reference) Types</b>.
        </p>

        <h3 className="font-semibold text-lg">🔹 1. Primitive Data Types</h3>
        <p>
          Primitive types are immutable (cannot be changed) and are compared{" "}
          <b>by value</b>.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <b>Number</b> → Represents both integers and floating-point numbers.
            <pre className="bg-gray-100 p-2 rounded-md mt-1">{`let age = 25;\nlet pi = 3.14;`}</pre>
          </li>
          <li>
            <b>String</b> → Represents textual data.
            <pre className="bg-gray-100 p-2 rounded-md mt-1">{`let name = "Razaullah";`}</pre>
          </li>
          <li>
            <b>Boolean</b> → Represents logical values.
            <pre className="bg-gray-100 p-2 rounded-md mt-1">{`let isAdmin = true;`}</pre>
          </li>
          <li>
            <b>Undefined</b> → A variable that has been declared but not
            assigned a value.
            <pre className="bg-gray-100 p-2 rounded-md mt-1">{`let x; // undefined`}</pre>
          </li>
          <li>
            <b>Null</b> → Explicitly represents the absence of any value.
            <pre className="bg-gray-100 p-2 rounded-md mt-1">{`let data = null;`}</pre>
          </li>
          <li>
            <b>Symbol</b> (ES6) → A unique and immutable identifier.
            <pre className="bg-gray-100 p-2 rounded-md mt-1">{`const id = Symbol("uniqueID");`}</pre>
          </li>
          <li>
            <b>BigInt</b> (ES2020) → Used for very large integers.
            <pre className="bg-gray-100 p-2 rounded-md mt-1">{`const big = 123456789012345678901234567890n;`}</pre>
          </li>
        </ul>

        <h3 className="font-semibold text-lg">
          🔹 2. Non-Primitive (Reference) Data Types
        </h3>
        <p>
          These are mutable and compared <b>by reference</b>.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <b>Object</b> → A collection of key-value pairs.
            <pre className="bg-gray-100 p-2 rounded-md mt-1">{`let user = { name: "Raza", age: 28 };`}</pre>
          </li>
          <li>
            <b>Array</b> → An ordered list of values.
            <pre className="bg-gray-100 p-2 rounded-md mt-1">{`let numbers = [1, 2, 3];`}</pre>
          </li>
          <li>
            <b>Function</b> → Functions are also objects in JavaScript.
            <pre className="bg-gray-100 p-2 rounded-md mt-1">{`function greet() { return "Hello"; }`}</pre>
          </li>
          <li>
            <b>Date, RegExp, Map, Set, WeakMap, WeakSet</b> → Specialized
            built-in objects.
          </li>
        </ul>

        <h3 className="font-semibold text-lg">
          🔹 3. Special Notes for Interviews
        </h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            JavaScript is <b>dynamically typed</b>, meaning the type of a
            variable is determined at runtime.
          </li>
          <li>
            All primitive types (except null and undefined) have corresponding{" "}
            <b>object wrappers</b> (Number, String, Boolean, etc.).
          </li>
          <li>
            <code>typeof null === &quot;object&quot;</code> is a well-known{" "}
            <b>JavaScript quirk</b>.
          </li>
        </ul>

        <p className="bg-blue-50 p-3 rounded-md border-l-4 border-blue-500">
          <b>✅ Concise Version (for interview quick answer):</b>
          <br />
          JavaScript has 7 primitive types: Number, String, Boolean, Undefined,
          Null, Symbol, and BigInt. It also has non-primitive types like Object,
          Array, Function, Map, Set, etc. JavaScript is dynamically typed, so
          the type is determined at runtime.
        </p>
      </div>
    ),
  },
  {
    id: 2,
    title: "2. What is an Immediately Invoked Function in JavaScript?",
    content: (
      <div className="space-y-4 text-gray-700">
        <p>
          An <b>Immediately Invoked Function Expression (IIFE)</b> is a function
          in JavaScript that is{" "}
          <b>defined and executed immediately after its creation</b>.
        </p>

        <h3 className="font-semibold text-lg">🔹 Syntax of IIFE</h3>
        <pre className="bg-gray-100 p-2 rounded-md mt-1">{`(function () {\n console.log("This is an IIFE");\n})();`}</pre>
        <p>
          - The function is wrapped inside <code>()</code> to treat it as an{" "}
          <b>expression</b>, not a declaration.
          <br />- The final <code>()</code> immediately invokes it.
        </p>

        <h3 className="font-semibold text-lg">🔹 Example with Variables</h3>
        <pre className="bg-gray-100 p-2 rounded-md mt-1">{`(function () {\n let message = "Hello, Raza!";\n console.log(message); // Output: Hello, Raza!\n})();\n\nconsole.log(message); // ❌ ReferenceError`}</pre>
        <p>
          ✅ The variable <code>message</code> is <b>not accessible outside</b>{" "}
          the IIFE.
        </p>

        <h3 className="font-semibold text-lg">🔹 Common Use Cases of IIFE</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <b>Data privacy</b> → Variables inside an IIFE are not leaked
            globally.
          </li>
          <li>
            <b>Avoiding variable collisions</b> in large applications.
          </li>
          <li>
            <b>Module pattern</b> (before ES6 modules).
          </li>
          <li>
            Running code <b>once</b> during initialization.
          </li>
        </ul>

        <h3 className="font-semibold text-lg">
          🔹 ES6 Variation (Arrow Function IIFE)
        </h3>
        <pre className="bg-gray-100 p-2 rounded-md mt-1">{`(() => {\n console.log("IIFE with arrow function!");\n})();`}</pre>

        <p className="bg-blue-50 p-3 rounded-md border-l-4 border-blue-500">
          <b>✅ In short (for interviews):</b>
          <br />
          An IIFE is a JavaScript function that runs immediately after it is
          defined. It’s mainly used to create a private scope and avoid
          polluting the global namespace.
        </p>
      </div>
    ),
  },
  {
    id: 3,
    title: "3. Explain Hoisting in JavaScript.",
    important: true,
    content: (
      <div className="space-y-4 text-gray-800">
        <p>
          <b>Hoisting</b> is JavaScript’s default behavior of{" "}
          <b>moving declarations to the top of their scope</b> before code
          execution. It allows you to use variables and functions{" "}
          <b>before they are declared</b> in the code.
        </p>

        <h3 className="text-lg font-semibold">🔹 How it Works</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <b>var</b> → Declarations are hoisted and initialized with{" "}
            <code>undefined</code>.
          </li>
          <li>
            <b>let</b> and <b>const</b> → Hoisted but remain in the{" "}
            <b>Temporal Dead Zone (TDZ)</b> until initialized.
          </li>
          <li>
            <b>Function declarations</b> → Fully hoisted with their definition.
          </li>
          <li>
            <b>Function expressions</b> (with var/let/const) → Hoisted, but
            without their definition.
          </li>
        </ul>

        <h3 className="text-lg font-semibold">🔹 Example with var</h3>
        <pre className="bg-gray-100 p-2 rounded">{`console.log(a); // undefined\nvar a = 10;`}</pre>

        <h3 className="text-lg font-semibold">🔹 Example with let / const</h3>
        <pre className="bg-gray-100 p-2 rounded">{`console.log(b); // ❌ ReferenceError (TDZ)\nlet b = 20;`}</pre>

        <h3 className="text-lg font-semibold">🔹 Function Hoisting</h3>
        <pre className="bg-gray-100 p-2 rounded">{`greet(); // ✅ Works\nfunction greet() {\n console.log("Hello, Raza!");\n}`}</pre>

        <p className="bg-blue-50 p-3 rounded">
          <b>✅ Concise Version (for interview quick answer):</b>
          <br />
          Hoisting is JavaScript’s behavior of moving declarations to the top of
          their scope. Variables declared with <code>var</code> are hoisted and
          initialized as <code>undefined</code>, while <code>let</code> and{" "}
          <code>const</code> are hoisted but remain in the Temporal Dead Zone
          until initialized. Function declarations are fully hoisted, but
          function expressions are not.
        </p>
      </div>
    ),
  },
  {
    id: 4,
    title: "4. Explain Higher Order Functions in JavaScript.",
    important: true,
    content: (
      <div className="space-y-4 text-gray-800">
        <p>
          A <b>Higher Order Function (HOF)</b> is a function in JavaScript that
          either:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Takes one or more functions as arguments, or</li>
          <li>Returns a function as its result.</li>
        </ul>

        <h3 className="text-lg font-semibold">
          🔹 Example: Passing Functions as Arguments
        </h3>
        <pre className="bg-gray-100 p-2 rounded">{`function greet(name) {\n return "Hello, " + name;\n}\n\nfunction higherOrder(fn, user) {\n console.log(fn(user));\n}\n\nhigherOrder(greet, "Raza"); // Output: Hello, Raza`}</pre>

        <h3 className="text-lg font-semibold">
          🔹 Example: Returning a Function
        </h3>
        <pre className="bg-gray-100 p-2 rounded">{`function multiplier(factor) {\n return function(number) {\n return number * factor;\n }\n}\n\nconst double = multiplier(2);\nconsole.log(double(5)); // Output: 10`}</pre>

        <h3 className="text-lg font-semibold">🔹 Key Notes for Interviews</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Common HOFs in JavaScript include <code>map</code>,{" "}
            <code>filter</code>, <code>reduce</code>, and <code>forEach</code>.
          </li>
          <li>
            HOFs enable <b>functional programming</b> patterns.
          </li>
          <li>
            They allow <b>code reuse</b> and <b>composition</b> of functions.
          </li>
        </ul>

        <p className="bg-blue-50 p-3 rounded">
          <b>✅ Concise Version:</b>
          <br />A Higher Order Function is a function that can take functions as
          arguments or return a function. Examples include <code>
            map
          </code>, <code>filter</code>, and <code>reduce</code>. They are key to
          functional programming in JavaScript.
        </p>
      </div>
    ),
  },
  {
    id: 5,
    title: "5. Difference between '==' and '===' operators.",
    content: (
      <div className="space-y-4 text-gray-800">
        <p>
          In JavaScript, <code>==</code> and <code>===</code> are comparison
          operators, but they behave differently.
        </p>

        <h3 className="text-lg font-semibold">
          🔹 1. <code>==</code> (Equality Operator)
        </h3>
        <p>
          - Also called <b>loose equality</b>.<br />- Compares{" "}
          <b>values only</b>, performs <b>type coercion</b> if types differ.
          <br />- Converts operands to a common type before comparison.
        </p>
        <pre className="bg-gray-100 p-2 rounded">{`5 == '5'; // true\n0 == false; // true\nnull == undefined; // true`}</pre>

        <h3 className="text-lg font-semibold">
          🔹 2. <code>===</code> (Strict Equality Operator)
        </h3>
        <p>
          - Also called <b>strict equality</b>.<br />- Compares{" "}
          <b>both value and type</b>, no type coercion.
          <br />- Returns true only if both type and value are identical.
        </p>
        <pre className="bg-gray-100 p-2 rounded">{`5 === '5'; // false\n0 === false; // false\nnull === undefined; // false\n5 === 5; // true`}</pre>

        <h3 className="text-lg font-semibold">🔹 Key Points</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Prefer <code>===</code> to avoid unexpected type coercion.
          </li>
          <li>
            <code>==</code> may produce unexpected results due to automatic type
            conversion.
          </li>
          <li>
            Use <code>==</code> only when intentional type conversion is
            desired.
          </li>
        </ul>

        <p className="bg-blue-50 p-3 rounded">
          <b>✅ Concise Version:</b>
          <br />
          <code>==</code> checks equality of values after type coercion (loose
          equality), while <code>===</code> checks equality of both value and
          type (strict equality). Always prefer <code>===</code> for predictable
          behavior.
        </p>
      </div>
    ),
  },
  {
    id: 6,
    title: "6. Explain call(), apply() and bind() methods.",
    important: true,
    content: (
      <div className="space-y-4 text-gray-800">
        <p>
          In JavaScript, <b>call</b>, <b>apply</b>, and <b>bind</b> are methods
          used to control the <code>this</code> context of a function. They are
          particularly useful when you want to invoke a function in the context
          of a specific object.
        </p>

        <h3 className="text-lg font-semibold">🔹 1. call()</h3>
        <p>
          - Invokes the function immediately.
          <br />- Accepts the <code>this</code> context as the first argument,
          followed by individual parameters.
        </p>
        <pre className="bg-gray-100 p-2 rounded">{`const person = { name: 'Raza' };
function greet(greeting, punctuation) {
console.log(greeting + ', ' + this.name + punctuation);
}


greet.call(person, 'Hello', '!'); // Output: Hello, Raza!`}</pre>

        <h3 className="text-lg font-semibold">🔹 2. apply()</h3>
        <p>
          - Invokes the function immediately.
          <br />- Accepts the <code>this</code> context as the first argument,
          followed by arguments in an array.
        </p>
        <pre className="bg-gray-100 p-2 rounded">{`greet.apply(person, ['Hi', '?']); // Output: Hi, Raza?`}</pre>

        <h3 className="text-lg font-semibold">🔹 3. bind()</h3>
        <p>
          - Returns a **new function** with the <code>this</code> context bound
          to the object provided.
          <br />- Does not invoke the function immediately; it can be invoked
          later.
        </p>
        <pre className="bg-gray-100 p-2 rounded">{`const greetRaza = greet.bind(person, 'Hey');
greetRaza('!!'); // Output: Hey, Raza!!`}</pre>

        <h3 className="text-lg font-semibold">🔹 Key Points for Interviews</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <b>call</b> and <b>apply</b> invoke the function immediately,{" "}
            <b>bind</b> returns a new function.
          </li>
          <li>
            <b>call</b> passes arguments individually; <b>apply</b> passes
            arguments as an array.
          </li>
          <li>
            All three are useful for setting the <code>this</code> context
            explicitly.
          </li>
        </ul>

        <p className="bg-blue-50 p-3 rounded">
          <b>✅ Concise Version:</b>
          <br />
          <code>call</code> invokes a function with a specified{" "}
          <code>this</code> context and individual arguments, <code>apply</code>{" "}
          uses an array of arguments, and <code>bind</code> returns a new
          function with the bound context for later invocation.
        </p>
      </div>
    ),
  },
  {
    id: 7,
    title: "7. Difference between var, let and const keyword in JavaScript.",
    important: true,
    content: (
      <div className="space-y-4 text-gray-800">
        <p>
          In JavaScript, <b>var</b>, <b>let</b>, and <b>const</b> are used to
          declare variables, but they differ in <b>scope</b>, <b>hoisting</b>,
          and <b>mutability</b>.
        </p>

        <h3 className="text-lg font-semibold">🔹 1. var</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Function-scoped, not block-scoped.</li>
          <li>
            Hoisted and initialized with <code>undefined</code>.
          </li>
          <li>Can be redeclared and updated within the same scope.</li>
        </ul>
        <pre className="bg-gray-100 p-2 rounded">{`function testVar() {
console.log(a); // undefined
var a = 10;
var a = 20; // redeclaration allowed
}`}</pre>

        <h3 className="text-lg font-semibold">🔹 2. let</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Block-scoped.</li>
          <li>Hoisted but not initialized (Temporal Dead Zone).</li>
          <li>Cannot be redeclared in the same scope but can be updated.</li>
        </ul>
        <pre className="bg-gray-100 p-2 rounded">{`let b = 5;
b = 10; // allowed
// let b = 20; // ❌ redeclaration not allowed`}</pre>

        <h3 className="text-lg font-semibold">🔹 3. const</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Block-scoped.</li>
          <li>Hoisted but not initialized (Temporal Dead Zone).</li>
          <li>
            Cannot be updated or redeclared. Must be initialized at declaration.
          </li>
        </ul>
        <pre className="bg-gray-100 p-2 rounded">{`const c = 15;
// c = 20; // ❌ update not allowed
// const c = 30; // ❌ redeclaration not allowed`}</pre>

        <h3 className="text-lg font-semibold">🔹 Key Points for Interviews</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <b>var</b> → Function-scoped, allows redeclaration, hoisted with
            undefined.
          </li>
          <li>
            <b>let</b> → Block-scoped, no redeclaration, hoisted but TDZ
            applies.
          </li>
          <li>
            <b>const</b> → Block-scoped, immutable reference, must be
            initialized, hoisted but TDZ applies.
          </li>
        </ul>

        <p className="bg-blue-50 p-3 rounded">
          <b>✅ Concise Version:</b>
          <br />
          <code>var</code> is function-scoped and allows redeclaration,{" "}
          <code>let</code> is block-scoped and can be updated but not
          redeclared, <code>const</code> is block-scoped and cannot be updated
          or redeclared.
        </p>
      </div>
    ),
  },
  {
    id: 8,
    title:
      "8. What is the difference between exec() and test() methods in JavaScript?",
    content: (
      <div className="space-y-4 text-gray-800">
        <p>
          In JavaScript, both <b>exec()</b> and <b>test()</b> are methods of{" "}
          <code>RegExp</code> objects used for pattern matching, but they behave
          differently.
        </p>

        <h3 className="text-lg font-semibold">🔹 1. test()</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Returns a <b>boolean</b> (<code>true</code> / <code>false</code>).
          </li>
          <li>Checks if a string matches the regex.</li>
          <li>Does not return match details.</li>
        </ul>
        <pre className="bg-gray-100 p-2 rounded">{`const regex = /hello/;
console.log(regex.test("hello world")); // true
console.log(regex.test("hi there")); // false`}</pre>

        <h3 className="text-lg font-semibold">🔹 2. exec()</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Returns an <b>array of match results</b> if found, otherwise{" "}
            <code>null</code>.
          </li>
          <li>
            Provides detailed match information (matched string, index, input).
          </li>
          <li>Useful for extracting matched values.</li>
        </ul>
        <pre className="bg-gray-100 p-2 rounded">{`const regex = /hello/;
console.log(regex.exec("hello world"));
// [ 'hello', index: 0, input: 'hello world', groups: undefined ]


console.log(regex.exec("hi there"));
// null`}</pre>

        <h3 className="text-lg font-semibold">🔹 Key Differences</h3>
        <table className="w-full border border-gray-300 text-left">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border">Feature</th>
              <th className="p-2 border">test()</th>
              <th className="p-2 border">exec()</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border">Return type</td>
              <td className="p-2 border">Boolean</td>
              <td className="p-2 border">Array or null</td>
            </tr>
            <tr>
              <td className="p-2 border">Usage</td>
              <td className="p-2 border">Check if a match exists</td>
              <td className="p-2 border">Retrieve match details</td>
            </tr>
            <tr>
              <td className="p-2 border">Performance</td>
              <td className="p-2 border">Lightweight</td>
              <td className="p-2 border">More detailed, heavier</td>
            </tr>
          </tbody>
        </table>

        <p className="bg-blue-50 p-3 rounded">
          <b>✅ Concise Version:</b>
          <br />
          <code>test()</code> checks if a regex matches and returns{" "}
          <code>true/false</code>, while <code>exec()</code> returns detailed
          match data or <code>null</code>.
        </p>
      </div>
    ),
  },
  {
    id: 9,
    title: "9. Explain Implicit Type Coercion in JavaScript.",
    content: (
      <div className="space-y-4 text-gray-800">
        <p>
          <b>Implicit Type Coercion</b> in JavaScript refers to the automatic
          conversion of one data type to another during operations. This happens
          when JavaScript tries to perform an operation between values of
          different types, ensuring the operation makes sense.
        </p>

        <h3 className="text-lg font-semibold">🔹 How it Works</h3>
        <p>
          JavaScript automatically converts values into a common type depending
          on the operation:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <b>String Conversion</b>: When using the <code>+</code> operator
            with a string.
          </li>
          <li>
            <b>Number Conversion</b>: In arithmetic operations (except{" "}
            <code>+</code> if a string is involved).
          </li>
          <li>
            <b>Boolean Conversion</b>: In conditional contexts (<code>if</code>,{" "}
            <code>while</code>, logical operators).
          </li>
        </ul>

        <h3 className="text-lg font-semibold">🔹 Examples</h3>
        <pre className="bg-gray-100 p-2 rounded">{`// String Conversion
console.log('5' + 2); // '52'


// Number Conversion
console.log('5' - 2); // 3
console.log('10' * '2'); // 20


// Boolean Conversion
console.log(Boolean('')); // false
console.log(Boolean('hi')); // true
console.log(Boolean(0)); // false
console.log(Boolean(1)); // true`}</pre>

        <h3 className="text-lg font-semibold">🔹 Key Points for Interviews</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Implicit coercion happens automatically during operations.</li>
          <li>Can lead to unexpected results if not carefully handled.</li>
          <li>
            Use <code>===</code> instead of <code>==</code> to avoid unintended
            type conversions.
          </li>
        </ul>

        <p className="bg-blue-50 p-3 rounded">
          <b>✅ Concise Version:</b>
          <br />
          Implicit type coercion is JavaScript’s automatic conversion of values
          into a common type (string, number, or boolean) during operations. It
          makes code flexible but can cause unexpected results.
        </p>
      </div>
    ),
  },
  {
    id: 10,
    title: "10. What is currying in JavaScript?",
    important: true,
    content: (
      <div className="space-y-4 text-gray-800">
        <p>
          <b>Currying</b> in JavaScript is a functional programming technique
          where a function that takes multiple arguments is transformed into a
          sequence of functions, each taking a single argument. Instead of
          passing all arguments at once, you pass them one at a time, and each
          function returns another function until all arguments are provided.
        </p>

        <h3 className="text-lg font-semibold">🔹 Definition</h3>
        <p>
          Currying transforms a function with <code>n</code> arguments into a
          chain of <code>n</code> functions, each taking one argument.
        </p>

        <h3 className="text-lg font-semibold">🔹 Example</h3>
        <pre className="bg-gray-100 p-2 rounded">{`// Normal function
function add(a, b, c) {
return a + b + c;
}
console.log(add(1, 2, 3)); // 6


// Curried version
function curriedAdd(a) {
return function(b) {
return function(c) {
return a + b + c;
};
};
}


console.log(curriedAdd(1)(2)(3)); // 6`}</pre>

        <h3 className="text-lg font-semibold">🔹 Advantages</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Helps in function reusability and modularity.</li>
          <li>
            Enables partial application (fixing some arguments and reusing the
            function).
          </li>
          <li>
            Makes functions more flexible and composable in functional
            programming.
          </li>
        </ul>

        <h3 className="text-lg font-semibold">
          🔹 Partial Application Example
        </h3>
        <pre className="bg-gray-100 p-2 rounded">{`const addOne = curriedAdd(1);
const addOneAndTwo = addOne(2);
console.log(addOneAndTwo(5)); // 8`}</pre>

        <p className="bg-blue-50 p-3 rounded">
          <b>✅ Concise Version:</b>
          <br />
          Currying is the process of converting a function with multiple
          arguments into a series of nested functions, each taking a single
          argument. It improves reusability, modularity, and supports partial
          application.
        </p>
      </div>
    ),
  },
  {
    id: 11,
    title: "11. What is NaN property in JavaScript?",
    content: (
      <div className="space-y-4 text-gray-800">
        <p>
          In JavaScript, <b>NaN</b> stands for <b>“Not-a-Number”</b>. It is a
          special property of the global object that represents the result of an
          invalid or undefined mathematical operation.
        </p>

        <h3 className="text-lg font-semibold">🔹 Examples</h3>
        <pre className="bg-gray-100 p-2 rounded">{`console.log(0 / 0); // NaN
console.log(Math.sqrt(-1)); // NaN
console.log(parseInt("abc")); // NaN`}</pre>

        <h3 className="text-lg font-semibold">🔹 Characteristics</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <b>Type:</b> Despite its name, <code>NaN</code> is of type{" "}
            <code>number</code>.
          </li>
          <li>
            <b>Uniqueness:</b> It is not equal to anything, including itself.
          </li>
          <li>
            <b>Usage:</b> Represents failed numeric conversions or invalid math
            results.
          </li>
        </ul>
        <pre className="bg-gray-100 p-2 rounded">{`console.log(typeof NaN); // 'number'
console.log(NaN === NaN); // false`}</pre>

        <h3 className="text-lg font-semibold">🔹 Checking for NaN</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <code>isNaN()</code>: Checks if a value is NaN after coercion.
          </li>
          <li>
            <code>Number.isNaN()</code>: Strict check, returns true only if
            value is exactly NaN.
          </li>
        </ul>
        <pre className="bg-gray-100 p-2 rounded">{`console.log(isNaN("hello")); // true (string coerced)
console.log(Number.isNaN("hello")); // false (no coercion)
console.log(Number.isNaN(NaN)); // true`}</pre>

        <h3 className="text-lg font-semibold">🔹 Common Causes</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Dividing 0 by 0</li>
          <li>Square root of a negative number</li>
          <li>
            Parsing non-numeric strings with <code>parseInt</code> or{" "}
            <code>Number</code>
          </li>
          <li>
            Invalid arithmetic with <code>undefined</code>
          </li>
        </ul>

        <p className="bg-blue-50 p-3 rounded">
          <b>✅ Concise Version:</b>
          <br />
          <code>NaN</code> is a special numeric value in JavaScript that
          indicates an invalid number. Its type is <code>number</code>, it’s not
          equal to itself, and occurs from invalid math operations. Use{" "}
          <code>Number.isNaN()</code> for reliable checks.
        </p>
      </div>
    ),
  },
  {
    id: 12,
    title: "12. Explain Scope and Scope Chain in JavaScript.",
    important: true,
    content: (
      <div className="space-y-4 text-gray-700 leading-relaxed">
        <div>
          <h3 className="font-semibold text-lg text-gray-800">🔹 Scope</h3>
          <p>
            Scope defines the current context of execution in JavaScript and
            determines variable accessibility. In simple terms, it decides
            <em> where </em> a variable or function can be accessed.
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              <strong>Global Scope:</strong> Accessible throughout the program.
            </li>
            <li>
              <strong>Function Scope:</strong> Variables are limited to the
              function they are declared in.
            </li>
            <li>
              <strong>Block Scope (ES6):</strong> <code>let</code> and{" "}
              <code>const</code> restrict variables to block <code>{`{}`}</code>
              .
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg text-gray-800">
            🔹 Scope Chain
          </h3>
          <p>
            The scope chain is the mechanism used to resolve variable
            references. The JS engine first looks in the current scope, then
            climbs outward through parent scopes until it reaches the global
            scope. If not found, it throws a <code>ReferenceError</code>.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg text-gray-800">🔹 Example</h3>
          <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg text-sm overflow-x-auto">
            {`let globalVar = "I am global";

function outerFunction() {
  let outerVar = "I am outer";

  function innerFunction() {
    let innerVar = "I am inner";
    console.log(innerVar);   // ✅ Found in inner scope
    console.log(outerVar);   // ✅ Found in outer scope
    console.log(globalVar);  // ✅ Found in global scope
  }

  innerFunction();
}

outerFunction();`}
          </pre>
          <p className="mt-2">
            ✅ <code>innerFunction</code> has access to <code>innerVar</code>,{" "}
            <code>outerVar</code>, and <code>globalVar</code> — thanks to the
            scope chain.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 13,
    title: "13. Explain passed by value and passed by reference.",
    content: (
      <div className="space-y-4 text-gray-700 leading-relaxed">
        <div>
          <h3 className="font-semibold text-lg text-gray-800">
            🔹 Passed by Value
          </h3>
          <p>
            In JavaScript, <strong>primitive data types</strong>(
            <code>String</code>, <code>Number</code>, <code>Boolean</code>,
            <code>Null</code>, <code>Undefined</code>, <code>Symbol</code>,
            <code>BigInt</code>) are <strong>passed by value</strong>.
          </p>
          <p>
            This means when you assign or pass a primitive to another variable
            or function, a <strong>copy of the value</strong> is created.
            Changes made to the copy <strong>do not affect</strong> the
            original.
          </p>
          <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg text-sm overflow-x-auto">
            {`let a = 10;
let b = a; // copy of value is assigned
b = 20;

console.log(a); // 10 (original unchanged)
console.log(b); // 20`}
          </pre>
        </div>

        <div>
          <h3 className="font-semibold text-lg text-gray-800">
            🔹 Passed by Reference
          </h3>
          <p>
            <strong>Objects, Arrays, and Functions</strong> are
            <strong> passed by reference</strong>. Instead of copying the value,
            the <strong>reference (memory address)</strong> is passed.
          </p>
          <p>
            Both variables point to the <strong>same object</strong>, so a
            modification through one reference{" "}
            <strong>affects the original</strong>.
          </p>
          <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg text-sm overflow-x-auto">
            {`let obj1 = { name: "Raza" };
let obj2 = obj1; // reference is copied

obj2.name = "Ansari";

console.log(obj1.name); // "Ansari"
console.log(obj2.name); // "Ansari"`}
          </pre>
        </div>

        <div>
          <h3 className="font-semibold text-lg text-gray-800">
            🔹 Key Difference
          </h3>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Passed by Value:</strong> Works with primitives. Copy is
              made and original remains unchanged.
            </li>
            <li>
              <strong>Passed by Reference:</strong> Works with objects/arrays.
              Reference is shared, so changes affect the original.
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: 14,
    title: "14. Explain Closures in JavaScript.",
    important: true,
    content: (
      <div className="space-y-4 text-gray-700 leading-relaxed">
        <div>
          <h3 className="font-semibold text-lg text-gray-800">🔹 Definition</h3>
          <p>
            A <strong>closure</strong> in JavaScript is the combination of a{" "}
            <strong>function</strong> and its{" "}
            <strong>lexical environment</strong> (the scope in which it was
            declared). It allows an inner function to{" "}
            <strong>access variables from its outer function</strong> even after
            the outer function has finished executing.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg text-gray-800">🔹 Example</h3>
          <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg text-sm overflow-x-auto">
            {`function outerFunction() {
  let counter = 0;

  function innerFunction() {
    counter++;
    console.log(counter);
  }

  return innerFunction;
}

const increment = outerFunction(); 
increment(); // 1
increment(); // 2
increment(); // 3`}
          </pre>
          <p className="mt-2">
            ✅ Here, <code>innerFunction</code> forms a closure with{" "}
            <code>outerFunction</code>. Even though <code>outerFunction</code>{" "}
            has returned, the variable <code>counter</code> is preserved because{" "}
            <code>innerFunction</code> still holds a reference to it.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg text-gray-800">
            🔹 Key Benefits of Closures
          </h3>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Data Privacy / Encapsulation:</strong> Variables inside
              closures are not directly accessible from outside.
            </li>
            <li>
              <strong>State Preservation:</strong> Closures “remember” variable
              states between function calls.
            </li>
            <li>
              <strong>Functional Programming Patterns:</strong> Useful in
              callbacks, event handlers, currying, and factories.
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: 15,
    title:
      "15. What do you mean by strict mode in JavaScript and characteristics of JavaScript strict-mode?",
    content: (
      <div className="space-y-4 text-slate-900 leading-relaxed">
        <div>
          <h3 className="font-semibold text-lg text-gray-800">
            🔹 What is Strict Mode?
          </h3>
          <p>
            <strong>Strict Mode</strong> is a feature introduced in
            <strong> ECMAScript 5 (ES5)</strong> that enforces a stricter set of
            rules for JavaScript execution. It helps developers write
            <strong> more secure, optimized, and error-free code</strong> by
            catching common mistakes and preventing unsafe actions.
          </p>
          <p>You can enable strict mode by adding:</p>
          <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg text-sm overflow-x-auto">
            {`"use strict";`}
          </pre>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>At the top of a file → applies to the whole script.</li>
            <li>Inside a function → applies only to that function.</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg text-gray-800">
            🔹 Characteristics of Strict Mode
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Prevents Undeclared Variables:</strong>
              <pre className="bg-gray-900 text-gray-100 p-2 rounded-lg text-sm overflow-x-auto mt-1">
                {`"use strict";
x = 10; // ❌ ReferenceError: x is not defined`}
              </pre>
            </li>
            <li>
              <strong>Eliminates Silent Errors:</strong> Assignments to
              non-writable properties throw errors instead of failing silently.
            </li>
            <li>
              <strong>Disallows Duplicate Parameters:</strong>
              <pre className="bg-gray-900 text-gray-100 p-2 rounded-lg text-sm overflow-x-auto mt-1">
                {`"use strict";
function test(a, a) {} // ❌ SyntaxError`}
              </pre>
            </li>
            <li>
              <strong>
                Restricts <code>this</code> in Functions:
              </strong>
              <pre className="bg-gray-900 text-gray-100 p-2 rounded-lg text-sm overflow-x-auto mt-1">
                {`"use strict";
function test() {
  console.log(this); // undefined
}
test();`}
              </pre>
            </li>
            <li>
              <strong>
                Secures <code>eval()</code> and <code>with</code>:
              </strong>
              <code>eval()</code> cannot create variables in the surrounding
              scope and <code>with</code> statement is disallowed.
            </li>
            <li>
              <strong>Better Optimization:</strong> Strict mode code can
              sometimes be optimized more efficiently by JS engines.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg text-gray-800">
            ✅ Interview Summary
          </h3>
          <p>
            Strict mode in JavaScript is a restricted variant of the language
            that prevents undeclared variables, disallows duplicate parameters,
            restricts
            <code>this</code>, secures <code>eval</code>, and throws errors
            instead of failing silently. It improves{" "}
            <strong>code quality, maintainability, and debugging</strong>.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 16,
    title: "16. Describe the difference between innerHTML and textContent.",
    content: (
      <div className="space-y-4">
        <p>
          In JavaScript, <code>innerHTML</code> and <code>textContent</code> are
          both used to retrieve or set content inside an element, but they work
          differently.
        </p>

        <div>
          <h4 className="font-semibold">🔹 innerHTML</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Returns or sets the <b>HTML markup</b> (tags + text) inside an
              element.
            </li>
            <li>Parses the content as HTML when assigning values.</li>
            <li>
              ⚠️ Less secure — directly inserting user input may cause{" "}
              <b>XSS (Cross-Site Scripting)</b> attacks.
            </li>
          </ul>
          <pre className="bg-gray-100 p-2 rounded mt-2">
            <code>{`div.innerHTML = "<b>Hello</b> World!";
// Renders Hello in bold`}</code>
          </pre>
        </div>

        <div>
          <h4 className="font-semibold">🔹 textContent</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Returns or sets only the <b>plain text</b>, ignoring HTML tags.
            </li>
            <li>Safer — does not parse HTML, reduces XSS risks.</li>
            <li>Faster because it only works with text.</li>
          </ul>
          <pre className="bg-gray-100 p-2 rounded mt-2">
            <code>{`div.textContent = "<b>Hello</b> World!";
// Shows raw text: <b>Hello</b> World!`}</code>
          </pre>
        </div>

        <p>
          👉 <b>Interview Tip:</b> Use <code>innerHTML</code> when you need to
          insert or manipulate HTML, and <code>textContent</code> when you only
          need text and want to avoid security risks.
        </p>
      </div>
    ),
  },
  {
    id: 17,
    title: "17. Explain 'this' keyword.",
    content: (
      <div className="space-y-4">
        <p>
          The <code>this</code> keyword in JavaScript is a special identifier
          that refers to the <b>execution context</b>, i.e., the object that is
          currently invoking the function. Its value is determined at{" "}
          <b>runtime</b> based on how and where the function is called.
        </p>

        <div>
          <h4 className="font-semibold">🔹 Key Rules</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <b>Global Context:</b> In browsers, <code>this</code> refers to{" "}
              <code>window</code>; in Node.js, it refers to <code>global</code>.
            </li>
            <li>
              <b>Inside an Object Method:</b> <code>this</code> points to the
              object calling the method.
            </li>
            <li>
              <b>Inside a Regular Function:</b> In non-strict mode,{" "}
              <code>this</code> is
              <code> window</code>. In strict mode, it’s <code>undefined</code>.
            </li>
            <li>
              <b>Arrow Functions:</b> They don’t have their own{" "}
              <code>this</code>. They inherit it from the enclosing lexical
              scope.
            </li>
            <li>
              <b>Event Handlers:</b> By default, <code>this</code> points to the
              element that received the event.
            </li>
            <li>
              <b>Using call(), apply(), bind():</b> We can explicitly set the
              value of <code>this</code>.
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">✅ Examples</h4>
          <pre className="bg-gray-100 p-2 rounded mt-2">
            <code>{`const user = {
  name: "Raza",
  greet: function () {
    console.log(this.name);
  }
};
user.greet(); // "Raza"

const obj = {
  name: "Ansari",
  arrowFn: () => console.log(this.name),
  normalFn: function () { console.log(this.name); }
};
obj.arrowFn(); // undefined
obj.normalFn(); // "Ansari"`}</code>
          </pre>
        </div>

        <p>
          👉 <b>Interview Tip:</b> <code>this</code> is dynamic in JavaScript.
          Regular functions get <code>this</code> from how they’re invoked,
          while arrow functions inherit it from their enclosing scope.
        </p>
      </div>
    ),
  },
  {
    id: 18,
    title:
      "18. What is the distinction between client-side and server-side JavaScript?",
    important: true,
    content: (
      <div className="space-y-4">
        <p>
          JavaScript can run on both the <b>client-side</b> (in the browser) and
          the <b>server-side</b> (using environments like Node.js). While both
          use the same language, their roles, execution environments, and
          capabilities differ.
        </p>

        <div>
          <h4 className="font-semibold">🔹 Client-Side JavaScript</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>Runs in the browser on the user’s machine.</li>
            <li>
              Used for{" "}
              <b>
                UI interactions, DOM manipulation, form validations, and
                animations
              </b>
              .
            </li>
            <li>
              Executed by the browser’s JavaScript engine (e.g., V8,
              SpiderMonkey).
            </li>
            <li>
              Limited access to system resources for <b>security reasons</b>.
            </li>
          </ul>
          <pre className="bg-gray-100 p-2 rounded mt-2">
            <code>{`document.getElementById("btn").addEventListener("click", () => {
  alert("Button clicked!");
});`}</code>
          </pre>
        </div>

        <div>
          <h4 className="font-semibold">🔹 Server-Side JavaScript</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Runs on the server, commonly using <b>Node.js</b>.
            </li>
            <li>
              Handles <b>business logic, databases, authentication, and APIs</b>
              .
            </li>
            <li>Executes before sending the response to the client.</li>
            <li>
              Has deeper access to system resources like the{" "}
              <b>file system and processes</b>.
            </li>
          </ul>
          <pre className="bg-gray-100 p-2 rounded mt-2">
            <code>{`const http = require("http");

http.createServer((req, res) => {
  res.write("Hello from Server!");
  res.end();
}).listen(3000);`}</code>
          </pre>
        </div>

        <p>
          👉 <b>Interview Tip:</b> Client-side JavaScript enhances interactivity
          in the browser, while server-side JavaScript (e.g., Node.js) powers
          business logic and backend operations.
        </p>
      </div>
    ),
  },
  {
    id: 19,
    title: "19. What do you mean by Self Invoking Functions?",
    important: true,
    content: (
      <div className="space-y-4">
        <p>
          A <b>Self-Invoking Function</b>, also called an{" "}
          <b>IIFE (Immediately Invoked Function Expression)</b>, is a function
          that is <b>executed immediately after it is defined</b>. It is
          commonly used to create private scopes and avoid polluting the global
          namespace.
        </p>

        <div>
          <h4 className="font-semibold">🔹 Syntax</h4>
          <pre className="bg-gray-100 p-2 rounded mt-2">
            <code>{`(function () {
  console.log("I am a Self-Invoking Function!");
})();`}</code>
          </pre>
          <p className="mt-2">
            The parentheses around the function turn it into an{" "}
            <b>expression</b>, which allows it to be executed immediately.
          </p>
        </div>

        <div>
          <h4 className="font-semibold">🔹 Key Characteristics</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <b>Executed Immediately:</b> Runs as soon as it is defined.
            </li>
            <li>
              <b>Encapsulation:</b> Creates a private scope, preventing variable
              leakage.
            </li>
            <li>
              <b>Use Cases:</b> Avoiding global conflicts, initialization code,
              module patterns.
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">🔹 Example: Encapsulation</h4>
          <pre className="bg-gray-100 p-2 rounded mt-2">
            <code>{`const counter = (function () {
  let count = 0; // private variable
  return {
    increment: function () {
      count++;
      return count;
    },
    decrement: function () {
      count--;
      return count;
    }
  };
})();

console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1`}</code>
          </pre>
          <p className="mt-2">
            Here, <code>count</code> is <b>private</b> inside the IIFE and can
            only be accessed through the returned methods.
          </p>
        </div>

        <p>
          👉 <b>Interview Tip:</b> IIFEs are powerful for{" "}
          <b>creating private scopes</b>, keeping code modular, and running{" "}
          <b>initialization logic</b> without polluting the global namespace.
        </p>
      </div>
    ),
  },
  {
    id: 20,
    title: "20. What is event delegation in JavaScript?",
    important: true,
    content: (
      <div className="space-y-4">
        <p>
          <b>Event Delegation</b> is a technique in JavaScript where a single
          event listener is attached to a parent element to handle events on its
          child elements. It leverages <b>event bubbling</b>, allowing the
          parent to capture events from children efficiently.
        </p>

        <div>
          <h4 className="font-semibold">🔹 Why Use Event Delegation?</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Improves performance by reducing the number of event listeners.
            </li>
            <li>Handles dynamic elements added after page load.</li>
            <li>Keeps code clean and maintainable.</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">
            🔹 Example without Delegation (Inefficient)
          </h4>
          <pre className="bg-gray-100 p-2 rounded mt-2">
            <code>{`document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("click", () => {
    console.log("Button clicked:", btn.innerText);
  });
});`}</code>
          </pre>
        </div>

        <div>
          <h4 className="font-semibold">
            🔹 Example with Event Delegation (Efficient)
          </h4>
          <pre className="bg-gray-100 p-2 rounded mt-2">
            <code>{`document.getElementById("button-container").addEventListener("click", (event) => {
  if (event.target && event.target.classList.contains("btn")) {
    console.log("Button clicked:", event.target.innerText);
  }
});`}</code>
          </pre>
          <p className="mt-2">
            ✅ The parent handles all child elements, including those added
            dynamically.
          </p>
        </div>

        <p>
          👉 <b>Interview Tip:</b> Event delegation is ideal for lists, tables,
          or dynamically created elements, improving efficiency and
          maintainability.
        </p>
      </div>
    ),
  },
  {
    id: 21,
    title: "21. What are object prototypes?",
    content: (
      <div className="space-y-4">
        <p>
          In JavaScript, every object has a <b>prototype</b>, which is another
          object from which it can <b>inherit properties and methods</b>. This
          enables
          <b> prototype-based inheritance</b>, a fundamental feature of
          JavaScript.
        </p>

        <div>
          <h4 className="font-semibold">🔹 Key Concepts</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <b>Prototype Chain:</b> If a property is not found on an object,
              JavaScript looks up the prototype chain until it finds it or
              reaches <code>null</code>.
            </li>
            <li>
              <b>
                <code>__proto__</code> and <code>Object.getPrototypeOf()</code>:
              </b>
              Access an object’s prototype.
            </li>
            <li>
              <b>Adding Methods to Prototypes:</b> Methods can be added to the
              prototype so that all instances share them.
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">🔹 Example</h4>
          <pre className="bg-gray-100 p-2 rounded mt-2">
            <code>{`function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  console.log("Hello, " + this.name);
};

const user1 = new Person("Raza");
user1.greet(); // Hello, Raza`}</code>
          </pre>
          <p className="mt-2">
            ✅ Here, <code>greet</code> is shared via the prototype, not
            recreated for every instance.
          </p>
        </div>

        <div>
          <h4 className="font-semibold">🔹 Benefits</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Efficient memory usage: methods are stored on the prototype.
            </li>
            <li>Supports inheritance and code reuse.</li>
            <li>
              Allows modification of behavior for all instances via the
              prototype.
            </li>
          </ul>
        </div>

        <p>
          👉 <b>Interview Tip:</b> Prototypes are the backbone of JavaScript
          inheritance. Understanding the <b>prototype chain</b> and adding
          shared methods is crucial for writing efficient and maintainable code.
        </p>
      </div>
    ),
  },
  {
    id: 22,
    title: "22. What is a promise in JavaScript?",
    important: true,
    namaste: true,
    content: (
      <div className="space-y-4">
        <p>
          A <b>Promise</b> in JavaScript is an{" "}
          <b>
            object representing the eventual completion or failure of an
            asynchronous operation
          </b>{" "}
          and its resulting value. It provides a cleaner way to handle
          asynchronous code compared to nested callbacks.
        </p>

        <div>
          <h4 className="font-semibold">🔹 States of a Promise</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <b>Pending:</b> Initial state, neither fulfilled nor rejected.
            </li>
            <li>
              <b>Fulfilled (Resolved):</b> Operation completed successfully.
            </li>
            <li>
              <b>Rejected:</b> Operation failed, returning an error reason.
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">🔹 Creating a Promise</h4>
          <pre className="bg-gray-100 p-2 rounded mt-2">
            <code>{`const myPromise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("Operation Successful!");
  } else {
    reject("Operation Failed!");
  }
});

myPromise
  .then(result => console.log(result)) // Operation Successful!
  .catch(error => console.log(error)); // If failed`}</code>
          </pre>
        </div>

        <div>
          <h4 className="font-semibold">🔹 Features</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>Handles asynchronous operations cleanly.</li>
            <li>
              Supports chaining with <code>.then()</code>.
            </li>
            <li>
              Graceful error handling with <code>.catch()</code>.
            </li>
            <li>
              Code that runs regardless of outcome using <code>.finally()</code>
              .
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">🔹 Example with Chaining</h4>
          <pre className="bg-gray-100 p-2 rounded mt-2">
            <code>{`fetch("https://api.example.com/data")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error))
  .finally(() => console.log("Fetch attempt finished"));`}</code>
          </pre>
        </div>

        <p>
          👉 <b>Interview Tip:</b> Promises are essential for writing readable,
          maintainable asynchronous JavaScript, enabling proper chaining and
          error handling.
        </p>
      </div>
    ),
  },
  {
    id: 23,
    title: "23. What are the types of errors in JavaScript?",
    content: (
      <div className="space-y-4">
        <p>
          JavaScript primarily has <b>three types of errors</b> that developers
          encounter:
        </p>

        <div>
          <h4 className="font-semibold">🔹 1. Syntax Errors</h4>
          <p>
            Occur when the code does not follow JavaScript syntax rules.
            Detected before execution.
          </p>
          <pre className="bg-gray-100 p-2 rounded mt-2">
            <code>{`let x = ;
// SyntaxError: Unexpected token ';'`}</code>
          </pre>
        </div>

        <div>
          <h4 className="font-semibold">🔹 2. Runtime Errors (Exceptions)</h4>
          <p>
            Occur during code execution when an unexpected problem arises. Can
            be handled with <code>try...catch</code>.
          </p>
          <pre className="bg-gray-100 p-2 rounded mt-2">
            <code>{`let obj = null;
console.log(obj.name);
// TypeError: Cannot read property 'name' of null`}</code>
          </pre>
        </div>

        <div>
          <h4 className="font-semibold">🔹 3. Logical Errors</h4>
          <p>
            Code runs without exceptions but produces incorrect results. Harder
            to detect.
          </p>
          <pre className="bg-gray-100 p-2 rounded mt-2">
            <code>{`function sum(a, b) {
  return a - b; // Logical error, should be a + b
}
console.log(sum(2, 3)); // Outputs -1 instead of 5`}</code>
          </pre>
        </div>

        <div>
          <h4 className="font-semibold">🔹 Other Common Error Types</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <b>ReferenceError:</b> Accessing variables that don’t exist.
            </li>
            <li>
              <b>TypeError:</b> Invalid operation on a value (e.g., calling a
              non-function).
            </li>
            <li>
              <b>RangeError:</b> Value out of allowed range (e.g.,{" "}
              <code>new Array(-1)</code>).
            </li>
            <li>
              <b>URIError:</b> Errors in URI functions like{" "}
              <code>decodeURI()</code>.
            </li>
            <li>
              <b>EvalError:</b> Related to <code>eval()</code> (rarely used
              now).
            </li>
          </ul>
        </div>

        <p>
          👉 <b>Interview Tip:</b> Understanding different types of errors helps
          in debugging effectively and writing{" "}
          <b>robust, error-resistant code</b>.
        </p>
      </div>
    ),
  },
  {
    id: 24,
    title: "24. What is a promise API in JavaScript?",
    important: true,
    content: (
      <div className="space-y-4">
        <p>
          The <b>Promise API</b> in JavaScript is a set of built-in methods and
          utilities for working with <b>Promises</b>, making asynchronous
          operations easier to manage and chain.
        </p>

        <div>
          <h4 className="font-semibold">🔹 Core Methods</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <b>Promise.resolve(value):</b> Returns a Promise resolved with the
              given value.
              <pre className="bg-gray-100 p-2 rounded mt-1">
                <code>{`const p = Promise.resolve(42);
p.then(value => console.log(value)); // 42`}</code>
              </pre>
            </li>
            <li>
              <b>Promise.reject(reason):</b> Returns a Promise rejected with the
              given reason.
              <pre className="bg-gray-100 p-2 rounded mt-1">
                <code>{`const p = Promise.reject("Error occurred");
p.catch(err => console.log(err)); // "Error occurred"`}</code>
              </pre>
            </li>
            <li>
              <b>Promise.all(iterable):</b> Waits for all Promises to resolve.
              Rejects if any fails.
              <pre className="bg-gray-100 p-2 rounded mt-1">
                <code>{`Promise.all([Promise.resolve(1), Promise.resolve(2)])
  .then(values => console.log(values)); // [1, 2]`}</code>
              </pre>
            </li>
            <li>
              <b>Promise.race(iterable):</b> Resolves or rejects as soon as one
              Promise settles.
              <pre className="bg-gray-100 p-2 rounded mt-1">
                <code>{`Promise.race([Promise.resolve(1), Promise.reject("Error")])
  .then(value => console.log(value))
  .catch(err => console.log(err)); // 1`}</code>
              </pre>
            </li>
            <li>
              <b>Promise.any(iterable):</b> Resolves when any Promise resolves;
              rejects only if all fail.
            </li>
            <li>
              <b>Promise.allSettled(iterable):</b> Resolves after all Promises
              settle with an array of results.
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">🔹 Key Benefits</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>Simplifies asynchronous programming.</li>
            <li>Efficient handling of multiple Promises with combinators.</li>
            <li>Better error handling compared to nested callbacks.</li>
          </ul>
        </div>

        <p>
          👉 <b>Interview Tip:</b> Understanding the Promise API is crucial for
          modern JavaScript, especially when dealing with multiple asynchronous
          tasks and advanced async patterns.
        </p>
      </div>
    ),
  },
  {
    id: 25,
    title: "25. What is memoization?",
    important: true,
    content: (
      <div className="space-y-4">
        <p>
          <b>Memoization</b> is an optimization technique used to improve
          function performance by{" "}
          <b>caching the results of expensive function calls</b> and returning
          the cached result when the same inputs occur again.
        </p>

        <div>
          <h4 className="font-semibold">🔹 Key Benefits</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>Improves performance by avoiding repeated calculations.</li>
            <li>Reduces CPU usage for heavy computations.</li>
            <li>Particularly useful in recursive functions.</li>
          </ul>
        </div>

        <p>
          👉 <b>Interview Tip:</b> Memoization demonstrates strong
          problem-solving skills and is widely used for optimizing CPU-intensive
          operations in JavaScript.
        </p>
      </div>
    ),
  },
  {
    id: 26,
    title:
      "26. What is the difference between an array and an object in JavaScript?",
    content: (
      <div className="space-y-4">
        <p>
          In JavaScript, <b>arrays</b> and <b>objects</b> are both data
          structures but serve different purposes:
        </p>

        <div>
          <h4 className="font-semibold">🔹 Key Differences</h4>
          <table className="table-auto border-collapse border border-gray-300 w-full text-left">
            <thead>
              <tr>
                <th className="border border-gray-300 px-2 py-1">Feature</th>
                <th className="border border-gray-300 px-2 py-1">Array</th>
                <th className="border border-gray-300 px-2 py-1">Object</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-2 py-1">Definition</td>
                <td className="border border-gray-300 px-2 py-1">
                  Ordered collection, accessed by numeric indices
                </td>
                <td className="border border-gray-300 px-2 py-1">
                  Collection of key-value pairs, accessed via keys
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-2 py-1">Syntax</td>
                <td className="border border-gray-300 px-2 py-1">
                  let arr = [1, 2, 3];
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-2 py-1">Use Case</td>
                <td className="border border-gray-300 px-2 py-1">
                  Ordered list of items
                </td>
                <td className="border border-gray-300 px-2 py-1">
                  Structured data with named properties
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-2 py-1">Methods</td>
                <td className="border border-gray-300 px-2 py-1">
                  push, pop, map, filter, reduce
                </td>
                <td className="border border-gray-300 px-2 py-1">
                  Object.keys(), Object.values(), Object.entries()
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-2 py-1">Iteration</td>
                <td className="border border-gray-300 px-2 py-1">
                  for, for...of, array methods
                </td>
                <td className="border border-gray-300 px-2 py-1">
                  for...in, Object.keys()/values()/entries()
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h4 className="font-semibold">🔹 Examples</h4>
          <pre className="bg-gray-100 p-2 rounded mt-2">
            <code>{`// Array
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[1]); // Banana

// Object
let person = { name: "Raza", age: 25 };
console.log(person.name); // Raza`}</code>
          </pre>
        </div>

        <p>
          👉 <b>Interview Tip:</b> Use <b>arrays</b> for ordered lists and{" "}
          <b>objects</b> for structured data. Choosing the right data structure
          is key for efficient JavaScript coding.
        </p>
      </div>
    ),
  },
  {
    id: 27,
    title: "27. What is the use of a constructor function in JavaScript?",
    content: (
      <div className="space-y-4">
        <p>
          A <b>constructor function</b> is a special function used to{" "}
          <b>create and initialize objects</b> with similar properties and
          methods. By convention, its name starts with a capital letter, and
          when called with <code>new</code>, it creates a new object with{" "}
          <code>this</code> pointing to it.
        </p>

        <div>
          <h4 className="font-semibold">🔹 Key Characteristics</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>Creates multiple instances with a similar structure.</li>
            <li>
              Methods can be added to the prototype to share across instances.
            </li>
            <li>
              <code>this</code> refers to the newly created object inside the
              constructor.
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">🔹 Example</h4>
          <pre className="bg-gray-100 p-2 rounded mt-2">
            <code>{`function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
  console.log(\`Hello, my name is \${this.name}\`);
};

const user1 = new Person("Raza", 25);
const user2 = new Person("Ali", 30);

user1.greet(); // Hello, my name is Raza
user2.greet(); // Hello, my name is Ali`}</code>
          </pre>
        </div>

        <div>
          <h4 className="font-semibold">🔹 Benefits</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>Reusable object creation pattern.</li>
            <li>Memory-efficient if methods are on the prototype.</li>
            <li>Maintains clean and consistent object structure.</li>
          </ul>
        </div>

        <p>
          👉 <b>Interview Tip:</b> Constructor functions are a classic way of
          creating objects before ES6 classes and understanding them
          demonstrates strong knowledge of object-oriented JavaScript.
        </p>
      </div>
    ),
  },
  {
    id: 28,
    title: "28. What is a Map and a Set in JavaScript?",
    important: true,
    content: (
      <div className="space-y-4">
        <p>
          In JavaScript, <b>Map</b> and <b>Set</b> are modern collection types
          introduced in ES6:
        </p>

        <div>
          <h4 className="font-semibold">🔹 Map</h4>
          <p>
            A <b>Map</b> is a collection of <b>key-value pairs</b> where keys
            can be of any type. It maintains insertion order and provides useful
            methods like <code>set()</code>, <code>get()</code>,{" "}
            <code>has()</code>, <code>delete()</code>, and <code>clear()</code>.
          </p>
          <pre className="bg-gray-100 p-2 rounded mt-2">
            <code>{`const map = new Map();
map.set("name", "Raza");
map.set(1, "One");

console.log(map.get("name")); // Raza
console.log(map.has(1)); // true`}</code>
          </pre>
        </div>

        <div>
          <h4 className="font-semibold">🔹 Set</h4>
          <p>
            A <b>Set</b> is a collection of <b>unique values</b>. Duplicates are
            ignored, and it provides methods like <code>add()</code>,{" "}
            <code>has()</code>, <code>delete()</code>, and <code>clear()</code>.
          </p>
          <pre className="bg-gray-100 p-2 rounded mt-2">
            <code>{`const set = new Set();
set.add(1);
set.add(2);
set.add(1); // Duplicate ignored

console.log(set.has(1)); // true
console.log(set.size); // 2`}</code>
          </pre>
        </div>

        <p>
          👉 <b>Interview Tip:</b> Use <b>Map</b> for key-value pairs with
          non-string keys and <b>Set</b> to store unique values efficiently.
          These are essential tools for modern JavaScript development.
        </p>
      </div>
    ),
  },
  {
    id: 29,
    title: "29. What is DOM?",
    important: true,
    content: (
      <div className="space-y-4">
        <p>
          The <b>DOM (Document Object Model)</b> is a{" "}
          <b>programming interface for web documents</b> that represents the
          structure of an HTML or XML document as a tree of objects. Each
          element, attribute, and text in the document is a node that can be
          accessed and manipulated using JavaScript.
        </p>

        <div>
          <h4 className="font-semibold">🔹 Key Features</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Tree Structure: HTML elements represented as nodes in a tree.
            </li>
            <li>
              Dynamic Manipulation: Add, update, or remove elements in
              real-time.
            </li>
            <li>
              Event Handling: Attach events like clicks, input changes, etc.
            </li>
            <li>
              Cross-Language Interface: Usable with multiple programming
              languages, commonly JavaScript.
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">🔹 Example</h4>
          <pre className="bg-gray-100 p-2 rounded mt-2">
            <code>{`<h1 id="title">Hello World</h1>
<button id="btn">Change Text</button>

<script>
  const button = document.getElementById("btn");
  const title = document.getElementById("title");

  button.addEventListener("click", () => {
    title.textContent = "DOM Updated!";
  });
</script>`}</code>
          </pre>
        </div>

        <p>
          👉 <b>Interview Tip:</b> Understanding the DOM, its tree structure,
          node types, and event handling is essential for building dynamic and
          interactive web applications with JavaScript.
        </p>
      </div>
    ),
  },
  {
    id: 30,
    title: "30. What is the event loop in JavaScript?",
    important: true,
    namaste: true,
    content: (
      <div className="space-y-4">
        <p>
          The <b>Event Loop</b> is a fundamental concept that manages the
          execution of code, callbacks, and asynchronous tasks in JavaScript.
          Since JavaScript is <b>single-threaded</b>, the event loop ensures
          asynchronous operations are handled efficiently without blocking the
          main thread.
        </p>

        <div>
          <h4 className="font-semibold">🔹 How it Works</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <b>Call Stack:</b> Executes functions in <b>LIFO</b> order.
              Synchronous code runs here immediately.
            </li>
            <li>
              <b>Web APIs / Browser APIs:</b> Handles asynchronous tasks like{" "}
              <code>setTimeout</code> or <code>fetch</code>.
            </li>
            <li>
              <b>Callback Queue (Task Queue):</b> Stores completed asynchronous
              callbacks waiting for execution.
            </li>
            <li>
              <b>Event Loop:</b> Continuously checks if the call stack is empty
              and pushes callbacks from the queue to execute.
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">🔹 Example</h4>
          <pre className="bg-gray-100 p-2 rounded mt-2">
            <code>{`console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

console.log("End");

// Output:
// Start
// End
// Timeout`}</code>
          </pre>
        </div>

        <div>
          <h4 className="font-semibold">🔹 Key Points</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Handles asynchronous code in a <b>non-blocking</b> way.
            </li>
            <li>
              Keeps JavaScript <b>responsive</b> even with long-running tasks.
            </li>
            <li>
              Works with <b>microtasks</b> (Promises) and <b>macrotasks</b>{" "}
              (setTimeout, setInterval).
            </li>
          </ul>
        </div>

        <p>
          👉 <b>Interview Tip:</b> Understanding the event loop is crucial for
          managing asynchronous JavaScript and explaining why callbacks execute
          in a specific order.
        </p>
      </div>
    ),
  },
  {
    id: 31,
    title: "31. What do you mean by BOM?",
    content: (
      <div className="space-y-4">
        <p>
          The <b>BOM (Browser Object Model)</b> is a set of objects provided by
          the browser that allows JavaScript to interact with the browser
          environment beyond the document. While the DOM deals with the content
          of a web page, the BOM provides access to browser-specific features
          like the window, navigator, screen, location, and history objects.
        </p>

        <div>
          <h4 className="font-semibold">🔹 Key BOM Objects</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <b>window:</b> Represents the browser window and is the global
              object in the browser.
            </li>
            <li>
              <b>navigator:</b> Provides information about the browser and
              operating system.
            </li>
            <li>
              <b>screen:</b> Gives details about the user’s screen dimensions.
            </li>
            <li>
              <b>location:</b> Provides information about the current URL and
              allows redirecting.
            </li>
            <li>
              <b>history:</b> Allows manipulation of the browser session
              history.
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">🔹 Example</h4>
          <pre className="bg-gray-100 p-2 rounded mt-2">
            <code>{`console.log(window.innerWidth); // Width of the browser window
console.log(navigator.userAgent); // Browser information
console.log(screen.height); // Screen height
console.log(location.href); // Current URL
history.back(); // Navigate back in history`}</code>
          </pre>
        </div>

        <p>
          👉 <b>Interview Tip:</b> Understanding BOM is important for
          interacting with the browser environment, controlling windows,
          navigation, and gathering browser-specific information in JavaScript.
        </p>
      </div>
    ),
  },
  {
    id: 32,
    title: "32. Explain the concept of a pure function.",
    important: true,
    content: (
      <div className="space-y-4">
        <p>
          A <b>pure function</b> is a function that, given the same set of
          inputs, <b>always returns the same output</b> and{" "}
          <b>produces no side effects</b>. Pure functions do not modify external
          state or rely on it, making them predictable and easier to test.
        </p>

        <div>
          <h4 className="font-semibold">
            🔹 Characteristics of Pure Functions
          </h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>Always returns the same output for the same input.</li>
            <li>Does not modify variables outside its scope.</li>
            <li>
              Does not produce side effects like changing the DOM or I/O
              operations.
            </li>
            <li>Easier to debug, test, and reason about.</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">🔹 Example</h4>
          <pre className="bg-gray-100 p-2 rounded mt-2">
            <code>{`// Pure Function
function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // 5
console.log(add(2, 3)); // 5 (always same output)

// Impure Function
let count = 0;
function increment() {
  count++;
  return count;
}

console.log(increment()); // 1
console.log(increment()); // 2 (output changes)`}</code>
          </pre>
        </div>

        <p>
          👉 <b>Interview Tip:</b> Pure functions are a core concept in
          functional programming. They make code predictable, testable, and
          maintainable, which is highly valued in professional JavaScript
          development.
        </p>
      </div>
    ),
  },
  {
    id: 34,
    title:
      "34. What are arrow functions and how are they different from regular functions?",
    important: true,
    content: (
      <div className="space-y-4">
        <p>
          <b>Arrow functions</b> are a concise syntax for writing functions in
          JavaScript, introduced in ES6. They are often used for short callbacks
          and inline functions, but they have some important differences from
          regular functions.
        </p>

        <div>
          <h4 className="font-semibold">🔹 Syntax</h4>
          <pre className="bg-gray-100 p-2 rounded mt-2">
            <code>{`// Regular function
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => a + b;`}</code>
          </pre>
        </div>

        <div>
          <h4 className="font-semibold">
            🔹 Key Differences from Regular Functions
          </h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <b>this binding:</b> Arrow functions do{" "}
              <b>not have their own `this`</b>; they inherit `this` from the
              surrounding lexical scope.
            </li>
            <li>
              <b>arguments object:</b> Arrow functions do{" "}
              <b>not have `arguments`</b>, unlike regular functions.
            </li>
            <li>
              <b>Constructor:</b> Arrow functions cannot be used as constructors
              (cannot use `new`).
            </li>
            <li>
              <b>Syntax:</b> More concise, especially for one-liners or
              callbacks.
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">🔹 Example</h4>
          <pre className="bg-gray-100 p-2 rounded mt-2">
            <code>{`// Regular function
const person = {
  name: "Raza",
  greet: function() {
    console.log(this.name);
  }
};
person.greet(); // Raza

// Arrow function inherits this from lexical scope
const person2 = {
  name: "Ali",
  greet: () => {
    console.log(this.name);
  }
};
person2.greet(); // undefined`}</code>
          </pre>
        </div>

        <p>
          👉 <b>Interview Tip:</b> Arrow functions are ideal for concise syntax
          and callbacks, but be careful with `this` and `arguments` since their
          behavior differs from regular functions.
        </p>
      </div>
    ),
  },
  {
    id: 35,
    title: "35. What are template literals in JavaScript?",
    content: (
      <div className="space-y-4">
        <p>
          <b>Template literals</b> are a modern way to create strings in
          JavaScript, introduced in ES6. They allow <b>multi-line strings</b>{" "}
          and <b>string interpolation</b> using <code>${}</code> syntax, making
          string concatenation cleaner and more readable.
        </p>

        <div>
          <h4 className="font-semibold">🔹 Syntax</h4>
          <pre className="bg-gray-100 p-2 rounded mt-2">
            <code>{"`Hello ${name}, you are ${age} years old.`"}</code>
          </pre>
        </div>

        <div>
          <h4 className="font-semibold">🔹 Example</h4>
          <pre className="bg-gray-100 p-2 rounded mt-2">
            <code>{`const name = "Raza";
const age = 25;

// Using template literals
const greeting = \`Hello \${name}, you are \${age} years old.\`;
console.log(greeting); // Hello Raza, you are 25 years old.

// Multi-line string
const multiLine = \`This is line 1
This is line 2\`;
console.log(multiLine);`}</code>
          </pre>
        </div>

        <p>
          👉 <b>Interview Tip:</b> Template literals improve code readability
          and simplify dynamic string creation. They are widely used in modern
          JavaScript for cleaner and more maintainable code.
        </p>
      </div>
    ),
  },
  {
    id: 36,
    title: "36. How does the setTimeout function work?",
    important: true,
    content: (
      <div className="space-y-4">
        <p>
          The <b>setTimeout</b> function in JavaScript is used to execute a
          function after a specified delay (in milliseconds). It is part of the{" "}
          <b>Web APIs</b> and works asynchronously with the <b>event loop</b>,
          meaning it does not block the main thread while waiting.
        </p>

        <div>
          <h4 className="font-semibold">🔹 Syntax</h4>
          <pre className="bg-gray-100 p-2 rounded mt-2">
            <code>{`setTimeout(function, delay, arg1, arg2, ...);`}</code>
          </pre>
        </div>

        <div>
          <h4 className="font-semibold">🔹 How it Works</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              The callback function is sent to the <b>Web API environment</b>{" "}
              along with the specified delay.
            </li>
            <li>
              After the delay, the callback is moved to the{" "}
              <b>task queue (callback queue)</b>.
            </li>
            <li>
              The <b>event loop</b> pushes the callback onto the{" "}
              <b>call stack</b> once it’s empty, executing the function.
            </li>
            <li>
              Even with a delay of 0ms, the callback is executed asynchronously
              after the current call stack is cleared.
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">🔹 Example</h4>
          <pre className="bg-gray-100 p-2 rounded mt-2">
            <code>{`console.log("Start");

setTimeout(() => {
  console.log("Executed after 2 seconds");
}, 2000);

console.log("End");

// Output:
// Start
// End
// Executed after 2 seconds`}</code>
          </pre>
        </div>

        <p>
          👉 <b>Interview Tip:</b> Understanding <b>setTimeout</b> is crucial
          for managing asynchronous tasks and explaining how the event loop
          handles delayed execution in JavaScript.
        </p>
      </div>
    ),
  },
  {
    id: 37,
    title: "37. What are JavaScript callbacks?",
    important: true,
    content: (
      <div className="space-y-4">
        <p>
          A <b>callback</b> in JavaScript is a function passed as an argument to
          another function, which is then invoked inside the outer function.
          Callbacks are commonly used to handle asynchronous operations such as
          API calls, timers, or events.
        </p>

        <div>
          <h4 className="font-semibold">🔹 Key Features</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>Enables asynchronous execution of code.</li>
            <li>
              Allows functions to be executed after a certain task is completed.
            </li>
            <li>
              Helps in avoiding blocking operations in JavaScript’s
              single-threaded environment.
            </li>
            <li>
              Can be used for event handling, timers, or array operations like{" "}
              <code>map</code> and <code>forEach</code>.
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">🔹 Example</h4>
          <pre className="bg-gray-100 p-2 rounded mt-2">
            <code>{`function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greet("Raza", sayGoodbye);

// Output:
// Hello Raza
// Goodbye!`}</code>
          </pre>
        </div>

        <p>
          👉 <b>Interview Tip:</b> Callbacks are fundamental for understanding
          asynchronous JavaScript and form the basis for Promises and
          async/await patterns.
        </p>
      </div>
    ),
    important: true,
  },
  {
    id: 38,
    title: "38. What is destructuring in JavaScript?",
    important: true,
    important: true,
    content: (
      <div className="space-y-4">
        <p>
          <b>Destructuring</b> in JavaScript is a syntax that allows you to{" "}
          <b>unpack values from arrays or properties from objects</b> into
          distinct variables in a concise and readable way.
        </p>

        <div>
          <h4 className="font-semibold">🔹 Key Features</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>Extract values from arrays into separate variables.</li>
            <li>
              Extract properties from objects into variables with matching
              names.
            </li>
            <li>Supports default values and renaming variables.</li>
            <li>
              Improves code readability and reduces the need for repetitive
              access.
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">🔹 Examples</h4>
          <pre className="bg-gray-100 p-2 rounded mt-2">
            <code>{`// Array Destructuring
const numbers = [1, 2, 3];
const [a, b, c] = numbers;
console.log(a, b, c); // 1 2 3

// Object Destructuring
const person = { name: "Raza", age: 25 };
const { name, age } = person;
console.log(name, age); // Raza 25

// Renaming and default values
const { name: fullName, gender = "Male" } = person;
console.log(fullName, gender); // Raza Male`}</code>
          </pre>
        </div>

        <p>
          👉 <b>Interview Tip:</b> Destructuring is widely used in modern
          JavaScript and frameworks like React for cleaner, more readable code
          when handling props, state, or function parameters.
        </p>
      </div>
    ),
  },
  {
    id: 39,
    title: "39. What is the difference between null and undefined?",
    important: true,
    content: (
      <div className="space-y-4">
        <p>
          In JavaScript, <b>null</b> and <b>undefined</b> both represent the
          absence of a value, but they are conceptually different:
        </p>

        <div>
          <h4 className="font-semibold">🔹 Key Differences</h4>
          <table className="table-auto border-collapse border border-gray-300 w-full text-left">
            <thead>
              <tr>
                <th className="border border-gray-300 px-2 py-1">Feature</th>
                <th className="border border-gray-300 px-2 py-1">null</th>
                <th className="border border-gray-300 px-2 py-1">undefined</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-2 py-1">Meaning</td>
                <td className="border border-gray-300 px-2 py-1">
                  Explicitly assigned “no value”
                </td>
                <td className="border border-gray-300 px-2 py-1">
                  Variable declared but not initialized
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-2 py-1">Type</td>
                <td className="border border-gray-300 px-2 py-1">object</td>
                <td className="border border-gray-300 px-2 py-1">undefined</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-2 py-1">Use Case</td>
                <td className="border border-gray-300 px-2 py-1">
                  To explicitly indicate “no value”
                </td>
                <td className="border border-gray-300 px-2 py-1">
                  To indicate a variable has not been assigned
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-2 py-1">Example</td>
                <td className="border border-gray-300 px-2 py-1">
                  <code>let x = null;</code>
                </td>
                <td className="border border-gray-300 px-2 py-1">
                  <code>let y;</code>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h4 className="font-semibold">🔹 Example</h4>
          <pre className="bg-gray-100 p-2 rounded mt-2">
            <code>{`let a; 
console.log(a); // undefined

let b = null;
console.log(b); // null`}</code>
          </pre>
        </div>

        <p>
          👉 <b>Interview Tip:</b> Remember that <code>null</code> is used
          intentionally to indicate “no value,” whereas <code>undefined</code>{" "}
          usually indicates an uninitialized variable or missing property.
        </p>
      </div>
    ),
  },
  {
    id: 40,
    title: "40. What is debouncing and throttling?",
    important: true,
    content: (
      <div className="space-y-4">
        <p>
          <b>Debouncing</b> and <b>Throttling</b> are techniques to control how
          frequently a function is executed in response to high-frequency events
          like <code>scroll</code>, <code>resize</code>, or <code>input</code>.
        </p>

        <div>
          <h4 className="font-semibold">🔹 Debouncing</h4>
          <p>
            Debouncing ensures that a function is executed{" "}
            <b>only after a certain period of inactivity</b>. It is useful for
            events that trigger frequently, like search input, to reduce
            unnecessary function calls.
          </p>
          <pre className="bg-gray-100 p-2 rounded mt-2">
            <code>{`function debounce(func, delay) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
}

// Usage
const handleInput = debounce(() => console.log("Input processed"), 300);
inputElement.addEventListener("input", handleInput);`}</code>
          </pre>
        </div>

        <div>
          <h4 className="font-semibold">🔹 Throttling</h4>
          <p>
            Throttling ensures that a function is executed{" "}
            <b>at most once in a specified time interval</b>. It is useful for
            events like window scrolling or resizing to improve performance.
          </p>
          <pre className="bg-gray-100 p-2 rounded mt-2">
            <code>{`function throttle(func, limit) {
  let lastFunc;
  let lastRan;
  return function(...args) {
    if (!lastRan) {
      func.apply(this, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(() => {
        if ((Date.now() - lastRan) >= limit) {
          func.apply(this, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}

// Usage
window.addEventListener("scroll", throttle(() => console.log("Scroll event"), 1000));`}</code>
          </pre>
        </div>

        <p>
          👉 <b>Interview Tip:</b> Use <b>debounce</b> for user input to reduce
          unnecessary calls and <b>throttle</b> for continuous events like
          scrolling to optimize performance.
        </p>
      </div>
    ),
  },
  {
    id: 41,
    title: "41. What is the spread operator (...) in JavaScript?",
    important: true,
    content: (
      <div className="space-y-4">
        <p>
          The <b>spread operator</b> (<code>...</code>) in JavaScript allows an
          iterable (like an array, object, or string) to be expanded into
          individual elements. It is commonly used for{" "}
          <b>copying, merging, or spreading values</b> in function calls,
          arrays, and objects.
        </p>

        <div>
          <h4 className="font-semibold">🔹 Key Uses</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>Expand arrays or objects into individual elements.</li>
            <li>Create shallow copies of arrays or objects.</li>
            <li>Merge arrays or objects easily.</li>
            <li>Pass multiple values as arguments to functions.</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">🔹 Examples</h4>
          <pre className="bg-gray-100 p-2 rounded mt-2">
            <code>{`// Spread in arrays
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // [1, 2, 3, 4, 5]

// Spread in objects
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
console.log(obj2); // { a: 1, b: 2, c: 3 }

// Spread in function calls
function sum(x, y, z) {
  return x + y + z;
}
const nums = [1, 2, 3];
console.log(sum(...nums)); // 6`}</code>
          </pre>
        </div>

        <p>
          👉 <b>Interview Tip:</b> The spread operator simplifies array and
          object manipulation, reduces boilerplate, and is widely used in modern
          JavaScript and React for state updates and prop handling.
        </p>
      </div>
    ),
  },
  {
    id: 42,
    title: "42. What is the rest parameter and spread operator?",
    important: true,
    content: (
      <div className="space-y-4">
        <p>
          The <b>rest parameter</b> and <b>spread operator</b> in JavaScript
          both use the <code>...</code> syntax, but they serve opposite
          purposes.
        </p>

        <div>
          <h4 className="font-semibold">🔹 Rest Parameter</h4>
          <p>
            The rest parameter collects multiple arguments into a single array.
            It is used in function definitions to handle variable numbers of
            arguments.
          </p>
          <pre className="bg-gray-100 p-2 rounded mt-2">
            <code>{`function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // 10
console.log(sum(5, 10)); // 15`}</code>
          </pre>
        </div>

        <div>
          <h4 className="font-semibold">🔹 Spread Operator</h4>
          <p>
            The spread operator expands an array or object into individual
            elements. It is commonly used for copying, merging, or passing
            multiple values.
          </p>
          <pre className="bg-gray-100 p-2 rounded mt-2">
            <code>{`const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // [1, 2, 3, 4, 5]

function multiply(x, y, z) {
  return x * y * z;
}
const nums = [2, 3, 4];
console.log(multiply(...nums)); // 24`}</code>
          </pre>
        </div>

        <p>
          🔹 <b>Key Difference:</b> Rest gathers multiple values into an array
          (used in function parameters), whereas Spread expands an array or
          object into individual elements (used in function calls, arrays, and
          objects).
        </p>

        <p>
          👉 <b>Interview Tip:</b> Understanding the distinction is crucial as
          both are widely used in modern JavaScript and frameworks like React
          for state handling and dynamic argument passing.
        </p>
      </div>
    ),
  },
  {
    id: 43,
    title:
      "43. What is the difference between synchronous and asynchronous in Javascript?",
    important: true,
    content: (
      <div className="space-y-4">
        <p>
          In JavaScript, code execution can be <b>synchronous</b> or{" "}
          <b>asynchronous</b>, depending on how tasks are handled in the
          single-threaded environment.
        </p>

        <div>
          <h4 className="font-semibold">🔹 Synchronous</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Tasks are executed <b>one after another</b> in the order they
              appear.
            </li>
            <li>Each task blocks the next until it completes.</li>
            <li>
              Easy to reason about, but long-running tasks can block the main
              thread.
            </li>
            <li>Example: regular function calls, loops.</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">🔹 Asynchronous</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Tasks can be executed <b>without blocking</b> the main thread.
            </li>
            <li>
              Allows other code to run while waiting for events like timers, API
              calls, or I/O.
            </li>
            <li>
              Uses callbacks, promises, async/await to handle execution when the
              task completes.
            </li>
            <li>
              Example: <code>setTimeout</code>, <code>fetch</code>, event
              listeners.
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">🔹 Example</h4>
          <pre className="bg-gray-100 p-2 rounded mt-2">
            <code>{`// Synchronous
console.log("Start");
console.log("Middle");
console.log("End");
// Output: Start Middle End

// Asynchronous
console.log("Start");
setTimeout(() => console.log("Middle"), 0);
console.log("End");
// Output: Start End Middle`}</code>
          </pre>
        </div>

        <p>
          👉 <b>Interview Tip:</b> Understanding synchronous vs asynchronous
          behavior is critical for managing non-blocking operations, event
          handling, and writing efficient JavaScript code.
        </p>
      </div>
    ),
  },
  {
    id: 44,
    title: "44. What is event bubbling, event capturing and event delegation?",
    important: true,
    content: (
      <div className="space-y-4">
        <p>
          In JavaScript, events propagate through the DOM in two main phases:{" "}
          <b>capturing</b> and <b>bubbling</b>. <b>Event delegation</b> is a
          technique that leverages this propagation for efficient event
          handling.
        </p>

        <div>
          <h4 className="font-semibold">🔹 Event Capturing (Trickling)</h4>
          <p>
            The event starts from the <b>root element</b> and propagates down to
            the target element. This phase is rarely used directly but can be
            enabled with the <code>capture</code> option in{" "}
            <code>addEventListener</code>.
          </p>
        </div>

        <div>
          <h4 className="font-semibold">🔹 Event Bubbling</h4>
          <p>
            The event starts from the <b>target element</b> and propagates up to
            the root. By default, events bubble in JavaScript, allowing parent
            elements to respond to events triggered by child elements.
          </p>
        </div>

        <div>
          <h4 className="font-semibold">🔹 Event Delegation</h4>
          <p>
            Event delegation is a technique where a <b>single event listener</b>{" "}
            is attached to a parent element to handle events on its children. It
            leverages event bubbling to capture events efficiently without
            adding listeners to each child.
          </p>
        </div>

        <div>
          <h4 className="font-semibold">🔹 Example</h4>
          <pre className="bg-gray-100 p-2 rounded mt-2">
            <code>{`// Event delegation example
document.getElementById("parent").addEventListener("click", function(e) {
  if (e.target && e.target.matches("button.child")) {
    console.log("Button clicked: " + e.target.textContent);
  }
});`}</code>
          </pre>
        </div>

        <p>
          👉 <b>Interview Tip:</b> Understanding event propagation and
          delegation is crucial for writing efficient, maintainable JavaScript,
          especially when dealing with dynamic elements in the DOM.
        </p>
      </div>
    ),
  },
  {
    id: 45,
    title: "45. What is the difference between setTimeout() and setInterval()?",
    important: true,
    content: (
      <div className="space-y-4">
        <p>
          Both <code>setTimeout()</code> and <code>setInterval()</code> are used
          to schedule functions in JavaScript, but they behave differently:
        </p>

        <div>
          <h4 className="font-semibold">🔹 setTimeout()</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Executes a function <b>once</b> after a specified delay (in
              milliseconds).
            </li>
            <li>
              Returns a <b>timeout ID</b> which can be used to cancel the
              execution with <code>clearTimeout()</code>.
            </li>
            <li>
              Commonly used for delayed execution or one-time asynchronous
              tasks.
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">🔹 setInterval()</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Executes a function <b>repeatedly</b> at a specified interval (in
              milliseconds).
            </li>
            <li>
              Returns an <b>interval ID</b> which can be cleared using{" "}
              <code>clearInterval()</code>.
            </li>
            <li>
              Commonly used for recurring tasks like updating clocks or polling
              data.
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">🔹 Example</h4>
          <pre className="bg-gray-100 p-2 rounded mt-2">
            <code>{`// setTimeout - executes once after 2 seconds
setTimeout(() => {
  console.log("Executed after 2 seconds");
}, 2000);

// setInterval - executes every 2 seconds
const intervalId = setInterval(() => {
  console.log("Executed every 2 seconds");
}, 2000);

// To stop setInterval after 10 seconds
setTimeout(() => clearInterval(intervalId), 10000);`}</code>
          </pre>
        </div>

        <p>
          👉 <b>Interview Tip:</b> Use <code>setTimeout</code> for delayed
          single execution and <code>setInterval</code> for repeated execution.
          Always remember to clear intervals to prevent memory leaks.
        </p>
      </div>
    ),
  },
  {
    id: 46,
    title: "46. What is the prototype chain in JavaScript?",
    important: true,
    content: (
      <div className="space-y-4">
        <p>
          In JavaScript, every object has an internal link to another object
          called its <b>prototype</b>. The <b>prototype chain</b> is a mechanism
          by which objects inherit properties and methods from other objects.
        </p>

        <div>
          <h4 className="font-semibold">🔹 How it works</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              When accessing a property or method, JavaScript first looks on the
              object itself.
            </li>
            <li>
              If the property/method is not found, it looks up the{" "}
              <b>prototype chain</b>.
            </li>
            <li>
              This continues until it reaches <code>null</code>, which signifies
              the end of the chain.
            </li>
            <li>The prototype chain enables inheritance in JavaScript.</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">🔹 Example</h4>
          <pre className="bg-gray-100 p-2 rounded mt-2">
            <code>{`function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  console.log("Hello, " + this.name);
};

const person1 = new Person("Raza");
person1.greet(); // Hello, Raza

// Explanation:
// - person1 doesn't have 'greet' property directly
// - JS looks into person1.__proto__, which is Person.prototype
// - Finds 'greet' method and executes it`}</code>
          </pre>
        </div>

        <p>
          👉 <b>Interview Tip:</b> Understanding the prototype chain is crucial
          for mastering inheritance, object-oriented patterns, and how
          JavaScript resolves properties and methods.
        </p>
      </div>
    ),
  },
  {
    id: 47,
    title:
      "47. What is the difference between Object.create() and a constructor function?",
    content: (
      <div className="space-y-4">
        <p>
          Both <code>Object.create()</code> and constructor functions are used
          to create objects in JavaScript, but they differ in syntax,
          inheritance, and behavior.
        </p>

        <div>
          <h4 className="font-semibold">🔹 Object.create()</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>Creates a new object with the specified prototype object.</li>
            <li>
              Does not require the <code>new</code> keyword.
            </li>
            <li>
              Ideal for setting up prototype-based inheritance without invoking
              a constructor function.
            </li>
            <li>
              Can create objects with a null prototype (
              <code>Object.create(null)</code>).
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">🔹 Constructor Function</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Defines a blueprint for creating objects using <code>new</code>.
            </li>
            <li>
              Invokes the function to initialize the object and sets up its
              prototype.
            </li>
            <li>Supports encapsulation of properties and methods.</li>
            <li>
              Traditional way of creating multiple objects with shared methods
              before ES6 classes.
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">🔹 Example</h4>
          <pre className="bg-gray-100 p-2 rounded mt-2">
            <code>{`// Using Object.create
const proto = { greet() { console.log("Hello"); } };
const obj1 = Object.create(proto);
obj1.greet(); // Hello

// Using Constructor Function
function Person(name) {
  this.name = name;
}
Person.prototype.greet = function() {
  console.log("Hello " + this.name);
};
const person1 = new Person("Raza");
person1.greet(); // Hello Raza`}</code>
          </pre>
        </div>

        <p>
          👉 <b>Interview Tip:</b> Use <code>Object.create()</code> for pure
          prototype inheritance and lightweight objects. Use constructor
          functions when you need object initialization and shared methods via
          prototypes.
        </p>
      </div>
    ),
  },
  {
    id: 48,
    title: "48. What is a generator function in JavaScript?",
    important: true,
    content: (
      <div className="space-y-4">
        <p>
          A <b>generator function</b> is a special type of function in
          JavaScript that can <b>pause its execution</b> and later <b>resume</b>{" "}
          at the point it was paused. Generator functions are defined using the{" "}
          <code>function*</code> syntax and use the <code>yield</code> keyword
          to produce values.
        </p>

        <div>
          <h4 className="font-semibold">🔹 Key Features</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Defined with <code>function*</code> syntax.
            </li>
            <li>
              Uses <code>yield</code> to produce a sequence of values one at a
              time.
            </li>
            <li>
              Returns an <b>iterator object</b> with a <code>next()</code>{" "}
              method.
            </li>
            <li>
              Useful for implementing lazy evaluation, infinite sequences, or
              controlling asynchronous flows with generators.
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">🔹 Example</h4>
          <pre className="bg-gray-100 p-2 rounded mt-2">
            <code>{`function* numbersGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = numbersGenerator();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
console.log(gen.next().done);  // true`}</code>
          </pre>
        </div>

        <p>
          👉 <b>Interview Tip:</b> Generator functions are powerful for handling
          sequences, lazy evaluation, and asynchronous programming patterns
          before async/await became standard.
        </p>
      </div>
    ),
  },
  {
    id: 49,
    title:
      "49. What is the difference between Promise.all() and Promise.race()?",
    important: true,
    namaste: true,
    content: (
      <div className="space-y-4">
        <p>
          <b>Promise.all()</b> and <b>Promise.race()</b> are methods to handle
          multiple promises in JavaScript, but they behave differently in terms
          of resolution and rejection.
        </p>

        <div>
          <h4 className="font-semibold">🔹 Promise.all()</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>Takes an array of promises and returns a single promise.</li>
            <li>
              Resolves only when <b>all promises are resolved</b>.
            </li>
            <li>
              If any promise rejects, it immediately rejects with that error.
            </li>
            <li>Useful when you need results of all promises together.</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">🔹 Promise.race()</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>Takes an array of promises and returns a single promise.</li>
            <li>
              Resolves or rejects as soon as <b>the first promise settles</b>{" "}
              (resolved or rejected).
            </li>
            <li>
              Useful for implementing timeouts or getting the fastest response
              among multiple promises.
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">🔹 Example</h4>
          <pre className="bg-gray-100 p-2 rounded mt-2">
            <code>{`const p1 = new Promise(res => setTimeout(() => res("First"), 1000));
const p2 = new Promise(res => setTimeout(() => res("Second"), 2000));

// Promise.all - waits for all promises
Promise.all([p1, p2]).then(console.log); // ["First", "Second"]

// Promise.race - resolves/rejects as soon as first settles
Promise.race([p1, p2]).then(console.log); // "First"`}</code>
          </pre>
        </div>

        <p>
          👉 <b>Interview Tip:</b> Use <code>Promise.all()</code> when you need
          all results, and <code>Promise.race()</code> for the first
          resolved/rejected result, like implementing timeouts or competitive
          async tasks.
        </p>
      </div>
    ),
  },
  {
    id: 50,
    title: "50. What are weak references in JavaScript?",
    content: (
      <div className="space-y-4">
        <p>
          <b>Weak references</b> in JavaScript allow you to reference an object
          without preventing it from being garbage collected. They are primarily
          used to hold references to objects that may be needed temporarily but
          should not prevent memory cleanup.
        </p>

        <div>
          <h4 className="font-semibold">🔹 Key Features</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Implemented using <code>WeakMap</code>, <code>WeakSet</code>, or{" "}
              <code>WeakRef</code>.
            </li>
            <li>
              Objects referenced weakly can be garbage collected if there are no
              other strong references.
            </li>
            <li>
              Cannot be enumerated (no iteration), which prevents accidental
              memory retention.
            </li>
            <li>
              Useful for caching or managing resources without causing memory
              leaks.
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">🔹 Example: WeakMap</h4>
          <pre className="bg-gray-100 p-2 rounded mt-2">
            <code>{`let obj = { name: "Raza" };
let weakMap = new WeakMap();

weakMap.set(obj, "Some value");

console.log(weakMap.get(obj)); // "Some value"

obj = null; // obj can now be garbage collected
// weakMap automatically loses reference to obj`}</code>
          </pre>
        </div>

        <p>
          👉 <b>Interview Tip:</b> Weak references are useful for
          memory-efficient caching or storing metadata about objects without
          preventing their garbage collection, which is critical in large-scale
          applications.
        </p>
      </div>
    ),
  },
  {
    id: 51,
    title: "51. What is the Proxy object in JavaScript?",
    content: (
      <div className="space-y-4">
        <p>
          The <b>Proxy object</b> in JavaScript allows you to create a wrapper
          around another object (the target) and intercept operations performed
          on it, such as property access, assignment, deletion, and function
          invocation.
        </p>

        <div>
          <h4 className="font-semibold">🔹 Key Features</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Interception of fundamental operations like <code>get</code>,{" "}
              <code>set</code>, <code>deleteProperty</code>, etc.
            </li>
            <li>
              Used for logging, validation, access control, or creating reactive
              objects.
            </li>
            <li>
              Provides fine-grained control over object behavior without
              modifying the original object.
            </li>
            <li>
              Often combined with <code>Reflect</code> API for default behavior
              handling.
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">🔹 Example</h4>
          <pre className="bg-gray-100 p-2 rounded mt-2">
            <code>{`const target = { name: "Raza" };

const proxy = new Proxy(target, {
  get(obj, prop) {
    console.log(\`Property "\${prop}" was accessed\`);
    return obj[prop];
  },
  set(obj, prop, value) {
    console.log(\`Property "\${prop}" set to "\${value}"\`);
    obj[prop] = value;
    return true;
  }
});

console.log(proxy.name); // Logs access + "Raza"
proxy.age = 25; // Logs set + sets value`}</code>
          </pre>
        </div>

        <p>
          👉 <b>Interview Tip:</b> Proxies are powerful for creating reactive
          systems, validation layers, and advanced frameworks behavior (like
          Vue.js reactivity) without modifying the original objects.
        </p>
      </div>
    ),
  },
  {
    id: 52,
    title:
      "52. What is the difference between shallow copy and deep copy in JavaScript?",
    important: true,
    content: (
      <div className="space-y-4">
        <p>
          In JavaScript, copying objects or arrays can be done either as a{" "}
          <b>shallow copy</b> or a <b>deep copy</b>. Understanding the
          distinction is crucial for preventing unintended mutations.
        </p>

        <div>
          <h4 className="font-semibold">🔹 Shallow Copy</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Copies the <b>top-level properties</b> of an object or array.
            </li>
            <li>
              Nested objects or arrays are <b>still referenced</b> (not copied).
            </li>
            <li>
              Changes to nested objects in the copied object will affect the
              original object.
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">🔹 Deep Copy</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Recursively copies <b>all levels</b> of the object or array.
            </li>
            <li>
              Changes in the copied object do <b>not affect</b> the original
              object.
            </li>
            <li>
              Methods: <code>structuredClone()</code>,{" "}
              <code>JSON.parse(JSON.stringify(obj))</code>, or recursive custom
              functions.
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">🔹 Example</h4>
          <pre className="bg-gray-100 p-2 rounded mt-2">
            <code>{`// Shallow copy
const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { ...obj1 };
obj2.b.c = 5;
console.log(obj1.b.c); // 5 (nested object is shared)

// Deep copy
const obj3 = JSON.parse(JSON.stringify(obj1));
obj3.b.c = 10;
console.log(obj1.b.c); // 5 (original object unaffected)`}</code>
          </pre>
        </div>

        <p>
          👉 <b>Interview Tip:</b> Use shallow copy for flat objects and deep
          copy for nested objects to avoid unexpected mutations and ensure data
          integrity.
        </p>
      </div>
    ),
  },
  {
    id: 53,
    title: "53. What are service workers in JavaScript?",
    important: true,
    content: (
      <div className="space-y-4">
        <p>
          <b>Service Workers</b> are scripts that run in the background of the
          browser, separate from the main web page, enabling features like
          offline caching, push notifications, and background data
          synchronization.
        </p>

        <div>
          <h4 className="font-semibold">🔹 Key Features</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Runs independently of the web page, allowing background tasks.
            </li>
            <li>
              Intercepts network requests to enable offline-first applications.
            </li>
            <li>Supports push notifications and background sync.</li>
            <li>
              Acts as a programmable proxy between the web app and network.
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">🔹 Lifecycle</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <b>Register:</b> Register the service worker in your main script.
            </li>
            <li>
              <b>Install:</b> Service worker installs and caches required
              assets.
            </li>
            <li>
              <b>Activate:</b> Cleans up old caches and takes control of pages.
            </li>
            <li>
              <b>Fetch:</b> Intercepts network requests and serves cached
              responses if needed.
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">🔹 Example</h4>
          <pre className="bg-gray-100 p-2 rounded mt-2">
            <code>{`// Registering a service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(registration => console.log('Service Worker registered:', registration))
    .catch(err => console.log('Registration failed:', err));
}

// Inside sw.js
self.addEventListener('install', event => {
  console.log('Service Worker installed');
});

self.addEventListener('fetch', event => {
  event.respondWith(fetch(event.request));
});`}</code>
          </pre>
        </div>

        <p>
          👉 <b>Interview Tip:</b> Service Workers are essential for building{" "}
          <b>Progressive Web Apps (PWAs)</b> and improving performance, offline
          capabilities, and user engagement.
        </p>
      </div>
    ),
  },
  {
    id: 54,
    title: "54. How does the new keyword work in JavaScript?",
    content: (
      <div className="space-y-4">
        <p>
          The <code>new</code> keyword in JavaScript is used to create a new
          instance of an object from a constructor function or class. It
          automates object creation, property assignment, and prototype linkage.
        </p>

        <div>
          <h4 className="font-semibold">🔹 How `new` Works</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>Creates a new empty object.</li>
            <li>
              Sets the <code>this</code> context inside the constructor function
              to the new object.
            </li>
            <li>
              Links the object’s prototype to the constructor function’s{" "}
              <code>prototype</code>.
            </li>
            <li>
              Executes the constructor function code to initialize properties.
            </li>
            <li>
              Returns the newly created object automatically (unless the
              constructor explicitly returns an object).
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">🔹 Example</h4>
          <pre className="bg-gray-100 p-2 rounded mt-2">
            <code>{`function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person1 = new Person("Raza", 25);

console.log(person1.name); // "Raza"
console.log(person1.age);  // 25
console.log(person1 instanceof Person); // true`}</code>
          </pre>
        </div>

        <p>
          👉 <b>Interview Tip:</b> Understanding how <code>new</code> sets up
          object creation, prototype linkage, and <code>this</code> binding is
          crucial for mastering constructor functions, classes, and inheritance
          in JavaScript.
        </p>
      </div>
    ),
  },
  {
    id: 55,
    title:
      "55. What is the role of async and what is async await in JavaScript?",
    important: true,
    namaste: true,
    content: (
      <div className="space-y-4">
        <p>
          In JavaScript, <b>async</b> and <b>await</b> are syntactic features
          built on top of Promises that simplify writing and reading
          asynchronous code, making it look like synchronous code.
        </p>

        <div>
          <h4 className="font-semibold">🔹 async Function</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Declaring a function with <code>async</code> makes it always
              return a <b>Promise</b>.
            </li>
            <li>
              Inside an async function, you can use <code>await</code> to pause
              execution until a Promise resolves.
            </li>
            <li>Helps avoid nested callbacks and improves code readability.</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">🔹 await Keyword</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Used inside an <code>async</code> function to wait for a Promise
              to resolve.
            </li>
            <li>
              Pauses the execution of the async function without blocking the
              main thread.
            </li>
            <li>
              Returns the resolved value of the Promise or throws an error if
              the Promise rejects.
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">🔹 Example</h4>
          <pre className="bg-gray-100 p-2 rounded mt-2">
            <code>{`// Async function example
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData();`}</code>
          </pre>
        </div>

        <p>
          👉 <b>Interview Tip:</b> Using <code>async/await</code> simplifies
          asynchronous programming by avoiding callback hell and making the code
          easier to read and maintain, while still handling Promises under the
          hood.
        </p>
      </div>
    ),
  },
  {
    id: 57,
    title: "56. What are currying and partial application?",
    important: true,
    content: (
      <div className="space-y-4">
        <p>
          <b>Currying</b> and <b>Partial Application</b> are functional
          programming techniques in JavaScript used to transform functions and
          manage arguments effectively.
        </p>

        <div>
          <h4 className="font-semibold">🔹 Currying</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Transforms a function that takes multiple arguments into a
              sequence of functions, each taking a single argument.
            </li>
            <li>
              Useful for creating specialized functions by pre-filling some
              arguments.
            </li>
            <li>
              Enables function composition and higher-order function patterns.
            </li>
          </ul>
          <pre className="bg-gray-100 p-2 rounded mt-2">
            <code>{`// Currying example
function multiply(a) {
  return function(b) {
    return a * b;
  };
}

const double = multiply(2);
console.log(double(5)); // 10`}</code>
          </pre>
        </div>

        <div>
          <h4 className="font-semibold">🔹 Partial Application</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Creates a new function by fixing a few arguments of an existing
              function, while keeping the rest dynamic.
            </li>
            <li>
              Different from currying because partial application does not
              necessarily produce unary functions; it can take multiple
              remaining arguments.
            </li>
          </ul>
          <pre className="bg-gray-100 p-2 rounded mt-2">
            <code>{`// Partial application example
function multiply(a, b, c) {
  return a * b * c;
}

const multiplyBy2And3 = multiply.bind(null, 2, 3);
console.log(multiplyBy2And3(4)); // 24`}</code>
          </pre>
        </div>

        <p>
          👉 <b>Interview Tip:</b> Currying and partial application are powerful
          for writing reusable, composable, and modular functions in functional
          programming paradigms.
        </p>
      </div>
    ),
  },
  {
    id: 58,
    title:
      "57. What are 'IIFE' (Immediately Invoked Function Expressions) in JavaScript?",
    important: true,
    content: (
      <div className="space-y-4">
        <p>
          An <b>IIFE</b> (Immediately Invoked Function Expression) is a
          JavaScript function that is defined and executed <b>immediately</b>{" "}
          after its creation. It helps in creating a private scope and avoids
          polluting the global namespace.
        </p>

        <div>
          <h4 className="font-semibold">🔹 Key Features</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>Encapsulates variables and functions inside a local scope.</li>
            <li>
              Executed immediately after definition, without being called
              separately.
            </li>
            <li>
              Commonly used to avoid global variable conflicts and for module
              patterns.
            </li>
            <li>
              Syntax usually involves wrapping the function in parentheses{" "}
              <code>(function(){})()</code>.
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">🔹 Example</h4>
          <pre className="bg-gray-100 p-2 rounded mt-2">
            <code>{`// IIFE example
(function() {
  const message = "Hello, IIFE!";
  console.log(message);
})(); // Output: "Hello, IIFE!"

// Arrow function IIFE
(() => {
  console.log("Hello from arrow IIFE");
})();`}</code>
          </pre>
        </div>

        <p>
          👉 <b>Interview Tip:</b> IIFEs are useful for creating isolated
          scopes, immediately running code, and avoiding accidental global
          variable declarations, which is especially important in large-scale
          applications or library development.
        </p>
      </div>
    ),
  },
  {
    id: 59,
    title:
      "58. What are the differences between forEach(), map(), filter(), and reduce()?",
    important: true,
    namaste: true,
    content: (
      <div className="space-y-4">
        <p>
          JavaScript provides several array iteration methods, each serving a
          distinct purpose. Understanding their differences is key for
          functional programming.
        </p>

        <div>
          <h4 className="font-semibold">🔹 forEach()</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Iterates over an array and executes a callback for each element.
            </li>
            <li>
              Does <b>not return a new array</b>; returns <code>undefined</code>
              .
            </li>
            <li>
              Used primarily for side effects like logging or DOM manipulation.
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">🔹 map()</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Iterates over an array and applies a function to each element.
            </li>
            <li>
              Returns a <b>new array</b> containing the transformed elements.
            </li>
            <li>Does not mutate the original array.</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">🔹 filter()</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Iterates over an array and filters elements based on a condition.
            </li>
            <li>
              Returns a <b>new array</b> with elements that satisfy the
              condition.
            </li>
            <li>Original array remains unchanged.</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">🔹 reduce()</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Reduces an array to a single value by applying a callback
              function.
            </li>
            <li>Can also return objects, arrays, or any accumulated value.</li>
            <li>
              Callback receives <code>accumulator</code> and{" "}
              <code>currentValue</code> as arguments.
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">🔹 Example</h4>
          <pre className="bg-gray-100 p-2 rounded mt-2">
            <code>{`const numbers = [1, 2, 3, 4, 5];

// forEach
numbers.forEach(n => console.log(n)); // 1 2 3 4 5

// map
const squares = numbers.map(n => n * n); 
console.log(squares); // [1, 4, 9, 16, 25]

// filter
const evens = numbers.filter(n => n % 2 === 0);
console.log(evens); // [2, 4]

// reduce
const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log(sum); // 15`}</code>
          </pre>
        </div>

        <p>
          👉 <b>Interview Tip:</b> Use <code>forEach</code> for side effects,{" "}
          <code>map</code> for transformation, <code>filter</code> for
          selection, and <code>reduce</code> for aggregation or building complex
          outputs.
        </p>
      </div>
    ),
  },
  {
    id: 60,
    title: "59. What is First-Class Functions (Citizen Functions)?",
    important: true,
    namaste: true,
    content: (
      <div className="space-y-4">
        <p>
          In JavaScript, functions are <b>first-class citizens</b>, meaning they
          are treated as values and can be manipulated like any other data type.
          This allows functions to be passed around, returned, and assigned to
          variables.
        </p>

        <div>
          <h4 className="font-semibold">🔹 Key Characteristics</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Can be stored in variables or data structures (arrays, objects).
            </li>
            <li>Can be passed as arguments to other functions (callbacks).</li>
            <li>
              Can be returned from other functions (higher-order functions).
            </li>
            <li>Can have properties and methods like objects.</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">🔹 Example</h4>
          <pre className="bg-gray-100 p-2 rounded mt-2">
            <code>{`// Storing function in a variable
const greet = function(name) {
  return "Hello " + name;
};

// Passing function as argument
function welcome(fn, user) {
  console.log(fn(user));
}
welcome(greet, "Raza"); // Hello Raza

// Returning function from another function
function multiplier(x) {
  return function(y) {
    return x * y;
  };
}
const double = multiplier(2);
console.log(double(5)); // 10`}</code>
          </pre>
        </div>

        <p>
          👉 <b>Interview Tip:</b> Understanding first-class functions is
          essential for mastering functional programming, callbacks,
          higher-order functions, and modern JavaScript patterns like closures
          and currying.
        </p>
      </div>
    ),
  },
  {
    id: 61,
    title: "60. What is Variable Functions (Function Expressions)?",
    content: (
      <div className="space-y-4">
        <p>
          In JavaScript, a <b>function expression</b> is when a function is
          assigned to a variable. Unlike function declarations, function
          expressions are not hoisted, and they can be anonymous or named.
        </p>

        <div>
          <h4 className="font-semibold">🔹 Key Characteristics</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>Can be stored in variables, objects, or arrays.</li>
            <li>Executed only after the expression is evaluated.</li>
            <li>Can be anonymous (without a name) or named.</li>
            <li>Not hoisted: cannot be called before definition.</li>
            <li>
              Commonly used in callbacks, closures, and higher-order functions.
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">🔹 Example</h4>
          <pre className="bg-gray-100 p-2 rounded mt-2">
            <code>{`// Anonymous function expression
const greet = function(name) {
  return "Hello " + name;
};
console.log(greet("Raza")); // Hello Raza

// Named function expression
const factorial = function fact(n) {
  if (n <= 1) return 1;
  return n * fact(n - 1);
};
console.log(factorial(5)); // 120`}</code>
          </pre>
        </div>

        <p>
          👉 <b>Interview Tip:</b> Function expressions are powerful for dynamic
          function assignments, callbacks, and functional programming patterns.
          Remember, they are not hoisted, unlike function declarations.
        </p>
      </div>
    ),
  },
  {
    id: 62,
    title: "61. Explain hoisting and TDZ.",
    important: true,
    content: (
      <div className="space-y-4">
        <p>
          In JavaScript, <b>hoisting</b> is the default behavior where variable
          and function declarations are moved to the top of their containing
          scope during the compilation phase. <b>TDZ (Temporal Dead Zone)</b> is
          the period between the entering of a block scope and the actual
          declaration where accessing variables results in a{" "}
          <code>ReferenceError</code>.
        </p>

        <div>
          <h4 className="font-semibold">🔹 Hoisting</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>Function declarations are fully hoisted with their body.</li>
            <li>
              Variables declared with <code>var</code> are hoisted and
              initialized as <code>undefined</code>.
            </li>
            <li>
              Variables declared with <code>let</code> and <code>const</code>{" "}
              are hoisted but not initialized.
            </li>
            <li>
              Allows functions to be called before they appear in the code (for
              function declarations).
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">🔹 Temporal Dead Zone (TDZ)</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Refers to the time between entering a scope and the variable
              declaration.
            </li>
            <li>
              Accessing <code>let</code> or <code>const</code> variables before
              initialization throws a <code>ReferenceError</code>.
            </li>
            <li>
              Helps prevent accidental use of variables before they are
              initialized.
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">🔹 Example</h4>
          <pre className="bg-gray-100 p-2 rounded mt-2">
            <code>{`// Hoisting with var
console.log(a); // undefined
var a = 10;

// Hoisting with function
console.log(sum(2,3)); // 5
function sum(x, y) { return x + y; }

// TDZ with let/const
console.log(b); // ReferenceError
let b = 20;

console.log(c); // ReferenceError
const c = 30;`}</code>
          </pre>
        </div>

        <p>
          👉 <b>Interview Tip:</b> Understand that <code>var</code> is
          function-scoped and hoisted differently than <code>let</code> and{" "}
          <code>const</code>, which are block-scoped and reside in the TDZ until
          initialized.
        </p>
      </div>
    ),
  },
  {
    id: 63,
    title: "62. What is object literal and JSON object?",
    content: (
      <div className="space-y-4">
        <p>
          In JavaScript, an <b>object literal</b> and a <b>JSON object</b> are
          both used to represent structured data, but they serve different
          purposes and follow slightly different syntaxes.
        </p>

        <div>
          <h4 className="font-semibold">🔹 Object Literal</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              A way to define objects directly using{" "}
              <code>{"{ key: value }"}</code> syntax.
            </li>
            <li>Keys can be unquoted if they are valid identifiers.</li>
            <li>
              Can include functions (methods), nested objects, and arrays.
            </li>
            <li>Used to create objects in JavaScript programs.</li>
          </ul>
          <pre className="bg-gray-100 p-2 rounded mt-2">
            <code>{`const person = {
  name: "Raza",
  age: 25,
  greet: function() { console.log("Hello!"); }
};
console.log(person.name); // Raza
person.greet(); // Hello!`}</code>
          </pre>
        </div>

        <div>
          <h4 className="font-semibold">🔹 JSON Object</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              JSON (JavaScript Object Notation) is a{" "}
              <b>data-interchange format</b> used for transmitting data between
              client and server.
            </li>
            <li>
              Keys must be in double quotes, and values must be valid JSON types
              (string, number, boolean, null, array, object).
            </li>
            <li>Cannot include functions or undefined values.</li>
            <li>
              Used with <code>JSON.stringify()</code> and{" "}
              <code>JSON.parse()</code> for serialization and deserialization.
            </li>
          </ul>
          <pre className="bg-gray-100 p-2 rounded mt-2">
            <code>{`const jsonString = '{"name":"Raza","age":25}';
const jsonObj = JSON.parse(jsonString);
console.log(jsonObj.name); // Raza
const backToString = JSON.stringify(jsonObj);`}</code>
          </pre>
        </div>

        <p>
          👉 <b>Interview Tip:</b> Object literals are used for defining objects
          in code, while JSON is used for data exchange and must follow strict
          syntax rules. Understanding the distinction is crucial for API
          communication and JavaScript programming.
        </p>
      </div>
    ),
  },
  {
    id: 64,
    title: "63. What is Cookies, localStorage and sessionStorage?",
    important: true,
    content: (
      <div className="space-y-4">
        <p>
          Cookies, <b>localStorage</b>, and <b>sessionStorage</b> are different
          ways to store data on the client side in JavaScript, each with its own
          use case and characteristics.
        </p>

        <div>
          <h4 className="font-semibold">🔹 Cookies</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Small pieces of data stored by the browser and sent to the server
              with every HTTP request.
            </li>
            <li>Used for authentication, session management, and tracking.</li>
            <li>Can have expiration dates; limited storage (~4KB).</li>
            <li>
              Accessible via <code>document.cookie</code>.
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">🔹 localStorage</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Stores data in the browser with no expiration time (persistent
              until manually cleared).
            </li>
            <li>Can store larger amounts of data (~5-10MB).</li>
            <li>
              Data is specific to a domain and not sent to the server
              automatically.
            </li>
            <li>
              Accessible via <code>localStorage.getItem()</code> and{" "}
              <code>localStorage.setItem()</code>.
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">🔹 sessionStorage</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Stores data for the duration of a page session (cleared when the
              tab is closed).
            </li>
            <li>
              Data is specific to a tab and cannot be accessed by other tabs.
            </li>
            <li>Useful for temporary state storage during user sessions.</li>
            <li>
              Accessible via <code>sessionStorage.getItem()</code> and{" "}
              <code>sessionStorage.setItem()</code>.
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">🔹 Example</h4>
          <pre className="bg-gray-100 p-2 rounded mt-2">
            <code>{`// Cookie
document.cookie = "username=Raza; expires=Fri, 31 Dec 2025 23:59:59 GMT";

// localStorage
localStorage.setItem("user", "Raza");
console.log(localStorage.getItem("user")); // Raza

// sessionStorage
sessionStorage.setItem("sessionUser", "Raza");
console.log(sessionStorage.getItem("sessionUser")); // Raza`}</code>
          </pre>
        </div>

        <p>
          👉 <b>Interview Tip:</b> Use cookies for server communication and
          authentication, localStorage for persistent client-side storage, and
          sessionStorage for temporary session data.
        </p>
      </div>
    ),
  },
  {
    id: 65,
    title: "64. Explain the concept of event propagation.",
    important: true,
    content: (
      <div className="space-y-4">
        <p>
          <b>Event propagation</b> in JavaScript describes the order in which
          events are triggered in the DOM when an event occurs on an element
          nested inside other elements. It consists of two main phases:{" "}
          <b>capturing</b> and <b>bubbling</b>.
        </p>

        <div>
          <h4 className="font-semibold">🔹 Phases of Event Propagation</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <b>Capturing Phase (Event Capture):</b> The event starts from the{" "}
              <code>window</code> or <code>document</code> and moves down the
              DOM tree to the target element.
            </li>
            <li>
              <b>Target Phase:</b> The event reaches the target element where it
              was triggered.
            </li>
            <li>
              <b>Bubbling Phase (Event Bubble):</b> After reaching the target,
              the event bubbles up from the target element back to the{" "}
              <code>document</code> or <code>window</code>.
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">🔹 Controlling Event Propagation</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <code>event.stopPropagation()</code> – stops the event from
              propagating further in either phase.
            </li>
            <li>
              <code>event.stopImmediatePropagation()</code> – prevents other
              listeners of the same event from executing.
            </li>
            <li>
              <code>event.cancelBubble = true</code> – older way to stop
              propagation (mostly legacy).
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">🔹 Example</h4>
          <pre className="bg-gray-100 p-2 rounded mt-2">
            <code>{`// HTML
// <div id="parent">
//   <button id="child">Click Me</button>
// </div>

const parent = document.getElementById("parent");
const child = document.getElementById("child");

parent.addEventListener("click", () => console.log("Parent clicked"), false); // capturing=false
child.addEventListener("click", (e) => {
  console.log("Child clicked");
  e.stopPropagation(); // prevents bubbling to parent
});`}</code>
          </pre>
        </div>

        <p>
          👉 <b>Interview Tip:</b> Understanding event propagation is crucial
          for handling nested elements efficiently, preventing unintended
          behavior, and implementing event delegation in modern web
          applications.
        </p>
      </div>
    ),
  },
  {
    id: 66,
    title: "65. How can you prevent the default behavior of an event?",
    content: (
      <div className="space-y-4">
        <p>
          In JavaScript, many HTML elements have default behaviors when certain
          events occur (e.g., submitting a form, clicking a link). You can
          prevent these default actions using{" "}
          <code>event.preventDefault()</code>.
        </p>

        <div>
          <h4 className="font-semibold">🔹 How It Works</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Call <code>event.preventDefault()</code> inside the event handler
              to stop the default action.
            </li>
            <li>
              Does not stop event propagation; it only prevents the
              browser&apos;s default action.
            </li>
            <li>
              Useful in forms, links, drag-and-drop operations, and other
              interactive elements.
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">🔹 Example</h4>
          <pre className="bg-gray-100 p-2 rounded mt-2">
            <code>{`// Preventing form submission
const form = document.querySelector("form");
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevents page reload
  console.log("Form submission prevented");
});

// Preventing link navigation
const link = document.querySelector("a");
link.addEventListener("click", function(event) {
  event.preventDefault(); // Stops navigating to href
  console.log("Link click prevented");
});`}</code>
          </pre>
        </div>

        <p>
          👉 <b>Interview Tip:</b> Use <code>event.preventDefault()</code> to
          override default browser behaviors while still allowing custom
          JavaScript logic to execute.
        </p>
      </div>
    ),
  },
  {
    id: 67,
    title: "66. What is the purpose of the data-attribute in HTML?",
    content: (
      <div className="space-y-4">
        <p>
          The <b>data-</b> attribute in HTML allows you to store custom data on
          HTML elements without affecting the presentation or functionality of
          the element. These attributes are primarily used to pass extra
          information to JavaScript.
        </p>

        <div>
          <h4 className="font-semibold">🔹 Key Characteristics</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Custom attributes start with <code>data-</code> followed by a name
              (e.g., <code>data-user-id</code>).
            </li>
            <li>
              Can store small pieces of data such as IDs, configuration, or
              metadata.
            </li>
            <li>
              Accessible in JavaScript via <code>element.dataset</code>.
            </li>
            <li>
              Helps avoid storing data in non-semantic ways like classes or
              inline scripts.
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">🔹 Example</h4>
          <pre className="bg-gray-100 p-2 rounded mt-2">
            <code>{`<!-- HTML -->
<button id="btn" data-user-id="123" data-role="admin">Click Me</button>

<!-- JavaScript -->
const button = document.getElementById("btn");
console.log(button.dataset.userId); // "123"
console.log(button.dataset.role);   // "admin"`}</code>
          </pre>
        </div>

        <p>
          👉 <b>Interview Tip:</b> Use <code>data-</code> attributes to store
          extra information for elements in a clean and semantic way without
          cluttering the HTML with non-standard attributes.
        </p>
      </div>
    ),
  },
  {
    id: 69,
    title: "67. How do you handle asynchronous code in JavaScript?",
    important: true,
    content: (
      <div className="space-y-4">
        <p>
          JavaScript is single-threaded, so asynchronous code allows tasks that
          take time (like network requests or file operations) to run without
          blocking the main thread. There are multiple ways to handle
          asynchronous operations.
        </p>

        <div>
          <h4 className="font-semibold">
            🔹 Methods to Handle Asynchronous Code
          </h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <b>Callbacks:</b> Pass a function as an argument to execute once
              the asynchronous task completes. Can lead to &quot;callback
              hell&quot; if nested deeply.
            </li>
            <li>
              <b>Promises:</b> Objects representing a future value. Provides{" "}
              <code>.then()</code> and <code>.catch()</code> to handle success
              and errors.
            </li>
            <li>
              <b>Async/Await:</b> Syntactic sugar over Promises, making
              asynchronous code look synchronous. Requires an <code>async</code>{" "}
              function and <code>await</code> keyword.
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">🔹 Example</h4>
          <pre className="bg-gray-100 p-2 rounded mt-2">
            <code>{`// Using Callbacks
function fetchData(callback) {
  setTimeout(() => {
    callback("Data received via callback");
  }, 1000);
}
fetchData(console.log);

// Using Promises
function fetchDataPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data received via Promise"), 1000);
  });
}
fetchDataPromise().then(console.log);

// Using Async/Await
async function fetchDataAsync() {
  const data = await fetchDataPromise();
  console.log(data);
}
fetchDataAsync();`}</code>
          </pre>
        </div>

        <p>
          👉 <b>Interview Tip:</b> Promises and async/await are the modern,
          preferred ways to handle asynchronous operations, as they improve
          readability, error handling, and maintainability of code.
        </p>
      </div>
    ),
  },
  {
    id: 70,
    title: "68. What is prototypal inheritance?",
    content: (
      <div className="space-y-4">
        <p>
          <b>Prototypal inheritance</b> in JavaScript is a mechanism by which
          objects can inherit properties and methods from other objects. Instead
          of classes (as in classical inheritance), JavaScript uses prototypes
          to share functionality among objects.
        </p>

        <div>
          <h4 className="font-semibold">🔹 Key Characteristics</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Every JavaScript object has an internal link to a{" "}
              <code>prototype</code> object.
            </li>
            <li>
              If a property or method is not found on an object, JavaScript
              looks up the prototype chain until it finds it or reaches{" "}
              <code>null</code>.
            </li>
            <li>Enables code reuse and dynamic extension of objects.</li>
            <li>
              Can be implemented using <code>Object.create()</code>, constructor
              functions, or ES6 classes.
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">🔹 Example</h4>
          <pre className="bg-gray-100 p-2 rounded mt-2">
            <code>{`// Using Object.create
const parent = {
  greet: function() {
    console.log("Hello from parent");
  }
};

const child = Object.create(parent);
child.greet(); // Hello from parent

// Constructor function example
function Person(name) {
  this.name = name;
}
Person.prototype.sayName = function() {
  console.log(this.name);
};
const person1 = new Person("Raza");
person1.sayName(); // Raza`}</code>
          </pre>
        </div>

        <p>
          👉 <b>Interview Tip:</b> Understanding prototypal inheritance is
          crucial for grasping how JavaScript objects share methods and
          properties, and for building efficient, memory-friendly applications.
        </p>
      </div>
    ),
  },
  {
    id: 71,
    title:
      "69. What is callback hell? How can you avoid callback hell in JavaScript?",
    important: true,
    content: (
      <div className="space-y-4">
        <p>
          <b>Callback hell</b> occurs in JavaScript when multiple asynchronous
          operations are nested within each other using callbacks, leading to
          deeply indented, hard-to-read, and hard-to-maintain code.
        </p>

        <div>
          <h4 className="font-semibold">🔹 Why it Happens</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>Multiple nested callbacks for asynchronous operations.</li>
            <li>Hard to handle errors consistently.</li>
            <li>Leads to code that is difficult to read and maintain.</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">🔹 Example of Callback Hell</h4>
          <pre className="bg-gray-100 p-2 rounded mt-2">
            <code>{`getUserData(userId, function(user) {
  getPosts(user.id, function(posts) {
    getComments(posts[0].id, function(comments) {
      console.log(comments);
    });
  });
});`}</code>
          </pre>
        </div>

        <div>
          <h4 className="font-semibold">🔹 How to Avoid Callback Hell</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <b>Use Promises:</b> Chain asynchronous operations using{" "}
              <code>.then()</code> to flatten the code structure.
            </li>
            <li>
              <b>Use Async/Await:</b> Write asynchronous code in a synchronous
              style for better readability.
            </li>
            <li>
              <b>Modularize functions:</b> Break large callbacks into smaller
              reusable functions.
            </li>
            <li>
              <b>Use libraries:</b> Utility libraries like <code>async.js</code>{" "}
              help manage complex async flows.
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">🔹 Example Using Async/Await</h4>
          <pre className="bg-gray-100 p-2 rounded mt-2">
            <code>{`async function fetchComments(userId) {
  try {
    const user = await getUserData(userId);
    const posts = await getPosts(user.id);
    const comments = await getComments(posts[0].id);
    console.log(comments);
  } catch (error) {
    console.error(error);
  }
}`}</code>
          </pre>
        </div>

        <p>
          👉 <b>Interview Tip:</b> Modern JavaScript development prefers{" "}
          <code>Promises</code> and <code>async/await</code> to avoid callback
          hell, improve readability, and handle errors consistently.
        </p>
      </div>
    ),
  },
  {
    id: 72,
    title: "70. How does the call stack work in JavaScript?",
    important: true,
    content: (
      <div className="space-y-4">
        <p>
          The <b>call stack</b> in JavaScript is a data structure that keeps
          track of function execution. JavaScript is single-threaded, meaning it
          can execute one piece of code at a time, and the call stack helps
          manage function invocation and execution order.
        </p>

        <div>
          <h4 className="font-semibold">🔹 Key Characteristics</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              It follows the <b>Last-In-First-Out (LIFO)</b> principle.
            </li>
            <li>
              When a function is called, it’s added (pushed) to the top of the
              stack.
            </li>
            <li>
              When the function finishes execution, it is removed (popped) from
              the stack.
            </li>
            <li>
              Helps JavaScript keep track of the execution context and nested
              function calls.
            </li>
            <li>
              If the stack grows too large (e.g., due to infinite recursion), it
              results in a <b>stack overflow</b>.
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">🔹 Example</h4>
          <pre className="bg-gray-100 p-2 rounded mt-2">
            <code>{`function first() {
  console.log("First function");
  second();
}

function second() {
  console.log("Second function");
  third();
}

function third() {
  console.log("Third function");
}

first();

// Call Stack Execution:
// 1. first() is pushed → executes → calls second()
// 2. second() is pushed → executes → calls third()
// 3. third() is pushed → executes → pops off
// 4. second() pops off
// 5. first() pops off`}</code>
          </pre>
        </div>

        <p>
          👉 <b>Interview Tip:</b> Understanding the call stack is essential for
          debugging, handling recursion, and grasping how synchronous JavaScript
          executes function calls in order.
        </p>
      </div>
    ),
  },
];
