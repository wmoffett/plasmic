import * as React from "react";
import {
  ComponentRenderData,
  extractPlasmicQueryData,
  PlasmicComponent,
  PlasmicRootProvider,
} from "@plasmicapp/loader-nextjs";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import { PLASMIC } from "../../plasmic-init";

import { getAllPostsWithSlug } from "@lib/api";

interface BlogParams extends ParsedUrlQuery {
  slug: string;
}

interface Blog {
    slug: string;
    title: string;
    featuredImage: object;
    date: Date;
    description: object;
}

interface BlogPageProps {
  plasmicData: ComponentRenderData;
  queryCache: Record<string, any>;
  slug: string;
}

export const getStaticPaths: GetStaticPaths<BlogParams> = async () => {
  const blogPosts: Blog[] = (
    await getAllPostsWithSlug()
  );
  
  return {
    paths: blogPosts.map((b) => ({
      params: { slug: b.slug },
    })),
    fallback: false,
  };
};

const pagePath = "/blog/[post]";

export const getStaticProps: GetStaticProps<
  BlogPageProps,
  BlogParams
> = async (context) => {
  const slug = context.params?.slug;
  if (!slug) {
    throw new Error("Missing slug");
  }

  const plasmicData = await PLASMIC.fetchComponentData(pagePath);

  console.log('!getStaticProps PlasmicComponent', slug);
  const queryCache = await extractPlasmicQueryData(
    <PlasmicRootProvider loader={PLASMIC} prefetchedData={plasmicData}>
      <PlasmicComponent
        component={pagePath}
        componentProps={{
          fetcher: { where: { slug } },
        }}
      />
      <PlasmicComponent
        component={'pageTitle'}
        componentProps={{
          root: { 
            props: { 
              content: slug 
            } 
          },
        }}
      />
    </PlasmicRootProvider>
  );

  return { props: { plasmicData, queryCache, slug } };
};

const BlogPage: NextPage<BlogPageProps> = ({
  plasmicData,
  queryCache,
  slug,
}) => {

  console.log('!BlogPage PlasmicComponent', slug);
  return (
    <PlasmicRootProvider
      loader={PLASMIC}
      prefetchedData={plasmicData}
      prefetchedQueryData={queryCache}
    >
      <PlasmicComponent
        component={pagePath}
        componentProps={{
          fetcher: { where: { slug } },
        }}
      />
      <PlasmicComponent
        component={'pageTitle'}
        componentProps={{
          root: { 
            props: { 
              content: slug 
            } 
          },
        }}
      />
    </PlasmicRootProvider>
  );
};

export default BlogPage;