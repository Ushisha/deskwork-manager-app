import { useState } from 'react'

const PomoConfig = (props) => {
  // Destructuring 2 functions
  const { updateConfigure, updatePomodoro } = props
  const [pomodoro, setPomodoro] = useState(25)
  const [pomoBreak, setPomoBreak] = useState(5)
  // onSubmitFunction Function
  const onSubmit = (e) => {
    e.preventDefault()
    if (pomodoro === '' || pomoBreak === '') return
    updateConfigure(false)
    updatePomodoro(pomodoro, pomoBreak)
  }
  const changeConfigure = () => {
    updateConfigure(false)
  }
  return (
    <>
      <button
        type="button"
        className="btn btn-secondary"
        data-bs-toggle="modal"
        data-bs-target="#updateConfigModal"
        onClick={changeConfigure}
      >
        <div className="d-flex align-items-center">
          <div>Set Timer</div>
        </div>
      </button>

      <div
        className="modal fade"
        id="updateConfigModal"
        aria-labelledby="updateConfigModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="updateConfigModalLabel">
                Timer Setting
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={onSubmit}>
                <div className="mb-3">
                  <label className="form-label">
                    Focus/Session Time (In Minutes)
                  </label>
                  <input
                    className="form-control"
                    type="number"
                    placeholder="Eg.25"
                    onChange={(e) => {
                      setPomodoro(e.target.value)
                    }}
                    value={pomodoro}
                    required
                    maxLength="2"
                    minLength="0"
                    max="59"
                    min="0"
                    step="1"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Break Time (In Minutes)</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Eg.5"
                    onChange={(e) => {
                      setPomoBreak(e.target.value)
                    }}
                    value={pomoBreak}
                    required
                    maxLength="2"
                    minLength="0"
                    max="59"
                    min="0"
                    step="1"
                  />
                </div>

                <button
                  type="submit"
                  data-bs-dismiss="modal"
                  className="btn btn-secondary"
                  onSubmit={updateConfigure}
                >
                  Apply
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PomoConfig
