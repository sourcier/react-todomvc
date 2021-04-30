import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import TodoList from './components/TodoList';

class Home extends React.Component {
  render() {
    return (
      <>
        <section className="todoapp">
          <Header />
          <TodoList />
        </section>
        <Footer />
      </>
    )
  }
}

export default Home;
