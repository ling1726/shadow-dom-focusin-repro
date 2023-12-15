document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div id="shadow-root">
  </div>
`;

const root = document.getElementById("shadow-root")!;
const shadowRoot = root.attachShadow({ mode: "open" });
shadowRoot.innerHTML = `
    <button>Button 1</button>
    <button>Button 2</button>
    <button>Button 3</button>
    <button>Button 4</button>
    <button>Button 5</button>
`;

shadowRoot.addEventListener('focusin', () => console.log('focusin listener - shadow root'));
shadowRoot.addEventListener('click', () => console.log('click listener - shadow root'));

document.addEventListener('focusin', () => console.log('focusin listener - document'));
document.addEventListener('click', () => console.log('click listener - document'));
