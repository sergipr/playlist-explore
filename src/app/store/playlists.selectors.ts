import { PlaylistsState } from './playlists.reducers';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export const selectPlaylistsFeature = createFeatureSelector<PlaylistsState>('playlists');
export const selectPlaylists = createSelector(selectPlaylistsFeature, state => state.playlists);
