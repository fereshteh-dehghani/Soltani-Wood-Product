import { lazy } from 'react';

const Accordion = lazy(() =>
  import('app/main/documentation/material-ui-components/pages/Accordion')
);
const Alert = lazy(() => import('app/main/documentation/material-ui-components/pages/Alert'));
const AppBar = lazy(() => import('app/main/documentation/material-ui-components/pages/AppBar'));
const Autocomplete = lazy(() =>
  import('app/main/documentation/material-ui-components/pages/Autocomplete')
);
const Avatars = lazy(() => import('app/main/documentation/material-ui-components/pages/Avatars'));
const Backdrop = lazy(() => import('app/main/documentation/material-ui-components/pages/Backdrop'));
const Badges = lazy(() => import('app/main/documentation/material-ui-components/pages/Badges'));
const BottomNavigation = lazy(() =>
  import('app/main/documentation/material-ui-components/pages/BottomNavigation')
);
const Box = lazy(() => import('app/main/documentation/material-ui-components/pages/Box'));
const Breadcrumbs = lazy(() =>
  import('app/main/documentation/material-ui-components/pages/Breadcrumbs')
);
const ButtonGroup = lazy(() =>
  import('app/main/documentation/material-ui-components/pages/ButtonGroup')
);
const Buttons = lazy(() => import('app/main/documentation/material-ui-components/pages/Buttons'));
const Cards = lazy(() => import('app/main/documentation/material-ui-components/pages/Cards'));
const Checkboxes = lazy(() =>
  import('app/main/documentation/material-ui-components/pages/Checkboxes')
);
const Chips = lazy(() => import('app/main/documentation/material-ui-components/pages/Chips'));
const ClickAwayListener = lazy(() =>
  import('app/main/documentation/material-ui-components/pages/ClickAwayListener')
);
const Container = lazy(() =>
  import('app/main/documentation/material-ui-components/pages/Container')
);
const CssBaseline = lazy(() =>
  import('app/main/documentation/material-ui-components/pages/CssBaseline')
);
const DatePicker = lazy(() =>
  import('app/main/documentation/material-ui-components/pages/DatePicker')
);
const DateRangePicker = lazy(() =>
  import('app/main/documentation/material-ui-components/pages/DateRangePicker')
);
const DateTimePicker = lazy(() =>
  import('app/main/documentation/material-ui-components/pages/DateTimePicker')
);
const Dialogs = lazy(() => import('app/main/documentation/material-ui-components/pages/Dialogs'));
const Dividers = lazy(() => import('app/main/documentation/material-ui-components/pages/Dividers'));
const Drawers = lazy(() => import('app/main/documentation/material-ui-components/pages/Drawers'));
const FloatingActionButton = lazy(() =>
  import('app/main/documentation/material-ui-components/pages/FloatingActionButton')
);
const Grid = lazy(() => import('app/main/documentation/material-ui-components/pages/Grid'));
const ImageList = lazy(() =>
  import('app/main/documentation/material-ui-components/pages/ImageList')
);
const Links = lazy(() => import('app/main/documentation/material-ui-components/pages/Links'));
const Lists = lazy(() => import('app/main/documentation/material-ui-components/pages/Lists'));
const Masonry = lazy(() => import('app/main/documentation/material-ui-components/pages/Masonry'));
const Menus = lazy(() => import('app/main/documentation/material-ui-components/pages/Menus'));
const Modal = lazy(() => import('app/main/documentation/material-ui-components/pages/Modal'));
const NoSsr = lazy(() => import('app/main/documentation/material-ui-components/pages/NoSsr'));
const Pagination = lazy(() =>
  import('app/main/documentation/material-ui-components/pages/Pagination')
);
const Paper = lazy(() => import('app/main/documentation/material-ui-components/pages/Paper'));
const Pickers = lazy(() => import('app/main/documentation/material-ui-components/pages/Pickers'));
const Popover = lazy(() => import('app/main/documentation/material-ui-components/pages/Popover'));
const Popper = lazy(() => import('app/main/documentation/material-ui-components/pages/Popper'));
const Portal = lazy(() => import('app/main/documentation/material-ui-components/pages/Portal'));
const Progress = lazy(() => import('app/main/documentation/material-ui-components/pages/Progress'));
const RadioButtons = lazy(() =>
  import('app/main/documentation/material-ui-components/pages/RadioButtons')
);
const Rating = lazy(() => import('app/main/documentation/material-ui-components/pages/Rating'));
const Selects = lazy(() => import('app/main/documentation/material-ui-components/pages/Selects'));
const Skeleton = lazy(() => import('app/main/documentation/material-ui-components/pages/Skeleton'));
const Slider = lazy(() => import('app/main/documentation/material-ui-components/pages/Slider'));
const Snackbars = lazy(() =>
  import('app/main/documentation/material-ui-components/pages/Snackbars')
);
const SpeedDial = lazy(() =>
  import('app/main/documentation/material-ui-components/pages/SpeedDial')
);
const Stack = lazy(() => import('app/main/documentation/material-ui-components/pages/Stack'));
const Steppers = lazy(() => import('app/main/documentation/material-ui-components/pages/Steppers'));
const Switches = lazy(() => import('app/main/documentation/material-ui-components/pages/Switches'));
const Tables = lazy(() => import('app/main/documentation/material-ui-components/pages/Tables'));
const Tabs = lazy(() => import('app/main/documentation/material-ui-components/pages/Tabs'));
const TextFields = lazy(() =>
  import('app/main/documentation/material-ui-components/pages/TextFields')
);
const TextareaAutosize = lazy(() =>
  import('app/main/documentation/material-ui-components/pages/TextareaAutosize')
);
const TimePicker = lazy(() =>
  import('app/main/documentation/material-ui-components/pages/TimePicker')
);
const Timeline = lazy(() => import('app/main/documentation/material-ui-components/pages/Timeline'));
const ToggleButton = lazy(() =>
  import('app/main/documentation/material-ui-components/pages/ToggleButton')
);
const Tooltips = lazy(() => import('app/main/documentation/material-ui-components/pages/Tooltips'));
const TransferList = lazy(() =>
  import('app/main/documentation/material-ui-components/pages/TransferList')
);
const Transitions = lazy(() =>
  import('app/main/documentation/material-ui-components/pages/Transitions')
);
const TrapFocus = lazy(() =>
  import('app/main/documentation/material-ui-components/pages/TrapFocus')
);
const TreeView = lazy(() => import('app/main/documentation/material-ui-components/pages/TreeView'));
const Typography = lazy(() =>
  import('app/main/documentation/material-ui-components/pages/Typography')
);

const MaterialUIComponentsRoutes = [
  {
    path: 'material-ui-components/accordion',
    element: <Accordion />,
  },
  {
    path: 'material-ui-components/alert',
    element: <Alert />,
  },
  {
    path: 'material-ui-components/app-bar',
    element: <AppBar />,
  },
  {
    path: 'material-ui-components/autocomplete',
    element: <Autocomplete />,
  },
  {
    path: 'material-ui-components/avatars',
    element: <Avatars />,
  },
  {
    path: 'material-ui-components/backdrop',
    element: <Backdrop />,
  },
  {
    path: 'material-ui-components/badges',
    element: <Badges />,
  },
  {
    path: 'material-ui-components/bottom-navigation',
    element: <BottomNavigation />,
  },
  {
    path: 'material-ui-components/box',
    element: <Box />,
  },
  {
    path: 'material-ui-components/breadcrumbs',
    element: <Breadcrumbs />,
  },
  {
    path: 'material-ui-components/button-group',
    element: <ButtonGroup />,
  },
  {
    path: 'material-ui-components/buttons',
    element: <Buttons />,
  },
  {
    path: 'material-ui-components/cards',
    element: <Cards />,
  },
  {
    path: 'material-ui-components/checkboxes',
    element: <Checkboxes />,
  },
  {
    path: 'material-ui-components/chips',
    element: <Chips />,
  },
  {
    path: 'material-ui-components/click-away-listener',
    element: <ClickAwayListener />,
  },
  {
    path: 'material-ui-components/container',
    element: <Container />,
  },
  {
    path: 'material-ui-components/css-baseline',
    element: <CssBaseline />,
  },
  {
    path: 'material-ui-components/date-picker',
    element: <DatePicker />,
  },
  {
    path: 'material-ui-components/date-range-picker',
    element: <DateRangePicker />,
  },
  {
    path: 'material-ui-components/date-time-picker',
    element: <DateTimePicker />,
  },
  {
    path: 'material-ui-components/dialogs',
    element: <Dialogs />,
  },
  {
    path: 'material-ui-components/dividers',
    element: <Dividers />,
  },
  {
    path: 'material-ui-components/drawers',
    element: <Drawers />,
  },
  {
    path: 'material-ui-components/floating-action-button',
    element: <FloatingActionButton />,
  },
  {
    path: 'material-ui-components/grid',
    element: <Grid />,
  },
  {
    path: 'material-ui-components/image-list',
    element: <ImageList />,
  },
  {
    path: 'material-ui-components/links',
    element: <Links />,
  },
  {
    path: 'material-ui-components/lists',
    element: <Lists />,
  },
  {
    path: 'material-ui-components/masonry',
    element: <Masonry />,
  },
  {
    path: 'material-ui-components/menus',
    element: <Menus />,
  },
  {
    path: 'material-ui-components/modal',
    element: <Modal />,
  },
  {
    path: 'material-ui-components/no-ssr',
    element: <NoSsr />,
  },
  {
    path: 'material-ui-components/pagination',
    element: <Pagination />,
  },
  {
    path: 'material-ui-components/paper',
    element: <Paper />,
  },
  {
    path: 'material-ui-components/pickers',
    element: <Pickers />,
  },
  {
    path: 'material-ui-components/popover',
    element: <Popover />,
  },
  {
    path: 'material-ui-components/popper',
    element: <Popper />,
  },
  {
    path: 'material-ui-components/portal',
    element: <Portal />,
  },
  {
    path: 'material-ui-components/progress',
    element: <Progress />,
  },
  {
    path: 'material-ui-components/radio-buttons',
    element: <RadioButtons />,
  },
  {
    path: 'material-ui-components/rating',
    element: <Rating />,
  },
  {
    path: 'material-ui-components/selects',
    element: <Selects />,
  },
  {
    path: 'material-ui-components/skeleton',
    element: <Skeleton />,
  },
  {
    path: 'material-ui-components/slider',
    element: <Slider />,
  },
  {
    path: 'material-ui-components/snackbars',
    element: <Snackbars />,
  },
  {
    path: 'material-ui-components/speed-dial',
    element: <SpeedDial />,
  },
  {
    path: 'material-ui-components/stack',
    element: <Stack />,
  },
  {
    path: 'material-ui-components/steppers',
    element: <Steppers />,
  },
  {
    path: 'material-ui-components/switches',
    element: <Switches />,
  },
  {
    path: 'material-ui-components/tables',
    element: <Tables />,
  },
  {
    path: 'material-ui-components/tabs',
    element: <Tabs />,
  },
  {
    path: 'material-ui-components/text-fields',
    element: <TextFields />,
  },
  {
    path: 'material-ui-components/textarea-autosize',
    element: <TextareaAutosize />,
  },
  {
    path: 'material-ui-components/time-picker',
    element: <TimePicker />,
  },
  {
    path: 'material-ui-components/timeline',
    element: <Timeline />,
  },
  {
    path: 'material-ui-components/toggle-button',
    element: <ToggleButton />,
  },
  {
    path: 'material-ui-components/tooltips',
    element: <Tooltips />,
  },
  {
    path: 'material-ui-components/transfer-list',
    element: <TransferList />,
  },
  {
    path: 'material-ui-components/transitions',
    element: <Transitions />,
  },
  {
    path: 'material-ui-components/trap-focus',
    element: <TrapFocus />,
  },
  {
    path: 'material-ui-components/tree-view',
    element: <TreeView />,
  },
  {
    path: 'material-ui-components/typography',
    element: <Typography />,
  },
];

export default MaterialUIComponentsRoutes;
