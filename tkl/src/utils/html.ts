export const appendElement = (
  parentElement: HTMLElement,
  options?: {
    className?: string | string[];
    id?: string;
    textContent?: string;
    tag?: keyof HTMLElementTagNameMap;
  }
) => {
  const { className, id, textContent, tag } = options || {};
  const div = document.createElement(tag || 'div');

  if (id) {
    div.id = id;
  }

  if (className) {
    if (Array.isArray(className)) {
      div.classList.add(...className);
    } else {
      div.classList.add(className);
    }
  }

  if (textContent) {
    div.textContent = textContent;
  }

  parentElement.appendChild(div);
  return div;
};
