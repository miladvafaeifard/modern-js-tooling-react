const config = {
  intl: {
    defaultLocale: 'en',
    locales: ['en', 'de']
  },
  endpoints: {
    mock: '/mock',
    shared: '/shared'
  },
  states: [
    {
      name: 'test1',
      url: '/test1',
      component: 'TestScreen1'
    },
    {
      name: 'test2',
      url: '/test2',
      component: 'TestScreen2'
    }
  ],
  movies: {
    bravo: 'https://www.w3schools.com/htmL/mov_bbb.mp4'
  }
}

export default config
