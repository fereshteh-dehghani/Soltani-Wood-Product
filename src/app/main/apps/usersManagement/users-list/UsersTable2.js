import { useState, useEffect, useRef, useMemo } from 'react';
import FuseScrollbars from '@fuse/core/FuseScrollbars';
import FuseLoading from '@fuse/core/FuseLoading';
import withRouter from '@fuse/core/withRouter';
import { CssBaseline, css, Modal, Button, Text, Input, Row, Checkbox } from '@nextui-org/react';

function UsersTable() {
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
    console.log('closed');
  };
  return (
    <>
      <div>
      {/* <CssBaseline /> */}
        <Button
          auto
          css={{
            borderRadius: '$xs', // radii.xs
            border: '$space$1 solid transparent',
            background: '$pink800', // colors.pink800
            color: '$pink100',
            height: '$12', // space[12]
            boxShadow: '$md', // shadows.md
            '&:hover': {
              background: '$pink100',
              color: '$pink800',
            },
            '&:active': {
              background: '$pink200',
            },
            '&:focus': {
              borderColor: '$pink400',
            },
          }}
        >
          Custom button
        </Button>
        <Button auto shadow onClick={handler}>
          Open modal
        </Button>
        <Modal closeButton aria-labelledby="modal-title" open={visible} onClose={closeHandler}>
          <Modal.Header>
            <Text id="modal-title" size={18}>
              Welcome to
              <Text b size={18}>
                NextUI
              </Text>
            </Text>
          </Modal.Header>
          <Modal.Body>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis
            consectetur
          </Modal.Body>
          <Modal.Footer>
            <Button auto flat color="error" onClick={closeHandler}>
              Close
            </Button>
            <Button auto onClick={closeHandler}>
              Sign in
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default withRouter(UsersTable);
