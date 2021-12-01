import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from "@ngrx/store/testing";
import { FilterPipe } from '../pipes/filter.pipe';
import { PlaylistsPageComponent } from './playlists-page.component';

describe('PlaylistsPageComponent', () => {
  jasmine.getEnv().allowRespy(true);
  let component: PlaylistsPageComponent;
  let fixture: ComponentFixture<PlaylistsPageComponent>;
  let mockStore: MockStore;
  let dispatchSpy: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaylistsPageComponent, FilterPipe ],
      providers: [provideMockStore(), FilterPipe]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistsPageComponent);
    mockStore = TestBed.inject(MockStore);
    component = fixture.componentInstance;
    fixture.detectChanges();
    dispatchSpy = spyOn(mockStore, "dispatch").and.callThrough();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch a LoadPlaylists action on init', () => {
    const action = { type: '[Playlists] Load Playlists' };
    mockStore.scannedActions$
      .pipe()
      .subscribe(scannedAction => expect(scannedAction).toEqual(action));
  });
});
