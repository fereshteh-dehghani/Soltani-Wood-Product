import DemoContent from '@fuse/core/DemoContent';
import { styled } from '@mui/material/styles';
import FusePageSimple from '@fuse/core/FusePageSimple';

import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { useState } from 'react';

const Root = styled(FusePageSimple)(({ theme }) => ({
  '& .FusePageSimple-header': {},
  '& .FusePageSimple-toolbar': {},
  '& .FusePageSimple-content': {},
  '& .FusePageSimple-sidebarHeader': {},
  '& .FusePageSimple-sidebarContent': {},
}));

function SimpleTabbedSample() {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, value) => {
    setSelectedTab(value);
  };

  return (
    <Root
      header={
        <div className="p-24">
          <h4>هدر</h4>
        </div>
      }
      contentToolbar={
        <div className="w-full px-16 sm:px-24">
          <Tabs
            value={selectedTab}
            onChange={handleTabChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons={false}
            className="w-full h-64 border-b-1"
          >
            <Tab className="h-64" label="گزینه ی 1" />
            <Tab className="h-64" label="گزینه ی 2" />
            <Tab className="h-64" label="گزینه ی 3" />
            <Tab className="h-64" label="گزینه ی 4" />
            <Tab className="h-64" label="گزینه ی 5" />
            <Tab className="h-64" label="گزینه ی 6" />
            <Tab className="h-64" label="گزینه ی 7" />
          </Tabs>
        </div>
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
    />
  );
}

export default SimpleTabbedSample;
