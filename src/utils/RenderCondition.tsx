interface RenderConditionProps {
  condition?: boolean;
  children?: JSX.Element;
}

export function RenderCondition({ condition, children }: RenderConditionProps) {
  if (condition) {
    return children;
  }
  return null;
}
