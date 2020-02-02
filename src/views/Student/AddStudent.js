import React, { Component } from 'react';
import AddStudentPage from './AddStudentPage.js';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStudent } from '../../actions/studentsAction';

class AddStudent extends Component {
	constructor() {
		super();
		this.state = {
			firstName: '',
			lastName: '',
			email: '',
			username: '',
			password: '',
			password_confirmation: '',
			dob: '',
			errors: {
				errors: {},
			},
		};

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}
	componentDidMount() {}

	UNSAFE_componentWillReceiveProps(nextProps) {
		if (nextProps.errors) {
			this.setState({ errors: nextProps.errors.errors });
		}
	}

	onSubmit(e) {
		e.preventDefault();

		const newStudent = {
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			username: this.state.username,
			email: this.state.email,
			password: this.state.password,
			dateofBirth: this.state.dob,
		};

		this.props.createStudent(newStudent, this.props.history);
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
		console.log('Hello');
	}

	render() {
		console.log(this.state);
		const { errors } = this.state;
		console.log(this.state);

		return <AddStudentPage onSubmit={this.onSubmit} onChange={this.onChange} errors={errors} />;
	}
}

AddStudent.propTypes = {
	createStudent: PropTypes.func.isRequired,
	errors: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
	student: state.student,
	errors: state.errors,
});

export default connect(
	mapStateToProps,
	{ createStudent }
)(withRouter(AddStudent));
