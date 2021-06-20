export default class Api {
  static headers() {
    return { "Content-type": "application/json" };
  }
  static options(method: string, body?: any) {
    return { method, headers: this.headers(), body: JSON.stringify(body) };
  }
  static get(endpoint: string) {
    return fetch(endpoint, this.options("GET")).then((response) => {
      return this.response(response);
    });
  }
  static post(endpoint: string, body: any) {
    return fetch(endpoint, this.options("POST", body)).then((response) => {
      return this.response(response);
    });
  }
  static put(endpoint: string, body: any) {
    return fetch(endpoint, this.options("PUT", body)).then((response) => {
      return this.response(response);
    });
  }
  static delete(endpoint: string) {
    return fetch(endpoint, this.options("DELETE")).then((response) => {
      return this.response(response);
    });
  }

  static response(response: Response) {
    if (response.ok) return response.json();
    if (!response.ok) {
      return response.json().then((json) => {
        throw json;
      });
    }
  }
}
