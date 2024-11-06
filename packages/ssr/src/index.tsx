export async function App() {
  const result = await new Promise((resolve) => {
    setTimeout(() => {
      resolve("hello" + Date.now());
    }, 5000);
  });
  return (
    <div>
      <Layout>{result}</Layout>
    </div>
  );
}

export function Layout(props: { children?: JSX.Children }) {
  return <div style={{ background: "red" }}>{props.children}</div>;
}
