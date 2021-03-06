import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Header from './Header';

const FormComponent = styled.div`
  /* min-height: 100vh; */
`

const FormCon = styled.div`
  background-color: rgb(131, 211, 201);
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  margin: 100px 2% 0 2%;
  padding: 100px 2%;
  @media (max-width: 500px) {
    text-align: center;
    padding: 50px 10%;
  }
`

const Form = styled.form`
  display: flex;
  flex-flow: column;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
`

const FormTitle = styled.div`
  text-transform: uppercase;
  color: #ffffff;
  letter-spacing: 2px;
  font-size: 1.5rem;
  margin-bottom: 20px;
  font-weight: bold;
`

const Input = styled.input`
  margin-bottom: 10px;
  font-size: 1rem;
  border: none;
  padding: 5px;
`

const StoryInput = styled.textarea`
  margin-bottom: 40px;
  font-size: 1rem;
  border: none;
  padding: 5px;
`

const SuccessSubmit = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  padding-top: 50px;
`

const SuccessSubmitContent = styled.div`
  background: rgb(131, 211, 201);
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  padding: 3%;
  height: 400px;
  margin-top: 5%;
  text-align: center;
`

const FormMessage = styled.div`
  color: #ffffff;
  letter-spacing: 1.5px;
  font-size: 1.3rem;
  margin-bottom: 20px;
`

export default class AddStoryForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      refugee: {
        author: '',
        age: '',
        image: '',
        content: '',
        location:'',
        approved: false 
      },
      editing: true
    }
  }

  onInputChange = event => {
    this.setState({
      refugee: {
        ...this.state.refugee,
        [event.target.name]: event.target.value
      }
    })
  }

  onStorySubmit = event => {
    event.preventDefault();
    console.log(this.state.refugee)
    this.props.addStory(this.state.refugee);
    this.setState({
      refugee: {
        author:'',
        age: '',
        image: '',
        content: '',
        location:'',
        approved: false
      },
      editing: false
    })
  }

  render(){
    return (
      <FormComponent>
        {/* If this.state.editing is false, the story form will render. 
        Once a story has been submitted, component will render feedback that
        confirms their submission.  */}
        {this.state.editing ? (
          <>
            <Header title="Submit Your Story" />
            <FormCon> 
              <FormTitle>Share your story with the world</FormTitle>
              <Form>
                <Input autoComplete="off" type="text" name="author" value={this.state.refugee.author} placeholder="Name" onChange={this.onInputChange} />
                <Input autoComplete="off" type="number" name="age" value={this.state.refugee.age} placeholder="Age" onChange={this.onInputChange} />
                <Input autoComplete="off" type="location" name="location" value={this.state.refugee.location} placeholder="Country" onChange={this.onInputChange} />
                <Input autoComplete="off" type="text" name="image" value={this.state.refugee.image} placeholder="Image URL" onChange={this.onInputChange} />
                <StoryInput name="content" rows="10" cols="30" value={this.state.refugee.content} placeholder="Your story starts here..." onChange={this.onInputChange}></StoryInput>
                <button type="submit" onClick={this.onStorySubmit}>Submit</button>
              </Form>
            </FormCon>
            </>
          ) : (
            // Rendered when this.state.editing is true
            <SuccessSubmit>
              <SuccessSubmitContent>
                <FormTitle>Thank you for sharing your story.</FormTitle>
                <FormMessage>Your submission has been sent to our team for approval.</FormMessage>
                <Link className="link-home" to='/'>Go back to Refugee Stories</Link>
              </SuccessSubmitContent>
            </SuccessSubmit> 
          )
        }
      </FormComponent>
    )
  }
}