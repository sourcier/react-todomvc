import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';

class Home extends React.Component {
  render() {
    return (
      <>
        <section class="todoapp">
          <Header />
        </section>
        <Footer />
      </>
    )
  }
}

export default Home;
