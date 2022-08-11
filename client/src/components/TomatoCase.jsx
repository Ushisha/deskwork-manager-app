import { ReactComponent as PomoPIcon } from '../assets/pomo-pink.svg'
export default function TomatoCase({ tomatoCount, id }) {
  return (
    <>
      <div className="d-flex m-2 justify-content-center">
        {[...Array(tomatoCount)].map((elementInArray, index) => (
          <div key={`${id}${index}`} className="tomato-case-container">
            <PomoPIcon className="tomato " />
          </div>
        ))}
      </div>
    </>
  )
}
