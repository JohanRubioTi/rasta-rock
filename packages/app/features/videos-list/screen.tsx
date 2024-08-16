import { Paragraph, Spinner, VirtualList, XStack, YStack } from '@t4/ui'
import { CarListError } from '@t4/ui/src/cars/CarListError'
import { CarListItem } from '@t4/ui/src/cars/CarListItem'
import { VideoListItem } from '@t4/ui/src/video/videoListItem'
import { trpc } from 'app/utils/trpc'
import { empty, error, loading, success } from 'app/utils/trpc/patterns'
import React from 'react'
import { match } from 'ts-pattern'

export const VideosListScreen = (): React.ReactNode => {
  const videosList = trpc.video.all.useQuery()
  const videosListLayout = match(videosList)
    .with(error, () => <CarListError message={videosList.failureReason?.message} />)
    .with(loading, () => (
      <YStack fullscreen f={1} jc='center' ai='center'>
        <Paragraph pb='$3'>Loading...</Paragraph>
        <Spinner />
      </YStack>
    ))
    .with(empty, () => <Paragraph>No videos found.</Paragraph>)
    .with(success, () => (
      <VirtualList data={videosList.data as any[]} renderItem={VideoListItem} itemHeight={80} />
    ))
    .otherwise(() => <CarListError message={videosList.failureReason?.message} />)

  return (
    <XStack backgroundColor="blue" f={0.6}>


    </XStack>
  )
}
