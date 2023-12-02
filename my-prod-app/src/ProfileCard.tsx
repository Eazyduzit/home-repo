import { Paragraph, ScreenReaderOnly } from '@sikt/sds-core'
import { HTMLAttributes, ReactNode } from 'react'
// import clsx from 'cslx'

type ProfileCardVariant = 'success' | 'warning' | 'critical'

export interface ProfileCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  variant: ProfileCardVariant
}

export const ProfileCard = ({ variant, children, ...rest }: ProfileCardProps) => {
  //   let screenReader
  //   let Icon

  return (
    <div className="test">
      <div className="cardContent">
        <Paragraph as="span" variant="regular" modifier="strong">
          Test
        </Paragraph>
        <ScreenReaderOnly>Test</ScreenReaderOnly>
      </div>
      <div className="cardBorder"></div>
    </div>
  )
}
