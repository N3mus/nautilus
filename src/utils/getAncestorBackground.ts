import tinycolor from "tinycolor2";

export default function getAncestorBackground(
  element: HTMLElement
): Promise<string | null> {
  return new Promise((resolve) => {
    let current: HTMLElement | null = element;
    const transitioningElements = new Set<HTMLElement>();
    const transitionsToFinish = new Set<HTMLElement>();

    const observer = new MutationObserver(() => {
      while (current !== null) {
        const transitions = window
          .getComputedStyle(current)
          .getPropertyValue("transition");
        if (transitions && transitions !== "none") {
          transitioningElements.add(current);
          transitionsToFinish.add(current);

          current.addEventListener("transitionend", () => {
            transitionsToFinish.delete(current as HTMLElement);
            if (transitionsToFinish.size === 0) {
              resolve(getBackgroundAfterTransition(element));
            }
          });
        }

        current = current.parentElement;
      }

      if (transitionsToFinish.size === 0) {
        resolve(getBackgroundAfterTransition(element));
      }
    });

    current = element;
    while (current !== null) {
      observer.observe(current, {
        attributes: true,
        attributeFilter: ["style"],
      });
      current = current.parentElement;
    }

    function getBackgroundAfterTransition(element: HTMLElement): string | null {
      current = element;
      while (current !== null) {
        const background = window
          .getComputedStyle(current, null)
          .getPropertyValue("background-color");

        const color = tinycolor(background);

        if (color.isValid() && color.getAlpha() > 0) {
          color.setAlpha(1);
          return color.toString();
        }

        current = current.parentElement;
      }

      return null;
    }

    setTimeout(() => {
      if (transitionsToFinish.size === 0) {
        resolve(getBackgroundAfterTransition(element));
      }
    }, 50);
  });
}
