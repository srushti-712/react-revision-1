/*
below I have forwarded the props from the compontents using the section component.
we are using those forwarded props as it is or as frowarded from the parent on line  <section {...props}>
be careful that the names are actully the name of the deafult properties we set on the html elements that's all
*/
export default function Section({ title, children, ...props }) {
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
