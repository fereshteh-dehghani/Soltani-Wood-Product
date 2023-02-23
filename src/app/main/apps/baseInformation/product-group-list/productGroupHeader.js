import React, { useState } from 'react';
import { Button } from '@mui/material';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import AddNewProductGroup from './addproductGroup';



function ProductGroupHeadr({ parentGroupList }) {
    const [modalOpenAddProduct, setModalOpenAddProduct] = useState(false);

    return (
        <div className="flex flex-1 w-full items-center justify-between">
            <div className="flex items-center">
                <Typography
                    component={motion.span}
                    initial={{ x: -20 }}
                    animate={{ x: 0, transition: { delay: 0.2 } }}
                    delay={300}
                    className="hidden sm:flex text-16 md:text-24 mx-12 font-semibold"
                >
                    گروه کالا
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
                    onClick={() => setModalOpenAddProduct(true)}
                >
                    <span className="hidden sm:flex">گروه کالا جدید</span>
                    <span className="flex sm:hidden">جدید</span>
                </Button>
            </motion.div>
            <AddNewProductGroup
                modalOpen={modalOpenAddProduct}
                parentGroupList={parentGroupList}
                closeModal={() => setModalOpenAddProduct(false)}
            />
        </div>
    );
}

export default ProductGroupHeadr;
