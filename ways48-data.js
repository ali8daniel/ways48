// WAYS48 editable globe data
// Add or edit countries here. The globe page can read this one list for markers,
// search, featured locations and contextual news/story cards.
window.WAYS48_COUNTRIES = [
  {
    id: 'palestine',
    name: 'Palestine',
    lat: 31.95,
    lng: 35.23,
    newsCount: 12,
    storyCount: 8,
    markerTypes: ['news', 'story'],
    newsTitle: 'Latest humanitarian update',
    storyTitle: 'Stories from Palestine',
    image: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=720&q=78'
  },
  {
    id: 'sudan',
    name: 'Sudan',
    lat: 15.50,
    lng: 32.56,
    newsCount: 7,
    storyCount: 5,
    markerTypes: ['news', 'story'],
    newsTitle: 'Latest humanitarian update',
    storyTitle: 'Stories from Sudan',
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=720&q=78'
  },
  {
    id: 'afghanistan',
    name: 'Afghanistan',
    lat: 34.53,
    lng: 69.17,
    newsCount: 6,
    storyCount: 4,
    markerTypes: ['news', 'story'],
    newsTitle: 'Latest humanitarian update',
    storyTitle: 'Stories from Afghanistan',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=720&q=78'
  },
  {
    id: 'congo',
    name: 'DR Congo',
    lat: -4.33,
    lng: 15.31,
    newsCount: 5,
    storyCount: 3,
    markerTypes: ['news', 'story'],
    newsTitle: 'Latest humanitarian update',
    storyTitle: 'Stories from DR Congo',
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=720&q=78'
  },
  {
    id: 'yemen',
    name: 'Yemen',
    lat: 15.35,
    lng: 44.21,
    newsCount: 4,
    storyCount: 3,
    markerTypes: ['news', 'story'],
    newsTitle: 'Latest humanitarian update',
    storyTitle: 'Stories from Yemen',
    image: 'https://images.unsplash.com/photo-1512632578888-169bbbc64f33?auto=format&fit=crop&w=720&q=78'
  }
];

window.WAYS48_MARKER_COLORS = {
  news: '#ef5350',
  story: '#4caf6f'
};