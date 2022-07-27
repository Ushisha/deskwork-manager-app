import React from 'react'

export default function TodoCard({ task }) {
  return (
    <>
      <li className="list-group-item">
        <input className="form-check-input me-1" type="checkbox" value="" />
        <label className="form-check-label" for="firstCheckbox">
          {task.todo}
        </label>
      </li>
    </>
  )
}
