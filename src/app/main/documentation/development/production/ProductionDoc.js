import FuseHighlight from '@fuse/core/FuseHighlight';
import Typography from '@mui/material/Typography';

function ProductionDoc() {
  return (
    <>
      <Typography variant="h4" className="mb-40 font-700">
        ایجاد نسخه Production (محصول نهایی)
      </Typography>

      <Typography className="mb-16" component="p">
        دستور زیر برنامه را در یک پوشه خروجی می سازد
      </Typography>

      <FuseHighlight component="pre" className="language-bash my-16">
        {` npm run build `}
      </FuseHighlight>

      <Typography className="mb-16" component="p">
        و درنهایت در پوشه ی  <code>/build</code> برنامه را کامپایل می کند
      </Typography>
    </>
  );
}

export default ProductionDoc;
