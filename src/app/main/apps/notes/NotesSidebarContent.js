import NavLinkAdapter from '@fuse/core/NavLinkAdapter';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Icon from '@mui/material/Icon';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Paper from '@mui/material/Paper';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { openLabelsDialog, selectLabels } from './store/labelsSlice';

const StyledListItem = styled(ListItem)(({ theme, active }) => ({
  color: 'inherit!important',
  textDecoration: 'none!important',
  height: 40,
  width: '100%',
  borderRadius: 6,
  paddingLeft: 12,
  paddingRight: 12,
  marginBottom: 4,
  '&.active': {
    backgroundColor:
      theme.palette.mode === 'light'
        ? 'rgba(0, 0, 0, .05)!important'
        : 'rgba(255, 255, 255, .1)!important',
    pointerEvents: 'none',
    '& .list-item-icon': {
      color: 'inherit',
    },
  },
  '& .list-item-icon': {
    fontSize: 16,
    width: 16,
    height: 16,
    marginRight: 16,
  },
}));

function NotesSidebarContent(props) {
  const dispatch = useDispatch();
  const labels = useSelector(selectLabels);

  return (
    <div className="p-0 lg:p-24 lg:ltr:pr-4 lg:rtl:pl-4">
      <Paper
        component={motion.div}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
        className={clsx('rounded-0 shadow-none lg:rounded-20 lg:shadow pt-12')}
      >
        <List className="px-12">
          <StyledListItem
            button
            component={NavLinkAdapter}
            to="/apps/notes"
            end
            activeClassName="active"
          >
            <Icon className="list-item-icon text-16" color="action">
              label
            </Icon>
            <ListItemText className="truncate" primary="یادداشت ها" disableTypography />
          </StyledListItem>
          <StyledListItem
            button
            component={NavLinkAdapter}
            to="/apps/notes/reminders"
            end
            activeClassName="active"
          >
            <Icon className="list-item-icon text-16" color="action">
              notifications
            </Icon>
            <ListItemText className="truncate" primary="یادآوری ها" disableTypography />
          </StyledListItem>
        </List>
        <Divider />
        <List className="px-12">
          <ListSubheader>برچسب ها</ListSubheader>
          {labels.map((label) => (
            <StyledListItem
              key={label.id}
              button
              component={NavLinkAdapter}
              to={`/apps/notes/labels/${label.handle}/${label.id}`}
              end
              activeClassName="active"
            >
              <Icon className="list-item-icon text-16" color="action">
                label
              </Icon>
              <ListItemText className="truncate" primary={label.name} disableTypography />
            </StyledListItem>
          ))}
          <StyledListItem button onClick={(ev) => dispatch(openLabelsDialog())}>
            <Icon className="list-item-icon text-16" color="action">
              edit
            </Icon>
            <ListItemText className="truncate" primary="ویرایش برچسب ها" disableTypography />
          </StyledListItem>
        </List>
        <Divider />
        <List className="px-12">
          <StyledListItem
            button
            component={NavLinkAdapter}
            to="/apps/notes/archive"
            activeClassName="active"
          >
            <Icon className="list-item-icon text-16" color="action">
              archive
            </Icon>
            <ListItemText className="truncate" primary="آرشیو" disableTypography />
          </StyledListItem>
        </List>
      </Paper>
    </div>
  );
}

export default NotesSidebarContent;
