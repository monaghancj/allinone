const h = require('react-hyperscript')
const React = require('react')

module.exports = React.createClass({

  getInitialState: function() {
    return {
      advice: 'Words of Wisdom'
    }
  },

  randomNum: function() {
    return Math.floor((Math.random() * 23) + 1)
  },

  onClickHandler: function() {
    var sayings = [
 'Maybe.', 'Certainly not.', 'I hope so.', 'Not in your wildest dreams.',
 'There is a good chance.', 'Quite likely.', 'I think so.', 'I hope not.',
 'I hope so.', 'Never!', 'Fuhgeddaboudit.', 'Ahaha! Really?!?', 'Pfft.',
 'Sorry, bucko.', 'Hell, yes.', 'Hell to the no.', 'The future is bleak.',
 'The future is uncertain.', 'I would rather not say.', 'Who cares?',
 'Possibly.', 'Never, ever, ever.', 'There is a small chance.', 'Yes!']
    var winner = sayings[this.randomNum()]
    this.setState({advice: winner})
  },

  render: function() {
    return (
      h('h1', [
        h('div.ball.bg-black.br-100.w5.h5.pa3', [
          h('div.bg-white.w4.h4.ml2.mt2.br-100', [
            h('h5.pt2.green', this.state.advice)
          ])
        ]),
        h('button', {
          onClick: this.onClickHandler
        }, 'Shake!')
      ])
    )
  }
})
