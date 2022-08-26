import {
  Block,
  Inline,
} from '@contentful/rich-text-types';

import { Box } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
export interface Asset {
  title: string;
  description: string;
  fileName?: string;
  size?: number;
  url: string;
  width: number;
  height: number;
}

interface AssetProps {
  data: Asset;
}

const AssetContainer = styled(Box)({
  display: 'block',
});

const StyledImage = styled('img')({
  maxWidth: '100%',
  height: 'auto',
});

interface Sys {
  id: string;
  __typename: string;
}

interface AssetEntryProps {
  data: {
    links?: any;
  }
  node: Block | Inline;
}

export function assetEntry({
  node,
  data,
}: AssetEntryProps): React.ReactElement | null {

  const entry = data.links.assets.block.find(
    ({ sys }: { sys: Sys }) => sys.id === node.data.target.sys.id
  );

  if (entry) {
    return <Asset data={entry} />;
  }

  return null;
}




const Asset = <T extends AssetProps>(props: T): React.ReactElement => {
  const {
    data: { url, width, height, description },
  } = props;

  return (
    <AssetContainer component="picture">
      {/*
        TODO: utilize the contentType property to normalize the data for any
              `image/*` assets earlier up in the chain (getStaticProps) so that
              they render as the @assemblies/Image component instead
      */}
      {/*
        TODO: `next/image` can do this as well; replace this code if the
              `next/image` component is used
      */}
      <source srcSet={`${url}?fm=webp`} type="image/webp" />
      <source srcSet={`${url}?fm=avif`} type="image/avif" />
      <source srcSet={`${url}?fm=png`} type="image/png" />
      <source srcSet={`${url}?fm=jpg`} type="image/jpg" />
      <StyledImage
        alt={description}
        src={url}
        width={width}
        height={height}
        loading="lazy"
      />
    </AssetContainer>
  );
};

export default Asset;
