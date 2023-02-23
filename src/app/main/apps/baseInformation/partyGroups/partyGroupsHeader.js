import { useState } from 'react';
import { Button, IconButton } from '@mui/material';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import AddPartyGroup from './addPartyGroup';





function CustomerGroupsHeader() {
  const [modalOpenAddPartyGroup, setModalOpenAddPartyGroup] = useState(false);

  return (
    <>
      <div className="flex flex-1 w-full items-center justify-between">
        <div className="flex items-center">
          <Typography
            component={motion.span}
            initial={{ x: -20 }}
            animate={{ x: 0, transition: { delay: 0.2 } }}
            delay={300}
            className="hidden sm:flex text-16 md:text-24 mx-12 font-semibold"
          >
            گروه های طرف حساب
          </Typography>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
        >
          <Button
            className="whitespace-nowrap "
            variant="contained"
            color="secondary"
            onClick={() => setModalOpenAddPartyGroup(true)}
            
          >
            
            <span className="hidden sm:flex"  > افزودن گروه جدید</span>
            <span className="flex sm:hidden">جدید</span>
          </Button>
        </motion.div>
        {modalOpenAddPartyGroup &&
          < AddPartyGroup
            modalOpen={modalOpenAddPartyGroup}
            // parentGroupList={parentGroupList}
            closeModal={() =>setModalOpenAddPartyGroup (false)}
          />
        }
      </div>
    </>
  );
}

export default CustomerGroupsHeader;
