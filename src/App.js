import React from 'react'

import { Footer, Blog, Possibility, Features, WhatGPT3, Header, ContactForm } from './containers';
import { CTA, Brand, Navbar } from './components';
import './App.css';
import './i18n';

const App = () => {
  return (
    <div>
      <div className='App'>
        <div className='gradient__bg'>
          <Navbar />
          <Header />
          <div />
          <Brand />
          <WhatGPT3 />
          <Features />
          <CTA />
          {/* <Blog /> */}
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App