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
import { ChakraProvider } from '@chakra-ui/react'
import theme from '@styles/theme';
import { getAllPostsWithSlug } from "@lib/api";

interface BlogParams extends ParsedUrlQuery {
  slug: string;
}

interface Blog {
    slug: string;
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
      params: { 
        slug: b.slug
      },
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

  console.log('!slug', slug);
  const queryCache = await extractPlasmicQueryData(
    <ChakraProvider theme={theme}>
      <PlasmicRootProvider loader={PLASMIC} prefetchedData={plasmicData}>
        <PlasmicComponent
          component={pagePath}
          componentProps={{
            blogPostFetcher:{
              props: {
                slug: slug
              }
            }
          }}
        />
      </PlasmicRootProvider>
    </ChakraProvider>
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
    <ChakraProvider theme={theme}>
      <PlasmicRootProvider
        loader={PLASMIC}
        prefetchedData={plasmicData}
        prefetchedQueryData={queryCache}
      >
        <PlasmicComponent
          component={pagePath}
          componentProps={{
            blogPostFetcher:{
              props: {
                slug: slug
              }
            }
          }}
        />
      </PlasmicRootProvider>
    </ChakraProvider>
  );
};

export default BlogPage;