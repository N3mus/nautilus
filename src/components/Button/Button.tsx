export type ButtonProps = {
  children: React.ReactNode;
};

function Button(props: ButtonProps) {
  return <button {...props} />;
}

export default Button;
