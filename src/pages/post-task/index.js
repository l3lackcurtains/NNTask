import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid/lib'
import {
  Step,
  Stepper,
  StepLabel,
  StepContent,
} from 'material-ui/Stepper'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton'
import DatePicker from 'material-ui/DatePicker'
import Header from '../../components/header'
import styles from '../../stylesheets/index.scss'

const inlineStyles = {
  radioButtonGroup: {
    margin: 4
  },
  radioButton: {
    display: 'inline-block'
  }
}

class posttask extends Component {
	constructor(props){
		super(props)
		this.state = {
			finished: false,
			stepIndex: 0,
		}
	}

	handleNext = () => {
    const {stepIndex} = this.state
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
    })
  }

  handlePrev = () => {
    const {stepIndex} = this.state
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1})
    }
  }

	// render step actions
	renderStepActions(step) {
	  const {stepIndex} = this.state
	  return (
	    <div style={{margin: '12px 0'}}>
	      <RaisedButton
	        label={stepIndex === 2 ? 'Finish' : 'Next'}
	        disableTouchRipple={true}
	        disableFocusRipple={true}
	        primary={true}
	        onTouchTap={this.handleNext}
	        style={{marginRight: 12}}
	      />
	      {step > 0 && (
	        <FlatButton
	          label="Back"
	          disabled={stepIndex === 0}
	          disableTouchRipple={true}
	          disableFocusRipple={true}
	          onTouchTap={this.handlePrev}
	        />
	      )}
	    </div>
	  )
	}

	render() {
		const {finished, stepIndex} = this.state
    const contentStyle = {margin: '0 16px', color: '#191919'}

		return (
		<div>
			<Header />
			<div className={styles.post_task}>
				<Grid>
					<Row start="xs">
						<Col md={8} mdOffset={2} xs={12}>
								<Stepper className={styles.stepper} activeStep={stepIndex} orientation="vertical">
									<Step>
										<StepLabel>Tasks detail</StepLabel>
										<StepContent>
                      <div className={styles.stepper_label}>Task Title</div>
                      <TextField
                        hintText="Eg: Delivery of some inventory"
                        fullWidth={true}
                      />
                      <div className={styles.stepper_label}>Description of your task</div>
                      <TextField
                        hintText="Describe your task in more than 40 words"
                        multiLine={true}
                        rows={5}
                        fullWidth={true}
                      />
											{this.renderStepActions(0)}
										</StepContent>
									</Step>
									<Step>
										<StepLabel>Location</StepLabel>
										<StepContent>
                      <RadioButtonGroup name="shipSpeed" defaultSelected="in_person" style={inlineStyles.radioButtonGroup}>
                        <RadioButton
                          value="in_person"
                          label="To be done in person"
                          style={inlineStyles.radioButton}
                        />
                        <RadioButton
                          value="online"
                          label="To be done online"
                          style={inlineStyles.radioButton}
                        />
                      </RadioButtonGroup>
                      <div className={styles.stepper_label}>Task Location</div>
                      <TextField
                        hintText="Eg: Pokhara, Nepal 5"
                        fullWidth={true}
                      />
                      <div className={styles.stepper_label}>Due Date</div>
                      <DatePicker
                        hintText="Portrait Dialog"
                        fullWidth={true}
                      />
											{this.renderStepActions(1)}
										</StepContent>
									</Step>
									<Step>
										<StepLabel>Budget estimation</StepLabel>
										<StepContent>
                      <div className={styles.stepper_label}>How many people do you need for your task?</div>
                      <TextField
                        hintText="Estimated Number of workers"
                        fullWidth={true}
                      />
                      <div className={styles.stepper_label}>What is your budget?</div>
                      <TextField
                        hintText="$25"
                        fullWidth={true}
                      />
											{this.renderStepActions(2)}
										</StepContent>
									</Step>
								</Stepper>
								{finished && (
									<p style={{margin: '20px 0', textAlign: 'center'}}>
										<a
											href="#"
											onClick={(event) => {
												event.preventDefault()
												this.setState({stepIndex: 0, finished: false})
											}}
										>
											Click here
										</a> to reset the example.
									</p>
								)}
						</Col>
					</Row>
				</Grid>
			</div>
		</div>
		)
	}
}

export default posttask
