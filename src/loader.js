//import hivejs from "@hiveio/hive-js";
function createYoutubeEmbed(key) {
  return (
    '<iframe width="420" height="345" src="https://www.youtube.com/embed/' +
    key +
    '" frameborder="0" allowfullscreen></iframe><br/>'
  );
}

function transformYoutubeLinks(text) {
  if (!text) return text;
  const self = this;

  const linkreg = /(?:)<a([^>]+)>(.+?)<\/a>/g;
  const fullreg =
    /(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)([^& \n<]+)(?:[^ \n<]+)?/g;
  const regex =
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([^& \n<]+)(?:[^ \n<]+)?/g;

  let resultHtml = text;

  const match = text.match(fullreg);
  if (match && match.length > 0) {
    const matchlinks = text.match(linkreg);
    if (matchlinks && matchlinks.length > 0) {
      for (var i = 0; i < matchlinks.length; i++) {
        resultHtml = resultHtml.replace(
          matchlinks[i],
          "#placeholder" + i + "#"
        );
      }
    }

    for (var i = 0; i < match.length; i++) {
      let matchParts = match[i].split(regex);
      resultHtml = resultHtml.replace(
        match[i],
        self.createYoutubeEmbed(matchParts[1])
      );
    }

    if (matchlinks && matchlinks.length > 0) {
      for (var i = 0; i < matchlinks.length; i++) {
        resultHtml = resultHtml.replace(
          "#placeholder" + i + "#",
          matchlinks[i]
        );
      }
    }
  }
  return resultHtml;
}

function postsIterator(author, init, size = 10) {
  let last_author;
  let last_permlink;
  let posts;

  var query = {};
  async function next() {
    const first = last_author ? true : false;
    const beforeDate = new Date().toISOString().split(".")[0];
    const limit = first ? size : size + 1;
    const startPermlink = last_permlink;
    posts = await window.hive.api.getDiscussionsByAuthorBeforeDateAsync(
      author,
      startPermlink,
      beforeDate,
      limit
    );
    last_author = posts[posts.length - 1].author;
    last_permlink = posts[posts.length - 1].permlink;
    if (last_author) posts.shift();
    return posts;
  }
  function hasNext() {
    const first = last_author ? true : false;
    if (!first) console.log(posts.length);
    console.log(posts.length);
    if (posts) return (posts.length = size - 1);
    return true;
  }
  return {
    next,
    hasNext,
    account: new Promise(async (ret) => {
      ret((await window.hive.api.getAccountsAsync([author]))[0]);
    }),
  };
}

window.postsIterator = postsIterator;
export default postsIterator;
