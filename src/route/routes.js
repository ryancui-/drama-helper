import NewGame from '@/components/NewGame';
import InputInfo from '@/components/InputInfo';
import ReviewInfo from '@/components/ReviewInfo';
import ReviewGame from '@/components/ReviewGame';

const routes = [{
  path: '/',
  component: NewGame
}, {
  path: '/input',
  component: InputInfo
}, {
  path: '/review',
  component: ReviewInfo
}, {
  path: '/review_game',
  component: ReviewGame
}];

export default routes;
