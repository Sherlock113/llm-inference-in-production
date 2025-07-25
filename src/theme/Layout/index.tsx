import { type ReactNode } from 'react'
import clsx from 'clsx'
import ErrorBoundary from '@docusaurus/ErrorBoundary'
import {
  PageMetadata,
  SkipToContentFallbackId,
  ThemeClassNames
} from '@docusaurus/theme-common'
import { useKeyboardNavigation } from '@docusaurus/theme-common/internal'
import SkipToContent from '@theme/SkipToContent'
import AnnouncementBar from '@theme/AnnouncementBar'
import Navbar from '@theme/Navbar'
import Footer from '@theme/Footer'
import LayoutProvider from '@theme/Layout/Provider'
import ErrorPageContent from '@theme/ErrorPageContent'
import type { Props } from '@theme/Layout'
import Chat from '@site/src/components/Chat'
import './styles.module.css'

export default function Layout(props: Props): ReactNode {
  const {
    children,
    noFooter,
    wrapperClassName,
    // Not really layout-related, but kept for convenience/retro-compatibility
    title,
    description
  } = props

  useKeyboardNavigation()

  return (
    <LayoutProvider>
      <PageMetadata title={title} description={description} />

      <SkipToContent />

      <AnnouncementBar />

      <Navbar />

      <div
        id={SkipToContentFallbackId}
        className={clsx(
          ThemeClassNames.layout.main.container,
          ThemeClassNames.wrapper.main,
          wrapperClassName
        )}
      >
        <ErrorBoundary fallback={(params) => <ErrorPageContent {...params} />}>
          {children}
        </ErrorBoundary>
      </div>

      <Chat />

      {!noFooter && <Footer />}
    </LayoutProvider>
  )
}
