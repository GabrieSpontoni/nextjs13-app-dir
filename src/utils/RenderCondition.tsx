interface RenderConditionProps {
  condition?: boolean;
  children?: React.ReactNode;
}

export function RenderCondition({ condition, children }: RenderConditionProps) {
  if (condition) {
    return children;
  }
  return null;
}
