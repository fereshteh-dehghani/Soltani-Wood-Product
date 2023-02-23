import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SimpleAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 1-آکاردئون</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          مولفه آکاردئون به کاربر این امکان را می دهد که بخش هایی از محتوای مرتبط را در یک صفحه نشان دهد و پنهان کند.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 2-آکاردئون</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          مولفه آکاردئون به کاربر این امکان را می دهد که بخش هایی از محتوای مرتبط را در یک صفحه نشان دهد و پنهان کند.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>آکاردئون معلول</Typography>
        </AccordionSummary>
      </Accordion>
    </div>
  );
}
