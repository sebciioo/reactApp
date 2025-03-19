export default function Button({ textOnly, className, children, ...props }) {
  const cssClasses = textOnly
    ? `text-button ${className}`
    : `button ${className}`;
  return (
    <button className={cssClasses} {...props}>
      {children}
    </button>
  );
}
