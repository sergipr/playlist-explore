import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { PlaylistsService } from './playlists.service';

describe('PlaylistsService', () => {
  let service: PlaylistsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [HttpClient]
    });
    service = TestBed.inject(PlaylistsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getPlaylists should return playlists', () => {
    service.getPlaylists().subscribe((res) => {
      expect(res.length).toBeGreaterThan(0);
});
  });
});
