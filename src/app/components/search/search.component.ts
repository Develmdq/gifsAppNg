import { Component, ViewChild, ElementRef } from '@angular/core';
import { GifsService } from '../gifs/services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  @ViewChild('data') data!: ElementRef<HTMLInputElement>;

  constructor(private gifsList: GifsService) {}

  search() {
    const data = this.data.nativeElement.value;
    if (data === '') {
      alert('no puede quedar vacío');
    } else {
      this.gifsList.setGifs(data.trim().toLowerCase());
      this.data.nativeElement.value = '';
    }
  }
}
