import type { SearchResultId } from '@/domain/models/search/SearchResultId'
import type { SearchResultIdKind } from '@/domain/models/search/SearchResultIdKind'
import type { SearchResultTitle } from '@/domain/models/search/SearchResultTitle'
import type { ComponentStory } from '@storybook/react'
import { ComponentMeta } from '@storybook/react'
import { aSearchResult } from '../../generated/mocks'
import SearchResultPage from '../../pages/search/[word]'

export default {
  title: 'Pages/SearchResultPage',
  component: SearchResultPage,
  args: {
    searchData: Array(10)
      .fill(null)
      .map((_, i) => {
        const result = aSearchResult({ id: i.toString(), title: `Search result ${i + 1}` })
        return {
          id: result.id as SearchResultId,
          kind: result.kind as SearchResultIdKind,
          title: result.title as SearchResultTitle,
        }
      }),
  },
} satisfies ComponentMeta<typeof SearchResultPage>

export const Default: ComponentStory<typeof SearchResultPage> = (args) => (
  <SearchResultPage {...args} />
)
