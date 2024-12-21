# Section 3: React Basics (Library)

## Initial Setup

- Vite
- Node.js: Verify 18+ version is installed

```bash
    $ node --version
    v18.16.0
```

- Inside Project (Restore/)

```bash
    $ npm create vite@latest
    Project name: ... client
    <Select> React
    <Select variant> Typescript + SWC

    note: SWC -> Speedy web compiler
```

- Change to port 3000: client/vite.config.ts

```ts
    export default defineConfig{
        server: {
            port: 3000
        },
        plugins: [react()],
    }
```

- Set NPM start using Vite: client/package.json

```json
    "scripts":{
        "start": "vite",
        ...
    }
```

## React Components

### Hierarchy:

- App
  - Header
  - Product List
    - Product card
    - Buttons

## React Elements

- Material UI
- Axios
- Redux
- Forms (React-Hook-Form)
- ReactRouter

### React Hooks

- useState

```js
const [products, setProducts] = useState([
  { name: "Christmas Tree", price: 199.99 },
  { name: "Green Bucket", price: 88.98 },
]); //can set this to empty as useEffect will populate calling API
```

- useEffect

```js
    useEffect(()=>{
        fetch(<api-source>)
        .then(response => response.json())
        .then(data => setProducts(data))
    }, []); // empty dependency array instantiates intiial run
```
