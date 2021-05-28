import { BrowserRouter as Router } from 'react-router-dom';

import { shallow } from 'enzyme';

import { Footer } from '../../components/';

describe('Testing Footer Component', () => {
  it(`Footer renders correctly`, async () => {
    const tree = shallow(
      <Router>
        <Footer />
      </Router>,
    );

    expect(tree).toBeTruthy();
  });
});
