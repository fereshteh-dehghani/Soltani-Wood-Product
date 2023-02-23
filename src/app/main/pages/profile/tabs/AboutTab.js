import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

function AboutTab() {
  const [data, setData] = useState(null);
  const test = (x) => x + 1;

  useEffect(() => {
    axios.get('/api/profile/about').then((res) => {
      setData(res.data);
    });
  }, []);

  if (!data) {
    return null;
  }

  const { general, work, contact, groups, friends } = data;

  const container = {
    show: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div variants={container} initial="hidden" animate="show">
      <div className="md:flex max-w-2xl">
        <div className="flex flex-col flex-1 md:ltr:pr-32 md:rtl:pl-32">
          <Card component={motion.div} variants={item} className="w-full mb-32 rounded-16 shadow">
            <AppBar position="static" elevation={0}>
              <Toolbar className="px-8">
                <Typography
                  variant="subtitle1"
                  color="inherit"
                  className="flex-1 px-12 font-medium"
                >
                  اطلاعات کلی
                </Typography>
              </Toolbar>
            </AppBar>

            <CardContent>
              <div className="mb-24">
                <Typography className="font-semibold mb-4 text-15">جنسیت</Typography>
                <Typography>{general.gender}</Typography>
              </div>

              <div className="mb-24">
                <Typography className="font-semibold mb-4 text-15">تاریخ تولد</Typography>
                <Typography>{general.birthday}</Typography>
              </div>

              <div className="mb-24">
                <Typography className="font-semibold mb-4 text-15">لوکیشن</Typography>

                {general.locations.map((location) => (
                  <div className="flex items-center" key={location}>
                    <Typography>{location}</Typography>
                    <Icon className="text-16 mx-4" color="action">
                      location_on
                    </Icon>
                  </div>
                ))}
              </div>

              <div className="mb-24">
                <Typography className="font-semibold mb-4 text-15">درباره من</Typography>
                <Typography>{general.about}</Typography>
              </div>
            </CardContent>
          </Card>

          <Card component={motion.div} variants={item} className="w-full mb-32 rounded-16 shadow">
            <AppBar position="static" elevation={0}>
              <Toolbar className="px-8">
                <Typography
                  variant="subtitle1"
                  color="inherit"
                  className="flex-1 px-12 font-medium"
                >
                  پیشینه شغلی
                </Typography>
              </Toolbar>
            </AppBar>

            <CardContent>
              <div className="mb-24">
                <Typography className="font-semibold mb-4 text-15">حرفه</Typography>
                <Typography>{work.occupation}</Typography>
              </div>

              <div className="mb-24">
                <Typography className="font-semibold mb-4 text-15">مهارت ها</Typography>
                <Typography>{work.skills}</Typography>
              </div>

              <div className="mb-24">
                <Typography className="font-semibold mb-4 text-15">سابقه شغلی</Typography>
                <table className="">
                  <tbody>
                    {work.jobs.map((job) => (
                      <tr key={job.company}>
                        <td>
                          <Typography>{job.company}</Typography>
                        </td>
                        <td className="px-16">
                          <Typography color="textSecondary">{job.date}</Typography>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Card component={motion.div} variants={item} className="w-full mb-32 rounded-16 shadow">
            <AppBar position="static" elevation={0}>
              <Toolbar className="px-8">
                <Typography
                  variant="subtitle1"
                  color="inherit"
                  className="flex-1 px-12 font-medium"
                >
                  اطلاعات تماس
                </Typography>
              </Toolbar>
            </AppBar>

            <CardContent>
              <div className="mb-24">
                <Typography className="font-semibold mb-4 text-15">آدرس</Typography>
                <Typography>{contact.address}</Typography>
              </div>

              <div className="mb-24">
                <Typography className="font-semibold mb-4 text-15">شماره تلفن.</Typography>

                {contact.tel.map((tel) => (
                  <div className="flex items-center" key={tel}>
                    <Typography dir='ltr'>{tel}</Typography>
                  </div>
                ))}
              </div>

              <div className="mb-24">
                <Typography className="font-semibold mb-4 text-15">وبسایت</Typography>

                {contact.websites.map((website) => (
                  <div className="flex items-center" key={website}>
                    <Typography>{website}</Typography>
                  </div>
                ))}
              </div>

              <div className="mb-24">
                <Typography className="font-semibold mb-4 text-15">ایمیل</Typography>

                {contact.emails.map((email) => (
                  <div className="flex items-center" key={email}>
                    <Typography>{email}</Typography>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col md:w-320">
          <Card component={motion.div} variants={item} className="w-full mb-32 rounded-16 shadow">
            <AppBar position="static" elevation={0}>
              <Toolbar className="px-8">
                <Typography
                  variant="subtitle1"
                  color="inherit"
                  className="flex-1 px-12 font-medium"
                >
                  دوستان
                </Typography>
                <Button color="inherit" size="small">
                  مشاهده 458 دوست دیگر
                </Button>
              </Toolbar>
            </AppBar>
            <CardContent className="flex flex-wrap p-16">
              {friends.map((friend) => (
                <img
                  key={friend.id}
                  className="w-64 m-4 rounded-16 block"
                  src={friend.avatar}
                  alt={friend.name}
                />
              ))}
            </CardContent>
          </Card>

          <Card component={motion.div} variants={item} className="w-full mb-32 rounded-16 shadow">
            <AppBar position="static" elevation={0}>
              <Toolbar className="px-8">
                <Typography
                  variant="subtitle1"
                  color="inherit"
                  className="flex-1 px-12 font-medium"
                >
                  گروه های عضو شده
                </Typography>
                <Button color="inherit" size="small">
                  مشاهده 6 گروه دیگر
                </Button>
              </Toolbar>
            </AppBar>
            <CardContent className="p-0">
              <List className="p-0">
                {groups.map((group) => (
                  <ListItem key={group.id} className="px-8">
                    <Avatar className="mx-8" alt={group.name}>
                      {group.name[0]}
                    </Avatar>
                    <ListItemText
                      primary={
                        <div className="flex">
                          <Typography className="font-medium" color="secondary" paragraph={false}>
                            {group.name}
                          </Typography>

                          <Typography className="mx-4 font-normal" paragraph={false}>
                            {group.category}
                          </Typography>
                        </div>
                      }
                      secondary={group.members}
                    />
                    <ListItemSecondaryAction>
                      <IconButton size="large">
                        <Icon>more_vert</Icon>
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.div>
  );
}

export default AboutTab;
