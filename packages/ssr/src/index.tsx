export async function App() {
  const result = await new Promise((r) => {
    setTimeout(() => {
      r("hello" + Date.now());
    }, 500);
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
