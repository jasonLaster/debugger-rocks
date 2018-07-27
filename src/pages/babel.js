import React from 'react'
import { Link } from 'gatsby'
import Feature from '../components/feature'
import Layout from '../components/layout'
import { scopes } from '../images'

const SecondPage = () => (
  <Layout>
    <h1>Babel</h1>
    <p>
      Babel powers almost every feature in the debugger from breakpoints to
      variables. And because Babel can parse new language features, JSX, types,
      and many other syntaxes it works on source mapped files just as well
      native JS files!{' '}
    </p>
    <p>
      Language intellisense features powered by Babel are some of the most fun
      features to work on in the project!
    </p>
    <h2>Source Mapped Variables</h2>
    <p>
      Have you ever paused in a file transpiled by Babel or built by a bundler
      like webpack and had no idea what’s going on in the scopes pane? Couldn’t
      find a variable you imported? Didn’t understand what scopes were there?{' '}
    </p>
    <p>
      It turns out that at build time tools like Babel and Webpack often change
      the code quite a bit and sourcemaps only provide position mapping. We
      partnered with Logan Smyth, one of the primary maintainers of Babel, to
      reverse-engineer Babel and other build tools and find a way to show the
      source mapped variables and scopes that you would see if the code were
      never built.
    </p>
    <p>
      This means that when you pause, you see the correct scopes and variables,
      you can inline preview a variable in the editor, evaluate an expression in
      the console, and you can do all of this without getting errors like
      “variable `x` is not defined!
    </p>
    <h2>Pinned Breakpoints</h2>
    <p>
      Breakpoints are typically saved with a line position. This misses the
      point. It’s really common to add a breakpoint, edit code, refresh the tab
      and find your breakpoints in a completely _different_ location! This is
      even worse when your application is bundled and a change to file a, will
      affect the position of a breakpoint in file b!{' '}
    </p>
    <p>
      The Firefox Debugger stores the closest function and line offset for every
      breakpoint. This means that when, you edit your code, and refresh, the
      breakpoint will still be in the correct location!{' '}
    </p>
    <p> </p>
    <h2> Expressive Preview</h2>
    <p>
      Hovering on a variable is one of the most natural interactions in the
      debugger and it should always just work. Unfortunately, there is often a
      trade-off between accuracy and performance. Many debugger’s use a simple
      heuristic of evaluating the hovered token and other properties to the
      left. For example `b` in `a.b`. Other debuggers use a parser to find the
      correct expression to evaluate. For example `’b’` in `a['b']` .{' '}
    </p>
    <p>
      The Firefox Debugger uses Babel to compute all of the possible expressions
      that might be evaluated and can quickly evaluate the correct expression
      every time. By the way, this also means that we can check and see if the
      variable is in scope before evaluating it as well.
    </p>
    <code>actor.getName(c); genres['action'].actors[0];</code>
    <h2> Stepping </h2>
    <p>
      Stepping is one of the thorniest problems. Finding a good step location is
      surprisingly subjective and there are a lot of corner cases. This is also
      doubly bad when stepping over source mapped code and one “original”
      statement might be ten compiled “generated“ statements e.g. destructuring.
    </p>
    <p>
      The Firefox Debugger uses Babel to find all of the possible step locations
      in both original and generated files and helps the js engine step to the
      correct location every time. This means that when press the step over
      button, you can feel comfortable that you’ll land in a sensible location.
    </p>

    <div style={{ paddingTop: '300px' }}>
      <Feature
        name="Source Mapped Variables"
        img={scopes}
        excerpt={[
          `
            Have you ever paused in a file transpiled by Babel or built by a bundler
            like webpack and had no idea what’s going on in the scopes pane? Couldn’t
            find a variable you imported? Didn’t understand what scopes were there?
          `,
          `              Have you ever paused in a file transpiled by Babel or built by a bundler
                      like webpack and had no idea what’s going on in the scopes pane? Couldn’t
                      find a variable you imported? Didn’t understand what scopes were there?
`,
          `      This means that when you pause, you see the correct scopes and variables,
                  you can inline preview a variable in the editor, evaluate an expression in
                  the console, and you can do all of this without getting errors like
                  “variable \`x\` is not defined!`,
        ]}
      />
    </div>
  </Layout>
)

export default SecondPage
