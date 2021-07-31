const PAGE_PER_VIDEO = 25;
class YoutubeFetch {
  constructor(key, baseUrl) {
    this.key = key;
    this.baseUrl = baseUrl;
    this.getRequestOptions = {
      method: "GET",
      redirect: "follow",
    };
  }

  async mostPopular() {
    const response = await fetch(
      `${this.baseUrl}/videos?part=snippet&chart=mostPopular&maxResults=${PAGE_PER_VIDEO}&key=${this.key}`,
      this.getRequestOptions
    );
    const result_1 = await response.json();
    return result_1.items;
  }

  async search(query) {
    const response = await fetch(
      `${this.baseUrl}/search?part=snippet&maxResults=${PAGE_PER_VIDEO}&q=${query}&type=video&key=${this.key}`,
      this.getRequestOptions
    );
    const result_1 = await response.json();
    return result_1.items.map(item => ({ ...item, id: item.id.videoId }));
  }
}

export default YoutubeFetch;
