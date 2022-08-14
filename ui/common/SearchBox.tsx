import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import useSWR from 'swr'
import { fetcher } from '../../libs/fetchAPI'
import { queryDocuments } from '../../server/graphql-schema/queryDocuments'
import { SearchBoxTextField } from './SearchBoxTextField'

interface ResultT {
  search: {
    kind: string
    id: string
    title: string
  }[]
}

export const SearchBox: React.FC = () => {
  const [query, setQuery] = useState('')
  const [visibility, setVisibility] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const mouseDownHandler = (ev: MouseEvent): void => {
    if (ref.current && !ref.current.contains(ev.target as HTMLElement)) setVisibility(false)
  }
  const { data, mutate } = useSWR<ResultT>(
    () => (query !== '' ? queryDocuments.Query.search : null),
    (document) => fetcher(document, { query })
  )
  useEffect(() => {
    mutate()
  }, [query, mutate])
  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setQuery(e.currentTarget.value)
    setVisibility(true)
  }
  useEffect(() => {
    document.addEventListener('mousedown', mouseDownHandler)
    return () => document.removeEventListener('mousedown', mouseDownHandler)
  }, [ref])
  return (
    <div className="relative" ref={ref}>
      <SearchBoxTextField query={query} onChange={onChange} onFocus={() => setVisibility(true)} />
      {visibility ? (
        <div className="absolute bg-white w-full rounded border z-10">
          <ul>
            {data?.search.slice(0, 10).map((v) => (
              <Link key={v.id} href={`/b/${v.id}`}>
                <li className="px-4 cursor-pointer">{v.title}</li>
              </Link>
            ))}
          </ul>
          {query !== '' ? (
            <Link href={`/s/${query}`}>
              <button className="px-4 pt-4 h-6">Show full results</button>
            </Link>
          ) : null}
          <Link href={`/o/cb`}>
            <button className="px-4 h-6">Create new board</button>
          </Link>
        </div>
      ) : null}
    </div>
  )
}
