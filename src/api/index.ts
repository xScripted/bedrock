interface IOptions {
  raw?: boolean
}

class Api {
  private baseUrl = import.meta.env.PUBLIC_API_BASE_URL

  async get(route: string, options: IOptions = { raw: false }) {
    try {
      const response = await fetch(this.baseUrl + route)

      if (!response.ok) {
        throw new Error(`Fetch failed with status ${response.status}: ${response.statusText}`)
      }

      return await response.json()
    } catch (err) {
      console.error(`Fetch failed: ${this.baseUrl + route}, error: ${err.message}`)
    }
  }

  async post(route: string, data: any = {}, options: IOptions = { raw: false }) {
    try {
      const response = await fetch(this.baseUrl + route, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/pdf',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error(`Post failed with status ${response.status}: ${response.statusText}`)
      }

      return options.raw ? await response : await response.json()
    } catch (err) {
      console.error(`Post failed: ${this.baseUrl + route}, error: ${err.message}`)
    }
  }
}

export default new Api()
