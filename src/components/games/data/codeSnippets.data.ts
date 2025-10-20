export const codeSnippets: string[] = [
  // Básicos
  "const greeting = 'Hello World';",
  "function calculateSum(a, b) { return a + b; }",
  "const array = [1, 2, 3].map(x => x * 2);",
  "import React from 'react';",
  "export default function App() { return <div>Hello</div>; }",
  "const isValid = value !== null && value !== undefined;",
  "async function fetchData() { const res = await fetch(url); }",
  "const user = { name: 'Gerardo', age: 24, role: 'developer' };",

  // Intermedios
  "const numbers = [10, 20, 30]; const total = numbers.reduce((a, b) => a + b, 0);",
  "const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);",
  "const unique = arr => [...new Set(arr)];",
  "for (let i = 0; i < 5; i++) { console.log(i); }",
  "const delay = ms => new Promise(resolve => setTimeout(resolve, ms));",
  "try { riskyOperation(); } catch (error) { console.error(error.message); }",
  "const date = new Date().toLocaleDateString();",

  // React
  "const [count, setCount] = useState(0);",
  "useEffect(() => { document.title = `Count: ${count}`; }, [count]);",
  "return <button onClick={() => setCount(count + 1)}>Incrementar</button>;",
  "const items = list.map((item, i) => <li key={i}>{item}</li>);",
  "const handleChange = e => setValue(e.target.value);",

  // Async / Promises
  "const fetchUser = async () => { const res = await fetch('/api/user'); return res.json(); };",
  "Promise.all([fetchPosts(), fetchComments()]).then(([p, c]) => console.log(p, c));",
  "async function getData() { try { const r = await fetch(url); return await r.json(); } catch(e) { console.error(e); } }",

  // Estructuras y lógica
  "class Animal { constructor(name) { this.name = name; } speak() { console.log(`${this.name} makes a noise.`); } }",
  "const stack = []; stack.push(1); stack.push(2); stack.pop();",
  "const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);",
  "const merge = (a, b) => ({ ...a, ...b });",
  "const random = Math.floor(Math.random() * 100);",

  // Objetos y arrays avanzados
  "const filtered = users.filter(u => u.active).map(u => u.name);",
  "const { id, name } = user;",
  "const deepClone = obj => JSON.parse(JSON.stringify(obj));",
  "const grouped = items.reduce((acc, item) => { acc[item.type] = acc[item.type] || []; acc[item.type].push(item); return acc; }, {});",

  // JSX más largo (reto)
  "return (<div className='card'><h2>{title}</h2><p>{description}</p></div>);",
  "const Header = () => (<header><nav><a href='#'>Inicio</a><a href='#'>Contacto</a></nav></header>);",
]