import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'scatter3d-echarts';
  theme: 'light' | 'dark' = 'light';

  onThemeChange() {
    document.body.classList.toggle('dark-theme', this.theme === 'dark');
  }
}
