export const openSessionModal = () => {
  window.dispatchEvent(new CustomEvent('open-session-modal'))
}
