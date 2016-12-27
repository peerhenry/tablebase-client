import Panel from 'pageComponents/Panel'
import PostAComment from './PostAComment'
import CommentSection from './CommentSection'

const CommentsPanel = () => (
  <Panel>
    <PostAComment/>
    <hr/>
    <CommentSection/>
  </Panel>
)

export default CommentsPanel