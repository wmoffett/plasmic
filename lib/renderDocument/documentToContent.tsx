import {
  documentToReactComponents,
  RenderNode,
  NodeRenderer,
  RenderMark,
  RenderText,
  Options,
} from '@contentful/rich-text-react-renderer';
import {
  Document as RichTextDocument,
  BLOCKS,
  TopLevelBlock,
  MARKS,
  Block,
  Inline,
} from '@contentful/rich-text-types';

import {
  Paragraph,
  HeadingOne,
  HeadingTwo,
  HeadingThree,
  HeadingFour,
  HeadingFive,
  HeadingSix,
  EmbeddedEntry,
  UnorderedList,
  OrderedList,
  ListItem,
  Table,
  // TableHead,
  TableHeadCell,
  TableRow,
  TableCell
} from '@lib/renderDocument/components';

export interface NodeRendererProps {
  node: Block | Inline;
  children: React.ReactNode;
}

export const renderNodeFactory =
  (Component: React.ElementType): NodeRenderer =>
  (node, children) =>
    <Component node={node}>{children}</Component>;

export const defaultMarkRenderers: RenderMark = {
  [MARKS.BOLD]: (text) => <b>{text}</b>,
  [MARKS.ITALIC]: (text) => <i>{text}</i>,
  [MARKS.UNDERLINE]: (text) => <u>{text}</u>,
  [MARKS.CODE]: (text) => <code>{text}</code>,
};



export const defaultNodeRenderers: RenderNode = {
  [BLOCKS.DOCUMENT]: (node, children) => children,
  [BLOCKS.PARAGRAPH]: renderNodeFactory(Paragraph),
  [BLOCKS.HEADING_1]: renderNodeFactory(HeadingOne),
  [BLOCKS.HEADING_2]: renderNodeFactory(HeadingTwo),
  [BLOCKS.HEADING_3]: renderNodeFactory(HeadingThree),
  [BLOCKS.HEADING_4]: renderNodeFactory(HeadingFour),
  [BLOCKS.HEADING_5]: renderNodeFactory(HeadingFive),
  [BLOCKS.HEADING_6]: renderNodeFactory(HeadingSix),
  [BLOCKS.EMBEDDED_ENTRY]: renderNodeFactory(EmbeddedEntry),
  [BLOCKS.UL_LIST]: renderNodeFactory(UnorderedList),
  [BLOCKS.OL_LIST]: renderNodeFactory(OrderedList),
  [BLOCKS.TABLE]: renderNodeFactory(Table),
  [BLOCKS.TABLE_HEADER_CELL]: renderNodeFactory(TableHeadCell),
  [BLOCKS.TABLE_ROW]: renderNodeFactory(TableRow),
  [BLOCKS.TABLE_CELL]: renderNodeFactory(TableCell),
  [BLOCKS.LIST_ITEM]: (node) => {
    const document = {
      nodeType: 'document' as BLOCKS.DOCUMENT,
      data: {},
      content: [node] as TopLevelBlock[],
    };
    const transformedChildren = documentToReactComponents(document, {
      renderMark: defaultMarkRenderers,
      renderNode: {
        [BLOCKS.PARAGRAPH]: (node, children) => children,
        [BLOCKS.LIST_ITEM]: renderNodeFactory(ListItem),
      },
    });
    return transformedChildren;
  },
  [BLOCKS.QUOTE]: (node, children) => <blockquote>{children}</blockquote>,
  [BLOCKS.HR]: () => <hr />,
  // [INLINES.ASSET_HYPERLINK]: (node) =>
  //   defaultInline(INLINES.ASSET_HYPERLINK, node as Inline),
  // [INLINES.ENTRY_HYPERLINK]: (node) =>
  //   defaultInline(INLINES.ENTRY_HYPERLINK, node as Inline),
  // [INLINES.EMBEDDED_ENTRY]: (node) =>
  //   defaultInline(INLINES.EMBEDDED_ENTRY, node as Inline),
  // [INLINES.HYPERLINK]: (node, children) => (
  //   <a href={node.data.uri}>{children}</a>
  // ),
};

export const defaultTextRenderer: RenderText = (text) => text;

export default function documentToContent(
  document: RichTextDocument,
  options: Options = {}
): React.ReactElement {
  const mergedOptions: Options = {
    renderNode: Object.assign(
      {},
      defaultNodeRenderers,
      options.renderNode ?? {}
    ),
    renderMark: Object.assign(
      {},
      defaultMarkRenderers,
      options.renderMark ?? {}
    ),
    renderText: defaultTextRenderer,
  };
  if (options.renderText) {
    mergedOptions.renderText = options.renderText;
  }

  return <>{documentToReactComponents(document, mergedOptions)}</>;
}