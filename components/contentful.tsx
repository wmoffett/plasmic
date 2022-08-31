import { DataProvider, repeatedElement, useSelector } from "@plasmicapp/host";
import { usePlasmicQueryData } from "@plasmicapp/query";
import L from "lodash";
import { ReactNode } from "react";
import { getAllPostsForHome, getPreviewPostBySlug } from "@lib/api";
import documentToContent from '@lib/renderDocument/documentToContent';

import { useRouter } from 'next/router'

export function ContentfulFetcher({
  type,
  children,
  className,
}: {
  type?: string;
  children?: ReactNode;
  className?: string;
}) {


  const data = usePlasmicQueryData<any[] | null>(

    JSON.stringify({ type }),
    async () => {
      return getAllPostsForHome(false);
    }
  );
  console.log("!", data);
  if (!data?.data) {
    return <div>Please specify a collection.</div>;
  }
  return (
    <div className={className}>
      {data?.data.map((item, index) => (
        <DataProvider key={item.slug} name={"contenfulItem"} data={item}>
          {repeatedElement(index, children)}
        </DataProvider>
      ))}
    </div>
  );
}

export function BlogPostFetcher({
  slug,
  type,
  children,
  className,
}: {
  slug?: string;
  type?: string;
  children?: ReactNode;
  className?: string;
}) {


  const router = useRouter();

  // let querySlug = (router?.query ?  router?.query.slug : slug);

  let querySlug = (router?.query ?  router?.query.slug : slug);
  // if(router == null){ 
  //   return;
  // }

  // if(typeof slug != "string" ){
  //   slug = "image-and-table";
  // }

  console.log("! slug:", querySlug);
  console.log("! type:", type);
  const data = usePlasmicQueryData<any[] | null>(

    JSON.stringify({ type }),
    async () => {
      return getPreviewPostBySlug(querySlug);
    }
  );

  console.log("!", data.data);
  if (!data?.data) {
    return <div>Please specify a collection. query {querySlug}</div>;
  }
  return (
    <div className={className}>
      {data?.data.map((item, index) => (
        <DataProvider key={item.slug} name={"contenfulItem"} data={item}>
          {repeatedElement(index, children)}
        </DataProvider>
      ))}
    </div>
  );
}

export function ContentfulField({
  className,
  path,
  setControlContextData,
}: {
  className?: string;
  path?: string;
  setControlContextData: (data: any) => void;
}) {
  const item = useSelector("contenfulItem");

  if (!item) {
    return <div>ContentfulField must be used within a ContentfulFetcher</div>;
  }
  setControlContextData?.({ fields: Object.keys(item) });
  if (!path) {
    return <div>ContentfulField must specify a path.</div>;
  }
  const data = L.get(item, path);

  // console.log("!", data);

  if(data?.json) {
    return documentToContent(data);
  } else if (data?.url) {
    
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={data.url} alt={data.description}/>;
  } else {
    return <div className={className}>{data}</div>;
  }
}