import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FusePageCarded from '@fuse/core/FusePageCarded';
import { styled } from '@mui/material/styles';
import withReducer from 'app/store/withReducer';
import reducer from '../store';
import ProductGroupHeadr from './productGroupHeader';
import ProductGroupTable from './productGroupTable';
import { fetchParentGroupList, fetchProductGroup } from '../store/productGroupListSlice';

const Root = styled(FusePageCarded)(({ theme }) => ({
  '& .FusePageCarded-header': {
    minHeight: 60,
    height: 60,
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      minHeight: 60,
      height: 60,
    },
  },
  '& .FusePageCarded-content': {
    display: 'flex',
  },
}));

function ProductGroupList() {

  const { data, loading, response, parentGroupList } = useSelector(({ baseInformation }) => baseInformation.productGroupListSlice);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductGroup());
    dispatch(fetchParentGroupList());
  }, [response])

  console.log("parentGroupList: ", parentGroupList)


  return <Root header={<ProductGroupHeadr parentGroupList={parentGroupList} />} content={<ProductGroupTable data={data} loading={loading} parentGroupList={parentGroupList} response={response} />} innerScroll />;
}

export default withReducer('baseInformation', reducer)(ProductGroupList);
