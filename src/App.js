import './App.css';
import { Component } from 'react';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {textarea: ''}
    this.setTextareaState = this.setTextareaState.bind(this);
    this.submitPost = this.submitPost.bind(this);

  }

  setTextareaState(event)
  {
    const blockText = event.target.value;
    this.setState({textarea: blockText})    
  }

  characterCounter()
  {
    return this.state.textarea.length

  }

  displayError()
  {
    if(this.state.textarea.length < 100){
      return <div className="Red">The characters numbers is too low!!!!</div>
    }
  }

  submitPost(event)
  {
      alert("Submitting the blog post!");
  }

  displayButton()
  {
    if(this.state.textarea.length >= 100){
      return <button onClick={this.submitPost} type="submit">Submit Post</button>
    }
  }



  displayForm()
  {
    return(
      <div>
      {this.displayError()}
      <h1>Blog Post Writer</h1>
      <hr></hr>
      <h3>Write your post here</h3>

      <p>Must be at least 100 characters!</p>

      <textarea type="Text" rows="15" cols="100" onChange={this.setTextareaState}/><br />
      <p>{this.characterCounter()} character(s)</p><br />
      {this.displayButton()}
      </div>
    )

  }

  render(){
  return (
    <div>
        {this.displayForm()}
    </div>
  );
}
}

export default App;