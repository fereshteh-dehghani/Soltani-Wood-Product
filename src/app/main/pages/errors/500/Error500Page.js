import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Error500Page() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center p-16">
      <div className="max-w-512 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1, transition: { delay: 0.1 } }}
        >
          <Typography variant="h1" color="inherit" className="font-medium mb-16">
            500
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
        >
          <Typography variant="h5" color="textSecondary" className="mb-16 font-normal">
          خب انگار یه مشکلی توی سایت پیش اومده!!
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
        >
          <Typography variant="subtitle1" color="textSecondary" className="mb-48">
          شوخی کردم، به نظر می رسد مشکل داخلی داریم، لطفاً چند دقیقه دیگر دوباره امتحان کنید
          </Typography>
        </motion.div>

        <Link className="font-normal" to="/apps/dashboards/project">
          گزارش خطا
        </Link>
      </div>
    </div>
  );
}

export default Error500Page;
