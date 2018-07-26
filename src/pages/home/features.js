import React from 'react'
import styles from './features.module.css'
import { Link } from 'gatsby'

export default () => (
  <main>
    <div className={styles.features}>
      <section>
        <Link to="/hackable">
          <h3> ⚛︎ Hackable</h3>
        </Link>
        <p>
          Built from the ground up with React and Webpack with the goal of being
          as hackable and extendable as possible.
        </p>
      </section>
      <section>
        <Link to="/community">
          <h3>🐠 Community</h3>
        </Link>
        <p>
          Contributed to by 500+ community members who believe that the best web
          Dev Tools are built by web devs.
        </p>
      </section>
      <section>
        <Link to="/frameworks">
          <h3>❤️ Frameworks</h3>
        </Link>
        <p>
          Supports 20+ Frameworks and Libraries because modern web development
          is all about leveraging the best frameworks and libraries.
        </p>
      </section>
      <section>
        <Link to="/babel">
          <h3>👨‍🍳 Babel</h3>
        </Link>
        <p>
          Built on top of Babel, so that variables, breakpoints, stepping are
          just as good with transpiled files as native files!
        </p>
      </section>
      <section>
        <Link to="/time-travel">
          <h3>🎥 Time Travel</h3>
        </Link>
        <p>
          The future of debugging will be based on record and replay. You’ve got
          to see it to believe it!
        </p>
      </section>
      <section>
        <Link to="/wasm">
          <h3>🚀 WASM </h3>
        </Link>
        <p>Native wasm language debugging out of the box.</p>
      </section>
    </div>
  </main>
)
