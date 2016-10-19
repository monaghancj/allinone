const h = require('react-hyperscript')
const React = require('react')

// have the computer randomly select number 1 - 10
// and have the user try to guess the number
// and the computer will respond higher or lower
// until

// var projectOne =React.createClass({
//
//   getInitialState: function() {
//     return {
//       num: '',
//       answer: this.randomNum(),
//       output: ''
//     }
//   },
//   randomNum: function() {
//       return Math.floor((Math.random() * 10) + 1)
//   },
//   onChangeHandler: function(e) {
//     //e.preventDefault()
//     var userGuess = e.target.value
//     if (userGuess > this.state.answer) {
//       this.setState({ output: 'Lower' })
//     } else if (userGuess < this.state.answer) {
//       this.setState({ output: 'Higher' })
//     } else if (userGuess == this.state.answer) {
//       this.setState({ output: 'Correct' })
//     }
//     console.log(JSON.stringify(this.state.answer))
//     console.log(this.state.answer)
//     this.setState({
//       num: '',
//     })
//   },
//   render: function() {
//     return (
//       h('div', [
//         h('h1', this.state.output),
//         h('input', {
//           placeholder: 'Guess a number between 1 - 10',
//           value: this.state.num,
//           onChange: this.onChangeHandler
//         })
//       ])
//     )
//   }
// })


// ----

// have the user think of a number 1 - 10, and
// make the computer guess the number
// by the user providing input
// higher or lower


module.exports=React.createClass({

  getInitialState: function() {
    return {
      num: '',
      min: 1,
      max: 10,
      guess: '',
      answer: '',
      output: ''
    }
  },
  randNum: function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  onSubmitHandler: function(e) {
    var guess= this.randNum(this.state.min, this.state.max)
    this.setState({guess:  guess})
  },
  onSubmitHigher: function(e){
    var guess = this.randNum(this.state.guess + 1, this.state.max)
    this.setState({
      guess:  guess,
      min: this.state.guess + 1
    })
  },
  onSubmitLower: function(e){
    var guess = this.randNum(this.state.min, this.state.guess - 1)
    this.setState({
      guess:  guess,
      max : this.state.guess - 1
    })
  },
  onSubmitCorrect: function(e){
    this.setState({guess: "Correct!"})
  },

  render: function() {
    console.log(this.state)
    return (
      h('div', [
        h('h1', this.state.guess),
        h('button' , {onClick:this.onSubmitHandler},'Guess It!'),
        h('button' , {onClick:this.onSubmitHigher},'Guess Higher!'),
        h('button' , {onClick:this.onSubmitLower},'Guess Lower!'),
        h('button' , {onClick:this.onSubmitCorrect},'You Got It!')
      ])
    )
  }
})


// ----

// have the user think of a number 1 - 10, and
// make the computer guess the number
// by the user providing input
// higher or lower

//
