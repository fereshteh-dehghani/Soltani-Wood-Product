import React, { createContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FusePageCarded from '@fuse/core/FusePageCarded';
import { styled } from '@mui/material/styles';
import withReducer from 'app/store/withReducer';
import reducer from '../store';
import PartyGroupsHeader from './partyGroupsHeader';
import PartyGroupsTable from './partyGroupsTable'
import { fetchPartyGroupSubList } from '../store/partyGroupSlice';



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

function PartyGroups() {
  const { data, response, parentGroupList } = useSelector(({ baseInformation }) => baseInformation.partyGroupSlice);
  // const {partyGroupList,setpatyGroupList} = useState({});
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    dispatch(fetchPartyGroupSubList())
      .then((res) => {
        if (res !== undefined) {
          setLoading(false);
        }
      });
  }, [response])

  return <Root header={<PartyGroupsHeader />} content={<PartyGroupsTable data={data} loading={loading} response={response} />} innerScroll />;


}

export default withReducer('baseInformation', reducer)(PartyGroups);
