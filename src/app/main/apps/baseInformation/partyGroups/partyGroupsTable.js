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
import { deletePartyGroup, updatePartyGroup } from '../store/partyGroupSlice';
import UpdatePartyGroup from './updatePartyGroup';

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

/* Fake data for test */
const treeData = [
  {
    key: "0",
    label: "Documents",
    children: [
      {
        key: "0-0",
        label: "Document 1-1",
        children: [
          {
            key: "0-1-1",
            label: "Document-0-1.doc",
          },
          {
            key: "0-1-2",
            label: "Document-0-2.doc",
          },
        ],
      },
    ],
  },
  {
    key: "1",
    label: "Desktop",
    children: [
      {
        key: "1-0",
        label: "document1.doc",
      },
      {
        key: "0-0",
        label: "documennt-2.doc",
      },
    ],
  },
  {
    key: "2",
    label: "Downloads",
    children: [],
  },
];

function PartyGroupsTable({ data, loading, response }) {



  const [modalUpdateOpen, setModalUpdateOpen] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [productGropIdDelete, setProductGropIdDelete] = useState();
  const [selectedPartyGroupUpdate, setSelectedPartyGroupUpdate] = useState({ code: "", title: "", parentGroupId: 0 });
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
      setSelectedPartyGroupUpdate(selectItem[0]);
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
    dispatch(deletePartyGroup(selectItem[0].id))
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
          setSelectItem([]);
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

    nodes !== undefined && Array.isArray(nodes) ? (
      nodes.map((node) => (
        < TreeItem
          key={node.id}
          nodeId={node.id}
          label={
            < Checkbox
              checked={checked}
              css={checkBoxStyle}
              onChange={(e) => handleChange(e, node)}
            >
              {` ${node.title}`}
            </Checkbox >
          }

        >
          {
            Array.isArray(node.children)
              ? renderTree(node.children)
              // node.children.map((item) => )
              : null
          }
        </TreeItem >
      )
      )
    ) : null


  );

  return (
    <div className="w-full flex flex-col justify-content-center mr-10">
      <Grid container className=" mt-4" sm={6} spacing={1} sx={{ margin: "auto" }} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid container item xs={12} justifyContent="left"  >
          <Grid item xs={3}>
            <Button
              style={{ fontSize: "13px" }}
              icon={<AutoFixHighOutlinedIcon />}
              color="primary"
              shadow
              onClick={handelEditButton}
            >
              ویرایش
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              style={{ fontSize: "13px" }}
              icon={<DeleteForeverOutlinedIcon />}
              shadow
              color="error"
              onClick={onClickDelete}
            >
              حذف
            </Button>
          </Grid>
        </Grid>
        <Grid container item className="mb-16 mt-2 " alignItems="flex-start"  sm={12} spacing={1} sx={{ margin: "auto" }} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={8}>
            <FuseScrollbars className="grow overflow-x-auto">
              <TreeView
                aria-label="rich object"
                defaultCollapseIcon={<ExpandMoreIcon />}
                defaultExpanded={['root']}
                defaultExpandIcon={<ChevronRightIcon />}
              // sx={treeViewStyle}
              >
                {data.length !== 0 && renderTree(data)}
              </TreeView>
            </FuseScrollbars>
          </Grid>
        </Grid>
      </Grid>

      {
        modalUpdateOpen && (
          <UpdatePartyGroup
            modalOpen={modalUpdateOpen}
            partyGroupId={selectedPartyGroupUpdate.id}
            // partyGroupId={parentGroupList}
            closeModal={() => {
              setModalUpdateOpen(!modalUpdateOpen);
              setSelectItem([]);
            }}
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

export default withRouter(PartyGroupsTable);
