import React from 'react'
import styles from './header.module.css'
import classnames from 'classnames'
import { breakpoints, outline, modules, tree } from '../../images'
import Gallery from '../../components/gallery'
console.log(Object.keys(styles))
export default () => (
  <div className={styles.header}>
    <div>
      <nav className={styles.links}>
        <a href="https://developer.mozilla.org/en-US/docs/Tools/Debugger">
          MDN
        </a>
        <a href="https://firefox-dev.tools/debugger.html/#documentation">
          Documentation
        </a>
        <a href="https://github.com/devtools-html/debugger" target="_blank">
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
      <a className={classnames(styles.button, styles.getStarted)} href="/">
        Get Started
      </a>
      <a
        className={styles.button}
        href="http://github.com/devtools-html/debugger.html/"
        target="_blank"
      >
        GitHub
      </a>
    </div>
  </div>
)
