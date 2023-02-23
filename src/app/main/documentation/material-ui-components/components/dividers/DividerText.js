import * as React from 'react';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';

const Root = styled('div')(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  '& > :not(style) + :not(style)': {
    marginTop: theme.spacing(2),
  },
}));

export default function DividerText() {
  const content = (
    <div>
      {`لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد`}
    </div>
  );

  return (
    <Root>
      {content}
      <Divider>وسط</Divider>
      {content}
      <Divider textAlign="left">چپ</Divider>
      {content}
      <Divider textAlign="right">راست</Divider>
      {content}
      <Divider>
        <Chip label="CHIP" />
      </Divider>
      {content}
    </Root>
  );
}
