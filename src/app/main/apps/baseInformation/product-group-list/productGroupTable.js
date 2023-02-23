import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import FuseScrollbars from '@fuse/core/FuseScrollbars';
import FuseLoading from '@fuse/core/FuseLoading';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import withRouter from '@fuse/core/withRouter';
import { useDispatch } from 'react-redux';
import { Button, Checkbox, Spacer, Modal } from '@nextui-org/react';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Box } from '@mui/system';
import TreeItem from '@mui/lab/TreeItem';
import { Grid } from '@mui/material';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';
import { showMessage } from 'app/store/fuse/messageSlice';
import UpdateProductGroup from './updateProductGroup';
import { deleteProductGroup } from '../store/productGroupListSlice';

const styleButton = {
  'font-size': '12px',
};
const styleButtonForUpdateBtn = {
  'font-size': '12px',
  'background-color': '#069DCD',
};

const treeViewStyle = {
  height: '100vh',
  flexGrow: 1,
  maxWidth: '100%',
  overflowY: 'auto',
  justifyContent: 'center',
  display: 'flex',
  padding: '10%',
}

const checkBoxStyle = {
  'span.nextui-c-jCeINs': {
    'padding-right': '18px',
    'font-size': '1.6rem'
  },
  'div.nextui-c-PJLV-gulvcB-isFocusVisible-false': {
    width: '20px',
    height: '20px'
  }
}


function ProductGroupTable({ data, loading, response, parentGroupList }) {



  const [modalUpdateOpen, setModalUpdateOpen] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [productGropIdDelete, setProductGropIdDelete] = useState();
  const [selectedProductGroupUpdate, setSelectedProductGroupUpdate] = useState({ code: "", title: "", parentGroupId: 0 });
  const [modalAlertDelete, setModalAlertDelete] = useState(false);
  const [selectItem, setSelectItem] = useState([]);
  const [counterChecked, setCounterChecked] = useState(0);
  const [checked, setChecked] = useState(false);
  const arrayOfListProductgroupIdSelected = [];
  const [result, setResult] = useState();
  const dispatch = useDispatch();


  const onClickDelete = () => {
    if (selectItem.length === 1) {
     return setModalAlertDelete(true);

    }

    if (selectItem.length > 1) {
      return dispatch(
        showMessage({
          message: 'تنها یک آیتم را می توانید انتخاب کنید', // text or html
          autoHideDuration: 6000, // ms
          anchorOrigin: {
            vertical: 'top', //   top bottom
            horizontal: 'right' //  left center right
          },
          variant: 'warning' //   success error info warning null
        }))
    }
    if (selectItem.length === 0) {
      return dispatch(
        showMessage({
          message: 'لطفا یک آیتم را برای حذف کردن انتخاب نمایید', // text or html
          autoHideDuration: 6000, // ms
          anchorOrigin: {
            vertical: 'top', //   top bottom
            horizontal: 'right' //  left center right
          },
          variant: 'warning' //   success error info warning null
        }))
    }
    return `error`;
  };

  useEffect(() => {
    setSelectItem([]);
    setChecked(false);
    setCounterChecked(0);
  }, [response])


  function handelEditButton() {

    if (selectItem.length === 1) {
      setSelectedProductGroupUpdate(selectItem[0]);
      setModalUpdateOpen(!modalUpdateOpen);
    } else if (selectItem.length > 1) {
      return dispatch(
        showMessage({
          message: 'تنها یک آیتم را می توانید انتخاب کنید', // text or html
          autoHideDuration: 6000, // ms
          anchorOrigin: {
            vertical: 'top', //   top bottom
            horizontal: 'right' //  left center right
          },
          variant: 'warning' //   success error info warning null
        }))
    } else {
      dispatch(
        showMessage({
          message: 'لطفا یک آیتم را برای حذف کردن انتخاب نمایید', // text or html
          autoHideDuration: 6000, // ms
          anchorOrigin: {
            vertical: 'top', //   top bottom
            horizontal: 'right' //  left center right
          },
          variant: 'warning' //   success error info warning null
        }))
    }
    return null;
  }

  function handleDelete() {
    dispatch(deleteProductGroup(selectItem[0].id))
    .unwrap()
    .then((res) => {
      if (res !== undefined && res.result && res.errors.length === 0) {
        dispatch(
          showMessage({
            message: 'عملیات با موفقیت انجام شد', // text or html
            autoHideDuration: 6000, // ms
            anchorOrigin: {
              vertical: 'top', //   top bottom
              horizontal: 'right' //  left center right
            },
            variant: 'success' //   success error info warning null
          }))
      } else {
        dispatch(
          showMessage({
            message: 'عملیات با خطا انجام شد', // text or html
            autoHideDuration: 6000, // ms
            anchorOrigin: {
              vertical: 'top', //   top bottom
              horizontal: 'right' //  left center right
            },
            variant: 'error' //   success error info warning null
          }))
      }
    })
    .catch((err) => {
      dispatch(
        showMessage({
          message: 'عملیات با خطا انجام شد', // text or html
          autoHideDuration: 6000, // ms
          anchorOrigin: {
            vertical: 'top', //   top bottom
            horizontal: 'right' //  left center right
          },
          variant: 'success' //   success error info warning null
        }))
    });

  }

  function handleChange(e, selectNode) {
    setChecked(e);
    console.log(checked);
    if (e) {
      console.log(selectNode);
      setSelectItem([...selectItem, { ...selectNode }]);

      console.log(selectItem)
    } else {
      const items = selectItem.filter((item) => item.id !== selectNode.id)
      setSelectItem([...items]);
    }
  }

  if (loading) {
    return <FuseLoading />;
  }

  const renderTree = (nodes) => (
    nodes !== undefined ? (
      < TreeItem
        key={nodes.id}
        nodeId={nodes.id}
        label={
          < Checkbox
            checked={checked}
            css={checkBoxStyle}
            onChange={(e) => handleChange(e, nodes)}
          >
            {` ${nodes.label}`}
          </Checkbox >
        }

      >
        {
          Array.isArray(nodes.children)
            ? nodes.children.map((nod) => renderTree(nod))
            : null
        }
      </TreeItem >
    ) : null

  );

  return (
    <div className="w-full flex flex-col justify-content-center">
      <Spacer y={0.5} />
      <Box>
        <Grid container>
          <Grid item sx={6}>
            <Button
              style={{fontSize:"13px"}}
              icon={<AutoFixHighOutlinedIcon />}
              color="primary"
              shadow
              onClick={handelEditButton}
            >
              ویرایش
            </Button>
            <Spacer x={3} />
          </Grid>
          <Grid item sx={6}>
            <Button
              style={{fontSize:"13px"}}
              icon={<DeleteForeverOutlinedIcon />}
              shadow
              color="error"
              onClick={onClickDelete}
            >
              حذف
            </Button>
          </Grid>
        </Grid>


      </Box>
      <FuseScrollbars className="grow overflow-x-auto">
        <TreeView
          aria-label="rich object"
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpanded={['root']}
          defaultExpandIcon={<ChevronRightIcon />}
          sx={treeViewStyle}
        >
          {data && renderTree(data)}
        </TreeView>
      </FuseScrollbars>
      {
        modalUpdateOpen && (
          <UpdateProductGroup
            modalOpen={modalUpdateOpen}
            productGroup={selectedProductGroupUpdate}
            parentGroupList={parentGroupList}
            closeModal={() => setModalUpdateOpen(!modalUpdateOpen)}
          />
        )
      }
      <Modal
        open={modalAlertDelete}
        closeButton
        width='35%'
        height='40%'
        onClose={() => setModalAlertDelete(false)}
      >
        <Modal.Body>
          <h3>آیا می خواهید اطلاعات را حذف کنید؟</h3>
        </Modal.Body>
        <Modal.Footer>
          <Button
            color="error"
            css={styleButton}
            onClick={() => {
              handleDelete();
              setModalAlertDelete(false);
            }}>
            بلی
          </Button>
          {" "}
          <Button
            css={styleButton}
            color="warning"
            onClick={() => setModalAlertDelete(false)}
          >
            خیر
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  );
}

export default withRouter(ProductGroupTable);
