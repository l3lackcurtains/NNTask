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
import Header from '../../components/header'
import styles from '../../stylesheets/index.scss'

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
    const contentStyle = {margin: '0 16px'}

		return (
		<div>
			<Header />
				<div className={styles.post_task}>
					<Grid>
						<Row start="xs">
							<Col md={8} mdOffset={2} xs={12}>
								<div>
									<Stepper activeStep={stepIndex} orientation="vertical">
										<Step>
											<StepLabel>Tasks detail</StepLabel>
											<StepContent>
												<p>
													For each ad campaign that you create, you can control how much youre willing to spend on clicks and conversions, which networks
													and geographical locations you want your ads to show on, and more.
												</p>
												{this.renderStepActions(0)}
											</StepContent>
										</Step>
										<Step>
											<StepLabel>Location</StepLabel>
											<StepContent>
												<p>An ad group contains one or more ads which target a shared set of keywords.</p>
												{this.renderStepActions(1)}
											</StepContent>
										</Step>
										<Step>
											<StepLabel>Budget estimation</StepLabel>
											<StepContent>
												<p>
													Try out different ad text to see what brings in the most customers,
													and learn how to enhance your ads using features like ad extensions.
													If you run into any problems with your ads, find out how to tell if
													theyre running and how to resolve approval issues.
												</p>
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
								</div>
							</Col>
						</Row>
					</Grid>
				</div>
		</div>
		)
	}
}

export default posttask
