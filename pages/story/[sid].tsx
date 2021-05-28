import { withRouter } from 'next/router'
import Link from 'next/link'

const Story = ({ router }) => {
  return (
    <div>
      <p>{router.query.sid}</p>
      <Link href={{ pathname: '/' }}>
        <span>回首页</span>
      </Link>
    </div>
  )
}

export default withRouter(Story)
