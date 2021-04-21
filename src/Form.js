import React from 'react'

export default function Form(props) {
  const { values, update, submit } = props

  const onChange = evt => {
    const { name, value } = evt.target
    update(name, value)
  }

  const onSubmit = evt => {
    evt.preventDefault()
    submit()
  }

  return (
    <form className='form container' onSubmit={onSubmit}>
      <div className='form-group inputs'>
        <label>Name
          <input
            type="text"
            value={values.name}
            onChange={onChange}
            name="name"
            placeholder="type a username..."
            maxLength="30"
          />
        </label>
        <label>Email
          <input
            type='text'
            value={values.email}
            onChange={onChange}
            name="email"
            placeholder="type an email..."
          />
        </label>
        <label>Role
          <select value={values.role} name="role" onChange={onChange}>
            <option value="">-- Select a Role --</option>
            <option value="WebDevStudent">Web Dev Student</option>
            <option value="DataStudent">Data Student</option>
          </select>
        </label>

        <div className='submit'>
          <button disabled={!values.name || !values.email || !values.role}>submit</button>
        </div>
      </div>
    </form>
  )
}