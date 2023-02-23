import DemoContent from '@fuse/core/DemoContent';
import { styled } from '@mui/material/styles';
import DemoSidebarContent from '@fuse/core/DemoSidebarContent';
import FusePageSimple from '@fuse/core/FusePageSimple';
import Hidden from '@mui/material/Hidden';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import { useRef } from 'react';

const Root = styled(FusePageSimple)({
  '& .FusePageSimple-header': {},
  '& .FusePageSimple-toolbar': {},
  '& .FusePageSimple-content': {},
  '& .FusePageSimple-sidebarHeader': {},
  '& .FusePageSimple-sidebarContent': {},
});

function SimpleLeftSidebar2Sample() {
  const pageLayout = useRef(null);

  return (
    <Root
      header={
        <div className="flex flex-col flex-1">
          <div className="flex items-center p-24 px-12">
            <Hidden lgUp>
              <IconButton
                onClick={(ev) => pageLayout.current.toggleLeftSidebar()}
                aria-label="open left sidebar"
                size="large"
              >
                <Icon>menu</Icon>
              </IconButton>
            </Hidden>
            <div className="flex-1 lg:px-12">
              <h4>هدر</h4>
            </div>
          </div>
        </div>
      }
      contentToolbar={
        <div className="px-24">
          <h4>محتوای نوار ابزار</h4>
        </div>
      }
      content={
        <div className="p-24">
          <h4>محتوا</h4>
          <br />
          <DemoContent />
        </div>
      }
      leftSidebarHeader={
        <div className="p-24">
          <h4>هدر سایدبار</h4>
        </div>
      }
      leftSidebarContent={
        <div className="p-24">
          <h4>محتوای سایدبار</h4>
          <br />
          <DemoSidebarContent />
        </div>
      }
      innerScroll
      ref={pageLayout}
    />
  );
}

export default SimpleLeftSidebar2Sample;
