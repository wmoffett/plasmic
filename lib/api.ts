process.env.CONTENTFUL_SPACE_ID = "wbbhf1qd7970";
process.env.CONTENTFUL_ACCESS_TOKEN =
  "-W1IoA-JTS3yA3py_FyXDdG42P02SFq5vLBff-KXfrQ";



process.env.CONTENTFUL_SPACE_ID = "o80oqw32rhmg";
process.env.CONTENTFUL_ACCESS_TOKEN =
  "Kv--4rISSalKyJLXuUL8bPKb950cDc52FSfrPHCPu6Y";

const POST_GRAPHQL_FIELDS = `
slug
title
featuredImage {
  url
  description
}
date
description {
  json
  links {
    assets {
      __typename
      block {
        sys {
          id
        }
        __typename
        url
        title
        width
        height
        description
        fileName
        contentType
      }
    }
  }
}
`;


const POST_GRAPHQL_FIELDS_MINIMAL = `
slug
title
`;

async function fetchGraphQL(query: string, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
    }
  ).then((response) => response.json());
}

function extractPostEntries(fetchResponse: any) {
  return fetchResponse?.data?.blogPostCollection?.items;
}

function extractPost(fetchResponse: any) {
  return fetchResponse?.data?.blogPostCollection?.items?.[0];
}

export async function getAllPostsForHome(preview: boolean) {
  const entries = await fetchGraphQL(
    `query {
      blogPostCollection(order: date_DESC, preview: ${
        preview ? "true" : "false"
      }, limit: 5) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  );
  return extractPostEntries(entries);
}


export async function getAllPostsWithSlug() {
  const entries = await fetchGraphQL(
    `query {
      blogPostCollection(where: { slug_exists: true }, order: date_DESC) {
        items {
          ${POST_GRAPHQL_FIELDS_MINIMAL}
        }
      }
    }`
  );
  return extractPostEntries(entries);
}


// export async function getPreviewPostBySlug(slug: string | string[] | undefined) {
//   const entry = await fetchGraphQL(
//     `query {
//       blogPostCollection(where: { slug: "${slug}" }, preview: true, limit: 1) {
//         items {
//           ${POST_GRAPHQL_FIELDS}
//         }
//       }
//     }`,
//     true
//   );
//   return extractPost(entry);
// }
export async function getPreviewPostBySlug(slug: string | string[] | undefined) {

  

  if (typeof slug !='string') {
    return;
  }

  console.log('we have slug:', slug);
  const entry = await fetchGraphQL(
    `query {
      blogPostCollection(where: { slug: "${slug}" }, preview: false, limit: 1) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`
  );
  return extractPostEntries(entry);
}

export async function getPostAndMorePosts(slug: string, preview: boolean) {
  const entry = await fetchGraphQL(
    `query {
      blogPostCollection(where: { slug: "${slug}" }, preview: ${
      preview ? "true" : "false"
    }, limit: 1) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  );
  const entries = await fetchGraphQL(
    `query {
      blogPostCollection(where: { slug_not_in: "${slug}" }, order: date_DESC, preview: ${
      preview ? "true" : "false"
    }, limit: 2) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  );
  return {
    post: extractPost(entry),
    morePosts: extractPostEntries(entries),
  };
}