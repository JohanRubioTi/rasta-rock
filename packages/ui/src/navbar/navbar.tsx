
import {
  Anchor,
  Button,
  H1,
  H3,
  Input,
  Paragraph,
  ScrollView,
  Separator,
  Sheet,
  XStack,
  YStack,
  useToastController,
} from '@t4/ui'
import { ThemeToggle } from '@t4/ui/src/ThemeToggle'
import { Heart, ShoppingBag, User } from '@tamagui/lucide-icons'
import { useSupabase } from 'app/utils/supabase/hooks/useSupabase'
import { useUser } from 'app/utils/supabase/hooks/useUser'
import { trpc } from 'app/utils/trpc'
import React, { useState } from 'react'
import { Linking } from 'react-native'
import { SolitoImage } from 'solito/image'
import { useLink } from 'solito/link'

import { VirtualizedListScreen } from '../virtualized-list/screen'
import { VideosListScreen } from '../videos-list/screen'

export function Navbar() {
  const utils = trpc.useContext()
  const supabase = useSupabase()
  const { user } = useUser()
  const toast = useToastController()

  const profileLink = useLink({
    href: '/profile',
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
     <XStack 
      height="$5" 
      backgroundColor="black"
      borderRadius="$10"
      margin="$1"
      padding="$3"
      justifyContent="space-between"
      >
      <SolitoImage src='/t4-logo.png' width={32} height={32} alt='RastaRock Logo' />
      <SearchNavbar size="$3" />
      <XStack alignItems="center" space="$2" pr="$8">
        <Button icon={Heart} size="$2"/>
        <Button icon={User} size="$2"/>
        <Button icon={ShoppingBag} size="$2"/>
      </XStack>
     </XStack>
  )
}

function SearchNavbar(props: { size: SizeTokens }) {
  return (
    <XStack flex={0.7} alignItems="center" space="$2">
      <Input flex={1} size={props.size} placeholder={`Size ${props.size}...`} />
      <Button size={props.size}>Buscar</Button>
    </XStack>
  )
}

