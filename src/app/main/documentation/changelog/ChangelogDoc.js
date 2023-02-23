import Typography from '@mui/material/Typography';
import ChangelogCard from './ChangelogCard';
import changelogData from './ChangelogData';

function ChangelogDoc() {
  return (
    <>
      <Typography variant="h4" className="mb-40 font-700">
        تغییرات نسخه قالب (Changelog)
      </Typography>

      {changelogData.map((item) => (
        <ChangelogCard className="shrink-0 mb-24" key={item.version} {...item} />
      ))}
    </>
  );
}

export const fuseReactLatestVersion = changelogData[0].version;

export default ChangelogDoc;
