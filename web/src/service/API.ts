let API_URL = "/api/v1.0.1";
if (process.env.NODE_ENV == "development") {
  API_URL = "http://localhost:3000/api/v1.0.1";
}

export { API_URL };
export const DEFAULT_FILE = "algorithm/json_files/test_init.json";
