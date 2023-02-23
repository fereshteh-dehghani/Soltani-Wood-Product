import FuseHighlight from '@fuse/core/FuseHighlight';
import Typography from '@mui/material/Typography';

function FuseHighlightDoc() {
  return (
    <>
      <Typography variant="h4" className="mb-40 font-700">
        کامپوننت هایلایت FuseHighlight
      </Typography>

      <Typography className="mb-16" component="p">
        <code>FuseHighlight</code> 
        یک کامپوننت سفارشی است که میتونین با استفاده ازش هر متنی رو هایلایت کنین.
        از پکیج 
        <a href="http://prismjs.com/" target="_blank" rel="noopener noreferrer" className="ml-8">
          PrismJS
        </a>
        استفاده می کند
      </Typography>

      <Typography className="text-20 mt-20 mb-10 font-700" variant="h5">
        روش استفاده
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {`
                                 <FuseHighlight component="pre" className="language-html">
                                   <div className="title">
                                        <span>Example Title</span>
                                    </div>
                                 </FuseHighlight>
                                `}
      </FuseHighlight>

      <Typography className="text-20 mt-20 mb-10 font-700" variant="h5">
        پیش نمایش
      </Typography>

      <FuseHighlight component="pre" className="language-html">
        {`
                            <div className="title">
                                <span>Example Title</span>
                            </div>
                            `}
      </FuseHighlight>
    </>
  );
}

export default FuseHighlightDoc;
