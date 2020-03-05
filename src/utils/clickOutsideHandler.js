export default function clickOutsideHandler(
  popupRef,
  buttonRef,
  compState,
  compSetState,
  effect
) {
  function handleClickOutside(event) {
    if (
      popupRef.current &&
      !popupRef.current.contains(event.target) &&
      !buttonRef.current.contains(event.target) &&
      compState
    ) {
      compSetState(false);
    }
  }

  effect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
}
