import FuseHighlight from '@fuse/core/FuseHighlight';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { closeDialog, openDialog } from 'app/store/fuse/dialogSlice';

function FuseDialogDoc(props) {
  const dispatch = useDispatch();

  return (
    <>
      <Typography variant="h4" className="mb-40 font-700">
        کامپوننت FuseDialog
      </Typography>

      <Typography className="mb-16" component="p">
        مفهوم انگلیسی برای توضیح این کامپوننت بهتر است:
        <br />

        <code>FuseDialog</code> is a simple dialog trigger for easily showing dialog messages via
        redux action.
        <br />
        این مورد فقط باید در تم لایوت استفاده شود
      </Typography>

      <Typography className="text-20 mt-20 mb-10 font-700" variant="h5">
        روش استفاده
      </Typography>

      <Typography className="mb-16" component="p">
        ما میتونین هرجایی با dispatching اکشن
        openDialog استفادش کنین،

        You can show dialog anywhere with  the action , 
        از 
        Material-UI's dialog داره استفاده میکنه و شما مینونین این props ها رو بهش ارسال کنین
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {`
                        <Button
                            onClick={()=> dispatch(openDialog({
                                children: (
                                    <React.Fragment>
                                        <DialogTitle id="alert-dialog-title">Use Google's location service?</DialogTitle>
                                        <DialogContent>
                                            <DialogContentText id="alert-dialog-description">
                                                Let Google help apps determine location. This means sending anonymous location data to
                                                Google, even when no apps are running.
                                            </DialogContentText>
                                        </DialogContent>
                                        <DialogActions>
                                            <Button onClick={()=> dispatch(closeDialog())} color="primary">
                                                Disagree
                                            </Button>
                                            <Button onClick={()=> dispatch(closeDialog())} color="primary" autoFocus>
                                                Agree
                                            </Button>
                                        </DialogActions>
                                    </React.Fragment>
                                     )
                                 }))}
                            variant="contained"
                            color="secondary"
                        >
                            Open Dialog
                        </Button>
                        `}
      </FuseHighlight>

      <Typography className="text-20 mt-20 mb-10 font-700" variant="h5">
        Example
      </Typography>

      <Button
        onClick={() =>
          dispatch(
            openDialog({
              children: (
                <>
                  <DialogTitle id="alert-dialog-title">Use Google's location service?</DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      Let Google help apps determine location. This means sending anonymous location
                      data to Google, even when no apps are running.
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={() => dispatch(closeDialog())} color="primary">
                      Disagree
                    </Button>
                    <Button onClick={() => dispatch(closeDialog())} color="primary" autoFocus>
                      Agree
                    </Button>
                  </DialogActions>
                </>
              ),
            })
          )
        }
        variant="contained"
        color="secondary"
      >
        Open Dialog
      </Button>
    </>
  );
}

export default FuseDialogDoc;
