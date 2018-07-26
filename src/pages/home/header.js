import React from 'react'
import styles from './header.module.css'
import classnames from 'classnames'
import { breakpoints, outline, modules, tree } from '../../images'
import Gallery from '../../components/gallery'

export default () => (
  <div className={styles.header}>
    <div>
      <nav className={styles.links}>
        <a href="/">MDN</a>
        <a href="/">Documentation</a>
        <a href="https://github.com/parcel-bundler/parcel" target="_blank">
          GitHub
        </a>
      </nav>

      <h1 className={styles.h1}> 🦊 Debugger </h1>
      <h2 className={styles.h2}>
        The hackable debugger built for modern times
      </h2>

      <Gallery
        className={styles.gallery}
        images={[tree, outline, modules, breakpoints]}
      />
      <a className={classnames('button', styles.getStarted)} href="/">
        Get Started
      </a>
      <a
        class="button"
        href="http://github.com/devtools-html/debugger.html/"
        target="_blank"
      >
        GitHub
      </a>
    </div>
  </div>
)
