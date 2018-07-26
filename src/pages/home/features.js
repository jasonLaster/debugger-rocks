import React from 'react'
import styles from './features.module.css'

export default () => (
  <main>
    <div className={styles.features}>
      <section>
        <h3> ⚛︎ Hackable</h3>
        <p>
          Built from the ground up with React and Webpack with the goal of being
          as hackable and extendable as possible.
        </p>
      </section>
      <section>
        <h3>🐠 Community Run</h3>
        <p>
          Contributed to by 500+ community members who believe that the best web
          Dev Tools are built by web devs.
        </p>
      </section>
      <section>
        <h3>❤️ Frameworks</h3>
        <p>
          Supports 20+ Frameworks and Libraries because modern web development
          is all about leveraging the best frameworks and libraries.
        </p>
      </section>
      <section>
        <h3>👨‍🍳 Babel</h3>
        <p>
          Built on top of Babel, so that variables, breakpoints, stepping are
          just as good with transpiled files as native files!
        </p>
      </section>
      <section>
        <h3>🎥 Time Travel</h3>
        <p>
          The future of debugging will be based on record and replay. You’ve got
          to see it to believe it!
        </p>
      </section>
      <section>
        <h3>🚀 WASM </h3>
        <p>Native wasm language debugging out of the box.</p>
      </section>
    </div>
  </main>
)
