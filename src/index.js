


export default {
  async fetch(request) {
    return new Response("Comment Worker 작동 중 ✅", {
      headers: { "content-type": "text/plain" }
    });
  }
};
