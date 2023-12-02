import { HTMLAttributes, ReactNode } from 'react'
import { Paragraph, ScreenReaderOnly } from '@sikt/sds-core'
import { CheckCircleIcon, WarningIcon, XCircleIcon } from '@sikt/sds-icons'
import './App.css'
import clsx from 'clsx'

type ProfileCardVariant = 'success' | 'warning' | 'critical'

export interface ProfileCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  variant: ProfileCardVariant
}

export const ProfileCard = ({ variant, children, ...rest }: ProfileCardProps) => {
  let screenReader
  //   let Icon

  //   if (variant === 'success') {
  //     screenReader = 'Godkjent'
  //     Icon = CheckCircleIcon
  //   } else if (variant === 'warning') {
  //     screenReader = 'Ikke vurdert'
  //     Icon = WarningIcon
  //   } else if (variant === 'critical') {
  //     screenReader = 'Underkjent'
  //     Icon = XCircleIcon
  //   }

  return (
    <div
      className={clsx(
        `sds-icons--${variant}`,
        // cardContainer,
        // variant === 'success' && cardSuccess,
        // variant === 'warning' && cardWarning,
        // variant === 'critical' && cardCritical,
      )}
      {...rest}
    >
      <div className="cardContent">
        <Paragraph as="span" variant="regular" modifier="strong">
          {children}
        </Paragraph>
        <ScreenReaderOnly>{screenReader}</ScreenReaderOnly>
        {/* <Icon /> */}
        {variant === 'success' ? (
          <CheckCircleIcon />
        ) : variant === 'warning' ? (
          <WarningIcon />
        ) : (
          <XCircleIcon />
        )}
      </div>
      <div className="cardBorder" />
    </div>
  )
}
