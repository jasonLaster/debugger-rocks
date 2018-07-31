---
path: "/time-travel"
---

# Time Travel

Time Travel refers to the ability to record a tab and later replay it ([WebReplay][wrr]). The technology is useful for local development, where you might want to:

- pause and step forwards or backwards
- pause and rewind to a prior state
- rewind to the time a console message was logged
- rewind to the time an element had a certain style or layout
- rewind to the time a network asset loaded

It is also useful in Production and CI, when you might want to:

- save user recordings when an exception is fired
- view a test recording when the test fails
- easily mock and re-run integration tests

<img width="926" alt="screen shot 2018-07-26 at 2 04 05 pm" src="https://user-images.githubusercontent.com/254562/43279803-124fa4b0-90dd-11e8-8bb6-8be9b45690dc.png">

## Getting Started

1.  Install [Firefox Nightly][nightly]
2.  Go to about:config, enable `devtools.recordreplay.enabled`
3.  Open a new tab via Tools > Web Developer > Record Execution

## Trying it out

Time Travel debugging should work on any website, but it is still fairly new technology so it is possible you could run into rough patches. If you do, please tweet at me [@jasonLaster11][jll]

I recommend trying out todomvc to grok the basics :)

1.  go to [todomvc][todo]
2.  open the debugger (check out those cool new stepping buttons)
3.  add a breakpoint in `todo-view.js#34`
4.  add a todo
5.  step back, step in, step out, step back. You've just done the time travel dance!

![](http://g.recordit.co/bBy7agVBag.gif)

### A Step By Step guide to time travel debugging

Here's a [talk] I gave at JS Conf EU on the potential of time travel debugging. If you can't tell already, I think recording based debuggerw will fundamentally change how we debug software.

### Disclaimers:

- webreplay currently only supports OS X 10.13
- webreplay is still experimental and may never land in Firefox

[wrr]: https://developer.mozilla.org/en-US/docs/Mozilla/Projects/WebReplay
[jll]: https://twitter.com/jasonlaster11
[todo]: http://firefox-dev.tools/debugger-examples/examples/todomvc/
[nightly]: https://www.mozilla.org/en-US/firefox/channel/desktop/#nightly
[talk]: https://www.youtube.com/watch?list=PL37ZVnwpeshG2YXJkun_lyNTtM-Qb3MKa&time_continue=1327&v=rDq1AN1kSn4
