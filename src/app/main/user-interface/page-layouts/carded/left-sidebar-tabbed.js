import DemoContent from '@fuse/core/DemoContent';
import { styled } from '@mui/material/styles';
import DemoSidebarContent from '@fuse/core/DemoSidebarContent';
import FusePageCarded from '@fuse/core/FusePageCarded';
import Hidden from '@mui/material/Hidden';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { useRef, useState } from 'react';

const Root = styled(FusePageCarded)({
  '& .FusePageCarded-header': {},
  '& .FusePageCarded-toolbar': {},
  '& .FusePageCarded-content': {},
  '& .FusePageCarded-sidebarHeader': {},
  '& .FusePageCarded-sidebarContent': {},
});

function CardedLeftSidebarTabbedSample() {
  const [selectedTab, setSelectedTab] = useState(0);
  const pageLayout = useRef(null);

  const handleTabChange = (event, value) => {
    setSelectedTab(value);
  };

  return (
    <Root
      header={
        <div className="flex flex-col flex-1">
          <div className="flex items-center py-24">
            <Hidden lgUp>
              <IconButton
                onClick={(ev) => pageLayout.current.toggleLeftSidebar()}
                aria-label="open left sidebar"
                size="large"
              >
                <Icon>menu</Icon>
              </IconButton>
            </Hidden>
            <div className="flex-1">
              <h4>هدر</h4>
            </div>
          </div>
        </div>
      }
      contentToolbar={
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons={false}
          className="w-full h-64"
        >
          <Tab className="h-64" label="گزینه 1" />
          <Tab className="h-64" label="گزینه 2" />
          <Tab className="h-64" label="گزینه 3" />
          <Tab className="h-64" label="گزینه 4" />
          <Tab className="h-64" label="گزینه 5" />
          <Tab className="h-64" label="گزینه 6" />
          <Tab className="h-64" label="گزینه 7" />
        </Tabs>
      }
      content={
        <div className="p-24">
          {selectedTab === 0 && (
            <div>
              <h3 className="mb-16">گزینه 1</h3>
              <DemoContent />
            </div>
          )}
          {selectedTab === 1 && (
            <div>
              <h3 className="mb-16">گزینه 2</h3>
              <DemoContent />
            </div>
          )}
          {selectedTab === 2 && (
            <div>
              <h3 className="mb-16">گزینه 3</h3>
              <DemoContent />
            </div>
          )}
          {selectedTab === 3 && (
            <div>
              <h3 className="mb-16">گزینه 4</h3>
              <DemoContent />
            </div>
          )}
          {selectedTab === 4 && (
            <div>
              <h3 className="mb-16">گزینه 5</h3>
              <DemoContent />
            </div>
          )}
          {selectedTab === 5 && (
            <div>
              <h3 className="mb-16">گزینه 6</h3>
              <DemoContent />
            </div>
          )}
          {selectedTab === 6 && (
            <div>
              <h3 className="mb-16">گزینه 7</h3>
              <DemoContent />
            </div>
          )}
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
      ref={pageLayout}
    />
  );
}

export default CardedLeftSidebarTabbedSample;
