export default function AboutPage() {
  return (
    <>
      <div className="container about-page-container">
        <h3 className="">What is PomoFlow?</h3>
        <p className="fs-5 fw-light">
          PomoFlow is a{' '}
          <span className="fst-italic fw-normal">Pomodoro Technique </span>{' '}
          integrated productivity app that works on desktop & mobile browsers.
          This app aims to help you organize and focus on any projects you are
          working on.
        </p>
        <h3 className="">What is Pomodoro Technique?</h3>
        <p className="fs-5 fw-light">
          Francesco Cirillo invented this 25-minute timer technique in the late
          1980s. It was created after a typical cooking alarm of 25 minutes. The
          name Pomodoro was inspired by the kitchen alarm that Francesco used to
          time himself that was shaped like a Pomodoro, which is Italian for
          tomato.
        </p>

        <p className="fs-5 fw-light">
          The technique aims to reduce the effect of internal and external
          interruptions on focus and flow.
        </p>
        {/* <p className="fs-5 fw-light">
          After task completion in a pomodoro, any remaining time should be
          devoted to activities, for example: Review your work just completed.
          Review the activities from a learning point of view (ex: What learning
          objective did you accomplish? What learning outcome did you
          accomplish? Did you fulfill your learning target, objective, or
          outcome for the task?) Review the list of upcoming tasks for the next
          planned pomodoro time blocks, and start reflecting on or updating
          them.
        </p> */}
        <h3 className="">How to use PomoFlow?</h3>
        <ol className="fs-5 fw-light">
          <li>Create projects and set tasks.</li>
          <li>Decide on the task to work on selecting from the task list.</li>
          <li>
            Set Pomodoro and break timer. (default setting: Pomodoro = 25mins,
            Break = 5mins)
          </li>
          <li>
            Start the timer and focus on the task for 25 minutes (or whatever
            time you set!)
          </li>
          <li>
            Take a break for 5 minutes when the alarm ring. <br />
            <span className="fw-normal">
              Get away from your desk (Important!!)
            </span>
            .Make a coffee or do some stretches.
          </li>
          <li>
            1x Pomodoro( = tomato) added to your counter at the end of each
            Pomodoro.
          </li>
          <li>
            After the fourth pomodoros are done, take a long break (typically 20
            to 30 minutes).
          </li>
          <li>Repeating this cycle.</li>
          <li>
            At the end of the day, count on how many pomodoros you have and be
            proud!
          </li>
        </ol>
      </div>
    </>
  )
}
