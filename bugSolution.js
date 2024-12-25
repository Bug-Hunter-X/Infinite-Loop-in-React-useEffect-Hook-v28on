```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic: only run once on mount
    console.log('Component Mounted');
    // Add cleanup function if needed 
    return () => {
      console.log('Component Unmounted');
    };
  }, []); // Empty dependency array

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```