import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
          تنظیمات عمومی          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>من یک آکاردئون هستم</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          هیچ چیز پیچیده نیست. چیزی برای انجام دادن با چیزی است که بسیاری از مردم از دست می دهند. شاید این چیزی باشد که بزرگترین باشگاه به آن نیاز دارد.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>کاربران</Typography>
          <Typography sx={{ color: 'text.secondary' }}>
          شما در حال حاضر مالک نیستید          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          تا املاک و مستغلات، اما تخت همیشه واقعی است، و تخت از تخت مصون نیست، نیمکت در نخبگان متفاوت است. Pellentesque convallis laoreet.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
          تنظیمات پیشرفته          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
          فیلتر کردن برای کل وب سرور به طور کامل غیرفعال شده است          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          اکنون زندگی اورک ها تازه است، نویسنده اکنون در آخر هفته بازیکنان است. وضعیت کامل فقر اروس است، حیات فقر وسیله نقلیه است. طبیعی یا تبلیغاتی است.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>اطلاعات شخصی</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          اکنون زندگی اورک ها تازه است، نویسنده اکنون در آخر هفته بازیکنان است. درست است که در اقتصاد فقر زیاد است، زندگی فقر است. طبیعی یا تبلیغاتی است.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
