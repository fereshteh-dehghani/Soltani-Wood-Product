import FuseHighlight from '@fuse/core/FuseHighlight';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { showMessage } from 'app/store/fuse/messageSlice';

function FuseMessageDoc(props) {
  const dispatch = useDispatch();

  return (
    <>
      <Typography variant="h4" className="mb-40 font-700">
        کامپوننت پیام FuseMessage
      </Typography>

      <Typography className="mb-16" component="p">
        مفهوم انگلیسی برای توضیح این کامپوننت بهتر است:
        <br />
        <code>FuseMessage</code> is a simple snackbar trigger for easily showing messages via redux
        action.
        <br />
        حتما باید در لایوت تم قرار بگیرد

      </Typography>

      <Typography className="text-20 mt-20 mb-10 font-700" variant="h5">
        روش استفاده
      </Typography>

      <Typography className="mb-16" component="p">
        شما میتونین هر جایی از پروژه نمایش پیامها رو صدا بزنین. این کار با 
        dispatching اون action showMessage انجام میشه.
        <br/>
        it is using
        Material-UI's snackbar so you can pass the props in the object:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {`
                                    <Button 
                                        onClick={()=> dispatch(
                                            showMessage({
                                                message     : 'Hi, how are you?',//text or html
                                                autoHideDuration: 6000,//ms
                                                anchorOrigin: {
                                                    vertical  : 'top',//top bottom
                                                    horizontal: 'right'//left center right
                                                },
                                                variant: 'success'//success error info warning null
                                            }))}
                                    >
                                        Top - Right
                                    </Button>
                            `}
      </FuseHighlight>

      <Typography className="text-20 mt-20 mb-10 font-700" variant="h5">
        نمونه
      </Typography>

      <Typography className="text-16 mt-16 mb-10 font-700" variant="h6">
        موقعیت
      </Typography>

      <div>
        <Button
          onClick={() =>
            dispatch(
              showMessage({
                message: 'سلا علکم .. خوب هسین؟ چخبر از همه جا',
                anchorOrigin: {
                  vertical: 'top',
                  horizontal: 'right',
                },
              })
            )
          }
        >
          بالا - راست
        </Button>
        <Button
          onClick={() =>
            dispatch(
              showMessage({
                message: 'سلا علکم .. خوب هسین؟ چخبر از همه جا',
                anchorOrigin: {
                  vertical: 'top',
                  horizontal: 'center',
                },
              })
            )
          }
        >
          بالا-وسط
        </Button>
        <Button
          onClick={() =>
            dispatch(
              showMessage({
                message: 'سلا علکم .. خوب هسین؟ چخبر از همه جا',
                anchorOrigin: {
                  vertical: 'top',
                  horizontal: 'left',
                },
              })
            )
          }
        >
          بالا-چپ
        </Button>
        <Button
          onClick={() =>
            dispatch(
              showMessage({
                message: 'سلا علکم .. خوب هسین؟ چخبر از همه جا',
                anchorOrigin: {
                  vertical: 'bottom',
                  horizontal: 'right',
                },
              })
            )
          }
        >
          پایین-راست
        </Button>
        <Button
          onClick={() =>
            dispatch(
              showMessage({
                message: 'سلا علکم .. خوب هسین؟ چخبر از همه جا',
                anchorOrigin: {
                  vertical: 'bottom',
                  horizontal: 'center',
                },
              })
            )
          }
        >
          پایین-وسط
        </Button>
        <Button
          onClick={() =>
            dispatch(
              showMessage({
                message: 'سلا علکم .. خوب هسین؟ چخبر از همه جا',
                anchorOrigin: {
                  vertical: 'bottom',
                  horizontal: 'left',
                },
              })
            )
          }
        >
          پایین-چپ
        </Button>
      </div>

      <Typography className="text-16 mt-16 mb-10 font-700" variant="h6">
        Variants
      </Typography>

      <div>
        <Button
          onClick={() =>
            dispatch(
              showMessage({
                message: 'سلا علکم .. خوب هسین؟ چخبر از همه جا',
              })
            )
          }
        >
          پیام پیش فرض
        </Button>
        <Button
          onClick={() =>
            dispatch(
              showMessage({
                message: 'سلا علکم .. خوب هسین؟ چخبر از همه جا',
                variant: 'success',
              })
            )
          }
        >
          پیام Success
        </Button>
        <Button
          onClick={() =>
            dispatch(
              showMessage({
                message: 'سلا علکم .. خوب هسین؟ چخبر از همه جا',
                variant: 'warning',
              })
            )
          }
        >
          پیام Warning
        </Button>
        <Button
          onClick={() =>
            dispatch(
              showMessage({
                message: 'سلا علکم .. خوب هسین؟ چخبر از همه جا',
                variant: 'error',
              })
            )
          }
        >
          پیام Error
        </Button>
        <Button
          onClick={() =>
            dispatch(
              showMessage({
                message: 'سلا علکم .. خوب هسین؟ چخبر از همه جا',
                variant: 'info',
              })
            )
          }
        >
          پیام Info
        </Button>
      </div>
    </>
  );
}

export default FuseMessageDoc;
