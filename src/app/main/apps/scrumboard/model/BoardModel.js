import FuseUtils from '@fuse/utils';
import _ from '@lodash';

const sampleLabels = [
  {
    id: '26022e4129ad3a5sc28b36cd',
    name: 'High Priority',
    class: 'bg-red text-white',
  },
  {
    id: '56027e4119ad3a5dc28b36cd',
    name: 'Design',
    class: 'bg-orange text-white',
  },
  {
    id: '5640635e19ad3a5dc21416b2',
    name: 'App',
    class: 'bg-blue text-white',
  },
  {
    id: '6540635g19ad3s5dc31412b2',
    name: 'Feature',
    class: 'bg-green text-white',
  },
];

const sampleMembers = [
  {
    id: '56027c1930450d8bf7b10758',
    name: 'بهار بینایی',
    avatar: 'assets/images/avatars/alice.jpg',
  },
  {
    id: '26027s1930450d8bf7b10828',
    name: 'محمد صادقی',
    avatar: 'assets/images/avatars/danielle.jpg',
  },
  {
    id: '76027g1930450d8bf7b10958',
    name: 'حمید اسکندری',
    avatar: 'assets/images/avatars/james.jpg',
  },
  {
    id: '36027j1930450d8bf7b10158',
    name: 'فاطمه کاظمی زاده',
    avatar: 'assets/images/avatars/Velazquez.jpg',
  },
];

function BoardModel(data) {
  data = data || {};

  return _.defaults(data, {
    name: 'برد بدون نام',
    uri: 'untitled-board',
    id: FuseUtils.generateGUID(),
    settings: {
      color: '',
      subscribed: true,
      cardCoverImages: true,
    },
    lists: [],
    cards: [],
    members: sampleMembers,
    labels: sampleLabels,
  });
}

export default BoardModel;
