import type { NextPage } from 'next'
import { PageContentLayout } from '../../ui/layouts/PageContentLayout'
import { CreateNewBoard } from '../../ui/board/CreateNewBoard'

const CbPage: NextPage = () => {
  return <PageContentLayout main={<CreateNewBoard />} side={<div className="max-w-xs">test</div>} />
}

export default CbPage
