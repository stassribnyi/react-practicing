const config = {
  API_URL:
    process.env.NODE_ENV === 'development'
      ? 'http://192.168.0.204:5000'
      : 'https://todo-list-react-flux.herokuapp.com'
};

export default config;
