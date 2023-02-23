import Typography from '@mui/material/Typography';
import withReducer from 'app/store/withReducer';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from '@lodash';
import { motion } from 'framer-motion';
import { Button } from '@mui/material';
import reducer from './store';
import { selectWidgetsEntities, getWidgets } from './store/widgetsSlice';
import Widget1 from './widgets/Widget1';
import Widget2 from './widgets/Widget2';
import Widget3 from './widgets/Widget3';
import Widget4 from './widgets/Widget4';
import Widget5 from './widgets/Widget5';
import Widget6 from './widgets/Widget6';
import Widget7 from './widgets/Widget7';
import Widget8 from './widgets/Widget8';
import Widget9 from './widgets/Widget9';

function AnalyticsDashboardApp() {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const widgets = useSelector(selectWidgetsEntities);

  useEffect(() => {
    dispatch(getWidgets());
  }, [dispatch]);

  if (_.isEmpty(widgets)) {
    return null;
  }

  const container = {
    show: {
      transition: {
        staggerChildren: 0.06,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-full">
      <Widget1 data={widgets.widget1} />
      <motion.div
        className="flex flex-col md:flex-row sm:p-8 container"
        variants={container}
        initial="hidden"
        animate="show"
      >
           <div className="flex flex-1 grow-0 items-center justify-end">
          <Button
            onClick={() => setShowModal(true)}
            className="normal-case"
            variant="contained"
            color="secondary"
            role="button"
          >
            <span className="mx-4"> Open regular modal</span>
          </Button>
          {showModal ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-sm">
                  {/* content */}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/* header */}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                      <h3 className="text-3xl font-semibold">Modal Title</h3>
                      <Button
                        className="normal-case"
                        variant="contained"
                        color="secondary"
                        role="button"
                        onClick={() => setShowModal(false)}
                      >
                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                          ×
                        </span>
                      </Button>
                    </div>
                    {/* body */}
                    <div className="relative p-6 flex-auto">
                      <p className="my-4 text-slate-500 text-lg leading-relaxed">
                        I always felt like I could do anything. That’s the main thing people are
                        controlled by! Thoughts- their perception of themselves! They're slowed down
                        by their perception of themselves. If you're taught you can’t do anything,
                        you won’t do anything. I was taught I could do everything.
                      </p>
                    </div>
                    {/* footer */}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Close
                      </button>
                      <button
                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black" />
            </>
          ) : null}
        </div>
        <div className="flex flex-1 flex-col min-w-0 pt-16">
          <Typography
            component={motion.div}
            variants={item}
            className="px-16 pb-8 text-18 font-medium"
            color="textSecondary"
          >
            روند کاربران فعال شما در طول زمان چگونه است؟
          </Typography>

          <div className="flex flex-col sm:flex sm:flex-row pb-32">
            <motion.div variants={item} className="widget flex w-full sm:w-1/3 p-16">
              <Widget2 data={widgets.widget2} />
            </motion.div>

            <motion.div variants={item} className="widget flex w-full sm:w-1/3 p-16">
              <Widget3 data={widgets.widget3} />
            </motion.div>

            <motion.div variants={item} className="widget w-full sm:w-1/3 p-16">
              <Widget4 data={widgets.widget4} />
            </motion.div>
          </div>

          <Typography
            component={motion.div}
            variants={item}
            className="px-16 pb-8 text-18 font-medium"
            color="textSecondary"
          >
            کاربران شما از چند صفحه بازدید می کنند؟
          </Typography>

          <motion.div variants={item} className="widget w-full p-16 pb-48">
            <Widget5 data={widgets.widget5} />
          </motion.div>

          <Typography
            component={motion.div}
            variants={item}
            className="px-16 pb-8 text-18 font-medium"
            color="textSecondary"
          >
            کاربران شما کجا هستند؟
          </Typography>

          <motion.div variants={item} className="widget w-full p-16 pb-32">
            <Widget6 data={widgets.widget6} />
          </motion.div>
        </div>

        <div className="flex flex-wrap w-full md:w-320 pt-16">
          <div className="mb-32 w-full sm:w-1/2 md:w-full">
            <Typography
              component={motion.div}
              variants={item}
              className="px-16 pb-8 text-18 font-medium"
              color="textSecondary"
            >
              بیشترین دستگاه های بازیدکننده از سایت شما کدامند؟
            </Typography>

            <motion.div variants={item} className="widget w-full p-16">
              <Widget7 data={widgets.widget7} />
            </motion.div>
          </div>

          <div className="mb-32 w-full sm:w-1/2 md:w-full">
            <Typography
              component={motion.div}
              variants={item}
              className="px-16 pb-8 text-18 font-medium"
              color="textSecondary"
            >
              فروش شما چگونه است؟
            </Typography>

            <motion.div variants={item} className="widget w-full p-16">
              <Widget8 data={widgets.widget8} />
            </motion.div>
          </div>

          <div className="mb-32 w-full sm:w-1/2 md:w-full">
            <Typography
              component={motion.div}
              variants={item}
              className="px-16 pb-8 text-18 font-medium lg:pt-0"
              color="textSecondary"
            >
              برترین شرکت های شما کدامند؟
            </Typography>
            <motion.div variants={item} className="widget w-full p-16">
              <Widget9 data={widgets.widget9} />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default withReducer('analyticsDashboardApp', reducer)(AnalyticsDashboardApp);
