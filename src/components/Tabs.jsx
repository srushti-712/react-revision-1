/**
 Below we are using more JSX slots 


** The only two important things to remember here is that that prop then must be usable as a custom component in the receiving component.
So the tabs component in this case.

1) it must start with an uppercase character or it must be remapped to a constant or a variable that starts with an uppercase character.

2) Use string names for the built-in elements like menu, ul or div & you use your component functions like this here if you wanna use a custom component.
 
 */
export default function Tabs({ children, buttons, ButtonContainer }) {
  return (
    <>
      <ButtonContainer>{buttons}</ButtonContainer>
      {children}
    </>
  );
}
