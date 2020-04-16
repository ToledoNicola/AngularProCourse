import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-footer",
  template: `
    <p>
      Created by
      <a href="https://www.linkedin.com/in/nicola-toledo/" target="_blank">
        Nicola Toledo
      </a>
      with ❤️
    </p>
  `,
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
