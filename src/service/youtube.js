const PAGE_PER_VIDEO = 25;
class Youtube {
  constructor(httpClient) {
    this.youtube = httpClient;
  }

  async mostPopular() {
    const response = await this.youtube.get("videos", {
      params: {
        part: "snippet",
        chart: "mostPopular",
        maxResults: PAGE_PER_VIDEO,
      },
    });
    return response.data.items;
  }

  async search(query) {
    const response = await this.youtube.get("search", {
      params: {
        part: "snippet",
        type: "video",
        maxResults: PAGE_PER_VIDEO,
        q: query,
      },
    });
    return response.data.items.map(item => ({ ...item, id: item.id.videoId }));
  }
}

export default Youtube;
