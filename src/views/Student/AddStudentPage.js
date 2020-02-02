import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
// core components
import GridItem from 'components/Grid/GridItem.js';
import GridContainer from 'components/Grid/GridContainer.js';
import CustomInput from 'components/CustomInput/CustomInput.js';
import Button from 'components/CustomButtons/Button.js';
import Card from 'components/Card/Card.js';
import CardHeader from 'components/Card/CardHeader.js';
import CardAvatar from 'components/Card/CardAvatar.js';
import CardBody from 'components/Card/CardBody.js';
import CardFooter from 'components/Card/CardFooter.js';

import avatar from 'assets/img/faces/marc.jpg';

const styles = {
	cardCategoryWhite: {
		color: 'rgba(255,255,255,.62)',
		margin: '0',
		fontSize: '14px',
		marginTop: '0',
		marginBottom: '0',
	},
	cardTitleWhite: {
		color: '#FFFFFF',
		marginTop: '0px',
		minHeight: 'auto',
		fontWeight: '300',
		fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
		marginBottom: '3px',
		textDecoration: 'none',
	},
};

const useStyles = makeStyles(styles);

export default function AddStudentPage(props) {
  const classes = useStyles();
  const { onChange, onSubmit, errors } = props;
	return (
		<div>
			<GridContainer justify="center">
				<GridItem xs={12} sm={12} md={10}>
					<Card>
						<CardHeader color="primary">
							<h4 className={classes.cardTitleWhite}>Add Student</h4>
							<p className={classes.cardCategoryWhite}>Enter Information</p>
						</CardHeader>
						<CardBody>
							<GridContainer>
								<GridItem xs={12} sm={12} md={3}>
									<CustomInput
										labelText="First Name"
                    onChange={onChange}
										formControlProps={{
											fullWidth: true,
										}}
										inputProps={{
											type: 'text',
											name: 'firstName',
										}}
									/>
								</GridItem>
								<GridItem xs={12} sm={12} md={4}>
									<CustomInput
										labelText="Last Name"
										onChange={onChange}
										formControlProps={{
											fullWidth: true,
										}}
										inputProps={{
											type: 'text',
											name: 'lastName',
										}}
									/>
								</GridItem>
								<GridItem xs={12} sm={12} md={4}>
									<CustomInput
										labelText="Username"
										onChange={onChange}
										formControlProps={{
											fullWidth: true,
										}}
										inputProps={{
											type: 'text',
											name: 'username',
										}}
									/>
								</GridItem>
							</GridContainer>
							<GridContainer>
								<GridItem xs={12} sm={12} md={6}>
									<CustomInput
										labelText="Email"
										onChange={onChange}
										formControlProps={{
											fullWidth: true,
										}}
										inputProps={{
											type: 'email',
											name: 'email',
										}}
									/>
								</GridItem>
								<GridItem xs={12} sm={12} md={4}>
									<CustomInput
                    labelText="Password"
                    onChange={onChange}
										formControlProps={{
											fullWidth: true,
										}}
										inputProps={{
											type: 'password',
											name: 'password',
										}}
									/>
								</GridItem>
							</GridContainer>
							<GridContainer>
								<GridItem xs={12} sm={12} md={4}>
									<CustomInput
                    labelText="Date of Birth"
                    onChange={onChange}
										formControlProps={{
											fullWidth: true,
										}}
										inputProps={{
											type: 'text',
											name: 'dob',
										}}
									/>
								</GridItem>
							</GridContainer>
						</CardBody>
						<CardFooter>
							<Button color="primary" onClick={onSubmit}>Add Student</Button>
						</CardFooter>
					</Card>
				</GridItem>
			</GridContainer>
		</div>
	);
}
