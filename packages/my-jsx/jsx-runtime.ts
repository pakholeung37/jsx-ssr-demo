import { Props } from "./jsx.types";

export function jsx(
  tag:
    | string
    | ((props: Props) => JSX.Element)
    | ((props: Props) => Promise<JSX.Element>),
  props: Props,
  ...children: Exclude<JSX.Children, JSX.Element>
): JSX.Element {
  props ??= {};

  const finalChildren: JSX.Element[] = [];

  for (const child of children) {
    mapChildren(child, finalChildren);
  }

  if (props?.children) {
    mapChildren(props.children, finalChildren);
  }

  props.children = finalChildren;

  return {
    type: "tag",
    tag,
    props,
  } as JSX.Element;
}

function mapChildren(children: JSX.Children, acc: JSX.Element[]): void {
  switch (typeof children) {
    case "string":
      acc.push({ type: "textNode", text: children });
      break;
    case "bigint":
    case "number":
      acc.push({ type: "textNode", text: children.toString() });
      break;
    case "object":
      if (Array.isArray(children)) {
        children.forEach((child) => mapChildren(child, acc));
      } else if (children !== null) {
        acc.push(children);
      }
      break;
  }
}
export * from "./jsx.types";
