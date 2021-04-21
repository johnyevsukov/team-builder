import React, { useState, useEffect } from 'react'
import './App.css';
import Form from './Form.js'
import TeamMember from './TeamMember.js'

const initialFormValues = {
  name: '',
  email: '',
  role: '',
}

export default function App() {
  const [teamMembers, setTeamMembers] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)

  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue })
  }

  const submitForm = () => {
    const newTeamMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    }
    setTeamMembers([...teamMembers, newTeamMember])
    setFormValues(initialFormValues)
  }

  return (
    <div className="App">
      <Form
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />
      {
        teamMembers.map((teamMember, index) => {
          return (
            <TeamMember key={index} details={teamMember} />
          )
        })
      }
    </div>
  );
}
