import { Paragraph, ScreenReaderOnly } from '@sikt/sds-core'
// import clsx from 'cslx'

type ProfileCardVariant = 'success' | 'warning' | 'critical'

export const ProfileCard = ({ variant, children, ...rest }) => {
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
