import { postService } from "./postService.js";
import { Feed } from "feed";

export class RSSService {
  async getRss() {
    const posts = await postService.findAll("");
    const feed = new Feed({
      title: "Blog title",
      description: "Blog description",
      id: "http://localhost:3000/",
      link: "http://localhost:3000/",
      language: "en", // optional, used only in RSS 2.0, possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
      copyright: "All rights reserved 2021, Andrew Yushkevich",
      author: {
        name: "Andrew Yushkevich",
        email: "yes@yes.com",
      },
    });

    posts.forEach((post) => {
      feed.addItem({
        title: post.header,
        id: post.id,
        description: post.description,
        content: post.content,
        author: [
          {
            name: "Jane Doe",
            email: "janedoe@example.com",
            link: "https://example.com/janedoe",
          },
          {
            name: "Joe Smith",
            email: "joesmith@example.com",
            link: "https://example.com/joesmith",
          },
        ],
        date: post.createdAt,
        image: `http://localhost:5000/${post.img}`,
      });
    });

    feed.addCategory("Technologie");

    feed.addContributor({
      name: "Johan Cruyff",
      email: "johancruyff@example.com",
      link: "https://example.com/johancruyff",
    });
    return feed;
  }
}

export const rssService = new RSSService();
