import React from 'react'
import { Link } from 'gatsby'
import styles from './header.module.css'

const Header = ({ siteTitle }) => (
  <div className={styles.header}>
    <div className={styles.headerBody}>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>

      <nav className={styles.links}>
        <a href="/">MDN</a>
        <a href="/">Documentation</a>
        <a href="https://github.com/parcel-bundler/parcel" target="_blank">
          GitHub
        </a>
      </nav>
    </div>
  </div>
)

export default Header
