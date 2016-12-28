//see example_app.js for comment notation
{/*jsx comments*/}

var GreeterMessage = React.createClass({
  render: function(){

    return (
      <div>
        <h1>Howdy {this.props.name}!</h1>
        <p>{this.props.message}</p>
      </div>
    );
  }
})

var GreeterForm = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();

    var updates = {};
    var nameIn = this.refs.name;
    var messageIn = this.refs.message;
    var name = nameIn.value;
    var message = messageIn.value;

    if(name.length > 0){
      nameIn.value = '';
      updates.name = name;
    };
    if(message.length > 0){
      messageIn.value = '';
      updates.message = message;
    }


    this.props.onNewData(updates)
  },

  render: function(){
    return (
      <form onSubmit={this.onFormSubmit}>
        <div>
          <input type="text" ref="name" placeholder="Enter Name"></input>
        </div>
        <div>
          <textarea type="text" ref="message" placeholder="Enter Message"></textarea>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    );
  }
})



var Greeter = React.createClass({
  getDefaultProps: function(){
    return {
      message: 'Here is the default message',
      name: 'Brandon B'
    };
  },

    getInitialState: function(){
      return {
        name: this.props.name,
        message: this.props.message
      }
    },

    handleNewData: function(updates){
      this.setState(
        updates
      );
    },

    render: function(){
      var message = this.state.message;
      var name = this.state.name;
      return(
        <div>

          <GreeterMessage name={name} message={message}/>

          <GreeterForm onNewData={this.handleNewData}/>

        </div>
      );
    }
});

var firstname = 'Brandon';

ReactDOM.render(
  <Greeter name={firstname} message="Here is another message"/>,
  document.getElementById('app')
);
