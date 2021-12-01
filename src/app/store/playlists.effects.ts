import { loadPlaylists, loadPlaylistsError, loadPlaylistsSuccess } from './playlists.actions';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, switchMap } from 'rxjs/operators';
import { PlaylistsService } from '../services/playlists/playlists.service';

@Injectable()
export class PlaylistEffects {

  loadPlaylists$ = createEffect(() => this.actions$.pipe(
    ofType(loadPlaylists),
    switchMap(() => this.playlistsService.getPlaylists()
      .pipe(
        map(playlists => loadPlaylistsSuccess({playlists})),
        catchError(() => [loadPlaylistsError()])
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private playlistsService: PlaylistsService
  ) {}
}
