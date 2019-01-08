import MarkdownFileHelper from './markdown_file_helper';

const getRoutes = ({requireFunc, processor}) => requireFunc.keys().reduce((memo, file) => {
  const json = requireFunc(file);
  const route = MarkdownFileHelper.getRoute(file);
  const tabHeaderIndex = MarkdownFileHelper.getTabHeaderIndex(file);
  const pageTitle = MarkdownFileHelper.getPageTitle(file);
  const parentTitle = MarkdownFileHelper.getParentTitle(file);
  const category = MarkdownFileHelper.getCategory(file);
  const metadata = MarkdownFileHelper.getMetadata(json);

  return {
    ...memo,
    [route]: {
      file, route, pageContent: MarkdownFileHelper.process({processor, json}), tabHeaderIndex, pageTitle, parentTitle, category, metadata
    }
  };
}, {});

export default {getRoutes};
