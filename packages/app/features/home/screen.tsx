import {
  Anchor,
  Button,
  H1,
  H3,
  Paragraph,
  ScrollView,
  Separator,
  Sheet,
  XStack,
  YStack,
  useToastController,
} from '@t4/ui'
import { ThemeToggle } from '@t4/ui/src/ThemeToggle'
import { ChevronDown } from '@tamagui/lucide-icons'
import { useSupabase } from 'app/utils/supabase/hooks/useSupabase'
import { useUser } from 'app/utils/supabase/hooks/useUser'
import { trpc } from 'app/utils/trpc'
import React, { useState } from 'react'
import { Linking } from 'react-native'
import { SolitoImage } from 'solito/image'
import { useLink } from 'solito/link'

import { VirtualizedListScreen } from '../virtualized-list/screen'
import { VideosListScreen } from '../videos-list/screen'
import { Navbar } from '../../../ui/src/navbar/navbar.tsx'

export function HomeScreen() {
  const utils = trpc.useContext()
  const supabase = useSupabase()
  const { user } = useUser()
  const toast = useToastController()

  const signInLink = useLink({
    href: '/sign-in',
  })

  const signUpLink = useLink({
    href: '/sign-up',
  })

  const dataFetchingLink = useLink({
    href: '/data-fetching',
  })

  const virtualizedListLink = useLink({
    href: '/virtualized-list',
  })

  const paramsLink = useLink({
    href: '/params/tim',
  })

  return (
     <YStack flex={1} backgroundColor="red">
       <Navbar/>
       <VideosListScreen />
     </YStack>
  )
}


/*
        <VideosListScreen />
        <SolitoImage src='/t4-logo.png' width={128} height={128} alt='T4 Logo' />
        <H1 textAlign='center'>RastaRock</H1>
        <Separator />

        <Paragraph textAlign='center' size={'$2'}>
          Unifying React Native + Web.
        </Paragraph>
        <Paragraph textAlign='center' size={'$2'}>
          The T4 Stack is made by{' '}
          <Anchor href='https://twitter.com/ogtimothymiller' target='_blank'>
            Tim Miller
          </Anchor>
          , give it a star{' '}
          <Anchor href='https://github.com/timothymiller/t4-app' target='_blank' rel='noreferrer'>
            on Github.
          </Anchor>
        </Paragraph>
        <Paragraph textAlign='center' size={'$2'}>
          Tamagui is made by{' '}
          <Anchor href='https://twitter.com/natebirdman' target='_blank'>
            Nate Weinert
          </Anchor>
          , give it a star{' '}
          <Anchor href='https://github.com/tamagui/tamagui' target='_blank' rel='noreferrer'>
            on Github.
          </Anchor>
        </Paragraph>

        <XStack gap='$5'>
          <Button onPress={() => Linking.openURL('https://t4stack.com/')}>Learn More...</Button>
          <ThemeToggle />
        </XStack>

        <H3>🦮🐴 App Demos</H3>
        <YStack space='$2'>
          <Button {...virtualizedListLink} space='$2'>
            Virtualized List
          </Button>
          <Button {...dataFetchingLink} space='$2'>
            Fetching Data
          </Button>
          <Button {...paramsLink} space='$2'>
            Params
          </Button>
          <Button
            onPress={() => {
              toast.show('Hello world!', {
                message: 'Description here',
              })
            }}
          >
            Show Toast
          </Button>
          <SheetDemo />
        </YStack>
        {user ? (
          <Button
            onPress={async () => {
              supabase.auth.signOut()
              // Clear tanstack query cache of authenticated routes
              utils.auth.secretMessage.reset()
            }}
            space='$2'
          >
            Sign Out
          </Button>
        ) : (
          <XStack space='$2'>
            <Button {...signInLink} space='$2'>
              Sign In
            </Button>
            <Button {...signUpLink} space='$2'>
              Sign Up
            </Button>
          </XStack>
        )}

        */
