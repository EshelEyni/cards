import { AppHeader } from './cmps/app-header.jsx';
import { MainCmp } from './cmps/main-cmp.jsx';

function RootCmp() {
  return (
    <div className="App">
      <AppHeader />
      <MainCmp />
    </div>
  );
}

export default RootCmp;
