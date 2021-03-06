const config = {
  intl: {
    defaultLocale: 'en',
    locales: ['en', 'de']
  },
  title: 'Frontend Development',
  endpoints: {
    api: 'http://localhost:8080/',
    colleaguesList: {
      url: '/colleagues'
    },
    mock: '/mock',
    shared: '/shared'
  },
  routes: [
    {
      path: '/',
      exact: true,
      component: 'Home'
    },
    {
      path: '/counter',
      component: 'Counter'
    }
  ]
}

export default config
