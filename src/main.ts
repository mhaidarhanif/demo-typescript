import "./style.css";
import { setupCounter } from "./counter";
import { formatDateTime } from "./utils/format-date-time";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>${formatDateTime("2020-10-01")}</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
