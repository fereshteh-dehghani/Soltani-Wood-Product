import FuseHighlight from '@fuse/core/FuseHighlight';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const demos = [
  {
    title: 'Full Width',
    url: '/ui/page-layouts/carded/full-width',
  },
  {
    title: 'Full Width Tabbed',
    url: '/ui/page-layouts/carded/full-width-tabbed',
  },
  {
    title: 'Full Width 2',
    url: '/ui/page-layouts/carded/full-width-2',
  },
  {
    title: 'Full Width 2 Tabbed',
    url: '/ui/page-layouts/carded/full-width-2-tabbed',
  },
  {
    title: 'Left Sidebar',
    url: '/ui/page-layouts/carded/left-sidebar',
  },
  {
    title: 'Left Sidebar Tabbed',
    url: '/ui/page-layouts/carded/left-sidebar-tabbed',
  },
  {
    title: 'Left Sidebar 2',
    url: '/ui/page-layouts/carded/left-sidebar-2',
  },
  {
    title: 'Left Sidebar 2 Tabbed',
    url: '/ui/page-layouts/carded/left-sidebar-2-tabbed',
  },
  {
    title: 'Right Sidebar',
    url: '/ui/page-layouts/carded/right-sidebar',
  },
  {
    title: 'Right Sidebar Tabbed',
    url: '/ui/page-layouts/carded/right-sidebar-tabbed',
  },
  {
    title: 'Right Sidebar 2',
    url: '/ui/page-layouts/carded/right-sidebar-2',
  },
  {
    title: 'Right Sidebar 2 Tabbed',
    url: '/ui/page-layouts/carded/right-sidebar-2-tabbed',
  },
];

function FusePageCardedDoc() {
  return (
    <>
      <Typography variant="h4" className="mb-40 font-700">
        FusePageCarded
      </Typography>

      <Typography className="mb-16" component="p">
        <code>FusePageCarded</code> جزء طرح‌بندی صفحه کارتی Fuse React است.
      </Typography>
      <Typography className="mb-24" component="p">
      این مؤلفه دارای مناطق طرح بندی است تا به راحتی محتویات برنامه را وارد کنید.      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {`
           <FusePageCarded
                header={
                    Header
                }
                contentToolbar={
                    محتوای نوار ابزار
                }
                content={
                    Content
                }
                leftSidebarHeader={
                    Left هدر سایدبار
                }
                leftSidebarContent={
                    Left محتوای سایدبار
                }
                rightSidebarHeader={
                    Right هدر سایدبار
                }
                rightSidebarContent={
                    Right محتوای سایدبار
                }
                ref={pageLayout}
                innerScroll
            />
        `}
      </FuseHighlight>

      <Typography className="text-20 mt-20 mb-10 font-700" variant="h5">
      دموها      </Typography>

      <ul>
        {demos.map((demo) => (
          <li key={demo.url} className="mb-8">
            <Link to={demo.url}>{demo.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default FusePageCardedDoc;
