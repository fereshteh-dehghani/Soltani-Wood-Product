import { Button } from '@mui/material';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { useState } from 'react';
import AddNewUnit from './addNewUnit';



function UnitsHeader() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="flex flex-1 w-full items-center justify-between">
        <div className="flex items-center">
          <Icon
            component={motion.span}
            initial={{ scale: 0 }}
            animate={{ scale: 1, transition: { delay: 0.2 } }}
            className="text-24 md:text-32"
          >
            Category
          </Icon>
          <Typography
            component={motion.span}
            initial={{ x: -20 }}
            animate={{ x: 0, transition: { delay: 0.2 } }}
            delay={300}
            className="hidden sm:flex text-16 md:text-24 mx-12 font-semibold"
          >
            واحدهای سنجش
          </Typography>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
        >
          <Button
            className="whitespace-nowrap"
            variant="contained"
            color="secondary"
            onClick={() => setModalOpen(!modalOpen)}
          >
            <span className="hidden sm:flex">افزودن واحد جدید</span>
            <span className="flex sm:hidden">جدید</span>
          </Button>
        </motion.div>
      </div>
      {
        modalOpen && (
          <AddNewUnit
            modalOpen={modalOpen}
            handleClose={()=>setModalOpen(false)}
          />
        )
      }

    </>


  );
}

export default UnitsHeader;
