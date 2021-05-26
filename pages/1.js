import { withRouter } from 'next/router'
import Link from 'next/link'

const Test = ({ router }) => {
  return (
    <div>
      <p>{router.query.id}</p>
      <Link href={{ pathname: '/' }}>
        <span>回首页</span>
      </Link>
    </div>
  )
}
export default withRouter(Test)
