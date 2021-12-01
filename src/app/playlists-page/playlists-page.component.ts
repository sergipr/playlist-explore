import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { loadPlaylists } from '../store/playlists.actions';
import { selectPlaylists } from '../store/playlists.selectors';

@Component({
  selector: 'app-playlists-page',
  templateUrl: './playlists-page.component.html',
  styleUrls: ['./playlists-page.component.scss']
})
export class PlaylistsPageComponent implements OnInit {
  public searchText: string;
  public playlistCollection$ = this.store.select(selectPlaylists) ?? [];

  constructor(
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.store.dispatch(loadPlaylists());
  }
}
