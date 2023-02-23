import { Button } from '@mui/material';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import "../../../../../styles/MyStyles.css"





function ProductListHeader() {

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
                        لیست محصولات
                    </Typography>
                </div>
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
                >

                    {/* <Button css={styleButtonForUpdateBtn} size="md" shadow>
                      
                    </Button> */}
                    <Button
                        className="whitespace-nowrap"
                        variant="contained"
                        color="secondary"
                        id='CustomBtn'
    
                    >

                        <Link
                            style={{ color: '#fff', textDecoration: 'none' }}
                            to="/apps/baseInformation/products/new"
                        >
                            <span className="flex sm:flex">افزودن محصول جدید</span>
                        </Link>
                       
                        {/* <span className="flex sm:hidden">جدید</span> */}
                    </Button>
                </motion.div>
            </div>
        </>


    );
}

export default ProductListHeader;
