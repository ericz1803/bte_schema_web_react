import React, { Component } from 'react';
import AutoComplete from './AutoCompleteComponent';
import { Form, Button, Segment } from 'semantic-ui-react'

export default class ExplainInput extends Component {
  state = {
      sourceValue: '',
      sourceSelected: {},
      targetValue: '',
      targetSelected: {}
  }

  setExample1 = () => {
      this.setState({
        
      })
    }

  setExample2 = () => {
    this.setState({
        sourceValue: '',
        sourceSelected: {},
        targetValue: '',
        targetSelected: {}
    })
    }
  render() {
    return (
        <div className={this.props.shouldHide ? '' : 'hidden'}>
            <div className="row ">
                <div className="col-12">
                    <Segment color="green">
                        <Form onSubmit={this.props.handleStep1Submit}>
                            <Form.Group>
                                <h2> Step 1: Specify source and target nodes.</h2>
                                <hr />
                            </Form.Group>
                            <div>
                                <h3> Source Node</h3>
                            </div>
                            <br />
                            <Form.Group>
                                <AutoComplete 
                                    handleselect={this.props.handleInputSelect}
                                />
                            </Form.Group>
                            <div>
                                <h3> Target Node</h3>
                            </div>
                            <br />
                            <Form.Group>
                                <AutoComplete 
                                    handleselect={this.props.handleOutputSelect}
                                />
                            </Form.Group>
                            <div className="col text-center">
                                <Button type='submit' onClick={this.props.handleStep1Submit}>Continue</Button>
                            </div>
                        </Form>
                    </Segment>
                </div>
            </div>
        </div>
    )
  }
}
