export type ButtonProps = {
  children: React.ReactNode;
};

function Button(props: ButtonProps) {
  return <button className="bg-red-500" {...props} />;
}

export default Button;
