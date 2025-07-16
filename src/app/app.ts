import { Component } from "@angular/core";
import { Home } from "./home/home";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-root",
  imports: [Home, RouterModule],
  template: `
    <main>
      <header class="brand-name">
        <img
          class="brand-logo"
          src="/assets/logo.svg"
          alt="logo"
          aria-hidden="true"
        />
      </header>
      <section class="content">
        <router-outlet />
      </section>
    </main>
  `,
  styleUrls: ["./app.css"],
})
export class App {
  title = "homes";
}
