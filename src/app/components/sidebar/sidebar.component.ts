import { Component } from '@angular/core';
import { GifsService } from '../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  constructor(private gifsList: GifsService) {}
  get list() {
    return this.gifsList.history;
  }
  useHistory(item: any) {
    this.gifsList.query(item);
  }
}
