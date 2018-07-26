import React from 'react'

import styles from './footer.module.css'
console.log(Object.keys(styles))

export default () => (
  <footer className={styles.footer}>
    <a className={styles.button} href="/">
      Get Started
    </a>
    <div className={styles.content}>
      <nav>
        <h3>Documentation</h3>
        <div>
          <ul>
            <li>
              <a href="getting_started.html">⚛︎ Hackable</a>
            </li>
            <li>
              <a href="assets.html">🐠 Community Run</a>
            </li>
            <li>
              <a href="transforms.html">❤️ Frameworks</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="code_splitting.html">👨‍🍳 Babel</a>
            </li>
            <li>
              <a href="hmr.html">🎥 Time Travel</a>
            </li>
            <li>
              <a href="production.html">🚀 WASM </a>
            </li>
          </ul>
        </div>
      </nav>
      <nav>
        <h3>Links</h3>
        <ul>
          <li>
            <a
              href="http://github.com/devtools-html/debugger.html/"
              target="_blank"
            >
              GitHub
            </a>
          </li>
          <li>
            <a href="/" target="_blank">
              Slack
            </a>
          </li>
          <li>
            <a href="/" target="_blank">
              Twitter
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <div className={styles.copyright}>
      Copyright ©
      <script>document.write(new Date().getFullYear())</script>2018 Jason
      Laster. This website is{' '}
      <a href="/" target="_blank">
        open source
      </a>.
    </div>
  </footer>
)
