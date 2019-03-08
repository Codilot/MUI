const applyUpdateResult = (result) => (prevState) => ({
  hits: [...prevState.hits, ...result.hits],
  offset: result.page,
  isLoading: false,
})

const applySetResult = (result) => (prevState) => {
console.log(result)
return {
  hits: result.hits,
  offset: result.page,
  isLoading: false,
}
}
const getHackerNewsUrl = (value, offset) =>
  `https://hn.algolia.com/api/v1/search?query=${value}&page=${offset}&hitsPerPage=20`;

//https://hn.algolia.com/api/v1/search?query=hello&page=0&hitsPerPage=2
// {
//   "hits": [{
//     "created_at": "2018-12-19T17:08:53.000Z",
//     "title": "Bye Bye Mongo, Hello Postgres",
//     "url": "https://www.theguardian.com/info/2018/nov/30/bye-bye-mongo-hello-postgres",
//     "author": "philliphaydon",
//     "points": 1562,
//     "story_text": null,
//     "comment_text": null,
//     "num_comments": 417,
//     "story_id": null,
//     "story_title": null,
//     "story_url": null,
//     "parent_id": null,
//     "created_at_i": 1545239333,
//     "relevancy_score": 8549,
//     "_tags": ["story", "author_philliphaydon", "story_18717168"],
//     "objectID": "18717168",
//     "_highlightResult": {
//       "title": {
//         "value": "Bye Bye Mongo, \u003cem\u003eHello\u003c/em\u003e Postgres",
//         "matchLevel": "full",
//         "fullyHighlighted": false,
//         "matchedWords": ["hello"]
//       },
//       "url": {
//         "value": "https://www.theguardian.com/info/2018/nov/30/bye-bye-mongo-\u003cem\u003ehello\u003c/em\u003e-postgres",
//         "matchLevel": "full",
//         "fullyHighlighted": false,
//         "matchedWords": ["hello"]
//       },
//       "author": {
//         "value": "philliphaydon",
//         "matchLevel": "none",
//         "matchedWords": []
//       }
//     }
//   }, {
//     "created_at": "2018-06-04T17:54:07.000Z",
//     "title": "Hello, GitHub",
//     "url": "https://natfriedman.github.io/hello/",
//     "author": "rafaelc",
//     "points": 1498,
//     "story_text": null,
//     "comment_text": null,
//     "num_comments": 644,
//     "story_id": null,
//     "story_title": null,
//     "story_url": null,
//     "parent_id": null,
//     "created_at_i": 1528134847,
//     "relevancy_score": 8173,
//     "_tags": ["story", "author_rafaelc", "story_17230273"],
//     "objectID": "17230273",
//     "_highlightResult": {
//       "title": {
//         "value": "\u003cem\u003eHello\u003c/em\u003e, GitHub",
//         "matchLevel": "full",
//         "fullyHighlighted": false,
//         "matchedWords": ["hello"]
//       },
//       "url": {
//         "value": "https://natfriedman.github.io/\u003cem\u003ehello\u003c/em\u003e/",
//         "matchLevel": "full",
//         "fullyHighlighted": false,
//         "matchedWords": ["hello"]
//       },
//       "author": {
//         "value": "rafaelc",
//         "matchLevel": "none",
//         "matchedWords": []
//       }
//     }
//   }],
//   "nbHits": 35987,
//   "page": 0,
//   "nbPages": 500,
//   "hitsPerPage": 2,
//   "processingTimeMS": 1,
//   "exhaustiveNbHits": false,
//   "query": "hello",
//   "params": "advancedSyntax=true\u0026analytics=false\u0026hitsPerPage=2\u0026page=0\u0026query=hello"
// }

export {
  applyUpdateResult,
  applySetResult,
  getHackerNewsUrl
}
