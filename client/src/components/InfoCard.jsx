import Clock from './Clock'
import PomoCounter from './PomoCounter'

export default function InfoCard() {
  return (
    <>
      <div className="card info-card mb-3 col-md-12 col-sm-6 ">
        <div className="card-body">
          <Clock />
          <PomoCounter />
        </div>
      </div>
    </>
  )
}
