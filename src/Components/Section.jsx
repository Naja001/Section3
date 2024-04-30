export default function Section({ children, title, className }) {
  return (
    <section id="core-concepts" className={className}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
