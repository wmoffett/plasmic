import { DataProvider, repeatedElement, useSelector } from "@plasmicapp/host";
import { usePlasmicQueryData } from "@plasmicapp/query";
import L from "lodash";
import { ReactNode } from "react";
import { getAllPostsForHome, getPreviewPostBySlug } from "@lib/api";
import documentToContent from '@lib/renderDocument/documentToContent';

export function BlogFetcher({
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
  children,
  className,
}: {
  slug?: string;
  type?: string;
  children?: ReactNode;
  className?: string;
}) {

  const data = usePlasmicQueryData<any[] | null>(

    JSON.stringify({ slug }),
    async () => {
      return getPreviewPostBySlug(slug);
    }
  );

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

export function BlogField({
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

  if(data?.json) {
    return documentToContent(data);
  } else if (data?.url) {
    
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={data.url} alt={data.description}/>;
  } else {
    return <div className={className}>{data}</div>;
  }
}