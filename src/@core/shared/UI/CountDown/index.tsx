import { scssVariables } from '@/@core/apps/utils/scss-variables'
import { Text } from '@chakra-ui/react'
import { FC, useState, useEffect, memo } from 'react'

type ICountDown = {
  initialTime: number[]
  onFinish: () => void
}

const CountdownTimer: FC<ICountDown> = ({ initialTime, onFinish }) => {
  const [time, setTime] = useState<number>(initialTime[0])

  useEffect(() => {
    setTime(initialTime[0])
  }, [initialTime])

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prevTime => prevTime - 1)
    }, 1000)

    // Clear the interval and execute onFinish when time reaches 0
    if (time === 0) {
      clearInterval(timer)
      onFinish()
    }

    // Cleanup the interval on component unmount
    return () => clearInterval(timer)
  }, [time, onFinish])

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60

    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`
  }

  return (
    <Text textAlign={'center'} color={scssVariables.mainColor} fontSize={'16px'}>
      0{formatTime(time)}
    </Text>
  )
}

export default memo(CountdownTimer)
