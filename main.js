#! /usr/bin/env node

const notifier = require('node-notifier');

const delay = (process.argv[2] || 15) * 60 * 1000

const notify = () => {
  notifier.notify({
    title: 'Break',
    message: ' '
  });

  setTimeout(notify, delay)
}

notify()
