// TODO: Move to webpack enviroment configs        
const fixEnvApiUrl = async () => {
    let API_URL_FIXED = '';
    if (process.env.VUE_APP_API.includes('localhost')) {
      API_URL_FIXED = `${process.env.VUE_APP_API}:${process.env.VUE_APP_PORT}`;
      // API_URL_FIXED = `${process.env.VUE_APP_API}:${process.env.VUE_APP_PORT}/api`;
    } else {
      API_URL_FIXED = `${process.env.VUE_APP_API}`;
      // API_URL_FIXED = `${process.env.VUE_APP_API}/api`;
    }
    return API_URL_FIXED;
  }
  
  export default fixEnvApiUrl;