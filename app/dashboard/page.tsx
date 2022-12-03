'use client'
import useSWR from 'swr'
import { scoreFetcher } from '../../lib/fetcher'
import AggregateScoreTable from './AggregateScoreTable'
import Chart from './Chart'

const Dashboard = () => {
  const { data: scores, error, mutate} = useSWR("/api/user/user", scoreFetcher)

  
  
  return (
    <>
   <Chart scores={scores}/>
   <AggregateScoreTable scores={scores} />
    </>
  )
}

export default Dashboard