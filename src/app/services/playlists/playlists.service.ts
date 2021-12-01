import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import Playlist from 'src/app/models/playlist.model';

@Injectable({ providedIn: 'root' })
export class PlaylistsService {
  constructor(private http: HttpClient) {}

  getPlaylists(): Observable<Array<Playlist>> {
    return this.http
      .get<{ featuredPlaylists: any }>(
        'https://portal.organicfruitapps.com/programming-guides/v2/us_en-us/featured-playlists.json'
      )
      .pipe(map((playlists) => playlists?.featuredPlaylists?.content || []));
  }
}
